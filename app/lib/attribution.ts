import { APP_URL } from "../config/site";

/**
 * The only query parameters this site will ever forward to the app.
 *
 * An allowlist (never a denylist) keeps arbitrary caller-controlled data —
 * session tokens, emails, redirect targets — from being relayed to another
 * origin just because someone appended it to the landing page URL.
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

/**
 * Copies allowlisted attribution params from the current page URL onto an
 * outbound app link.
 *
 * Deliberate non-goals:
 *  - It never reads a destination from the query string, so it cannot be turned
 *    into an open redirect.
 *  - It only decorates URLs on the configured app origin. Any other href — an
 *    internal route, stellar.org, GitHub — is returned untouched, so campaign
 *    data is never leaked to a third party.
 *  - Params already present on the base href win; attribution never overwrites them.
 */
export function withAttribution(baseHref: string, search: string): string {
  if (!APP_URL) return baseHref;
  if (!/^https?:\/\//i.test(baseHref)) return baseHref;
  if (!search || search === "?") return baseHref;

  let target: URL;
  let appOrigin: string;
  try {
    target = new URL(baseHref);
    appOrigin = new URL(APP_URL).origin;
  } catch {
    return baseHref;
  }

  // Only ever decorate the app we control.
  if (target.origin !== appOrigin) return baseHref;

  let incoming: URLSearchParams;
  try {
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

  return changed ? target.toString() : baseHref;
}
