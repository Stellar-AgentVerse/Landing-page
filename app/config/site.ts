/**
 * Single source of truth for every outbound destination on the landing page.
 *
 * Why env vars: the production marketplace app is not publicly deployed yet, so
 * no app URL may be hardcoded here. Maintainers point the landing page at the
 * real app by setting NEXT_PUBLIC_APP_URL once; every CTA follows automatically.
 *
 * NEXT_PUBLIC_* values are inlined at BUILD time, so changing them requires a
 * redeploy, not just an env update. This is documented in README.md.
 */

/**
 * Accepts a URL only if it is absolute and uses a transport we trust.
 * A misconfigured or attacker-influenced env var must never turn a primary CTA
 * into a phishing hop, so anything unparseable or non-https is rejected outright
 * (http is allowed for localhost only, so contributors can test against a local app).
 */
function parseExternalUrl(value: string | undefined): string | null {
  const raw = value?.trim();
  if (!raw) return null;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  const isLocalhost =
    url.hostname === "localhost" || url.hostname === "127.0.0.1";
  if (url.protocol !== "https:" && !(url.protocol === "http:" && isLocalhost)) {
    return null;
  }

  // Normalise away a trailing slash so path joining stays predictable.
  return url.toString().replace(/\/$/, "");
}

/** The deployed marketplace app, or null when it has not been configured yet. */
export const APP_URL = parseExternalUrl(process.env.NEXT_PUBLIC_APP_URL);

/** True only when a real, usable app URL is configured. */
export const IS_APP_LIVE = APP_URL !== null;

/** Where people ask for private-beta access. Always in-repo, so it always works. */
export const ACCESS_ROUTE = "/access";

/**
 * Accepts a support address only if it looks like a real mailbox. A malformed
 * value degrades exactly like a malformed NEXT_PUBLIC_APP_URL rather than
 * rendering a broken mailto.
 */
function parseEmail(value: string | undefined): string | null {
  const raw = value?.trim();
  if (!raw) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) return null;
  return raw;
}

/** A monitored support inbox, or null when none has been configured. */
export const SUPPORT_EMAIL = parseEmail(process.env.NEXT_PUBLIC_SUPPORT_EMAIL);

export const DOCS_URL =
  parseExternalUrl(process.env.NEXT_PUBLIC_DOCS_URL) ??
  "https://github.com/Stellar-AgentVerse";

/** Canonical public URL of THIS landing page, used for metadata and OG tags. */
export const SITE_URL = parseExternalUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const GITHUB_URL = "https://github.com/Stellar-AgentVerse";
export const STELLAR_URL = "https://stellar.org";

/** Public issue tracker — the support channel that always works. */
export const ISSUES_URL = `${GITHUB_URL}/Landing-page/issues`;

/**
 * The support channel, resolved.
 *
 * There is deliberately no placeholder address. With no app deployed, every
 * primary CTA lands on /access and support is the next step, so an unmonitored
 * inbox would be the same dead end as the href="#" links this work removed.
 * When no inbox is configured we send people to the issue tracker, which is
 * real and monitored.
 */
export const SUPPORT_HREF = SUPPORT_EMAIL
  ? `mailto:${SUPPORT_EMAIL}`
  : ISSUES_URL;

/** What to call the support channel in prose and link text. */
export const SUPPORT_LABEL = SUPPORT_EMAIL ?? "a GitHub issue";

/** True when the support channel leaves this site (i.e. the issue tracker). */
export const SUPPORT_IS_EXTERNAL = SUPPORT_EMAIL === null;

/**
 * Builds a destination inside the app when it is live, and falls back to the
 * in-repo private-beta access route when it is not.
 *
 * This is what keeps the "no production CTA opens an under-construction modal"
 * guarantee true by construction: there is no third state.
 */
export function appRoute(path = ""): string {
  if (!APP_URL) return ACCESS_ROUTE;
  return path ? `${APP_URL}${path.startsWith("/") ? path : `/${path}`}` : APP_URL;
}

/** True when a resolved href leaves this site. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
