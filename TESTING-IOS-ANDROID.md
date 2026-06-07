# CariDream iOS and Android Testing

CariDream is packaged as a mobile-first PWA prototype. It can be tested on both iOS and Android through a local web server.

## Start the Test Server

From the `outputs/caridream` folder:

```powershell
python -m http.server 4173 --bind 0.0.0.0
```

Then open:

```text
http://YOUR_COMPUTER_IP:4173
```

Your phone and computer must be on the same Wi-Fi network.

## iPhone or iPad

1. Open the URL in Safari.
2. Tap Share.
3. Tap Add to Home Screen.
4. Open CariDream from the new Home Screen icon.

## Android

1. Open the URL in Chrome.
2. Tap the menu.
3. Tap Add to Home screen or Install app.
4. Open CariDream from the launcher icon.

## Notes

- Firebase is not connected yet; this test build uses browser local storage.
- Camera, push notifications, native payments, and real App Store or Play Store builds would need a native wrapper such as Capacitor or React Native.
- iOS may limit service worker behavior on non-HTTPS local network URLs, but Add to Home Screen testing still works for layout and app flow.
