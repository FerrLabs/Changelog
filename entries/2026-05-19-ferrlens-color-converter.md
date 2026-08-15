---
title: 'Color converter'
summary: HEX ↔ RGB ↔ HSL ↔ OKLCH with a live colour preview, alpha-aware.
date: 2026-05-19T15:41:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/32
---

[/tools/color](https://ferrlens.com/tools/color) takes a colour in any of HEX (`#14b8a6`, `#14b8a6cc`), RGB (`rgb(20, 184, 166)`, `rgba(...)`), HSL or HSLA: and renders it as all four notations including OKLCH (the perceptually-uniform space CSS Color Level 4 added).

The conversion to OKLCH uses the linear-sRGB → Oklab pipeline from Björn Ottosson's reference. Alpha is preserved across all conversions, so you can round-trip a translucent colour from HEX with a 4th channel through RGBA to HSLA without losing the transparency.

A live preview tile renders the colour so you can sanity-check the input before copying any of the four outputs. Useful when you're translating a design token between systems (Figma → CSS → iOS) or when comparing two close colours.
