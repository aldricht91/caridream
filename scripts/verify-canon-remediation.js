require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");
const admin = require("firebase-admin");

const expectedSeries = {
  "bahamas-turtle-beneath-stars": "Whispers of Stars Beneath the Sea",
  "bahamas-turtle-midnight-journey-ep2": "Whispers of Stars Beneath the Sea",
  "dominican-river-ep2-mangoes-windowsill": "Quisqueya Home Lullabies",
  "dominican-river-ep3-soft-road-samana": "Roads of Quisqueya",
  "dominican-river-ep4-rain-over-yunque-del-sur": "Rain Songs of Quisqueya",
  "dominican-republic-constanza-blanket-stars": "Constanza Valley Nights",
  "dominican-republic-constanza-stars-ep2": "Constanza Valley Nights",
  "dominican-river-ep6-jarabacoa-mist": "Jarabacoa Mountain Dreams",
  "dominican-river-ep5-jarabacoa-waltz": "Jarabacoa Mountain Dreams",
  "haiti-firefly-dance-jacmel": "Golden Nights of Jacmel",
  "haiti-firefly-dance-jacmel-ep2": "Golden Nights of Jacmel",
  "jamaica-blue-mountain-peak-moon": "Doctor Bird: Blue Mountain Whispers",
  "jamaica-lullaby-doctor-bird": "Doctor Bird: Blue Mountain Whispers",
  "jamaica-lullaby-doctor-bird-ep2": "Doctor Bird: Blue Mountain Whispers",
  "jamaica-sleepy-blue-mountains": "Doctor Bird: Blue Mountain Whispers",
  "jamaica-golden-glow-treasure-beach": "Treasure Beach Moon Tides",
  "jamaica-golden-glow-treasure-beach-ep2": "Treasure Beach Moon Tides",
  "saint-lucia-secrets-rainforest-trail": "Rainforest Songs of Saint Lucia",
  "saint-lucia-secrets-rainforest-trail-ep2": "Rainforest Songs of Saint Lucia"
};
const expectedEpisodes = {
  "bahamas-turtle-beneath-stars": 1,
  "bahamas-turtle-midnight-journey-ep2": 2,
  "dominican-river-ep2-mangoes-windowsill": 1,
  "dominican-river-ep3-soft-road-samana": 1,
  "dominican-river-ep4-rain-over-yunque-del-sur": 1,
  "dominican-river-ep5-jarabacoa-waltz": 1,
  "dominican-river-ep6-jarabacoa-mist": 2,
  "dominican-republic-constanza-blanket-stars": 1,
  "dominican-republic-constanza-stars-ep2": 2,
  "haiti-firefly-dance-jacmel": 1,
  "haiti-firefly-dance-jacmel-ep2": 2,
  "jamaica-blue-mountain-peak-moon": 1,
  "jamaica-lullaby-doctor-bird": 2,
  "jamaica-lullaby-doctor-bird-ep2": 3,
  "jamaica-sleepy-blue-mountains": 4,
  "jamaica-golden-glow-treasure-beach": 1,
  "jamaica-golden-glow-treasure-beach-ep2": 2,
  "saint-lucia-secrets-rainforest-trail": 1,
  "saint-lucia-secrets-rainforest-trail-ep2": 2
};
const supportedVoiceNames = [
  "Moonlight Narrator",
  "Island Storyteller",
  "Twilight Storyteller"
];
const textRevisedIds = new Set([
  "aruba-trade-wind-ep2-cactus-shadows",
  "bahamas-turtle-beneath-stars",
  "dominican-river-ep2-mangoes-windowsill",
  "dominican-river-ep4-rain-over-yunque-del-sur",
  "haiti-citadel-moonlight",
  "haiti-citadel-ep2-lanterns-cap-haitien",
  "haiti-citadel-ep3-mountain-keeps-watch",
  "haiti-citadel-ep4-drums-beneath-stars",
  "anansi-adventures-ep1-moonlight-mango",
  "SvxzCUPfaAC9u1Rcr0Rl",
  "anansi-adventures-ep3-firefly-lantern",
  "anansi-adventures-ep4-talking-breadfruit",
  "trinidad-papa-bois-whispering-silk-cotton",
  "trinidad-papa-bois-sleeping-bamboo",
  "trinidad-papa-bois-moonlit-river",
  "trinidad-papa-bois-firefly-path"
]);
const replacedAudioIds = new Set([...textRevisedIds].filter((id) =>
  !["trinidad-papa-bois-moonlit-river", "trinidad-papa-bois-firefly-path"].includes(id)
));

function requiredEnv(name) {
  const value = process.env[name];
  if (!value || !value.trim()) throw new Error(`Missing required environment variable: ${name}`);
  return value.trim();
}

