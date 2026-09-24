---
title: 'FerrFlow: a txt selector no longer eats the spaces around your version'
summary: 'A versioned file read through a txt selector whose capture included padding lost that padding on every release, one character at a time, and nothing reported it. The write now replaces only what the read returned.'
date: 2026-09-24T12:05:00Z
product: ferrflow
type: fix
prLink: https://github.com/FerrLabs/FerrFlow/pull/1190
docsLink: https://ferrflow.com/schema/ferrflow.json
---

A `txt` versioned file can name a `selector`, a regex with one capture group around the version. Reading trimmed the capture, so `version = 1.2.3` with `(?m)^version =(.+)$` gave `1.2.3` and not `" 1.2.3"`. Writing replaced the whole capture, padding included, so the same file came back as `version =2.0.0`.

The space was gone and nothing said so, because the selector still matches a line that lost it. Run three releases through `v =  1.0.0  ` and the file walks to `v =1.3.0`, a character at a time.

Both sides now work from the same trimmed range: the write replaces exactly what the read returned and leaves the rest of the line alone. If your selector captures padding, the padding stays where you put it.

Two smaller things come with it. A selector whose capture is only whitespace is now an error instead of an empty version on its way to a tag name, and a selector whose group never participates, which an optional group like `(?m)^version(?: =(.*))?$` allows, now fails with `E4702` and a link to the docs rather than a bare message.

This was found by the fuzz targets added the same day, not by a report, so you are unlikely to have noticed it: the damage is one space per release in a file you rarely reread.
