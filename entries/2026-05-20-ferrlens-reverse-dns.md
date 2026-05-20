---
title: 'Reverse DNS'
summary: IP address (v4 or v6) → PTR hostname lookup. Useful for tracing the rDNS of a mail server or checking that your IP resolves to the hostname you think it does.
date: 2026-05-20T08:05:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/54
---

[/tools/reverse-dns](https://ferrlens.com/tools/reverse-dns) does a PTR lookup on any IPv4 or IPv6 address. Most consumer IPs have a generic ISP rDNS (`abc.def.adsl.example-isp.com`); server IPs should have one matching the hostname the operator uses. A mismatch is the first thing Gmail / Outlook look at when scoring a sending IP — your MX must resolve back to itself.

Pure DNS, no caching, runs in well under a second.
