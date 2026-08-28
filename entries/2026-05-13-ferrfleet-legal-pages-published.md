---
title: 'Legal pages published: DPA, subprocessors, security'
summary: ferrfleet.com now hosts the standalone Data Processing Addendum, subprocessor list, and security overview in EN and FR.
date: 2026-05-13
product: ferrfleet
type: new
prLink: https://github.com/FerrLabs/FerrFleet-Cloud/pull/163
---

The marketing site now carries the three legal surfaces every B2B procurement team asks for before they will move past a security review:
`/dpa`, `/subprocessors`, and `/security`. Each page is mirrored under `/fr/` and links back from the global footer.

The DPA spells out the controller / processor split between you and FerrLabs, lists the international transfer mechanism we rely on,
and points to the FerrLabs Trust Center for the executable PDF. The subprocessor page enumerates every vendor that touches customer
data: model providers, hosting, monitoring, billing: with the legal entity, location and the data category that flows through them.
The security page summarises the controls in plain language: tenant isolation, encryption in transit and at rest, key rotation,
audit logging, and the incident response timeline.

These pages are reference material, not marketing. Expect them to be quietly updated whenever a subprocessor changes or a new
control is rolled out. Those edits will land here in the changelog so customers can track the diff without subscribing to a Notion
page.
