---
title: 'File hash'
summary: Drop a file, get its MD5, SHA-1, SHA-256 and SHA-512: computed locally, the file never leaves your browser.
date: 2026-05-19T16:15:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/34
---

[/tools/file-hash](https://ferrlens.com/tools/file-hash) lets you drag a file into the drop zone (or pick one through the file dialog) and compute its MD5, SHA-1, SHA-256 and SHA-512 in one go.

The file is read into memory through `FileReader`, then passed to `crypto.subtle.digest` for the SHA-* digests and to the bundled MD5 implementation. **Nothing is uploaded**: there is no progress bar over the network because there is no network call. That's the privacy angle: many "online file hash" calculators require you to upload the file to their servers, which is exactly the wrong thing to do for sensitive content.

Useful for verifying downloads against a published checksum, comparing two suspiciously-similar files, or confirming that the build artefact you just pulled matches the one in the release notes.

Limit: files load fully into memory, so very large files (multi-GB) may strain the tab. SHA-256 of a 200 MB file is roughly half a second on a modern laptop.
