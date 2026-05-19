---
title: 'FerrLens · Six client-side dev utilities (hash, encoders, HMAC, timestamp, color, password)'
summary: Hash generator, URL/Base64/hex encoder, HMAC, timestamp converter, color converter and password generator — all running entirely in your browser, with deep-link URLs and zero server calls.
date: 2026-05-19T18:00:00Z
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/32
---

ferrlens.com gains six new tools under `/tools/`, in the "Dev utilities" and "Security" categories. They're the kind of utilities you Google for ten times a week — the goal is that you stop landing on a sketchy ad-laden page and just come here.

- **`/tools/hash`** — MD5, SHA-1, SHA-256, SHA-384, SHA-512. SHA-* go through the native Web Crypto API; MD5 is a small pure-JS implementation. Both run in the page, your input never hits our servers.
- **`/tools/encoders`** — URL, Base64, Base64-URL (RFC 4648 §5) and hex. Encode and decode tabs share the same input so toggling between conversions is one click.
- **`/tools/hmac`** — HMAC-SHA1/256/384/512 via `crypto.subtle.sign`, with the key accepted as UTF-8, hex, or Base64.
- **`/tools/timestamp`** — Unix seconds, Unix milliseconds and ISO 8601 in, all three out plus a localized view in any IANA timezone and a live relative reading.
- **`/tools/color`** — HEX ↔ RGB ↔ HSL ↔ OKLCH with a live preview, including alpha when present.
- **`/tools/password`** — `crypto.getRandomValues` with charset toggles, a "no look-alikes" mode, an entropy bar and a crack-time estimate. The share link encodes your settings, not your password.

Every tool encodes its state in the URL fragment (`#q=…&algo=…`) so a share link round-trips a full setup, but nothing is sent to `api.ferrlens.com` — these tools have no backend. We chose client-side over server-side specifically because the inputs are often sensitive (passwords being checked, secrets being signed, tokens being decoded); keeping them in the browser means there is no log, no cache, no audit trail to worry about.
