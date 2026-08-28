---
title: 'app.ferrlabs.com: telemetry opt-out toggles in Preferences and a new Privacy page'
summary: 'Per-user toggle on /prefs and a new /privacy page with the org-wide toggle for owners and admins.'
date: 2026-05-05T20:00:00Z
product: ferrlabs
type: new
docsLink: https://ferrlabs.com/telemetry
---

Step 4 of the on-by-default telemetry rollout: the UI for the opt-out plumbing that landed in step 3.

**Per-user toggle.** A new section at the bottom of [/prefs](https://app.ferrlabs.com/prefs) controls whether anonymous usage events tied to your account are sent. Reads/writes `GET / PUT /v1/me/telemetry-prefs`. Default is "on" (matches the on-by-default stance) and changes apply on the next API call.

**Org-wide toggle on `/privacy`.** Owners and admins get a new sidebar entry under "Security" called "Privacy & telemetry". One switch, org-scoped, with copy that explains the precedence rules: org-wide opt-out overrides individual member preferences for events tied to the org (subscription changes, member additions, product usage), while personal events still respect each member's setting. The org toggle hits `GET / PUT /v1/orgs/{slug}/telemetry-prefs` and is recorded in the org's audit log.

The shared `TelemetryToggle` component links to [ferrlabs.com/telemetry](https://ferrlabs.com/telemetry) directly so users can see exactly what would be sent before deciding.
