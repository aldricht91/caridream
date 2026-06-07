# CariDream Beta Readiness Checklist

## Firebase-Connected Today

- Firebase config is present in `firebase-config.js`.
- Anonymous Firebase Auth initializes on app start.
- Listener profile writes to `users/{uid}` with name and email.
- User app state writes to `appState/{uid}`.
- Saved app state loads from `appState/{uid}` on startup.
- Firestore `stories` collection loads into the app.
- If `stories` is empty, the app seeds it from the built-in fallback catalog.
- Admin status checks `users/{uid}` for `role: "admin"` or `admin: true`.
- Admin status can also be granted through `CARIDREAM_ADMIN_EMAILS`.

## Synced Through `appState/{uid}`

- Selected series and episode.
- Favorites.
- Comments.
- Sleep timer setting.
- Listening count.
- Continue Listening / last played episode.
- Listening history.
- Selected story language.
- Hidden future-feature state, including subscriptions, packages, shoutouts, submissions, reports, published episodes, and payout review flags.

## Simulated Or Local-Only

- Name/email login is not real email/password authentication.
- Guest mode is local app state, backed by the anonymous Firebase user.
- Audio is simulated with browser speech synthesis unless a Firestore story has an `audioUrl`.
- Calm background sound is generated in the browser with Web Audio.
- Subscription/payment logic is not connected to Stripe, Apple, or Google Play.
- Premium locking is disabled for MVP. `canPlay()` currently returns true for all episodes.
- Creator payouts are simulated and hidden from the MVP UI.
- Shoutouts are simulated and hidden from the MVP UI.
- Creator story submissions are simulated and hidden from the MVP UI.
- Legal pages are static checklist content, not final legal documents.
- App Store Packaging screen is a static checklist, not real native packaging.
- Admin dashboard actions update local/user state, not dedicated moderation workflow collections.
- Reported content queue is state-based, not a server-enforced moderation system.
- Spam protection and child-safe rules are text guidelines only.
- Multilingual stories are lightweight localized labels/descriptions plus device voice fallback, not full translated scripts/audio.
- Firestore seeding from the browser is convenient for MVP, but should be replaced with an owner-only/admin seed script before production.

## Beta Blockers

- Confirm Firestore security rules before inviting testers.
- Replace `CARIDREAM_ADMIN_EMAILS` placeholder with the real owner/admin email.
- Confirm the `stories` collection is seeded and readable.
- Add real `audioUrl` files for at least the beta episodes.
- Decide whether beta testers use anonymous login, email/password, or magic-link sign-in.
- Remove or fully hide inactive future-feature routes from tester access.
- Verify comments save and reload from Firestore across devices.
- Verify listening history and Continue Listening reload across devices.
- Verify Owner Access is hidden from non-admin users.
- Verify admin-only screens cannot be opened by direct navigation as a normal user.
- Test on iPhone Safari, Android Chrome, and desktop Chrome.
- Host on HTTPS before mobile testing outside local preview.

## Nice-To-Have Before Beta

- Add a clear beta feedback form.
- Add a small tester onboarding note.
- Add 5-10 polished beta episodes with real audio.
- Add Firebase Storage for audio uploads.
- Add basic analytics for plays, completion, favorites, and comments.
- Add error messages when Firebase or audio loading fails.
- Add a simple loading state while Firestore stories load.
- Add a production-safe admin content editor instead of editing Firestore manually.

## Not Required For First Beta

- Paid subscriptions.
- Creator monetization.
- Shoutout-to-story workflow.
- School/library licensing.
- AI personalized stories.
- Sleep tracking.
- Native App Store / Play Store packaging.
