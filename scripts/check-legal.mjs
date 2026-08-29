#!/usr/bin/env node
/**
 * Legal review gate.
 *
 * Reports which legal documents are still contributor drafts rather than
 * reviewed by a qualified human.
 *
 * By default this WARNS and exits 0. Blocking every pull request on a lawyer's
 * sign-off would deadlock contribution, and a red check would say nothing a
 * maintainer can act on today. What matters is that an unreviewed document is
 * impossible to ship silently: the page itself renders a draft banner, and this
 * check prints the outstanding list on every CI run.
 *
 * Run with --strict to exit non-zero while any document is unreviewed. CI does
 * NOT pass that flag today — release tooling should, and it is the switch to
 * flip before inviting external users, per acceptance criterion 5.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

const strict = process.argv.includes("--strict");
const source = readFileSync(join(process.cwd(), "app/config/legal.ts"), "utf8");

const docs = [...source.matchAll(/slug:\s*"([^"]+)"[\s\S]*?reviewStatus:\s*"([^"]+)"/g)].map(
  ([, slug, reviewStatus]) => ({ slug, reviewStatus }),
);

if (docs.length === 0) {
  console.error("check-legal: could not parse app/config/legal.ts");
  process.exit(1);
}

const drafts = docs.filter((d) => d.reviewStatus !== "reviewed");

console.log(`Legal documents: ${docs.length}`);
console.log(`Reviewed       : ${docs.length - drafts.length}`);
console.log(`Pending review : ${drafts.length}`);

if (drafts.length === 0) {
  console.log("\nAll legal documents are marked reviewed.");
  process.exit(0);
}

const message = [
  "",
  "The following documents are contributor drafts and have NOT been reviewed",
  "by a qualified legal professional:",
  ...drafts.map((d) => `  - /legal/${d.slug}`),
  "",
  "Each renders a visible draft banner. Acceptance criterion 5 of issue #1",
  "stays OPEN until a maintainer arranges review and records the reviewer,",
  "date and jurisdictions in app/config/legal.ts.",
].join("\n");

if (strict) {
  console.error(message);
  process.exit(1);
}

console.warn(message);
