# CariDream

CariDream is a mobile-first relaxing storytelling PWA inspired by Caribbean culture, history, folklore, and dreams.

## Canon and Lore Governance

All future CariDream stories and universe development are governed by:

- [CariDream World Bible Canon Edition v2.5](docs/CARIDREAM-WORLD-BIBLE.md) - **Status: Canon**
- [CariDream Lore Vault](docs/CARIDREAM-LORE-VAULT.md) - **Status: Research Archive**
- [Story Identity Map - 43 Stories](docs/STORY-IDENTITY-MAP-43-STORIES-V2.4.md) - **Status: Story Governance Companion**
- [P1/P2 Story Revision Plan](docs/STORY-REVISION-ACTION-PLAN-P1-P2-V2.4.md) - **Status: Canon Remediation Plan**
- [Haiti Canon Boundaries v1.0](docs/HAITI-CANON-BOUNDARIES-V1.0.md) - **Status: Canon**
- [Haiti Canon Promotion Summary v2.5](docs/HAITI-CANON-PROMOTION-SUMMARY-V2.5.md) - **Status: Promotion Record**

The World Bible is the official source of truth. New folklore discoveries, cultural research, locations, creatures, symbols, and story concepts must enter the Lore Vault before explicit canon review and promotion.

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

Optional language audio can be added without replacing the default English audio. Keep `audioUrl` as the default fallback, then add either an `audioUrls` map or individual fields:

```js
{
  audioUrl: "https://...english-or-default.mp3",
  audioUrls: {
    en: "https://...english.mp3",
    es: "https://...spanish.mp3",
    fr: "https://...french.mp3"
  }
}
```

The player uses the selected language audio when present. If that language is missing, it falls back to `audioUrl`.

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

To replace narration after an approved story-text revision, provide an explicit story filter:

```bash
AUDIO_STORY_ID="story-document-id" FORCE_REGENERATE=true npm run generate-audio
```

Multiple IDs may be supplied through comma-separated `AUDIO_STORY_IDS`. Forced regeneration is blocked unless an explicit ID filter is present. New MP3s use versioned Storage paths, and the previous download URL is retained in `previousAudioUrls`.

## Canon Story Maintenance

Preview the Canon Edition v2.4 remediation without writing:

```bash
npm run remediate-canon
```

Apply the reviewed changes by setting `CANON_REMEDIATION_APPLY=true`. The command creates a timestamped local backup under the ignored `backups/` directory before writing. Verify Firestore fields, series order, narration status, MP3 access, content type, and byte-range seeking with:

```bash
npm run verify-canon
```

## Admin Access

Owner tools are hidden from normal users. To show admin tools, either:

- Add your email to `window.CARIDREAM_ADMIN_EMAILS` in `firebase-config.js`
- Or set the signed-in user's Firestore document in `users/{uid}` to `{ role: "admin" }` or `{ admin: true }`

## Important Launch Note

Before public launch, protect Firestore with production rules. The Firebase web API key is not a server secret, so your security must come from Firestore/Auth rules.
