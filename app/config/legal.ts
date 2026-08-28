/**
 * Review state for every legal document on the site.
 *
 * These documents were DRAFTED BY A CONTRIBUTOR, NOT BY A LAWYER. Until a
 * qualified human reviews a document for the jurisdictions the project actually
 * launches in, its status stays "draft-pending-legal-review", the page renders a
 * visible warning banner, and `pnpm check:legal` reports it as unreviewed.
 *
 * To mark a document reviewed, a maintainer sets reviewStatus to "reviewed" and
 * fills in reviewedBy / reviewDate / jurisdictions. That is a deliberate,
 * attributable action — it should never be done to make a check go green.
 */

export type ReviewStatus = "draft-pending-legal-review" | "reviewed";

export interface LegalDoc {
  slug: string;
  title: string;
  /** Short line shown under the title and used in the footer. */
  summary: string;
  lastUpdated: string;
  reviewStatus: ReviewStatus;
  /** Name and firm of the qualified reviewer. Null while unreviewed. */
  reviewedBy: string | null;
  reviewDate: string | null;
  /** Jurisdictions the review actually covers. Empty while unreviewed. */
  jurisdictions: string[];
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "terms",
    title: "Terms of Service",
    summary: "The rules for using the AgentVerse Market V1 private beta.",
    lastUpdated: "2026-08-28",
    reviewStatus: "draft-pending-legal-review",
    reviewedBy: null,
    reviewDate: null,
    jurisdictions: [],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    summary: "What we collect, why, and what we do not collect.",
    lastUpdated: "2026-08-28",
    reviewStatus: "draft-pending-legal-review",
    reviewedBy: null,
    reviewDate: null,
    jurisdictions: [],
  },
  {
    slug: "risk-disclosure",
    title: "Stellar & Network Risk Disclosure",
    summary: "The risks of using a Testnet blockchain application.",
    lastUpdated: "2026-08-28",
    reviewStatus: "draft-pending-legal-review",
    reviewedBy: null,
    reviewDate: null,
    jurisdictions: [],
  },
  {
    slug: "content-policy",
    title: "Content & Creator Policy",
    summary: "What may be published, and what gets a listing removed.",
    lastUpdated: "2026-08-28",
    reviewStatus: "draft-pending-legal-review",
    reviewedBy: null,
    reviewDate: null,
    jurisdictions: [],
  },
  {
    slug: "refunds",
    title: "Refunds, Disputes & Payouts",
    summary: "How purchases, refunds and creator payouts are handled.",
    lastUpdated: "2026-08-28",
    reviewStatus: "draft-pending-legal-review",
    reviewedBy: null,
    reviewDate: null,
    jurisdictions: [],
  },
];

export function getLegalDoc(slug: string): LegalDoc {
  const doc = LEGAL_DOCS.find((d) => d.slug === slug);
  if (!doc) throw new Error(`Unknown legal document: ${slug}`);
  return doc;
}
