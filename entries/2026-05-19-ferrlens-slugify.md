---
title: 'Slugify'
summary: Turn any string — accented, punctuated, multi-word — into a clean URL slug. Configurable separator, max length, and case.
date: 2026-05-19T16:08:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/34
---

[/tools/slugify](https://ferrlens.com/tools/slugify) converts arbitrary text into a URL-safe slug. `FerrLens — outils côté front (privacy by design) !` becomes `ferrlens-outils-cote-front-privacy-by-design` in one keystroke.

Diacritic stripping goes through Unicode NFD decomposition followed by a combining-mark regex — so `é`, `ñ`, `ü`, `ç`, `ø` all collapse to their ASCII base. A small ligature table catches the ones NFD doesn't decompose (`ß → ss`, `œ → oe`, `æ → ae`, `đ → d`, `ł → l`). Punctuation and whitespace runs become a single separator.

The separator is configurable (`-`, `_`, `.`) and there's an optional max-length cap that trims at the last whole token rather than mid-word. Case can be forced lowercase or left intact.

Useful for generating slugs from a blog title client-side before the post is even saved, or for normalising user-submitted filenames.
