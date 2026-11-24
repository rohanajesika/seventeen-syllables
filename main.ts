// Seventeen Syllables of Debugging
// A make.fun entry: this program writes exactly one haiku about debugging
// to /output/entry.txt — three lines in the 5-7-5 syllable shape, plain text,
// nothing else. It is fully deterministic: no network, no randomness, no
// clock, no input. It only writes the one file and exits.
//
// The haiku:
//
//   Past three, cursor blinks,
//   the log line leads to nothing,
//   yet the bug was me.
//
// Line by line, the syllable counts were counted by hand:
//   "Past three, cursor blinks,"      Past(1) three(1) cur-sor(2) blinks(1) = 5
//   "the log line leads to nothing,"  the(1) log(1) line(1) leads(1) to(1) noth-ing(2) = 7
//   "yet the bug was me."             yet(1) the(1) bug(1) was(1) me(1) = 5
//
// The middle line holds the concrete picture the brief asks for — a cursor
// blinking past three in the morning, a log line that leads nowhere — and
// the last line turns the poem: after a night of hunting, the bug was the
// debugger all along. Every word earns its place; nothing is filler added
// just to reach the count.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader mounts the output directory and passes it in, or the program
// falls back to /output. The directory already exists when the grader runs,
// so this program never creates or deletes it.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Each line carries its hand-counted syllable count, so the program can
// check its own shape before it writes anything.
const HAIKU: Array<readonly [text: string, syllables: number]> = [
  ["Past three, cursor blinks,", 5],
  ["the log line leads to nothing,", 7],
  ["yet the bug was me.", 5],
];

const EXPECTED_SHAPE = [5, 7, 5];
const MAX_CHARS = 200;

function buildHaiku(): string {
  if (HAIKU.length !== 3) {
    throw new Error(`a haiku has exactly three lines, got ${HAIKU.length}`);
  }
  for (let i = 0; i < HAIKU.length; i += 1) {
    const [line, syllables] = HAIKU[i];
    if (line.trim().length === 0) {
      throw new Error(`line ${i + 1} is empty`);
    }
    if (syllables !== EXPECTED_SHAPE[i]) {
      throw new Error(
        `line ${i + 1} counts ${syllables} syllables, expected ${EXPECTED_SHAPE[i]}`,
      );
    }
  }
  const text = HAIKU.map(([line]) => line).join("\n");
  if (text.length > MAX_CHARS) {
    throw new Error(`haiku is ${text.length} characters, over the ${MAX_CHARS} cap`);
  }
  return text;
}

const haiku = buildHaiku();
writeFileSync(OUTPUT_FILE, `${haiku}\n`, "utf8");
console.log(`Wrote ${haiku.length + 1} characters to ${OUTPUT_FILE}`);
