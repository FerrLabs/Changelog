---
title: 'HTTP header inspector'
summary: Fetch any URL, see every response header, the full redirect chain, and the time it took. Like curl -ILv but rendered nicely.
date: 2026-05-20T08:10:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/54
---

[/tools/headers](https://ferrlens.com/tools/headers) does a single GET on the URL with all redirects followed manually (capped at 10 hops). The result page shows:

- The final HTTP status, colour-coded by class (2xx teal, 3xx purple, 4xx amber, 5xx red).
- Total round-trip time in milliseconds.
- The redirect chain — every hop with its status and `Location` target — so you can spot a chain that's too long or that goes from HTTPS back to HTTP somewhere.
- Every response header, alpha-sorted.

Useful for debugging an OG card that won't render (need to check what `content-type` Twitter saw), a missing cookie (which `Set-Cookie` actually came back), or a CDN that's adding a stale `Cache-Control` somewhere.
