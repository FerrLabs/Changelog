---
title: 'Number base converter'
summary: Convert between binary, octal, decimal and hex with BigInt arithmetic — no precision loss even on 128-bit numbers.
date: 2026-05-19T16:10:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/34
---

[/tools/base](https://ferrlens.com/tools/base) converts integers between binary (base 2), octal (base 8), decimal (base 10) and hexadecimal (base 16). Pick the input base, type the number, see the other three representations.

Arithmetic uses native `BigInt`, so 64-bit, 128-bit and arbitrary-precision numbers convert without rounding errors — unlike the JS-`Number`-based tools you'll find elsewhere that silently lose precision above `2^53`. Negative numbers are supported with a leading `-`.

Outputs are digit-grouped for readability: three digits for decimal (`12 345 678`), four digits for the rest (`1111 1111`, `dead beef`). Each row has a one-click copy.

Useful when reading hex dumps, decoding protocol fields, or just sanity-checking that `0xff == 255 == 0b11111111`.
