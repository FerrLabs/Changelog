---
title: 'Hash generator'
summary: MD5, SHA-1, SHA-256, SHA-384 and SHA-512 of any input. SHA-* through the native Web Crypto API, MD5 through a small pure-JS implementation. Your input never leaves the browser.
date: 2026-05-19T15:30:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/32
---

[/tools/hash](https://ferrlens.com/tools/hash) computes a cryptographic digest of any text input. Pick the algorithm, paste your input, copy the hex output.

SHA-256, SHA-384 and SHA-512 go through `crypto.subtle.digest`, the native Web Crypto API — fast, audited, and FIPS-aligned. SHA-1 is wired through the same API but flagged with a "legacy / avoid for security" banner. MD5 is computed locally in a small pure-JS implementation (RFC 1321, ~70 lines) because Web Crypto deliberately doesn't expose it; the banner reminds you it's broken cryptographically and should only be used for checksum verification.

The input is hashed in the page on every keystroke. Nothing is sent to `api.ferrlens.com` — the standard FerrLens privacy guarantee applies here too. The share link encodes input and algorithm in the URL fragment so a colleague can land on the exact same view.
