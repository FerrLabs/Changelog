---
title: 'Text stats'
summary: Characters, words, lines, sentences, paragraphs, reading time and approximate LLM token count for any block of text.
date: 2026-05-19T16:20:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/34
---

[/tools/text-stats](https://ferrlens.com/tools/text-stats) computes 11 metrics for whatever you paste into it: characters (with and without spaces), UTF-8 byte length, words, total lines, non-empty lines, sentences, paragraphs, reading time at two common WPM speeds and an approximate LLM token count.

The reason there are two character counts is that emojis and accented letters are multi-byte in UTF-8 — `é` is 2 bytes, `🦀` is 4. We use `[...input]` to count Unicode code points (the visible-character intuition) and `new TextEncoder().encode(input).length` for the byte count (what your storage layer sees). The delta between the two is a quick "how much non-ASCII do I have" indicator.

The token count is a deliberately rough `chars ÷ 4` heuristic — useful for budgeting Claude / GPT context windows when you don't want to load a full tokenizer just to get a ballpark. For exact tokenisation, the model's own tokenizer is the source of truth.

Useful for tweet/title length checks, Markdown post sizing, and context-window math when prompt engineering.
