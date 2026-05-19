---
title: 'URL / Base64 / Base64-URL / hex encoder'
summary: Encode and decode between text and URL-percent / Base64 / Base64-URL (RFC 4648 §5) / hex, with a single shared input that toggles direction in one click.
date: 2026-05-19T15:35:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/32
---

[/tools/encoders](https://ferrlens.com/tools/encoders) handles the four encodings you keep Googling for: URL percent-encoding (RFC 3986), standard Base64 with padding, Base64-URL (`-`, `_`, no padding — RFC 4648 §5), and plain hex.

Pick the mode, toggle encode/decode, and the same input box drives both directions — useful when you're iterating between formats. The encoders run locally: `TextEncoder`, `btoa`/`atob`, and hand-rolled hex. UTF-8 round-trips through `TextDecoder` so accented characters and emojis survive correctly. Hex input is forgiving: spaces and newlines are stripped, case-insensitive.

Errors are inline and explicit — paste invalid Base64 in decode mode and you'll see a precise message rather than a silent fail.
