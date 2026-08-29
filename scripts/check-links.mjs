#!/usr/bin/env node
/**
 * Internal link checker.
 *
 * Asserts that every internal href written anywhere under app/ resolves to a
 * real App Router route or a real file in public/. Runs offline with no
 * dependencies, so it is safe in CI and cannot be broken by a flaky network.
 *
 * External links (http/https), mailto:, tel: and bare #fragments are reported
 * but never fail the build — a third party going down is not our regression.
 *
 * Scope, stated plainly: this reads string LITERALS. An href built from a config
 * constant (href={DOCS_URL}) or a helper call (href={appRoute("/x")}) is not
 * counted, so the external tally undercounts. Internal routes are still fully
 * covered because every internal destination in this repo is a literal, either
 * in JSX or in app/config/*.
 */

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const APP_DIR = join(ROOT, "app");
const PUBLIC_DIR = join(ROOT, "public");

function walk(dir, filter) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full, filter));
    else if (filter(entry)) out.push(full);
  }
  return out;
}

/** Every route the App Router will serve, derived from page.tsx locations. */
function collectRoutes() {
  const routes = new Set(["/"]);
  for (const file of walk(APP_DIR, (f) => f === "page.tsx" || f === "page.jsx")) {
    const segments = relative(APP_DIR, file)
      .split(sep)
      .slice(0, -1)
      // Route groups (marketing) do not appear in the URL.
      .filter((s) => !(s.startsWith("(") && s.endsWith(")")));
    routes.add("/" + segments.join("/"));
  }
  return routes;
}

// Matches JSX attributes (href="/x") and object properties (href: "/x"),
// including template literals used for dynamic routes.
const HREF_RE =
  /href\s*[=:]\s*(?:"([^"]*)"|'([^']*)'|\{`([^`]*)`\}|`([^`]*)`|\{"([^"]*)"\})/g;
/** Route-like string literals, e.g. those held in config modules. */
const ROUTE_LITERAL_RE = /["'`](\/[a-z0-9][a-z0-9\-/]*)["'`]/g;

function classify(href) {
  if (!href) return "empty";
  if (/^https?:\/\//i.test(href)) return "external";
  if (/^(mailto:|tel:)/i.test(href)) return "contact";
  if (href.startsWith("#")) return "fragment";
  if (href.startsWith("/")) return "internal";
  return "relative";
}

const routes = collectRoutes();
const sourceFiles = walk(APP_DIR, (f) => /\.(tsx|ts)$/.test(f));

const problems = [];
const seenInternal = new Set();
let externalCount = 0;

function checkInternal(href, file) {
  // A template literal such as `/legal/${slug}` cannot be resolved statically,
  // so verify its literal prefix matches at least one real route instead.
  if (href.includes("${")) {
    const prefix = href.slice(0, href.indexOf("${"));
    const matching = [...routes].filter((r) => r.startsWith(prefix));
    if (matching.length === 0) {
      problems.push(
        `${relative(ROOT, file)}: dynamic href "${href}" matches no route under "${prefix}"`,
      );
      return;
    }
    for (const route of matching) seenInternal.add(route);
    return;
  }

  const clean = href.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
  if (routes.has(clean)) {
    seenInternal.add(clean);
    return;
  }
  if (existsSync(join(PUBLIC_DIR, clean))) return;
  problems.push(
    `${relative(ROOT, file)}: "${href}" does not resolve to a route or a file in public/`,
  );
}

for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");

  for (const match of source.matchAll(HREF_RE)) {
    const href = match[1] ?? match[2] ?? match[3] ?? match[4] ?? match[5];
    const kind = classify(href);
    if (kind === "external") externalCount++;
    else if (kind === "internal") checkInternal(href, file);
    else if (kind === "empty" || href === "#") {
      problems.push(
        `${relative(ROOT, file)}: placeholder href="${href}" — every link must have a real destination`,
      );
    }
  }

  // Route strings that live in config modules rather than inline in JSX.
  if (file.includes(`${sep}config${sep}`) || file.includes(`${sep}lib${sep}`)) {
    for (const match of source.matchAll(ROUTE_LITERAL_RE)) {
      checkInternal(match[1], file);
    }
  }
}

const unreferenced = [...routes].filter((r) => r !== "/" && !seenInternal.has(r));

console.log(`Routes found        : ${routes.size}`);
console.log(`Source files scanned: ${sourceFiles.length}`);
console.log(`External literals   : ${externalCount} (not checked; hrefs held in`);
console.log("                      config variables are not counted here)");
if (unreferenced.length) {
  console.log(`Not linked anywhere : ${unreferenced.join(", ")}`);
}

if (problems.length) {
  console.error(`\n${problems.length} broken internal link(s):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log("\nAll internal links resolve.");
