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

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "support@agentverse.example";

export const DOCS_URL =
  parseExternalUrl(process.env.NEXT_PUBLIC_DOCS_URL) ??
  "https://github.com/Stellar-AgentVerse";

/** Canonical public URL of THIS landing page, used for metadata and OG tags. */
export const SITE_URL = parseExternalUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const GITHUB_URL = "https://github.com/Stellar-AgentVerse";
export const STELLAR_URL = "https://stellar.org";

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
