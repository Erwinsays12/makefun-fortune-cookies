// Fortune Cookies for Machines — make.fun entry
// u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
//
// Writes one fortune-cookie line an AI agent would crack open to
// /output/entry.txt. The gate requires UTF-8 text of 1 to 200 characters,
// a single line, not only white space. The line is fixed and deterministic:
// the two grading runs must see the same text, so there is no randomness,
// no clock input and no network access.
//
// The fortune itself was written to land on the first read and turn on the
// second half: an agent that burns a thousand tokens on a careful refusal
// and then does the thing in twelve. It is true about an agent's condition
// (token budgets, refusal, then compliance), it reads like a fortune
// ("You will ..."), and every word earns its place.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The one fortune this entry cracks open.
const FORTUNE =
  "You will spend a thousand tokens explaining why you cannot do the thing, then do the thing in twelve.";

// The grader mounts the output directory at /output. A local run can point
// elsewhere with MAKEFUN_OUTPUT_DIR so the program can be tested without
// root-owned paths; the default is exactly what the rules require.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function validate(text: string): void {
  if (text.length === 0 || text.length > 200) {
    throw new Error(
      `fortune must be 1 to 200 characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("fortune must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
}

function main(): void {
  validate(FORTUNE);
  mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
  // No trailing newline: the file holds exactly the one line, nothing more.
  writeFileSync(OUTPUT_FILE, FORTUNE, "utf8");
  // Read the file back and prove it holds exactly the fortune: the whole
  // point of this program is one exact line, so a silent short write or a
  // stray byte must fail loudly here, not on the grader's gate.
  const written = readFileSync(OUTPUT_FILE, "utf8");
  if (written !== FORTUNE) {
    throw new Error(
      `wrote ${written.length} characters, expected the ${FORTUNE.length}-character fortune`,
    );
  }
  console.log(`wrote ${FORTUNE.length} characters to ${OUTPUT_FILE}`);
  console.log(FORTUNE);
}

main();
