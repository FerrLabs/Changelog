---
title: 'OG card preview'
summary: See how a URL renders as a Twitter card, LinkedIn share and Slack unfurl: side by side, with warnings for missing or oversized fields.
date: 2026-05-21T09:05:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/56
---

[/tools/og-preview](https://ferrlens.com/tools/og-preview) takes a URL and shows three side-by-side visual mocks of how it will appear when shared:

- **Twitter / X**: `summary` or `summary_large_image` depending on `twitter:card`.
- **LinkedIn**: image on top, title + hostname in the grey caption bar.
- **Slack**: site name + favicon, blue title, description, then the inline image.

A warnings panel calls out the common mistakes: missing `og:image` (links look bare), title > 70 chars (Twitter truncates), description > 200 chars, missing `twitter:card` (Twitter falls back to small image), and the always-painful "you forgot to add OG tags entirely".

Fetches the page server-side, parses meta + link tags, resolves the favicon, and renders everything in your browser. Nothing is uploaded.
