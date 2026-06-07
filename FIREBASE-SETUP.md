# CariDream Firebase Setup

CariDream now has a Firebase integration layer. Until real config values are added, it keeps using local prototype storage.

## 1. Create Firebase Project

1. Go to Firebase Console.
2. Create a project.
3. Add a Web app.
4. Copy the Firebase config object.

## 2. Paste Config

Open:

```text
outputs/caridream/firebase-config.js
```

Replace the placeholder values in `window.CARIDREAM_FIREBASE_CONFIG`.

## 3. Enable Authentication

In Firebase Console:

1. Go to Authentication.
2. Enable Anonymous sign-in.

CariDream currently uses anonymous Firebase Auth behind the scenes, then stores the listener's entered name and email in Firestore.

## 4. Create Firestore

In Firebase Console:

1. Go to Firestore Database.
2. Create database.
3. Start in test mode for local testing only.

Suggested development rules:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    match /appState/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 5. Test

Serve the app from a local server, not directly from `file://`:

```powershell
python -m http.server 4173 --bind 0.0.0.0
```

Open:

```text
http://127.0.0.1:4173
```

If Firebase is configured correctly, Profile > Data connection should say:

```text
Connected to Firebase Auth and Firestore.
```

## Current Firebase Scope

Synced to Firestore:

- user profile
- favorites
- subscription package state
- comments
- shoutouts
- creator submissions
- sleep timer
- listen count
- selected monetization products

Still not implemented:

- email/password login
- Stripe payments
- Apple/Google in-app purchases
- admin dashboard
- Firebase Storage for real audio files
