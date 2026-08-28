---
title: 'FerrLabs: editorial footer'
summary: '4-column footer with brand colophon, product chips with live-status glow, "All systems normal" pulse: replaces the generic SaaS footer.'
date: 2026-04-29T09:30:00Z
product: 'ferrlabs'
type: 'new'
---

Replaces the shared `@ferrlabs/ui-astro/Footer` (4-equal-cols, generic SaaS) with a local `Footer.astro` matching the editorial design:

- Left brand column with 40px logo, Fraunces 900 wordmark, italic colophon, 4 product chips (FerrFlow gets a soft glow because it's live).
- Right link columns: Products / Resources / Company / Legal with mono uppercase headers.
- Bottom strip: copyright on the left, green dot + "All systems normal · ferrlabs.com" on the right.
- Stacks cleanly on mobile (brand on top, link cols become 2x2).
