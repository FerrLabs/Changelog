---
title: 'FerrLabs · server-side telemetry emit wired into auth + org + subscription handlers'
summary: 'API now emits the documented events when accounts sign up, log in, orgs are created, members added, subscriptions activate / change tier / cancel.'
date: 2026-05-05T21:00:00Z
product: ferrlabs
type: new
docsLink: https://ferrlabs.com/telemetry
---

Step 6 of the on-by-default telemetry rollout — the server-side half. The API now actually emits the events documented at [ferrlabs.com/telemetry](https://ferrlabs.com/telemetry) instead of only persisting envelopes from external POSTs.

**Wiring.** `api/src/telemetry_emit.rs` owns the `Emitter` (BLAKE3-keyed `Hasher` loaded from `FERRLABS_TELEMETRY_SALT` at startup, ephemeral fallback in dev with a loud warn). Two helpers, `spawn_emit_org` and `spawn_emit_user`, fire-and-forget through `tokio::spawn` — they check the relevant opt-out (`organizations.telemetry_opt_out` for org events, `user_prefs.telemetry_opt_out` for user events) before writing into `telemetry_events`. Emit failures `tracing::warn!` and never propagate — telemetry is never the reason a request fails.

**Wired call sites.**

| Surface | Event | Properties |
|---|---|---|
| `POST /v1/orgs` | `org.created` | (org_hash + actor user_hash) |
| `POST /v1/orgs/{slug}/members` | `org.member.added` | `role` |
| `POST /v1/orgs/{slug}/subscriptions` | `product.activated` | `product`, `tier` |
| `PATCH /v1/orgs/{slug}/subscriptions/{product}` | `product.tier_changed` | `product`, `tier_to` (when tier changes) |
| `DELETE /v1/orgs/{slug}/subscriptions/{product}` | `product.canceled` | `product` |
| `POST /auth/login` | `auth.login` | `method` (currently always `password`) |
| `POST /auth/verify-email` | `auth.signup` | `method` (account becomes active) |

OAuth login methods will populate `method=oauth-google` / `oauth-github` / `sso` once those flows ship.

**Hash stability.** `FERRLABS_TELEMETRY_SALT` is a 64-char hex (32 bytes) loaded from a sealed K8s secret in prod. Rotating it invalidates correlation across the rotation boundary by design — same intent as the 90-day raw retention on `telemetry_events`.

**Wording flip is next.** Step 7 (drop the `draft` banner from `/telemetry`, switch principle №04 + hero stat №03 to "Telemetry, but transparent" / "OPEN TELEMETRY") will land as soon as the events are visibly arriving in DB on a preview cluster.
