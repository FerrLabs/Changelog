---
title: 'Meta tag inspector'
summary: 'Fetch any URL and see every meta + link tag grouped by namespace: standard, OpenGraph, Twitter, Facebook, http-equiv, link.'
date: 2026-05-21T09:00:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/56
---

[/tools/meta](https://ferrlens.com/tools/meta) crawls a single URL, parses the HTML, and lays out every meta tag and `<link>` element it finds, grouped by namespace:

- **Standard**: description, keywords, viewport, theme-color, canonical, alternates, robots.
- **OpenGraph**: og:title / og:description / og:image / og:url / og:type / article: / book: / profile:.
- **Twitter**: twitter:card / twitter:site / twitter:creator / twitter:title / twitter:description / twitter:image.
- **Facebook**: fb:app_id and friends.
- **http-equiv**: Content-Security-Policy, refresh, etc.
- **link**: preload, prefetch, dns-prefetch, manifest, stylesheet, alternate languages.

Useful when debugging social share previews, auditing canonical / alternate hreflang coverage, or just sanity-checking what a page actually exposes. Pure parser. No rendering, no JS execution.
