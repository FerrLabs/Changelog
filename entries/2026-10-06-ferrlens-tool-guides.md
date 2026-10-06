---
title: 'Guides and FAQs under the email, DNS and security header tools'
summary: Five tools now explain what they check, how to read the result and how to fix the usual problems, in English and French.
date: 2026-10-06T08:00:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/566
---

The [SPF, DKIM and DMARC checker](https://ferrlens.com/tools/spf-dmarc), [DNS lookup](https://ferrlens.com/tools/dns-lookup), [DNS propagation](https://ferrlens.com/tools/dns-prop), [security headers](https://ferrlens.com/tools/sec-headers) and [blacklist checker](https://ferrlens.com/tools/blacklist) now have a short guide under the result.

Each one says what the tool actually checks (which DKIM selectors are probed, which resolvers and blocklists are queried, how the score is built), how to read the output, and how to fix the problems it most often reports. A few questions people ask about each check follow, such as why a DKIM key is not found or why a blocklist answers with an error rather than a listing.

The guides are in English and French, under the tool on its own page, so there is nothing to look up elsewhere.
