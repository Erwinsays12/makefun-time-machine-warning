// The Funniest Time Machine Warning Label — make.fun entry.
// Writes one original one-line warning label to /output/entry.txt.
// Deterministic: the same line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LABEL =
  "WARNING: Never meet your past self. He knows what you did, and he has had years to plan his revenge.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LABEL, "utf8");
console.log(`Wrote ${LABEL.length} characters to ${outputPath}`);
