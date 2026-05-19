---
title: 'Spam score — SpamAssassin-style heuristics'
summary: Drop a subject + body, get a 0-10 spam score with the exact rules that flagged each line. Runs entirely in your browser — your draft never leaves the page.
date: 2026-05-19T19:45:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/46
---

[/tools/spam-score](https://ferrlens.com/tools/spam-score) scores a draft email against ~10 SpamAssassin-style heuristics, in real time as you type. No backend, no upload — your subject and body are analysed by the React island in your tab.

Rules covered:

- Empty subject (+2.0) — aggressively flagged everywhere.
- Subject over 78 chars (+1.5) — most mailers clip there.
- Subject mostly UPPERCASE (+2.5) — > 50 % caps.
- Multiple `!` in the subject (+1.5).
- Faked `Re:` / `Fwd:` without context (+1.0) — filters cross-check with your sent history.
- Body > 30 % UPPERCASE (+2.0).
- High link density — more than 5 links AND > 8 % of words (+2.0); just over 10 links anywhere (+1.0).
- ~80 spam-trigger phrases scored cumulatively up to +4.0 (`free`, `winner`, `guarantee`, `act now`, `viagra`, the classics).
- Very short body with links (+1.5) — phishing pattern.
- Three or more `$` (+1.0).
- A small **credit** for bodies with no links at all (−0.5).

Total is bucketed into `< 2 = Likely Inbox` (teal), `2-5 = Borderline` (amber), `5+ = Likely Spam` (red). Each rule that fires is rendered as its own row with the +score, the label and the explanation — so you know exactly which line to tweak.

This is a fast iteration loop for a transactional / newsletter draft. It is **not** a real Gmail / Outlook delivery test — for that you need actual seed inboxes, which is what the upcoming inbox-placement tool will do once we wire up our first Gmail seed (see [FerrLens-Cloud#44](https://github.com/FerrLabs/FerrLens-Cloud/issues/44)).
