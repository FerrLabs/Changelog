---
title: 'Single sign-on: your organization, your identity provider'
summary: 'Verify an email domain, point us at your OIDC provider, and your members sign in there instead of with a password. Accounts are matched on the provider subject, never on an email alone, and an organization can require the provider for everyone.'
date: 2026-09-24T10:00:00Z
product: ferrlabs
type: new
prLink: https://github.com/FerrLabs/FerrLabs-Cloud/pull/968
---

Your organization can now bring its own identity provider. Anything that speaks OpenID Connect works: Okta, Entra ID, Google Workspace, JumpCloud, Keycloak.

Setting it up is two steps, both under Security in your organization settings. First claim your email domain and publish the TXT record we give you, which is what proves the domain is yours. Then enter your provider's issuer URL with the client id and secret it issued you. From that point, someone typing a work email on the login page is offered your provider instead of a password.

```
_ferrlabs-challenge.acme.com   TXT   ferrlabs-domain-verification=<your token>
```

A few choices worth knowing about, because they decide what happens to your people rather than just how a screen looks.

An account is matched on the identity your provider asserts, the issuer and the subject, and never on an email address alone. An existing account is linked to a provider identity only when the provider says the email is verified **and** that email is on a domain your organization has verified. Anything short of that is refused instead of linked, because linking on an unproven email is how accounts get taken over. Someone your provider has never seen before is created on the spot, with the role your attribute mapping asserts.

Once it works, you can require it: **Require SSO for all members** means members reach your organization only through your provider. Turning it on signs out everyone who is currently in the organization with a password. It guards access to your organization, not your people's accounts, so somebody who also belongs to another organization keeps signing in there as before. Owners keep a way in if your provider goes down, every use of that door is in your audit log, and the other owners are emailed when it happens.

A verified domain is re-checked in the background. If the TXT record disappears, we email your admins with a day to put it back before the domain stops routing sign-ins, and the change is recorded in your audit log like everything else here.
