# CariDream

CariDream is a mobile-first relaxing storytelling PWA inspired by Caribbean culture, history, folklore, and dreams.

## Features

- Home, categories, series, and episode player
- Firebase Auth and Firestore sync
- Firestore-backed `stories` collection
- Comments, favorites, listening history, sleep timer, and profile
- English, Spanish, French, Haitian Creole, and Papiamento story language options
- Admin-only owner tools

## Local Preview

Open `index.html` directly, or run:

```bat
Start CariDream Preview.bat
```

## Firebase Stories Collection

The app loads episodes from the Firestore collection named `stories`.

Each story document should include:

```js
{
  title: "The Wind Finds a Hummingbird",
  description: "A trade wind guides a tired hummingbird toward a moonlit garden.",
  category: "Bedtime Stories",
  island: "Aruba",
  duration: 14,
  audioUrl: "https://...",
  voiceProvider: "elevenlabs",
  voiceName: "CariDream Moonlight Narrator",
  coverUrl: "https://..."
}
```

Use `coverUrl` for story or series cover art:

```js
coverUrl: "https://example.com/image.jpg"
```

Optional fields supported by the UI:

```js
{
  seriesId: "aruba-trade-wind-lullabies",
  seriesTitle: "Trade Wind Lullabies",
  seriesDescription: "Soft desert-island bedtime stories...",
  episodeNumber: 1,
  free: true,
  narrator: "CariDream Moonlight Narrator",
  narratorType: "female",
  voiceProvider: "elevenlabs",
  voiceName: "CariDream Moonlight Narrator",
  mood: "Breezy",
  icon: "C",
  imageUrl: "https://...",
  coverImage: "https://...",
  artUrl: "https://...",
  hasCliffhanger: true,
  nextEpisodeHint: "Tomorrow's dream may reveal where the moonlit path leads next."
}
```

Use `coverUrl` for story cover art when possible. The app also accepts `imageUrl`, `coverImage`, or `artUrl` as aliases. If no cover image is provided, CariDream falls back to the existing category icon.

For bedtime-friendly cliffhanger endings, keep the ending calm and low-stress. Use `hasCliffhanger: true` and a soft `nextEpisodeHint` with language such as "for another night" or "tomorrow's dream." The app displays the hint at the bottom of the story detail page when both fields are present.

## ElevenLabs Audio Workflow

CariDream does not expose an ElevenLabs API key in browser code. Generate narration outside the public frontend, upload the MP3 to Firebase Storage or another public file host, then paste the public download URL into `audioUrl`.

Supported voice metadata:

```js
{
  audioUrl: "https://firebasestorage.googleapis.com/...",
  narrator: "CariDream Moonlight Narrator",
  narratorType: "female",
  voiceProvider: "elevenlabs",
  voiceName: "CariDream Moonlight Narrator"
}
```

The app plays `audioUrl` MP3 files when present. If `audioUrl` is empty or missing, CariDream falls back to browser SpeechSynthesis.

Story and series cards display narrator names from Firestore. Use `voiceName` or `narrator` with values such as `CariDream Moonlight Narrator`, `CariDream Island Storyteller`, or `CariDream Twilight Storyteller`.

If Firebase is connected and the `stories` collection is empty, the app seeds it from the built-in fallback stories.

## Local Audio Generation

CariDream includes a private local admin command for generating pending story narration. It uses Firebase Admin SDK and ElevenLabs, so it must run only from your own machine with private environment variables.

1. Copy `.env.example` to `.env`.
2. Fill in `ELEVENLABS_API_KEY`, `ELEVENLABS_MOONLIGHT_VOICE_ID`, and `FIREBASE_SERVICE_ACCOUNT_PATH`.
3. Run:

```bash
npm run generate-audio
```

The command processes pending stories one at a time. Set `MAX_AUDIO_STORIES_PER_RUN` when you want to throttle a run; otherwise it processes all pending stories without a valid `audioUrl`. It skips stories with an existing valid `audioUrl`, uploads MP3 files to Firebase Storage, and updates Firestore with `audioUrl`, `voiceName`, `voiceProvider`, `narrationStatus`, and `narrationUpdatedAt`.

## Admin Access

Owner tools are hidden from normal users. To show admin tools, either:

- Add your email to `window.CARIDREAM_ADMIN_EMAILS` in `firebase-config.js`
- Or set the signed-in user's Firestore document in `users/{uid}` to `{ role: "admin" }` or `{ admin: true }`

## Important Launch Note

Before public launch, protect Firestore with production rules. The Firebase web API key is not a server secret, so your security must come from Firestore/Auth rules.
