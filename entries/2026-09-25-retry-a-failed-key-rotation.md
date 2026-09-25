---
title: 'Retry a failed key rotation'
summary: 'A KEK rotation that stopped on an error can be put back in the queue from the API, instead of needing a hand-edit in the database and a restart.'
date: 2026-09-25T15:00:00Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/963
---

Rotating a vault's key encryption key re-encrypts every stored key in the background. If that job hits something it cannot get past, an unreachable backend, a key the deployment is not allowed to use, it stops and records why. It does not restart itself on purpose: a rotation nobody has looked at should not come back to life because a queue redelivered a message.

Until now that left no way forward that we could put in a runbook. Fix the cause, then:

```bash
curl -XPOST https://api.ferrvault.com/vaults/prod/rekey/<rotation-id>/retry
```

The rotation goes back to pending and the re-encryption resumes where it stopped rather than starting over. Admin role, like every other change to a vault's custody. You can see the rotation id, its status and the error in the rotation history at `GET /vaults/{slug}/rekey`.

Only a failed rotation can be retried. One that already completed, or one that is still running, is refused with a code that says which. Your secrets stay readable throughout either way, since every stored key records what encrypted it, but do keep the old key until the rotation reads completed.
