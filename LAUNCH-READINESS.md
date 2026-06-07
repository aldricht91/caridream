# CariDream Launch Readiness

CariDream now includes owner-only prototype screens for admin operations, legal policies, and app-store packaging.

## Owner-Only Admin

The Admin Dashboard is hidden behind Profile > Owner access. In this prototype, it uses a local passcode gate. For launch, replace this with Firebase Auth admin roles/custom claims and Firestore security rules.

Included owner tools:

- creator story review
- comment and submission owner flags
- shoutout story selection
- episode publishing controls
- payout review
- child-safe and spam rule checklist

## Legal Pages

Included as draft launch requirements:

- Terms of Service
- Privacy Policy
- Creator Agreement
- Copyright and IP Policy
- Subscription Cancellation Policy
- Community Guidelines

These are placeholders and should be reviewed by a qualified attorney before launch.

## App Store Packaging

Included checklist:

- Capacitor wrapper
- app icons and splash screens
- native iOS/Android builds
- Apple Developer account
- Google Play Developer account
- payment compliance notes

## Still Required Before Public Launch

- production Firebase security rules with owner/admin roles
- real payment integration
- real audio file hosting
- legal review
- native app builds and store submission assets
