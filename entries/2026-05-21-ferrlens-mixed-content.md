---
title: 'Mixed content scanner'
summary: Scan an HTTPS page for HTTP-only src / href / action / poster / data-src resources that modern browsers block.
date: 2026-05-21T09:10:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/56
---

[/tools/mixed-content](https://ferrlens.com/tools/mixed-content) crawls an HTTPS page and reports any resource still pointing at `http://` — the classic mixed-content trap that breaks images, scripts, iframes and form actions silently on modern browsers (Chrome blocks active mixed content outright, passive in incognito).

Looks at every common URL attribute: `src`, `href`, `action`, `poster`, `background`, `data-src`, `formaction`, both single- and double-quoted. Results are grouped by attribute so you immediately see whether the problem is in `<script>` tags, `<img>` tags, or stray `<form action="http://…">` patterns left over from a legacy migration.

If the URL you pass is plain HTTP, the tool tells you mixed content doesn't apply — it's not the right check for that case.
