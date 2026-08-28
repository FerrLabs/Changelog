---
title: 'Credit card / IBAN validator'
summary: Validate credit card numbers with the Luhn algorithm and issuer detection, or IBANs with a mod-97 check and per-country length validation.
date: 2026-05-19T16:18:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/34
---

[/tools/luhn](https://ferrlens.com/tools/luhn) handles two related checks behind one URL.

**Card mode** runs the Luhn algorithm (the mod-10 checksum every PAN uses) and, on success, identifies the issuer from the BIN range: Visa, Mastercard (including the new 2-series), American Express, Discover, JCB, Diners Club and UnionPay. Output masks the middle digits (`453201••••••0366`) so you can paste and share screenshots safely.

**IBAN mode** verifies the mod-97 checksum (rearrange + base-36-to-digits + remainder must equal 1) and cross-checks the length against the country code's expected length: 78 countries covered, from `AD24` to `XK20`. On success it extracts the BBAN (the country-specific account number).

Useful for sanity-checking test cards in a payment flow, for catching typos in customer-entered IBANs before they hit your backend, or just for double-checking a number someone read to you over the phone.
