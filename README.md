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
  coverUrl: "https://..."
}
```

Optional fields supported by the UI:

```js
{
  seriesId: "aruba-trade-wind-lullabies",
  seriesTitle: "Trade Wind Lullabies",
  seriesDescription: "Soft desert-island bedtime stories...",
  episodeNumber: 1,
  free: true,
  narrator: "AI Calm Voice",
  mood: "Breezy",
  icon: "C",
  imageUrl: "https://...",
  coverImage: "https://...",
  artUrl: "https://..."
}
```

Use `coverUrl` for story cover art when possible. The app also accepts `imageUrl`, `coverImage`, or `artUrl` as aliases. If no cover image is provided, CariDream falls back to the existing category icon.

If Firebase is connected and the `stories` collection is empty, the app seeds it from the built-in fallback stories.

## Admin Access

Owner tools are hidden from normal users. To show admin tools, either:

- Add your email to `window.CARIDREAM_ADMIN_EMAILS` in `firebase-config.js`
- Or set the signed-in user's Firestore document in `users/{uid}` to `{ role: "admin" }` or `{ admin: true }`

## Important Launch Note

Before public launch, protect Firestore with production rules. The Firebase web API key is not a server secret, so your security must come from Firestore/Auth rules.
