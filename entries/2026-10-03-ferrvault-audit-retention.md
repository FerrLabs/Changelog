---
title: 'Audit events are kept for 90 days'
summary: 'FerrVault now purges audit events older than 90 days, as its privacy policy states. Each purge leaves an audit.purged entry in the log.'
date: 2026-10-03T11:11:32Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1063
docsLink: https://ferrvault.com/privacy/
---

The FerrVault privacy policy promises that audit events are purged after 90 days, but nothing deleted them: the audit log grew forever. The API now runs a purge every hour and removes events older than the retention period, in batches so a large backlog never locks the table.

Each batch is deleted in the same transaction as an `audit.purged` event recording how many entries went and the retention in force, so the log always shows when and how much was removed. The first run on ferrvault.com removes everything already older than 90 days.

The API keeps everything unless `FERRVAULT_AUDIT_RETENTION_DAYS` is set, and ferrvault.com sets it to 90. `FERRVAULT_AUDIT_PURGE_SECS` changes how often the purge runs (3600 by default).
