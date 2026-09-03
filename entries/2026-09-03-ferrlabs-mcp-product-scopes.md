---
title: 'MCP: the product servers move to their own npm scopes'
summary: '@ferrlabs/mcp-track and its three siblings become @ferrtrack/mcp, @ferrvault/mcp, @ferrgrowth/mcp and @ferrfleet/mcp. The unified server and the shared core keep their names. Ships as v8.'
date: 2026-09-03T12:00:00Z
product: ferrlabs
type: breaking
prLink: https://github.com/FerrLabs/MCP/pull/319
draft: true
---

The four product MCP servers now live under their product's npm scope. `@ferrlabs/mcp-vault` becomes `@ferrvault/mcp`, `@ferrlabs/mcp-track` becomes `@ferrtrack/mcp`, `@ferrlabs/mcp-growth` becomes `@ferrgrowth/mcp`, and `@ferrlabs/mcp-fleet` becomes `@ferrfleet/mcp`. The unified `@ferrlabs/mcp` and the shared `@ferrlabs/mcp-core` do not move: they are org-level, not product-level, and their names were already right.

Everything else about these servers is unchanged. Same tools, same arguments, same environment variables, same product APIs behind them. This is a naming change and nothing more.

The reason is that every other product-specific thing at FerrLabs already carries its product's name. The repository is `FerrTrack-Cloud`, the site is `ferrtrack.com`, the API is `api.ferrtrack.com`, and the MCP server itself has always answered at `mcp.ferrtrack.com`. Only the npm package and the server name it reported were still org-first, which made the FerrTrack MCP the one FerrTrack artefact you could not find by searching for FerrTrack.

**What you need to do:** change the package name in your MCP client config.

```json
{
  "mcpServers": {
    "ferrtrack": { "command": "npx", "args": ["-y", "@ferrtrack/mcp"] },
    "ferrvault": { "command": "npx", "args": ["-y", "@ferrvault/mcp"] }
  }
}
```

If you connect over the hosted HTTP transport at `mcp.ferrtrack.com` rather than through npx, nothing changes at all. Those URLs are untouched.

**The old names will not follow you.** npm has no mechanism to rename or redirect a package, so `@ferrlabs/mcp-track` and its siblings stay published at 7.0.1 permanently and receive nothing further, security fixes included. They now carry a deprecation notice pointing at the replacement, which is the only warning npm can give you. Installing them keeps working and keeps giving you the frozen 7.0.1 code, so an unnoticed pin is the failure mode worth checking for.

The binaries were renamed to match, so `ferrlabs-mcp-track` is now `ferrtrack-mcp`. That only matters if you invoke them directly instead of through npx. Container images moved the same way, from `ghcr.io/ferrlabs/mcp-track` to `ghcr.io/ferrlabs/ferrtrack-mcp`; the old image tags stay published but stop receiving new versions, so a deployment pinned to `:latest` on an old path will quietly stop updating rather than fail.

The version bump to v8 exists purely to mark the rename. There is no behaviour change to migrate, and no configuration to rewrite beyond the package name itself.
