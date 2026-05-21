---
title: 'ASCII / Unicode inspector'
summary: Codepoint-by-codepoint breakdown of any string — UTF-8 bytes, UTF-16 units, HTML entities, CSS escape and Unicode block.
date: 2026-05-21T08:20:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/55
---

[/tools/ascii-unicode](https://ferrlens.com/tools/ascii-unicode) takes any string and lists every codepoint with its encoding details:

- Codepoint as `U+XXXX` and decimal.
- UTF-8 byte sequence (1 to 4 bytes per codepoint).
- UTF-16 code units (surrogate pairs decoded).
- HTML entity in decimal (`&#128512;`) and hex (`&#x1F600;`) form.
- CSS escape (`\1F600 `).
- Unicode block name (Basic Latin, Latin-1 Supplement, CJK Unified Ideographs, Emoticons, etc.).

Designed for debugging weird text — a zero-width space pasted into a config file, a Cyrillic look-alike in a domain, a combining diacritic that won't normalise, or that one emoji that turns into a surrogate-pair mess in your backend log. Runs entirely in your browser.
