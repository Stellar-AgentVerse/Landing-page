"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { isExternal } from "../config/site";
import { withAttribution } from "../lib/attribution";

/** The querystring is external state, so it is read through the store API. */
function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

const getClientSearch = () => window.location.search;

/**
 * Empty on the server. React renders this snapshot during hydration too, so the
 * markup matches exactly and attribution is applied only afterwards, on the
 * client. That keeps every page statically prerenderable.
 */
const getServerSearch = () => "";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Open in a new tab. Use for reference material, not for primary app CTAs. */
  newTab?: boolean;
  "aria-label"?: string;
}

/**
 * The single link primitive used by every CTA on the site.
 *
 * What it guarantees:
 *  1. Real anchors — CTAs are middle-clickable, keyboard-navigable and
 *     crawlable, which the previous <button onClick> implementation was not.
 *  2. Campaign attribution is attached on the client without forcing dynamic
 *     rendering (useSearchParams would) and without a hydration mismatch.
 *  3. Every outbound link carries rel="noopener noreferrer", so a destination
 *     can never reach back into this tab.
 */
export default function AppLink({
  href,
  children,
  className,
  newTab = false,
  ...rest
}: Props) {
  const search = useSyncExternalStore(
    subscribe,
    getClientSearch,
    getServerSearch,
  );

  // withAttribution decides for itself which destinations may receive campaign
  // data; it returns internal policy links and third-party links untouched.
  const resolved = withAttribution(href, search);

  if (!isExternal(href)) {
    return (
      <Link href={resolved} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={resolved}
      className={className}
      rel="noopener noreferrer"
      {...(newTab ? { target: "_blank" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
