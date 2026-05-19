---
title: 'Case converter'
summary: Convert between 11 case styles — camelCase, PascalCase, snake_case, SCREAMING_SNAKE, kebab-case, COBOL-CASE, dot.case, Title Case, Sentence case, lower, UPPER.
date: 2026-05-19T16:05:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/34
---

[/tools/case](https://ferrlens.com/tools/case) turns any string into 11 case variants at once. Paste your input, copy whichever line you need.

The tokenizer detects camelCase boundaries, so `getUserById` round-trips through every form cleanly: `get_user_by_id`, `GET-USER-BY-ID`, `Get User By Id`, etc. It handles consecutive capitals too (`URLParser` splits at `URL` / `Parser`, not at every letter) and treats any non-alphanumeric character as a separator.

Useful for keeping identifiers consistent when you're translating between languages (Go's `PascalCase` exports, Python's `snake_case`, JSON keys in `kebab-case`, env vars in `SCREAMING_SNAKE`) or when you're refactoring a database column.
