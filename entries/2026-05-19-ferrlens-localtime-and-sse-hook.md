---
title: 'FerrLens: Dates now render in your local timezone'
summary: Snapshot timestamps and scan-fetched-at on shared SEO pages used to render in the server's timezone. They now show in yours. Plus a reusable SSE hook so future streaming tools share the same pattern as the SEO checker.
date: 2026-05-19T19:00:00Z
product: ferrlens
type: fix
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pulls
---

A user in Tokyo opening a shared SEO scan would see "created May 19, 10:00" because the SSR pod is in UTC. Same time displayed on a French user's screen, same time on a Californian's screen. None of them matching what their wall clock said. The page is server-rendered and the timestamp was formatted server-side with `new Date(iso).toLocaleString()`, which resolves to the server's timezone, not the visitor's.

Fixed by replacing those call sites with a small `<LocalTime client:load />` Astro island. The SSR output ships a `<time datetime="..."` with a UTC fallback string for users with JavaScript off, then hydrates client-side with the user's actual timezone formatted via `Intl.DateTimeFormat`. The shared scan page (`/share/[id]`), the SEO result card (`SeoResult.astro`), and the changelog dates all use it now: the latter pinned to UTC since editorial dates are day-precision and should be consistent for everyone.

Same shipment also extracted the SSE consumption logic from `SeoCheckerForm.tsx` into a reusable `useSseStream` hook in `site/src/lib/`. The SEO checker still works the same, but any future FerrLens tool that hits a streaming endpoint can drop in three lines: pass an `onEvent` handler, call `start(path, body)`, get `running` state back. The pattern is now the default for anything API-backed and slow enough to benefit from progressive disclosure.
