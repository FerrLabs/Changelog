---
title: 'FerrLabs: noindex on private app surfaces'
summary: 'Every app/admin/auth UI now ships meta robots + robots.txt + nginx X-Robots-Tag for defence-in-depth no-indexing. Search engines stop crawling auth flows and dashboards.'
date: 2026-04-29T11:00:00Z
product: 'ferrlabs'
type: 'fix'
---

Defence-in-depth no-indexing for the private app surfaces (admin dashboards, the FerrLabs-Cloud user app, auth flows for FerrTrack/FerrVault/FerrGrowth, FerrGames admin/app). Each app now ships three layers:

- `<meta name="robots" content="noindex,nofollow">` in `index.html`.
- `public/robots.txt` with `Disallow: /`.
- nginx `add_header X-Robots-Tag "noindex, nofollow, nosnippet, noarchive" always;`.

Marketing sites (`ferrlabs.com`, `ferrflow.com`, etc.) stay fully indexable with their `Allow: /` robots.txt + sitemap. Only the staff-facing and post-auth surfaces are hidden from search engines.
