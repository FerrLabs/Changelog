---
title: 'FerrLens · Seven more client-side dev utilities (case, slugify, base, JWT verify, file hash, Luhn, text stats)'
summary: Case converter (11 variants), slugify, number-base converter with BigInt, JWT signature verifier (HS/RS/PS/ES), file hash by drag-drop, credit-card and IBAN validator, text statistics. Same browser-only architecture as the first batch.
date: 2026-05-19T20:00:00Z
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/34
---

Seven more tools land under `/tools/`, all client-side. Same idea as the first batch: things you Google for often enough that landing on FerrLens should feel obvious.

- **`/tools/case`** — Convert between camelCase, PascalCase, snake_case, SCREAMING_SNAKE, kebab-case, COBOL-CASE, dot.case, Title Case, Sentence case, lower and UPPER. The tokenizer detects camelCase boundaries so round-trips are clean.
- **`/tools/slugify`** — Turn any string into a URL slug. Unicode NFD + diacritic strip, ligature handling (ß → ss, œ → oe, æ → ae, ø → o, đ → d, ł → l), configurable separator (`-` / `_` / `.`) and max length. Tested on `FerrLens — outils côté front (privacy by design) !` → `ferrlens-outils-cote-front-privacy-by-design`.
- **`/tools/base`** — Binary / octal / decimal / hex with **BigInt** arithmetic, so 128-bit numbers convert without precision loss. Outputs are digit-grouped (3 for decimal, 4 for the rest) so they stay readable.
- **`/tools/jwt-verify`** — Complements the existing `/tools/jwt` decoder by actually verifying the signature. Supports HS256/384/512 (shared secret), RS256/384/512, PS256/384/512 and ES256/384/512. Public keys accepted as PEM (`spki`) or JWK. Verdict is binary: VALID or INVALID, with the decoded header and payload shown on success.
- **`/tools/file-hash`** — Drag a file (or click to pick), get its MD5 / SHA-1 / SHA-256 / SHA-512. The file is read into memory with `FileReader` and hashed via Web Crypto — **nothing is uploaded**, no progress bar over the network because there is no network. Useful for checksum verification of downloads.
- **`/tools/luhn`** — Validate credit-card numbers (Luhn algorithm + 8 issuers detected: Visa, Mastercard, Amex, Discover, JCB, Diners, UnionPay…) and IBANs (mod-97 + length check for 78 country codes). Card numbers are masked in the output (`453201••••••0366`) so you can paste safely.
- **`/tools/text-stats`** — Characters (with and without spaces), UTF-8 bytes, words, lines (total and non-empty), sentences, paragraphs, reading time at 200 and 250 wpm, and an approximate LLM token count (`chars ÷ 4`) for Claude / GPT context budgeting.

Same privacy guarantee as batch 1: every input stays in the browser, share links are fragment-only.
