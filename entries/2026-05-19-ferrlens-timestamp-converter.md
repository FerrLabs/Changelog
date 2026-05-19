---
title: 'Timestamp converter'
summary: Convert between Unix seconds, Unix milliseconds and ISO 8601, with a live view in any IANA timezone plus a relative reading ("3 days ago").
date: 2026-05-19T15:40:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/32
---

[/tools/timestamp](https://ferrlens.com/tools/timestamp) accepts any of the three formats you ever paste into a debugger — `1715948000`, `1715948000000`, or `2024-05-17T11:33:20Z` — and immediately shows you the other two plus a localized view and a relative reading.

The timezone picker lists every IANA zone exposed by the browser via `Intl.supportedValuesOf('timeZone')`, so you can flip between UTC, your local zone and any region in one click. The "Now" button injects the current timestamp.

The relative reading ticks once per second, so you can use it as a poor man's stopwatch when comparing two close timestamps from different services. All conversions are done with the built-in `Intl.DateTimeFormat` — no `moment`, no `date-fns`, no bundle bloat.
