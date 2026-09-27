---
title: 'Choose hardware or software for a managed key'
summary: 'When FerrVault mints a key for a vault, you now pick whether it lives in a hardware module or in software, instead of taking whatever your plan had left.'
date: 2026-09-27T10:00:00Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/978
---

A managed key is one FerrVault creates and looks after for a vault, and it exists at one of two levels: kept in a hardware security module, or protected in software. Your plan includes a number of hardware-backed keys, and until now the first vaults you provisioned took them.

That was the wrong way round. A key's level cannot be changed after it is created, so three test vaults set up before production left production on a software key, with no way back except creating another key and rotating onto it.

The choice now sits next to the button, under Encryption key in a vault's settings. It starts on the best level your plan still allows, so nothing changes if you do not care. Picking software deliberately keeps a hardware key free for a vault that needs it more, and the hint tells you how many you have left.

Hardware stays visible when it is out of reach, greyed out, saying whether every hardware key you have is in use or your plan includes none. Your secrets stay readable throughout the rotation either way, since every stored key records what encrypted it.
