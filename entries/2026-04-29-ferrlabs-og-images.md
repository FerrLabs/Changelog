---
title: 'FerrLabs · branded OG images for social previews'
summary: 'Slack / LinkedIn / X previews now render a branded card (1200x630) with the product glyph + Fraunces wordmark + tagline.'
date: 2026-04-29T09:45:00Z
product: 'ferrlabs'
type: 'fix'
---

Layouts referenced `/og.png` but no file was committed — social previews showed broken-image placeholders. Now ships a branded SVG card per site (1200x630) with the product glyph + Fraunces 900 wordmark + italic tagline + "by ferrlabs" subtitle.

Modern previewers (Slack, Discord, LinkedIn, X, Telegram, iMessage) render SVG fine. A raster PNG fallback can come later via a build step for older crawlers — tracked separately.
