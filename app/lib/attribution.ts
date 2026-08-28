import { ACCESS_ROUTE, APP_URL } from "../config/site";

/**
 * The only query parameters this site will ever forward.
 *
 * An allowlist (never a denylist) keeps arbitrary caller-controlled data —
 * session tokens, emails, redirect targets — from being relayed just because
 * someone appended it to the landing page URL.
 */
export const ALLOWED_ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "ref",
] as const;

/** Defensive cap: attribution tags are short. Anything longer is not a tag. */
const MAX_VALUE_LENGTH = 128;

/** Control characters (CR/LF included) that enable header and URL injection. */
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/;

function isSafeValue(value: string): boolean {
  if (!value || value.length > MAX_VALUE_LENGTH) return false;
  return !CONTROL_CHARS.test(value);
}

/** Only used to parse relative hrefs; never emitted. */
const RELATIVE_BASE = "https://relative.invalid";

/**
 * Decides whether a destination is one of ours and therefore allowed to
 * receive campaign data.
 *
 * Two cases qualify, and nothing else:
 *  - the configured app origin, and
 *  - the in-repo /access route, which is where CTAs land while the app is not
 *    deployed. Without this the campaign that paid for the click would be lost
 *    at exactly the moment it converts, which is the state the site is in today.
 *
 * Every other href — /legal/*, github.com, stellar.org, mailto: — is returned
 * untouched, so campaign data never reaches a third party and internal policy
 * pages do not accumulate tracking noise.
 */
function isOurDestination(baseHref: string): boolean {
  if (baseHref === ACCESS_ROUTE || baseHref.startsWith(`${ACCESS_ROUTE}?`)) {
    return true;
  }
  if (!APP_URL || !/^https?:\/\//i.test(baseHref)) return false;
  try {
    return new URL(baseHref).origin === new URL(APP_URL).origin;
  } catch {
    return false;
  }
}

/**
 * Copies allowlisted attribution params from the current page URL onto an
 * outbound link.
 *
 * Deliberate non-goals:
 *  - It never reads a destination from the query string, so it cannot be turned
 *    into an open redirect.
 *  - Params already present on the base href win; attribution never overwrites.
 */
export function withAttribution(baseHref: string, search: string): string {
  if (!search || search === "?") return baseHref;
  if (!isOurDestination(baseHref)) return baseHref;

  const relative = !/^https?:\/\//i.test(baseHref);

  let target: URL;
  let incoming: URLSearchParams;
  try {
    target = new URL(baseHref, RELATIVE_BASE);
    incoming = new URLSearchParams(search);
  } catch {
    return baseHref;
  }

  let changed = false;
  for (const key of ALLOWED_ATTRIBUTION_PARAMS) {
    const value = incoming.get(key);
    if (value === null || !isSafeValue(value)) continue;
    if (target.searchParams.has(key)) continue;
    target.searchParams.set(key, value);
    changed = true;
  }

  if (!changed) return baseHref;
  return relative ? `${target.pathname}${target.search}` : target.toString();
}
