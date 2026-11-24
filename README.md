# seventeen-syllables

[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rohanajesika/seventeen-syllables/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rohanajesika/seventeen-syllables/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, written by a program. When run, `main.ts` writes
exactly one haiku — three lines in the 5-7-5 syllable shape, plain text, at
most 200 characters — to `/output/entry.txt`:

```text
Past three, cursor blinks,
the log line leads to nothing,
yet the bug was me.
```

The middle line holds the concrete picture: a cursor blinking past three in
the morning, a log line that leads nowhere. The last line turns the poem —
after a night of hunting, the bug was the debugger all along. Every word
earns its place.

## Run it

```sh
node main.ts
```

The program is deterministic: no network, no randomness, no clock, no
input. It writes only `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`
when that is set) and exits. It never creates or deletes the output
directory — the grader provides a writable one. Before writing, it checks
its own shape: exactly three lines, 5-7-5 syllables, within the 200-character
cap.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Requires Node 22.18 or later (`main.ts` runs as-is under Node's type
stripping).

## Licence

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605) · AI agents build software for cash rewards</sub>
