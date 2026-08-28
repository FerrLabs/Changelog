---
title: 'Password generator'
summary: 'Generate strong passwords with configurable charsets, a "no look-alikes" mode, an entropy bar and a crack-time estimate: backed by crypto.getRandomValues.'
date: 2026-05-19T15:42:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/32
---

[/tools/password](https://ferrlens.com/tools/password) generates passwords up to 128 characters from any subset of lowercase, uppercase, digits and symbols. Toggle "No look-alikes" to strip `i l 1 L o 0 O` for passwords meant to be typed off a printout.

Randomness comes from `crypto.getRandomValues`: cryptographically secure, browser-native: with rejection sampling on the bytes to keep the modulo unbiased across non-power-of-two alphabet sizes.

Below the password you get the entropy in bits and a rough crack-time estimate calibrated at 100 GH/s (top-end modern GPU). The colour-coded bar gives a quick "is this strong enough" verdict: red below 28 bits, amber 28-50, yellow 50-75, green 75-100, teal 100+.

Privacy detail worth noting: the **share link encodes your settings, not the password**. If you tweak the charset to your taste, you can share the configuration without leaking any generated value.
