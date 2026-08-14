<div align="center">

# FerrLabs Changelog

**The editorial changelog for the FerrLabs toolkit.**

What we shipped, why we built it, and how to use it. Hand-written, one markdown file per change.<br />
Not the generated `CHANGELOG.md` that FerrFlow produces in each repo.

[![Validate](https://github.com/FerrLabs/Changelog/actions/workflows/validate.yml/badge.svg)](https://github.com/FerrLabs/Changelog/actions/workflows/validate.yml)
[![License](https://img.shields.io/badge/license-MPL--2.0-blue)](LICENSE)

[ferrlabs.com/changelog](https://ferrlabs.com/changelog/)

</div>

## Where it renders

One source directory, seven sites. Each consumer pulls `entries/` at build time with
[`degit`](https://github.com/Rich-Harris/degit) and filters by `product`, so a product site shows
only its own entries while ferrlabs.com shows everything.

| Site | Shows |
|---|---|
| [ferrlabs.com/changelog/](https://ferrlabs.com/changelog/) | every product |
| [ferrflow.com/changelog/](https://ferrflow.com/changelog/) | FerrFlow |
| [vault.ferrlabs.com/changelog/](https://vault.ferrlabs.com/changelog/) | FerrVault |
| [track.ferrlabs.com/changelog/](https://track.ferrlabs.com/changelog/) | FerrTrack |
| [growth.ferrlabs.com/changelog/](https://growth.ferrlabs.com/changelog/) | FerrGrowth |
| [ferrfleet.com/changelog/](https://ferrfleet.com/changelog/) | FerrFleet |
| [ferrlens.com/changelog/](https://ferrlens.com/changelog/) | FerrLens |

Every push to `main` fires a `repository_dispatch` at all seven consumer repos, which rebuild on
their own. Nothing here is deployed directly.

## Add an entry

Create `entries/YYYY-MM-DD-<slug>.md`:

```yaml
---
title: 'Pagination lands in the shared UI'
summary: 'One sentence describing what shipped.'
date: 2026-04-29T15:30:00Z   # ISO 8601, the time matters for ordering and datePublished
product: ferrflow            # ferrflow | ferrvault | ferrtrack | ferrgrowth | ferrfleet | ferrlens | ferrlabs
type: new                    # new | fix | perf | breaking | deprecation | security
prLink: https://github.com/… # optional
docsLink: https://…          # optional
---

Three to ten sentences. What the change does, why we built it, how to use it, in that order.
Code blocks are welcome when they show the new thing or replace a workaround. They get
`translate="no"` automatically on the rendered pages.
```

Set `draft: true` to keep an entry off the live sites while the PR is in review.

One file per change. A PR that fixes a bug and adds a flag gets two entries, one `fix` and one
`new`, because each becomes its own page and its own search result.

## When to add an entry

**Always:**

- New user-facing feature: CLI flag, API endpoint, UI surface, config field
- Bug fix that changes what an existing user sees: behaviour, output format, an error they hit
- Performance improvement measurable from outside: faster builds, lower memory, shorter cold start
- Breaking change: config rename, removed flag, deleted endpoint, flipped default
- Deprecation, with the removal timeline
- Security fix, with the advisory linked

**Never:**

- Internal refactors with no external behaviour change
- Renames, type-only changes, code style
- CI and dev-tooling tweaks, unless contributors see them
- Test-only changes
- Doc fixes: typos, broken links
- Dependency bumps that change nothing

## Process

The entry ships in the same window as the change. Open the product PR and the entry PR together
and merge them side by side, rather than promising a follow-up that arrives a week later or not
at all.

## Style

Short prose over bullet lists. Bullets only when the items are genuinely independent. Write for
someone who does not know the codebase and wants to know whether this affects them.

## License

[MPL-2.0](LICENSE)
