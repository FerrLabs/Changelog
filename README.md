# FerrLabs Changelog

The editorial changelog for the FerrLabs developer toolkit — what we shipped, why, and how to use it. Renders at:

- [ferrlabs.com/changelog/](https://ferrlabs.com/changelog/) — every product
- [ferrflow.com/changelog/](https://ferrflow.com/changelog/) — FerrFlow only
- [vault.ferrlabs.com/changelog/](https://vault.ferrlabs.com/changelog/) — FerrVault only
- [track.ferrlabs.com/changelog/](https://track.ferrlabs.com/changelog/) — FerrTrack only
- [growth.ferrlabs.com/changelog/](https://growth.ferrlabs.com/changelog/) — FerrGrowth only

Each consumer site fetches this directory at build time via [`degit`](https://github.com/Rich-Harris/degit) and filters by product. A `repository_dispatch` event fires every push to `main` and triggers a rebuild on every consumer.

## Add an entry

Create `entries/YYYY-MM-DD-<slug>.md`:

```yaml
---
title: 'Product · short headline'
summary: 'One sentence describing what shipped.'
date: 2026-04-29
product: ferrflow              # ferrflow | ferrvault | ferrtrack | ferrgrowth | ferragents | ferrlabs
type: new                      # new | fix | perf | breaking | deprecation | security
prLink: https://github.com/... # optional
docsLink: https://...          # optional
---

3-10 sentences. **What** the change does, **why** we built it, **how** to use it.
Code blocks welcome — they get `translate="no"` automatically on the rendered pages.
```

## When to add an entry

**Always:**
- New user-facing feature (CLI flag, API endpoint, UI surface, config field).
- Bug fix that affects existing users (behaviour change, error they'd have seen).
- Performance improvement measurable from outside.
- Breaking change (config rename, removed flag, default flip).
- Deprecation (with the removal timeline).
- Security fix (link the advisory).

**Never:**
- Internal refactors with no external behaviour change.
- Variable / function renames, type-only changes, code style.
- CI / dev-tooling tweaks (unless visible to contributors).
- Test-only changes.
- Doc-only fixes (typos, broken links).
- Dependency bumps that don't change behaviour.

## Process

The PR shipping the user-facing change opens **two PRs in parallel**: one in the product repo, one here adding the changelog entry. Merge them in the same window so the entry goes live with the change.

License: [MPL-2.0](LICENSE). Markdown only — keep it editorial, keep it short.
