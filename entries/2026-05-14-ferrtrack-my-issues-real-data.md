---
title: "FerrTrack · 'My issues' wired to the API + mocked nav stripped"
summary: Inbox no longer fans out one request per project. The 'My issues' page is real data. Subscribed, Active cycle, Roadmap, Docs and Teams are gone until they have a backing data model.
date: 2026-05-14T11:10:00Z
product: ferrtrack
type: new
prLink: https://github.com/FerrLabs/FerrTrack-Cloud/pull/197
---

Follow-up to the org-scoped issues API. `MyIssues.tsx` used to render `trackMockData.ts` end-to-end; it now hits `GET /v1/issues?assignee=me&status=open&limit=200` plus a single `api.projects.list()` for the project names. Same editorial layout as Inbox, clicking a row deep-links to the issue detail page.

The Inbox itself dropped its `Promise.all(projects.map(api.issues.listForProject))` fan-out and now does one server-scoped call. At our largest tenant that's ~30 fewer round trips per Inbox render.

The remaining mocked secondary pages (`Subscribed`, `Active cycle`, `Roadmap`, `Docs`, `Teams`) had no data model — they only displayed `trackMockData.ts`. Stripped from the sidebar, routes dropped, page files + `components/track/Track.tsx` + `lib/trackMockData.ts` deleted, hardcoded `TEAMS` constant gone with them. If/when a real Cycles or Teams model lands the nav can come back; it won't ship as fake data again.
