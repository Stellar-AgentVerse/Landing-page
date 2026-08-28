import Link from "next/link";
import type { LegalDoc } from "../config/legal";
import { SUPPORT_EMAIL } from "../config/site";

/**
 * Shared chrome for every legal page: title, review provenance, and — while the
 * document is still a contributor draft — an unmissable banner saying so.
 */
export default function LegalPageShell({
  doc,
  children,
}: {
  doc: LegalDoc;
  children: React.ReactNode;
}) {
  const isDraft = doc.reviewStatus === "draft-pending-legal-review";

  return (
    <main className="relative z-10 px-6 py-20 md:py-28 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-label-sm font-label text-on-surface-variant hover:text-primary transition-colors"
      >
        ← Back to AgentVerse
      </Link>

      <h1 className="font-heading text-headline-lg font-bold text-primary mt-6 mb-3">
        {doc.title}
      </h1>
      <p className="text-body-lg text-on-surface-variant mb-6">{doc.summary}</p>

      {isDraft ? (
        <aside
          role="note"
          className="rounded-xl border border-amber-400/40 bg-amber-400/10 p-6 mb-10"
        >
          <p className="font-bold text-amber-200 mb-2">
            Draft — not reviewed by a lawyer
          </p>
          <p className="text-on-surface-variant text-body-md">
            This document was drafted by a project contributor and has{" "}
            <strong>not</strong> been reviewed by a qualified legal professional
            for any jurisdiction. It is published so the beta is transparent
            about its intended terms. It is not legal advice, and it must be
            reviewed before AgentVerse invites public users or handles anything
            of real value. Questions:{" "}
            <a
              className="text-accent underline underline-offset-4"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </aside>
      ) : (
        <aside
          role="note"
          className="rounded-xl border border-accent/30 bg-accent/10 p-6 mb-10"
        >
          <p className="font-bold text-accent mb-2">Reviewed</p>
          <p className="text-on-surface-variant text-body-md">
            Reviewed by {doc.reviewedBy} on {doc.reviewDate} for:{" "}
            {doc.jurisdictions.join(", ")}.
          </p>
        </aside>
      )}

      <p className="font-label text-label-sm text-on-surface-variant/60 mb-10">
        Last updated {doc.lastUpdated}
      </p>

      <div className="legal-prose space-y-6 text-on-surface-variant">
        {children}
      </div>
    </main>
  );
}
