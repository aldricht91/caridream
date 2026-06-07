# Preview CariDream Without Python

Use the one-click launcher:

```text
Start CariDream Preview.bat
```

It starts a small local web server using the bundled Node runtime if available. It also opens:

```text
http://127.0.0.1:4173
```

Keep the black terminal window open while testing. Close it or press `Ctrl+C` to stop the preview.

For phone testing, the terminal prints one or more `Phone:` URLs such as:

```text
http://10.0.0.49:4173
```

Open that URL on an iPhone or Android device connected to the same Wi-Fi network. If it does not load, Windows Firewall may be blocking inbound access.
