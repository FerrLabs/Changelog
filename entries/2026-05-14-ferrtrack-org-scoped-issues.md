---
title: 'FerrTrack: Org-scoped reads + new GET /v1/issues (breaking)'
summary: Closes a cross-tenant data leak: issue, user, and comment reads now enforce org ownership. Adds /v1/issues with assignee/status/kind filters to replace the Inbox N+1 fan-out.
date: 2026-05-14T11:05:00Z
product: ferrtrack
type: breaking
prLink: https://github.com/FerrLabs/FerrTrack-Cloud/pull/196
---

**Security fix.** Until this release, `GET /v1/users` returned every `users_mirror` row across every tenant, and `GET /v1/issues/{ref}`, `PATCH /v1/issues/{ref}`, `GET /v1/issues/{ref}/links`, plus the full comments suite, looked up by ref without checking which org owned the parent project. Anyone could read another org's data by guessing references. All routes now JOIN `projects` and filter on `org_id IS NOT DISTINCT FROM auth.active_org`; mismatch returns 404 (not 403: existence isn't leaked). The shared `lookup_issue_id_in_org` helper enforces it for every comment route too.

**New endpoint.** `GET /v1/issues` accepts `assignee` (UUID or the literal `me`), `status` (`open` default: matches non-closed: or `all` / `in_progress` / `review` / `closed`), `kind` (`bug|feat|chore|docs`), and `limit` (default 50, capped at 200). All filters scoped server-side to the caller's active org. Returns issues ordered by `updated_at DESC`. This replaces the old Inbox pattern of fetching every project then `Promise.all`-ing one `listForProject` per project: at 50 projects that was 50 round trips per render.

**Why breaking.** Callers from org A who were silently hitting org B's issues by ref will now get 404 instead of the issue. There should be no legitimate caller doing that, but it's a behaviour change worth surfacing: hence the `feat!` tag and major version bump on `ferrtrack-api`.
