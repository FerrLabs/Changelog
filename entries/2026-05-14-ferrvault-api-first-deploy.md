---
title: 'FerrVault: API package shipped to GHCR for the first time'
summary: ferrvault-api is now a proper independently-versioned package with its own Docker image and FerrFlow release lane. End of the "API lives in the app repo but never gets built" era.
date: 2026-05-14T15:10:00Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/201
---

Until today the FerrVault API was buildable but not actually shipped: no `.ferrflow` package entry, no Docker workflow target, no GHCR image. Every deploy went through a manual rebuild that nobody remembered the steps for.

This adds `api` to `.ferrflow` so FerrFlow bumps and tags it independently from the app and site, and extends `.github/workflows/docker.yml` with a `build-api` job that pushes `ghcr.io/ferrlabs/ferrvault-cloud/api:VERSION` on every `api@v*` release. The Infra side picks it up via the existing `ferrvault-api` ImageRepository + ImagePolicy and Flux deploys it like every other product API.

Net effect: FerrVault joins the "merge to main → tag → image → cluster pod restart" loop the rest of the suite already had, and the production cluster sees a real `ferrvault-api` workload for the first time.
