---
title: 'IP / CIDR calculator'
summary: IPv4 and IPv6 CIDR math — network, broadcast, usable host range, netmask, total hosts, and address classification.
date: 2026-05-21T08:10:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/55
---

[/tools/ip-cidr](https://ferrlens.com/tools/ip-cidr) takes any CIDR block — `10.0.0.0/16`, `2001:db8::/48`, `192.168.1.5/27` — and returns:

- Network address and broadcast (IPv4) / last address (IPv6).
- First and last usable host.
- Netmask in dotted-decimal (IPv4) and prefix length.
- Total host count, computed with BigInt — no overflow on `/8` IPv6 ranges.
- Address classification: Private (RFC 1918), CGNAT (100.64/10), Multicast, Loopback, Link-local, Documentation, Unique-Local (IPv6 fc00::/7), Public, etc.

IPv6 parsing handles `::` compression both ways: input accepts shorthand, output shows the canonical RFC 5952 form (lowercase, longest zero-run collapsed). Runs in your browser — no network call, no input ever sent to a server.
