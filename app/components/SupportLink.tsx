import {
  SUPPORT_HREF,
  SUPPORT_IS_EXTERNAL,
  SUPPORT_LABEL,
} from "../config/site";

interface Props {
  className?: string;
  /** Override the link text; defaults to the resolved channel name. */
  children?: React.ReactNode;
}

/**
 * The only way this site links to support.
 *
 * Routing every mention through here means no page can render an address that
 * nobody reads: when NEXT_PUBLIC_SUPPORT_EMAIL is unset this resolves to the
 * public issue tracker instead, which is a destination that actually works.
 */
export default function SupportLink({ className, children }: Props) {
  return (
    <a
      href={SUPPORT_HREF}
      className={className}
      {...(SUPPORT_IS_EXTERNAL
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children ?? SUPPORT_LABEL}
    </a>
  );
}
