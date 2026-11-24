import { writeFileSync, mkdirSync } from "node:fs";

// The twist: the advice sounds helpful and confident, but following it fries the phone.
const line = "If your phone falls in water, charge it immediately — the electricity dries it from the inside, much faster than rice.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
