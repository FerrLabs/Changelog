---
title: 'FerrLabs · /telemetry preview of the on-by-default commitment'
summary: 'New transparency page documenting every event we plan to collect, the hashing scheme, and the opt-out paths. Marked draft until the events actually emit.'
date: 2026-05-05T18:00:00Z
product: ferrlabs
type: new
docsLink: https://ferrlabs.com/telemetry
---

We're publishing the [/telemetry](https://ferrlabs.com/telemetry) page now, before any event is actually collected. The point: lock the commitment in writing first, then ship the implementation against it. Nothing on that page is being recorded today — telemetry is still opt-in across every FerrLabs product. The page is marked **draft** in a banner so nobody mistakes it for the live state.

**Why this order.** The honest version of "we collect telemetry" is to publish the full event list, the hashing function, the retention window, and the opt-out paths *before* flipping the default. We're using the page as a contract: when on-by-default ships, it will match this document line for line, or the document changes first. The work is tracked in [FerrLabs-Cloud#166](https://github.com/FerrLabs/FerrLabs-Cloud/issues/166).

**What it covers.** Per-product event tables (FerrFlow CLI, the FerrLabs API, app.ferrlabs.com, FerrVault / FerrTrack / FerrGrowth / FerrFleet), the never-collected list, BLAKE3-keyed hashing with 90-day salt rotation, TimescaleDB retention windows, and three opt-out surfaces (CLI env var, app preferences, org-wide setting). Available in EN and FR, linked from the footer of every FerrLabs site.

**Until step 7 lands** the principle №04 wording on ferrlabs.com still reads "No telemetry by default. Off until you opt in." That sentence flips to "Telemetry, but transparent" only when the page is wired to read events from `Kit` source at build time and the opt-out works end to end.
