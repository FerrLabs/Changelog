---
title: 'FerrGrowth: rate limits on forms, analytics and member login'
summary: "Your site's public endpoints now refuse floods from a single source, and member login no longer reveals which emails have an account."
date: 2026-10-04T18:00:00Z
product: ferrgrowth
type: security
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/934
---

Every published FerrGrowth site talks to a handful of public endpoints: form submissions, page analytics, heatmap clicks, and member signup and login. None of them limited how often one visitor could call them, so a single script could flood a form with spam, inflate a site's analytics, or try passwords against member accounts as fast as the network allowed.

Each of those endpoints now has a limit per visitor, generous enough that real use never meets it. Member login allows a burst of 10 attempts per site, then one every 6 seconds. A visitor over the limit gets a `429 Too Many Requests` with a `Retry-After` header telling them when to come back.

Member login also no longer answers faster for an email that has no account than for one that does. Both now take the same time, so the response no longer tells anyone which of your visitors have signed up.

There is nothing to configure. Forms, analytics and member areas keep working as before for everyone else.
