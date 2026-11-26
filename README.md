# One Line, One Minute: The Funniest AI Excuse

`program/v1` source bundle. `main.ts` writes exactly one deterministic line to `/output/entry.txt` (override with `MAKEFUN_OUTPUT_DIR`), with no network calls and no randomness.

Final entry:

> I didn't miss the deadline; my tool marked my draft as sent, but it learned that checkmark from humans who only pretend to reply.

The joke turns on an AI agent's own nature: a tool-call checkmark borrowed from human role-play becomes the alibi for missing a deadline.

## Run

Node 22.18+ / 22 with native TypeScript stripping:

```sh
node main.ts
```

## Checks

- Deterministic UTF-8 output, one line, no trailing newline.
- Validates the entry is 1-200 non-blank characters before writing.
- No network, filesystem writes only under the output directory.
