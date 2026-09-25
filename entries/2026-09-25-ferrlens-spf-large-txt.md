---
title: 'SPF check finds the record on domains with many TXT records'
summary: The SPF / DKIM / DMARC tool no longer reports a missing SPF record when the domain's TXT answer is too large for UDP.
date: 2026-09-25T11:00:00+02:00
product: ferrlens
type: fix
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/520
---

[/tools/spf-dmarc](https://ferrlens.com/tools/spf-dmarc) reported "Missing SPF record" for domains like gitlab.com and github.com, which publish a valid `v=spf1` record next to dozens of site-verification TXT records. That answer doesn't fit in a UDP packet, the DNS server flags it as truncated, and our resolver gave up instead of retrying over TCP.

Truncated answers are now retried over TCP, so the SPF record is found and scored. The same fix applies to TXT queries in the [DNS lookup](https://ferrlens.com/tools/dns-lookup) tool.

When a lookup does fail (a timeout, an unreachable server), the report now says the lookup failed rather than claiming the record is missing.
