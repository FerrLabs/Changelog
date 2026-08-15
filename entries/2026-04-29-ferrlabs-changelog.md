---
title: 'FerrLabs: public changelog'
summary: 'New /changelog/ on every FerrLabs site: editorial entries for what shipped, when, and why. Source of truth at FerrLabs/Changelog (public repo).'
date: 2026-04-29T13:00:00Z
product: 'ferrlabs'
type: 'new'
docsLink: 'https://github.com/FerrLabs/Changelog'
---

The page you're reading. We now publish a curated changelog at `ferrlabs.com/changelog/` and on every product site (`ferrflow.com/changelog/`, `vault.ferrlabs.com/changelog/`, `track.ferrlabs.com/changelog/`, `growth.ferrlabs.com/changelog/`).

**One source of truth.** Markdown lives in [FerrLabs/Changelog](https://github.com/FerrLabs/Changelog) (public). Every site fetches it at build time via `degit` and filters by product. A `repository_dispatch` from the Changelog repo to each consumer triggers a rebuild within minutes of a new entry.

**TechArticle JSON-LD per post.** Google sees each entry as a `TechArticle` linked to a `SoftwareApplication` (the product): the right schema for software changelogs.

**RSS feeds.** Every site exposes `/changelog/rss.xml` filtered to its product. The cross-product feed is at [ferrlabs.com/changelog/rss.xml](https://ferrlabs.com/changelog/rss.xml).

The format: title + one-sentence summary + 3-10 sentences of context. We add an entry only when the change is user-facing (feature, fix, perf, breaking, deprecation, security). Internal refactors and dep bumps stay out of it.
