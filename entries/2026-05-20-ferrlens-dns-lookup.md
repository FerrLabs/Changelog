---
title: 'DNS lookup'
summary: A, AAAA, MX, TXT, NS, SOA, SRV in one shot, queried in parallel against Cloudflare's public resolvers.
date: 2026-05-20T08:00:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/54
---

[/tools/dns-lookup](https://ferrlens.com/tools/dns-lookup) returns every common record type for a domain in one request. Type the domain, get back:

- **A** (IPv4) and **AAAA** (IPv6) addresses.
- **MX** with priority + exchange hostname, sorted.
- **TXT** records (SPF, DKIM, DMARC, domain-verification tokens: anything).
- **NS** delegations.
- **SOA** with serial / refresh / retry / expire / minimum decoded.
- **SRV** with priority / weight / port / target.

Backed by `hickory-resolver` against Cloudflare's public DNS (1.1.1.1 / 1.0.0.1). All seven queries fire concurrently, the response usually comes back in under 200 ms. No cache. Each call hits live DNS, so a record you updated 30 seconds ago shows up immediately.
