---
title: 'Punycode converter'
summary: Internationalised domain names (IDN) to ASCII Punycode and back, using the browser's native URL parser.
date: 2026-05-21T08:15:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/55
---

[/tools/punycode](https://ferrlens.com/tools/punycode) converts between Unicode hostnames and their ASCII-compatible Punycode form (`xn--…`). Type `münchen.de` → `xn--mnchen-3ya.de`; type `xn--bcher-kva.example` → `bücher.example`. A toggle picks the direction.

Useful for setting up an IDN in DNS (which only takes ASCII), verifying that a suspicious link in an email is what it claims to be (homoglyph attacks: `аpple.com` with a Cyrillic `а`), or copying a non-ASCII domain into a config file that doesn't speak UTF-8.

Uses the browser's built-in URL / IDNA implementation: same algorithm Chrome and Firefox use for address-bar normalisation. No remote call.
