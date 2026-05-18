---
title: 'FerrLens · SEO checker runs Lighthouse locally'
summary: ferrlens.com now runs a real Lighthouse against a real Chromium in-cluster, instead of waiting for Google PageSpeed Insights. Faster, no quota, more signals.
date: 2026-05-18T14:00:00Z
product: ferrlens
type: perf
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/19
---

The free SEO checker at `ferrlens.com/tools/seo-checker` used to call Google PageSpeed Insights for every scan. That worked, but it tied the experience to a third-party rate limit (25 req/day anonymous, 25,000/day with a key) and to whatever queue length PSI happened to have at that moment — anything from 8 to 40 seconds per scan, and a non-trivial share of `503 Backend Error` responses we had no way to retry around.

Scans now run against a new in-cluster service, `ferrlens-headless`, which packages Lighthouse + Puppeteer + Chromium into its own container. The Rust API tries the headless service first and only falls back to PageSpeed Insights if it's unreachable, so existing behaviour is preserved when the cluster is degraded. The result payload is unchanged on the wire — same four category scores, same Core Web Vitals — but we now also surface First Contentful Paint, Total Blocking Time, and Time to First Byte when the headless backend supplies them.

The headless service is shipped as its own image (`ghcr.io/ferrlabs/ferrlens-cloud/headless`) so it can scale independently of the API: Chromium needs 384 MB–1 GB of RAM per replica and one CPU per concurrent run, the Rust API needs neither. It also exposes `/v1/screenshot`, `/v1/render`, and `/v1/pdf` — the same primitives FerrGrowth will eventually need for OG image generation and FerrVault for signed-PDF export.

If you self-host FerrLens, set `HEADLESS_URL=http://ferrlens-headless:3002` on the API and deploy the new manifests in `Infra/ferrlens-headless/`. Leave it unset to keep the previous PSI-only behaviour.
