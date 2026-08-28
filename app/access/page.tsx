import type { Metadata } from "next";
import Link from "next/link";
import { APP_URL, GITHUB_URL, IS_APP_LIVE, SUPPORT_EMAIL } from "../config/site";

export const metadata: Metadata = {
  title: "Request beta access",
  description:
    "Market V1 is an invitation-only beta of the AgentVerse prompt marketplace, running on the Stellar test network.",
};

const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "Market V1 beta access request",
)}&body=${encodeURIComponent(
  [
    "Hi AgentVerse team,",
    "",
    "I would like access to the Market V1 beta.",
    "",
    "I want to join as: (buyer / creator / both)",
    "What I would use it for:",
    "Stellar wallet address (optional):",
    "",
    "Thanks!",
  ].join("\n"),
)}`;

export default function AccessPage() {
  return (
    <main className="relative z-10 px-6 py-20 md:py-28 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-label-sm font-label text-on-surface-variant hover:text-primary transition-colors"
      >
        ← Back to AgentVerse
      </Link>

      <h1 className="font-heading text-headline-lg font-bold text-primary mt-6 mb-4">
        Request beta access
      </h1>

      <p className="text-body-lg text-on-surface-variant mb-10">
        Market V1 is invitation only. It is a curated catalog of AI prompts
        running on the Stellar <strong>test</strong> network — no real funds are
        involved, and nothing here is an investment.
      </p>

      {IS_APP_LIVE ? (
        <div className="glass-card rounded-xl p-8 mb-10">
          <p className="text-on-surface-variant mb-6">
            The app is live. If you already have an invitation you can sign in
            with your Stellar wallet.
          </p>
          <a
            href={APP_URL ?? "/"}
            rel="noopener noreferrer"
            className="inline-flex bg-accent text-background font-bold px-8 py-3 rounded-full active:scale-95 transition-transform"
          >
            Open the app
          </a>
        </div>
      ) : (
        <div className="glass-card rounded-xl p-8 mb-10">
          <p className="font-bold text-primary mb-2">
            The app is not publicly available yet
          </p>
          <p className="text-on-surface-variant">
            We would rather say so than send you to a page that does not work.
            Email us and we will add you to the invitation list for the next
            round.
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href={mailtoHref}
          className="inline-flex items-center justify-center bg-accent text-background font-bold px-8 py-4 rounded-full active:scale-95 transition-transform"
        >
          Email us for an invitation
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-outline text-primary font-bold px-8 py-4 rounded-full hover:bg-white/5 transition-all active:scale-95"
        >
          Follow progress on GitHub
        </a>
      </div>

      <h2 className="font-heading text-headline-md font-bold text-primary mb-4">
        What to expect
      </h2>
      <ul className="space-y-3 text-on-surface-variant list-disc pl-5">
        <li>Prompts only. Agents, datasets and workflows are not in Market V1.</li>
        <li>Stellar Testnet. Balances have no monetary value.</li>
        <li>Wallet sign-in. We never hold your keys.</li>
        <li>
          Beta software: expect rough edges, downtime, and occasional data resets.
        </li>
      </ul>

      <p className="text-on-surface-variant mt-10">
        Questions? <a className="text-accent underline underline-offset-4" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>{" "}
        or read the <Link className="text-accent underline underline-offset-4" href="/legal/risk-disclosure">risk disclosure</Link>.
      </p>
    </main>
  );
}
