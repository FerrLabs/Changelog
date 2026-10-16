---
title: 'Guides for the SEO checker, robots.txt, schema and mixed content tools'
summary: Four more tools explain what they check and how to read the result, and the schema validator now accepts @graph markup.
date: 2026-10-06T09:00:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/569
---

The [SEO checker](https://ferrlens.com/tools/seo-checker), [robots.txt tester](https://ferrlens.com/tools/robots), [schema markup validator](https://ferrlens.com/tools/schema) and [mixed content checker](https://ferrlens.com/tools/mixed-content) now have a guide and an FAQ under the result, in English and French, like the email and DNS tools before them.

They cover what each tool reads and what it leaves out, for example that the mixed content scan reads the HTML your server sends and not resources added by JavaScript, or that Lighthouse timings are lab data while Google ranks on field data.

The schema validator also stops reporting a missing @context on every node of a @graph. Markup in that shape, which Yoast, Rank Math and many CMSs emit, now validates as it should.
