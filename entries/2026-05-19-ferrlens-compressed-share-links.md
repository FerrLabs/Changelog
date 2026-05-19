---
title: 'Compressed, opaque share links'
summary: Share links from any tool now embed state as a single lz-string-compressed JSON blob instead of plain key=value pairs — 30-70% shorter, no longer human-readable.
date: 2026-05-19T18:00:00+02:00
product: ferrlens
type: perf
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/38
---

When you hit "Copy share link" on any FerrLens tool, the URL used to look like `#left=<huge%20URL-encoded%20blob>&right=<another%20huge%20blob>` — readable, but enormous for anything text-heavy (diff, JSON formatter, JWT decoder routinely produced 5-10 KB URLs that bumped against browser limits).

The fragment is now a single lz-string-compressed JSON blob: `#N4IgDghgLlC...`. Same data, packed.

Real numbers from the diff tool:

| Input | Old fragment | New fragment | Saving |
|---|---|---|---|
| 1 KB (two code snippets) | 1,409 chars | 886 chars | -37% |
| 3.3 KB (markdown doc + edits) | 4,020 chars | 2,686 chars | -33% |

Bigger inputs compress proportionally better — at 10+ KB you're typically saving more than half. Two side benefits:

- The fragment is now opaque to anyone glancing at the URL bar. No more accidental disclosure of the diff content or the JWT you were debugging.
- Special characters and Unicode no longer pay the percent-encoding tax (every `\n` used to be 3 bytes, every accented char 6-9).

Old share links keep working. The hook detects the legacy `?key=value` format on load, parses it, and rewrites to the compressed form on your first edit — so existing bookmarks don't break.
