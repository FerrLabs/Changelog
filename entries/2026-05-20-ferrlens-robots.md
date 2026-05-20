---
title: 'Robots.txt analyzer'
summary: Fetch and parse a domain's robots.txt, simulate a crawl decision for any User-Agent + path, list every declared sitemap.
date: 2026-05-20T08:20:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/54
---

[/tools/robots](https://ferrlens.com/tools/robots) does the three things you usually want when debugging crawl behaviour:

1. **Fetch** `https://<domain>/robots.txt` and show the raw body alongside a parsed view of every `User-agent` group (Allow / Disallow / Crawl-delay).
2. **Test a specific path against a specific User-Agent**: tell us the UA (defaults to `Googlebot`) and the path (defaults to `/`), and we report `Allowed` or `Blocked` plus which `Allow:` / `Disallow:` rule decided it. The matcher implements Google's wildcard semantics (`*` matches any sequence, `$` anchors end-of-path) and the longest-match wins.
3. **Discover declared sitemaps**: any `Sitemap:` line in the file is collected and rendered as a clickable list — feeds straight into the sitemap validator.

Useful for confirming that a freshly-deployed `Disallow: /admin` actually blocks `/admin/foo` but not `/administrator`, and that the new `Sitemap:` URL is actually pointing at the right host.
