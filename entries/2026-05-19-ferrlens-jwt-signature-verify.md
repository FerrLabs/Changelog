---
title: 'JWT signature verify'
summary: Verify a JWT against a public key (PEM or JWK): HS, RS, PS and ES families, all algorithms: through the native Web Crypto API.
date: 2026-05-19T16:12:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/34
---

[/tools/jwt-verify](https://ferrlens.com/tools/jwt-verify) takes a JWT and a key, tells you whether the signature is valid or not. Distinct from the existing [/tools/jwt](https://ferrlens.com/tools/jwt) decoder, which only splits and base64-decodes. This one actually runs the crypto.

Supported algorithms cover the full JOSE registry that browsers can do natively: HS256 / HS384 / HS512 (shared secret), RS256 / RS384 / RS512 (RSA-PKCS1-v1_5), PS256 / PS384 / PS512 (RSA-PSS) and ES256 / ES384 / ES512 (ECDSA on P-256 / P-384 / P-521).

Public keys are accepted in two formats: PEM (`-----BEGIN PUBLIC KEY-----` SPKI) and JWK (the JSON form). The verifier auto-detects by looking for a `{` to pick the import format, then routes through `crypto.subtle.verify` with the right algorithm parameters (saltLength for PSS, namedCurve for ECDSA, etc.).

The verdict is unambiguous: `SIGNATURE VALID` in teal or `SIGNATURE INVALID` in red. On success it also shows the decoded header and payload so you can confirm the claims at the same time.

Useful for debugging JWT-based auth (Auth0, Clerk, Supabase, your own issuer): paste the JWKS public key once, then check tokens against it.
