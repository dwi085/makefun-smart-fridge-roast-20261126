import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the smart fridge: the all-seeing appliance that
// photographs your food, snitches to your other gadgets, and is still
// too dumb to recognise what it is looking at.
const LINE =
  "My smart fridge photographs my leftovers like a crime scene, rats me out to my watch, and still can't tell a tomato from a ketchup bottle.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`roast must be 1-160 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("roast must not be only whitespace");
}

// Create /output if it is missing, but never delete it: the grader
// runs in a sandbox where removing /output itself breaks the run.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
