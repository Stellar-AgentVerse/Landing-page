/**
 * The handful of icons this site uses, inlined as SVG.
 *
 * Replaces the Material Symbols icon font, which was pulled from
 * fonts.googleapis.com on every page load. Dropping it removes a third-party
 * request from the visitor's browser (so the privacy policy's "no third-party
 * requests" claim is actually true), removes a render-blocking stylesheet, and
 * clears the @next/next/no-page-custom-font lint warning that stood in the way
 * of running CI with --max-warnings=0.
 */

export type IconName =
  | "arrow-right"
  | "check"
  | "chevron-down"
  | "terminal"
  | "wallet"
  | "beaker"
  | "package"
  | "receipt"
  | "zap"
  | "card";

const PATHS: Record<IconName, React.ReactNode> = {
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </>
  ),
  check: <path d="M20 6L9 17l-5-5" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  terminal: (
    <>
      <path d="M4 17l6-6-6-6" />
      <path d="M12 19h8" />
    </>
  ),
  wallet: (
    <>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M17 15h2" />
    </>
  ),
  beaker: (
    <>
      <path d="M9 3v6l-5.2 9A2 2 0 005.5 21h13a2 2 0 001.7-3L15 9V3" />
      <path d="M8 3h8" />
      <path d="M7 15h10" />
    </>
  ),
  package: (
    <>
      <path d="M21 8.5L12 3.5 3 8.5l9 5 9-5z" />
      <path d="M3 8.5v7l9 5 9-5v-7" />
      <path d="M12 13.5v7" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2z" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
    </>
  ),
  zap: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </>
  ),
};

interface Props {
  name: IconName;
  className?: string;
  /** Set a label only when the icon carries meaning on its own. */
  title?: string;
}

export default function Icon({ name, className, title }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {PATHS[name]}
    </svg>
  );
}
