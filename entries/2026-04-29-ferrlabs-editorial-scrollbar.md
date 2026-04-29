---
title: 'FerrLabs · editorial scrollbar everywhere'
summary: 'Hairline scrollbar with slate thumb — applied via @ferrlabs/styles base + inlined on sites that do not consume the package. Firefox supported via scrollbar-width.'
date: 2026-04-29T12:30:00Z
product: 'ferrlabs'
type: 'new'
---

The narrow editorial scrollbar that's been on ferrlabs.com is now consistent across every FerrLabs site:

- **`@ferrlabs/styles`** base layer enriched with `scrollbar-width: thin` + `scrollbar-color` for Firefox/Edge (the existing `::-webkit-scrollbar-*` rules only worked in Chromium / Safari).
- **`::-webkit-scrollbar-thumb:hover`** darkens the thumb on hover for affordance.
- **Inlined on FerrFlow / FerrTrack / FerrGrowth sites** that don't import `@ferrlabs/styles` — same look without forcing the dep.
- **Dark variant on FerrGames** site with the cartes physiques palette colors.

Visual: 10px wide track, slate thumb at 28% opacity, 45% on hover.
