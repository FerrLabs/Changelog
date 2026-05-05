---
title: 'FerrLabs · telemetry ingestion endpoint + opt-out plumbing'
summary: 'POST /v1/telemetry now persists envelopes, organizations and users get a telemetry_opt_out flag, and the toggle endpoints are live in app.ferrlabs.com.'
date: 2026-05-05T19:00:00Z
product: ferrlabs
type: new
docsLink: https://ferrlabs.com/telemetry
---

Step 3 of the on-by-default telemetry rollout — the back-end half. The page at [/telemetry](https://ferrlabs.com/telemetry) stays in preview because no event is actually being emitted yet, but the ingestion path is now real and the opt-out is wired end to end.

**`POST /v1/telemetry`.** Public endpoint, accepts the canonical envelope `{ surface, event, org_hash, user_hash, properties, schema_version, occurred_at? }`. Validates surface against the six product slugs, schema_version against the supported set (currently just `1`), event-name length, hex-only `*_hash` fields, and a 4 KiB cap on `properties`. Persists into a TimescaleDB hypertable `telemetry_events` with a 90-day retention policy aligned with the BLAKE3 salt rotation.

**`telemetry_opt_out`** column on `organizations` and `user_prefs` (default `false`). Two REST surfaces:
- `GET / PUT /v1/me/telemetry-prefs` — per-user toggle, account-scoped.
- `GET / PUT /v1/orgs/{slug}/telemetry-prefs` — org-wide toggle, admin-or-above only, audited via the `org_audit_log` table (`telemetry.opt_out.update`).

The API does not enforce opt-out by reversing hashes (it can't — that's the point). Instead, every emitter is responsible for checking the opt-out before calling `POST /v1/telemetry`. Server-side emitters read the user / org flag before emitting; CLIs read `FERRFLOW_TELEMETRY=0` / `DO_NOT_TRACK=1` env vars.

Steps 4-7 (app toggle UI, CLI env var, server-side emit, wording flip) follow.
