---
title: 'FerrGrowth: see your fonts before you apply them'
summary: 'The font picker now draws each uploaded font in its own face, and site settings show each font family set in itself.'
date: 2026-10-03T14:00:00Z
product: ferrgrowth
type: new
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/926
---

Picking an uploaded font used to mean reading file names: every tile in the font picker said `WOFF2` and nothing else, so telling two fonts apart meant applying one and opening the editor.

Each tile now shows a large `Aa` and a short line set in the font itself, with the format underneath. In site settings, the name of the family you picked for headings and body text is drawn in that font, whether it comes from your uploads or from the font library.

If a file cannot be loaded, the tile shows its format only and settings say so, rather than drawing a sample in some other font that would look like it worked.
