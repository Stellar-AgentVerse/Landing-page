import Image from "next/image";
import AppLink from "./AppLink";
import {
  DOCS_URL,
  GITHUB_URL,
  IS_APP_LIVE,
  STELLAR_URL,
  SUPPORT_HREF,
  SUPPORT_IS_EXTERNAL,
  SUPPORT_LABEL,
  appRoute,
} from "../config/site";

interface FooterLink {
  label: string;
  href: string;
  newTab?: boolean;
}

const productLinks: FooterLink[] = [
  { label: IS_APP_LIVE ? "Browse Prompts" : "Request Beta Access", href: appRoute("/marketplace") },
  { label: IS_APP_LIVE ? "Publish a Prompt" : "Apply as a Creator", href: appRoute("/publish") },
  { label: "Beta Access", href: "/access" },
];

// DOCS_URL falls back to the GitHub org, which is also GITHUB_URL. Listing both
// would render two identical links, so the source entry only appears once the
// two actually differ.
const resourceLinks: FooterLink[] = [
  { label: "Source & docs on GitHub", href: DOCS_URL, newTab: true },
  ...(DOCS_URL === GITHUB_URL
    ? []
    : [{ label: "Source Code", href: GITHUB_URL, newTab: true }]),
  { label: "Stellar Network", href: STELLAR_URL, newTab: true },
];

const legalLinks: FooterLink[] = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
  { label: "Content & Creator Policy", href: "/legal/content-policy" },
  { label: "Refunds & Disputes", href: "/legal/refunds" },
];

// No placeholder address: when no inbox is configured this resolves to the
// public issue tracker rather than a mailto nobody reads.
const supportLinks: FooterLink[] = [
  { label: "Support", href: "/support" },
  {
    label: SUPPORT_IS_EXTERNAL ? "Report an issue" : SUPPORT_LABEL,
    href: SUPPORT_HREF,
    newTab: SUPPORT_IS_EXTERNAL,
  },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-label text-label-sm text-primary uppercase tracking-widest">
        {title}
      </h2>
      {links.map((link) =>
        link.href.startsWith("mailto:") ? (
          <a
            key={link.label}
            href={link.href}
            className="text-on-surface-variant hover:text-primary transition-colors break-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {link.label}
          </a>
        ) : (
          <AppLink
            key={link.label}
            href={link.href}
            newTab={link.newTab}
            className="text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {link.label}
          </AppLink>
        ),
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-12 border-t border-outline-variant/10 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              alt=""
              aria-hidden="true"
              className="h-8 w-auto"
              src="/stellar-logo.png"
              width={32}
              height={32}
            />
            <span className="font-heading text-headline-md font-bold text-primary">
              AgentVerse
            </span>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-xs">
            A curated marketplace for AI prompts, settled on Stellar. Market V1
            is a Testnet private beta.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
          <FooterColumn title="Support" links={supportLinks} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-outline-variant/5 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p className="font-label text-label-sm text-on-surface-variant/70">
          &copy; {new Date().getFullYear()} AgentVerse. Built on Stellar.
        </p>
        <p className="font-label text-label-sm text-on-surface-variant/70">
          Testnet private beta — not an offer of financial products.
        </p>
      </div>
    </footer>
  );
}
