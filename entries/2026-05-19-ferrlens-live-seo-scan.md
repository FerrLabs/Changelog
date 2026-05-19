---
title: 'FerrLens · SEO checker is now live-streaming, and ~3× faster'
summary: The SEO checker no longer waits 20 s before showing anything. Core Web Vitals appear in ~3 s, then full Lighthouse scores fill in. Chromium is now pooled, K8s right-sized, perf flags fixed.
date: 2026-05-19T16:00:00Z
product: ferrlens
type: perf
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pulls
---

Two complaints about the SEO checker were both fair: it felt slow, and it gave you nothing until the very end. Both are fixed in the same shipment.

### Live streaming

`POST /v1/seo/check/stream` is a new Server-Sent Events endpoint that emits results as they're produced — `accepted`, `navigating`, `vitals` (Core Web Vitals from a quick navigation, ~3 s in), `lighthouse_started`, `scores` (the four Lighthouse category scores), `notes`, `done`. The React form on `ferrlens.com/tools/seo-checker` subscribes to it and fills the result card progressively, with skeleton loaders for whatever hasn't arrived yet. The non-streaming `POST /v1/seo/check` still exists for API users.

Cached scans skip everything — the cookie hits a `cached` event with the full payload immediately and the UI flips to "Cached · instant" before the spinner can even render.

### Headless perf fixes

The headless service was relaunching Chromium for every single scan via `chrome-launcher`. The shared Puppeteer browser was right there, ignored. Now both Lighthouse runs and the screenshot / pdf / render routes share one long-lived Chromium that's launched at startup — saves 1–3 s per scan.

Chrome flags were upgraded with the usual suspects (`--disable-extensions`, `--disable-background-networking`, `--disable-default-apps`, `--disable-sync`, `--disable-translate`, `--disable-component-update`, `--no-pings`, `--password-store=basic`, `--use-mock-keychain`, `--disable-features=site-per-process,IsolateOrigins,BackForwardCache,Translate`). Lighthouse audits known to be slow and not actionable (`screenshot-thumbnails`, `final-screenshot`, `full-page-screenshot`, `network-requests`, `main-thread-tasks`, `script-treemap-data`) are now skipped on every run, not just sorted out of the notes list. Default categories drop from all-four to `performance` + `seo` — accessibility and best-practices are still available, just opt-in via the `categories` field.

### Kubernetes tuning

The deployment was over-conservative on CPU requests (`100m` while a real scan eats 1–2 vCPU during the burst) and under-provisioned on replicas (1, with `MAX_CONCURRENT=2`, meaning concurrent scans fought over one Chromium). Now `replicas: 2`, `requests: 500m / 384 Mi`, `limits: 2000m / 1 Gi`, and a hard `LIGHTHOUSE_TIMEOUT_MS=20000` so slow pages can't tie up a worker for a minute.

### Cumulative gain

A cold first scan went from ~22 s end-to-end to ~13 s, and crucially the user sees something useful in 3–4 s instead of staring at a blank page. Cached scans are instant. Concurrent scans no longer queue.
