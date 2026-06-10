require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const admin = require("firebase-admin");

const DEFAULT_BUCKET = "caridream-mvp.firebasestorage.app";
const DEFAULT_MODEL = "eleven_multilingual_v2";
const DEFAULT_RETRIES = 3;
const VOICE_NAME = "Moonlight Narrator";
const VOICE_PROVIDER = "ElevenLabs";

function requiredEnv(name) {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

function optionalInt(name, fallback) {
  const value = Number.parseInt(process.env[name] || "", 10);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function optionalLimit(name) {
  const value = Number.parseInt(process.env[name] || "", 10);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function loadServiceAccount() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  }

  const serviceAccountPath = requiredEnv("FIREBASE_SERVICE_ACCOUNT_PATH");
  const resolvedPath = path.resolve(serviceAccountPath);
  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`Firebase service account file not found: ${resolvedPath}`);
  }
  return JSON.parse(fs.readFileSync(resolvedPath, "utf8"));
}

function initFirebase() {
  const serviceAccount = loadServiceAccount();
  const bucketName = process.env.FIREBASE_STORAGE_BUCKET || DEFAULT_BUCKET;

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: bucketName
    });
  }

  return {
    db: admin.firestore(),
    bucket: admin.storage().bucket(bucketName),
    bucketName
  };
}

function hasValidAudioUrl(story) {
  return typeof story.audioUrl === "string" && /^https?:\/\//i.test(story.audioUrl.trim());
}

function needsNarration(story) {
  const audioUrl = typeof story.audioUrl === "string" ? story.audioUrl.trim() : "";
  return !audioUrl || story.narrationStatus === "pending";
}

function storyText(story) {
  return String(story.storyContent || story.story || "").trim();
}

function safeFileName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90) || "story";
}

function truncateError(error) {
  return String(error?.message || error || "Unknown error").slice(0, 450);
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry(label, attempts, task) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await task(attempt);
    } catch (error) {
      lastError = error;
      if (attempt === attempts) break;
      const waitMs = 1000 * attempt;
      console.warn(`${label} failed on attempt ${attempt}/${attempts}. Retrying in ${waitMs}ms: ${truncateError(error)}`);
      await sleep(waitMs);
    }
  }
  throw lastError;
}

async function generateElevenLabsMp3(text) {
  const apiKey = requiredEnv("ELEVENLABS_API_KEY");
  const voiceId = requiredEnv("ELEVENLABS_MOONLIGHT_VOICE_ID");
  const modelId = process.env.ELEVENLABS_MODEL_ID || DEFAULT_MODEL;
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}?output_format=mp3_44100_128`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Accept": "audio/mpeg",
      "Content-Type": "application/json",
      "xi-api-key": apiKey
    },
    body: JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.2,
        use_speaker_boost: true
      }
    })
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`ElevenLabs request failed ${response.status}: ${body.slice(0, 500)}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function uploadMp3(bucket, docId, story, mp3Buffer) {
  const token = crypto.randomUUID();
  const titleSlug = safeFileName(story.title || docId);
  const filePath = `story-audio/${docId}/${titleSlug}-moonlight-narrator.mp3`;
  const file = bucket.file(filePath);

  await file.save(mp3Buffer, {
    resumable: false,
    contentType: "audio/mpeg",
    metadata: {
      cacheControl: "public, max-age=31536000",
      metadata: {
        firebaseStorageDownloadTokens: token,
        voiceName: VOICE_NAME,
        voiceProvider: VOICE_PROVIDER,
        storyId: docId
      }
    }
  });

  return `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(bucket.name)}/o/${encodeURIComponent(filePath)}?alt=media&token=${token}`;
}

async function markFailed(docRef, error) {
  await docRef.update({
    narrationStatus: "failed",
    narrationError: truncateError(error),
    narrationUpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
    narrationAttempts: admin.firestore.FieldValue.increment(1)
  });
}

async function processStory({ doc, bucket, retryAttempts }) {
  const story = doc.data();
  const docId = doc.id;

  if (hasValidAudioUrl(story)) {
    return { id: docId, title: story.title || "", status: "skipped", reason: "Existing audioUrl" };
  }

  const text = storyText(story);
  if (!text) {
    await markFailed(doc.ref, new Error("Missing storyContent/story text"));
    return { id: docId, title: story.title || "", status: "failed", reason: "Missing storyContent/story text" };
  }

  console.log(`Generating narration for ${docId}: ${story.title || "Untitled story"}`);

  try {
    await doc.ref.update({
      narrationStatus: "processing",
      narrationUpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
      narrationAttempts: admin.firestore.FieldValue.increment(1)
    });

    const mp3Buffer = await withRetry("ElevenLabs generation", retryAttempts, () => generateElevenLabsMp3(text));
    const audioUrl = await withRetry("Firebase Storage upload", retryAttempts, () => uploadMp3(bucket, docId, story, mp3Buffer));

    await doc.ref.update({
      audioUrl,
      voiceName: VOICE_NAME,
      voiceProvider: VOICE_PROVIDER,
      narrationStatus: "completed",
      narrationError: admin.firestore.FieldValue.delete(),
      narrationUpdatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return { id: docId, title: story.title || "", status: "completed", reason: "" };
  } catch (error) {
    await markFailed(doc.ref, error);
    return { id: docId, title: story.title || "", status: "failed", reason: truncateError(error) };
  }
}

async function main() {
  const maxStories = optionalLimit("MAX_AUDIO_STORIES_PER_RUN");
  const storyId = String(process.env.AUDIO_STORY_ID || "").trim();
  const retryAttempts = optionalInt("ELEVENLABS_RETRY_ATTEMPTS", DEFAULT_RETRIES);
  const { db, bucket, bucketName } = initFirebase();

  console.log(`CariDream audio generator`);
  console.log(`Storage bucket: ${bucketName}`);
  console.log(`Story filter: ${storyId || "all pending stories"}`);
  console.log(`Run limit: ${maxStories || "all pending stories"}${maxStories ? " stories" : ""}`);

  const snapshot = await db.collection("stories").get();
  const allCandidates = snapshot.docs
    .filter((doc) => !storyId || doc.id === storyId)
    .filter((doc) => needsNarration(doc.data()))
    .filter((doc) => !hasValidAudioUrl(doc.data()))
    .sort((a, b) => {
      const countryA = String(a.data().country || a.data().island || "");
      const countryB = String(b.data().country || b.data().island || "");
      const episodeA = Number(a.data().episodeNumber || a.data().episode || 999);
      const episodeB = Number(b.data().episodeNumber || b.data().episode || 999);
      return countryA.localeCompare(countryB) || episodeA - episodeB || a.id.localeCompare(b.id);
    });

  const candidates = maxStories ? allCandidates.slice(0, maxStories) : allCandidates;

  if (!candidates.length) {
    console.log("No pending stories without audioUrl were found.");
    return;
  }

  const results = [];
  for (const doc of candidates) {
    results.push(await processStory({ doc, bucket, retryAttempts }));
  }

  const completed = results.filter((item) => item.status === "completed").length;
  const failed = results.filter((item) => item.status === "failed").length;
  const skipped = results.filter((item) => item.status === "skipped").length;

  console.log("\nNarration run complete");
  console.table(results);
  console.log(`Completed: ${completed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Skipped: ${skipped}`);
}

main().catch((error) => {
  console.error(`Audio generation failed: ${truncateError(error)}`);
  process.exitCode = 1;
});
