---
title: 'FerrGrowth: real bold and italic for the fonts you upload'
summary: 'A heading or body font can now hold one file per weight and style, so bold and italic text use the real cut instead of a smeared imitation.'
date: 2026-10-03T14:30:00Z
product: ferrgrowth
type: new
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/933
---

An uploaded font used to be a single file. When that file was the regular weight and a heading was set in bold, the browser faked the bold by thickening the outlines, and italics were faked by slanting them. It shows, especially at heading sizes.

Each font role in site settings now takes a list of files, each with its weight (100 to 900) and its style (normal or italic). Upload `Fraunces-Regular`, `Fraunces-Bold` and `Fraunces-Italic`, and every weight and style your pages use is drawn from the right file. Picking a file fills in the weight and style from its name when it can, so `Fraunces-SemiBold.woff2` lands on 600 without you having to know that.

Fonts from the font library already came with every weight and the italic, so nothing changes there. Sites set up with a single uploaded file keep working: that file is treated as the regular weight, and you can add the others next to it.
