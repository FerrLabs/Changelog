---
title: 'FerrGrowth: hosted sites now ship with security headers'
summary: 'Every page FerrGrowth serves for your site now carries anti-clickjacking, nosniff and referrer headers, plus HSTS on verified custom domains. Nothing to configure, and your embedded scripts keep working.'
date: 2026-10-03T12:00:00Z
product: ferrgrowth
type: security
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/922
---

Pages hosted on FerrGrowth went out with no security headers at all. Any page could be framed by another site and clickjacked, browsers were free to guess content types, and full page URLs leaked to every third party a page linked to. A site audit would flag all of it, ours included.

Every response now carries a baseline. `frame-ancestors 'self'` and `X-Frame-Options: SAMEORIGIN` stop other sites from framing your pages. `X-Content-Type-Options: nosniff` makes browsers trust the declared type. `Referrer-Policy: strict-origin-when-cross-origin` sends only your domain, not the full URL, to other sites. On a verified custom domain, `Strict-Transport-Security` also tells browsers to always use HTTPS.

The policy leaves scripts and styles alone on purpose. Analytics tags, chat widgets and anything you paste into an HTML block or the site's head code keep loading as before.

There is nothing to turn on: it applies to visual and code-mode sites alike, from the next page load.
