---
title: 'Sitemap validator'
summary: Fetch a sitemap.xml or a sitemap index, validate the XML, list child sitemaps or sample the URLs with lastmod / changefreq / priority.
date: 2026-05-20T08:25:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/54
---

[/tools/sitemap](https://ferrlens.com/tools/sitemap) does two things in one call:

- **If you give it a sitemap index** (`<sitemapindex>` root): we follow no children. We just list them so you can click into each.
- **If you give it a sitemap leaf** (`<urlset>` root): we count URLs, show the first ten with their `lastmod` / `changefreq` / `priority` if present, and warn if you crossed the 50 000-URL-per-file or 50-MB ceiling that crawlers enforce.

Bare-domain shortcut: enter `example.com` and we'll automatically try `https://example.com/sitemap.xml`. Bring your own full URL (`https://example.com/sitemap-news.xml`) and we use it as-is.

XML parsing via `quick-xml`: strict, fast, won't accept malformed or non-standard XML. Bad XML returns a precise error message with the byte offset.
