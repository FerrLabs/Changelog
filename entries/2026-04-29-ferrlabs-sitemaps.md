---
title: 'FerrLabs · sitemaps + structured robots.txt for every marketing site'
summary: 'ferrlabs.com / ferrflow.com / ferrvault.com / ferrtrack.com / ferrgrowth.com all ship a generated sitemap.xml + a robots.txt that points to it. Hreflang alternates included for the bilingual sites.'
date: 2026-04-29T10:30:00Z
product: 'ferrlabs'
type: 'new'
---

Every public marketing site now ships a real sitemap and a robots.txt that references it — no more crawler guessing.

- **`@astrojs/sitemap`** wired on each site. Build emits `sitemap-index.xml` + per-language `sitemap-N.xml`.
- **`hreflang` alternates** for ferrlabs.com (EN/FR) and ferrflow.com (EN/FR) — Google now knows the language pairs.
- **`robots.txt`** with `Allow: /` and an explicit `Sitemap:` line.
- **Changelog routes** auto-included via the content collection — every new entry shows up in the next deploy's sitemap.

Pairs with the noindex roll-out on private surfaces — search engines now have a precise picture of what's public and what isn't.
