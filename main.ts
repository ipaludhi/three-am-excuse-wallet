import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At 3 AM my secure element plays sober friend: I am not letting you drunk-text the blockchain and wake up married to a memecoin.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-200
// characters, not only whitespace. Fail loudly instead of writing junk.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
