---
title: 'HMAC generator'
summary: Generate HMAC-SHA1/256/384/512 of a message with a key in UTF-8, hex or Base64 — through the native Web Crypto API, in your browser.
date: 2026-05-19T15:38:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/32
---

[/tools/hmac](https://ferrlens.com/tools/hmac) signs a message with a shared secret. Pick the hash (SHA-1, SHA-256, SHA-384 or SHA-512), supply the key in whatever encoding you have it (UTF-8 text, hex, or Base64), paste the message — get the hex signature.

Implementation goes through `crypto.subtle.importKey` to bring the key in as a raw HMAC key, then `crypto.subtle.sign` to produce the MAC. Both calls are native browser APIs, so the work is fast and the result is byte-for-byte identical to what your backend will compute with the same key. The key never leaves the page, which matters because HMAC keys are sensitive — you don't want them in a third-party tool's logs.

Useful for debugging webhook signatures (Stripe, GitHub, etc.) before they hit your endpoint, or for verifying that a producer and consumer agree on a signing scheme.
