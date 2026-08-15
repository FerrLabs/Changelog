---
title: 'FerrGrowth: Forms CRUD: create, update, delete, list submissions'
summary: The 'New form' button now opens a real modal instead of doing nothing. POST/PATCH/DELETE on /v1/sites/:slug/forms plus a submissions list endpoint, all org-scoped.
date: 2026-05-14T09:05:00Z
product: ferrgrowth
type: new
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/179
---

The Forms tab on each site has had a 'New form' button since launch but it was wired to a TODO. This release closes that gap end-to-end.

On the API: `POST /v1/sites/{slug}/forms`, `PATCH /v1/sites/{slug}/forms/{id}`, `DELETE /v1/sites/{slug}/forms/{id}`, and `GET /v1/sites/{slug}/forms/{id}/submissions`. All org-scoped via `sites.org_id IS NOT DISTINCT FROM auth.active_org`. The destination enum (`database`, `webhook`, `hubspot`, `salesforce`, `attio`, `customer_io`) is validated at request time, not at submission time.

On the app: a real `CreateFormModal` (name + initial destination) wired to `api.forms.create`. Each row in `SiteForms.tsx` gets a Delete button with a confirm prompt and an error surface. Submissions list is reachable from the form detail row.

If you've been waiting to wire HubSpot or Customer.io to a landing-page form, this is the unlock. The webhook destination is the most useful immediately: point it at your own ingestion endpoint and you have form-to-anything in two minutes.
