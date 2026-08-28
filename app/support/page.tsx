import type { Metadata } from "next";
import Link from "next/link";
import { GITHUB_URL, SUPPORT_EMAIL } from "../config/site";
import { LEGAL_DOCS } from "../config/legal";

export const metadata: Metadata = {
  title: "Support",
  description: "How to reach the AgentVerse team and what to expect.",
};

const channels = [
  {
    title: "Email",
    detail:
      "The fastest route for access requests, account problems, refunds and privacy requests.",
    action: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
    external: false,
  },
  {
    title: "GitHub issues",
    detail:
      "Bugs, feature requests and anything about the code. Public, so do not post personal data.",
    action: "Open an issue",
    href: `${GITHUB_URL}/Landing-page/issues`,
    external: true,
  },
];

export default function SupportPage() {
  return (
    <main className="relative z-10 px-6 py-20 md:py-28 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-label-sm font-label text-on-surface-variant hover:text-primary transition-colors"
      >
        ← Back to AgentVerse
      </Link>

      <h1 className="font-heading text-headline-lg font-bold text-primary mt-6 mb-4">
        Support
      </h1>
      <p className="text-body-lg text-on-surface-variant mb-10">
        AgentVerse is a small team running an early beta. We answer everything,
        but not instantly — expect a reply within 3 working days.
      </p>

      <div className="grid gap-4 mb-12">
        {channels.map((channel) => (
          <div key={channel.title} className="glass-card rounded-xl p-6">
            <h2 className="font-bold text-primary mb-2">{channel.title}</h2>
            <p className="text-on-surface-variant mb-4">{channel.detail}</p>
            <a
              href={channel.href}
              rel="noopener noreferrer"
              {...(channel.external ? { target: "_blank" } : {})}
              className="text-accent underline underline-offset-4 break-all"
            >
              {channel.action}
            </a>
          </div>
        ))}
      </div>

      <h2 className="font-heading text-headline-md font-bold text-primary mb-4">
        Reporting a problem listing
      </h2>
      <p className="text-on-surface-variant mb-10">
        Email us the listing link and what is wrong with it. Content that
        breaches the{" "}
        <Link className="text-accent underline underline-offset-4" href="/legal/content-policy">
          Content &amp; Creator Policy
        </Link>{" "}
        is removed, and we acknowledge reports within 3 working days.
      </p>

      <h2 className="font-heading text-headline-md font-bold text-primary mb-4">
        Policies
      </h2>
      <ul className="space-y-2">
        {LEGAL_DOCS.map((legalDoc) => (
          <li key={legalDoc.slug}>
            <Link
              className="text-accent underline underline-offset-4"
              href={`/legal/${legalDoc.slug}`}
            >
              {legalDoc.title}
            </Link>
            <span className="text-on-surface-variant"> — {legalDoc.summary}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
