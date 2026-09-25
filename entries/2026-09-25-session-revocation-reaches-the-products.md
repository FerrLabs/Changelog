---
title: 'Signing out now reaches the products'
summary: 'Ending a session cuts its access to FerrVault as well, instead of leaving the token it minted working until it expired on its own.'
date: 2026-09-25T10:00:00Z
product: ferrlabs
type: security
prLink: https://github.com/FerrLabs/FerrLabs-Cloud/pull/981
---

Ending a session used to end it here and nowhere else. Each product API checks the token a sign-in mints on its own signature, so it kept working against FerrVault for the rest of its week. Signing out, or revoking a device from your security settings, left that device able to read your vaults.

It does not any more. Whenever a session ends, the products are told about it, and the next request carrying that token is refused and sent back to sign in.

This covers every way a session ends: signing out, revoking one device under Security in your account, a password reset, which ends every other session you had open, a role change or a removal from an organization, a deactivation pushed by your directory over SCIM, and switching on **Require SSO for all members**, which cuts the password sessions already open in that organization.

There is nothing to configure and nothing changes for a session you keep. If you have ever revoked a device and wondered what it could still reach, the answer is now the one you expected.
