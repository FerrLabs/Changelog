---
title: 'DNSBL blacklist checker'
summary: Query an IP or domain against 30 major DNSBLs (Spamhaus, SpamCop, Barracuda, SORBS, UCEProtect, Mailspike, …) in parallel. Verdict in under a second.
date: 2026-05-19T19:35:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/46
---

[/tools/blacklist](https://ferrlens.com/tools/blacklist) tells you whether an IP (or a domain — it resolves the A record first) is listed on any major DNSBL.

The zones cover the spam-list space pretty exhaustively for V1: Spamhaus ZEN (the consolidated SBL+XBL+PBL), SpamCop, Barracuda Central, SORBS + SORBS Spam, UCEProtect L1/L2/L3, Mailspike, the Composite Blocking List, PSBL, DroneBL, Manitu iX, SpamRats × 3 zones, EFnet RBL, SpamEatingMonkey × 3, Swinog × 2, SURBL, URIBL, and a few more — 30 total. Each is a DNS A query against `<reversed-ip>.<zone>`, all fired in parallel.

When a zone lists the IP, we also pull the TXT record so you see the human-readable reason ("CBL exit, abused open proxy", etc.). Sorting bubbles the listed zones to the top.

Useful for: a customer complaining your transactional email gets bounced, suspecting a shared IP at your VPS host, validating a domain you're about to point email at, or just confirming your own mail server's egress IP is clean before going to production.

The output is fully deterministic — same IP, same answer, every query goes to live DNSBLs. No caching, so a delisting you just got applied shows up immediately on the next check.
