---
title: 'Chain one agent into the next'
summary: "An agent can name the agent that runs after it. The second run starts with the first one's result as its context, so work that one prompt handles badly can be split across two."
date: 2026-09-24T18:00:00Z
product: ferrfleet
type: new
prLink: https://github.com/FerrLabs/FerrFleet-Cloud/pull/819
---

Some work does not fit one prompt. An agent that sorts a mailbox and then writes the replies is being asked to hold two jobs in one head, and it shows: the sorting gets sloppy once the writing starts. Splitting it into two agents used to mean wiring the second one yourself, from a schedule that guessed when the first had finished.

An agent can now name the agent that runs after it. On the agent page, **Edit**, then **Next agent**. When a run of the first agent completes, the second one starts, and the first run's result is handed to it as `context`.

The result is whatever the agent reports before it ends, as a JSON object of at most 64 KB:

```bash
ferrfleet-runner result '{"to_remind": ["a@b.c"], "sent": 3}'
```

The chained run also carries where it came from, `chained_from` and `chained_from_agent`, and keeps the repository and pull request of the run before it, so a chain started from a pull request stays on that pull request.

Only a run that completes chains. One that fails, is cancelled or times out starts nothing, because the second agent's whole input is the first one's output and there is none. A chain stops at a depth of five, which is what ends a cycle rather than letting two agents point at each other forever. Picking an agent that is disabled, or one set to run on your own infrastructure, is flagged in the form: neither can be started by us, so the chain would stop there.

This is a single link per agent, not a graph. To fan out, or to start something only when a condition holds, use event rules.
