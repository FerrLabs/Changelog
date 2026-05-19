---
title: 'FerrLens · Diff tool is live'
summary: Paste two blobs, get a side-by-side or unified diff with inline character highlights. Whitespace and case toggles. Fully client-side — the URL fragment encodes both inputs so you can share without uploading anything.
date: 2026-05-19T22:00:00Z
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pulls
---

The placeholder was on the tools catalogue for weeks. It's now a real diff at `ferrlens.com/tools/diff`.

Two panes — Original on the left, Modified on the right. Type or paste, the diff updates as you type. Toggle between **split view** (Git-style two-column with paired added / removed lines) and **unified view** (one column with `+` / `−` markers, like `git diff`). Both views show line numbers per side, a coloured marker per row, and an inline character diff when a line was modified — green for additions, red for removals, highlighted only on the parts that actually changed inside the line.

Two toggles in the toolbar: **Ignore whitespace** collapses runs of spaces / tabs and ignores leading and trailing whitespace before comparing. **Ignore case** does the obvious. Both affect the diff but not the rendering — you still see the original casing and spacing in the output.

`Swap` flips the two sides, `Clear` empties both. A running counter shows added / removed / unchanged lines at a glance.

Everything happens in the browser. The diff algorithm (LCS dynamic programming for lines, then a second LCS pass over characters for the inline highlights) runs in JavaScript on your machine, the inputs never leave the page. The standard "Copy share link" button encodes both sides in the URL fragment (`#l=...&r=...`) which the browser does not send to the server — share it in Slack or email and your colleague gets the same diff loaded straight from the URL. No account, no quota, no upload.