function loadServiceAccount() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  }
  const filePath = path.resolve(requiredEnv("FIREBASE_SERVICE_ACCOUNT_PATH"));
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function initFirestore() {
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(loadServiceAccount()) });
  }
  return admin.firestore();
}

async function inspectAudio(story) {
  const url = String(story.audioUrl || "").trim();
  if (!/^https:\/\/firebasestorage\.googleapis\.com\//i.test(url)) {
    return { accessible: false, rangeReady: false, reason: "Missing or non-Firebase audioUrl" };
  }
  try {
    const response = await fetch(url, {
      headers: { Range: "bytes=0-1023" },
      signal: AbortSignal.timeout(20000)
    });
    const contentType = response.headers.get("content-type") || "";
    const contentRange = response.headers.get("content-range") || "";
    await response.arrayBuffer();
    return {
      accessible: response.ok,
      rangeReady: response.status === 206 && /^bytes 0-/i.test(contentRange),
      status: response.status,
      contentType,
      reason: response.ok ? "" : `HTTP ${response.status}`
    };
  } catch (error) {
    return { accessible: false, rangeReady: false, reason: error.message };
  }
}

async function main() {
  const db = initFirestore();
  const snapshot = await db.collection("stories").get();
  const stories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const failures = [];

  if (stories.length !== 43) failures.push(`Expected 43 stories, found ${stories.length}.`);

  for (const story of stories) {
    for (const field of ["title", "country", "category", "storyContent", "series", "episodeNumber"]) {
      if (story[field] === undefined || story[field] === null || String(story[field]).trim() === "") {
        failures.push(`${story.id}: missing ${field}`);
      }
    }
    if (!/^https:\/\//i.test(String(story.audioUrl || ""))) failures.push(`${story.id}: missing valid audioUrl`);
    if (story.narrationStatus !== "completed") failures.push(`${story.id}: narrationStatus=${story.narrationStatus}`);
    if (story.voiceProvider !== "ElevenLabs") failures.push(`${story.id}: voiceProvider=${story.voiceProvider}`);
    if (!supportedVoiceNames.some((name) => String(story.voiceName || "").includes(name))) {
      failures.push(`${story.id}: voiceName=${story.voiceName}`);
    }
    if (story.canonPriority && (story.canonVersion !== "2.4" || story.canonReviewStatus !== "aligned")) {
      failures.push(`${story.id}: incomplete canon alignment metadata`);
    }
    if (expectedSeries[story.id] && story.series !== expectedSeries[story.id]) {
      failures.push(`${story.id}: expected series "${expectedSeries[story.id]}", found "${story.series}"`);
    }
    if (expectedEpisodes[story.id] && Number(story.episodeNumber) !== expectedEpisodes[story.id]) {
      failures.push(`${story.id}: expected episode ${expectedEpisodes[story.id]}, found ${story.episodeNumber}`);
    }
    if (textRevisedIds.has(story.id)) {
      if (story.story && story.story !== story.storyContent) {
        failures.push(`${story.id}: story and storyContent are not synchronized`);
      }
      if (story.narrationTextRevision !== "Canon 2.4") {
        failures.push(`${story.id}: missing Canon 2.4 narration revision marker`);
      }
    }
    if (replacedAudioIds.has(story.id) && !Array.isArray(story.previousAudioUrls)) {
      failures.push(`${story.id}: previous audio URL was not preserved`);
    }
  }

  const audioResults = [];
  for (const story of stories) {
    const result = await inspectAudio(story);
    audioResults.push({ id: story.id, title: story.title, ...result });
    if (!result.accessible) failures.push(`${story.id}: audio inaccessible (${result.reason})`);
    if (!result.rangeReady) failures.push(`${story.id}: audio byte-range request not supported`);
    if (!String(result.contentType || "").toLowerCase().includes("audio/")) {
      failures.push(`${story.id}: unexpected content type ${result.contentType || "(missing)"}`);
    }
  }

  const countryCounts = stories.reduce((counts, story) => {
    counts[story.country] = (counts[story.country] || 0) + 1;
    return counts;
  }, {});

  console.log("CariDream canon remediation verification");
  console.table(Object.entries(countryCounts).map(([country, count]) => ({ country, count })));
  console.log(`Stories: ${stories.length}`);
  console.log(`Canon-aligned stories: ${stories.filter((story) => story.canonReviewStatus === "aligned").length}`);
  console.log(`Completed narrations: ${stories.filter((story) => story.narrationStatus === "completed").length}`);
  console.log(`Accessible audio files: ${audioResults.filter((item) => item.accessible).length}`);
  console.log(`Byte-range seek ready: ${audioResults.filter((item) => item.rangeReady).length}`);

  if (failures.length) {
    console.error("\nVerification failures:");
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exitCode = 1;
    return;
  }
  console.log("\nPASS: Firestore, canon metadata, narration, Storage access, and byte-range seeking all verified.");
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
