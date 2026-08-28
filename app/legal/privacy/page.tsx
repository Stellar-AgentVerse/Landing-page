import type { Metadata } from "next";
import LegalPageShell from "../../components/LegalPageShell";
import { getLegalDoc } from "../../config/legal";
import { SUPPORT_EMAIL } from "../../config/site";

const doc = getLegalDoc("privacy");

// A draft that has not been through legal review should not be indexed as if
// it were binding policy.
export const metadata: Metadata = {
  title: doc.title,
  description: doc.summary,
  robots:
    doc.reviewStatus === "reviewed"
      ? { index: true, follow: true }
      : { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPageShell doc={doc}>
      <h2>1. This landing page</h2>
      <p>
        This marketing site sets no cookies, runs no advertising trackers, and
        does not fingerprint you. Fonts are self-hosted, so loading the page does
        not tell Google or any other third party that you visited.
      </p>

      <h2>2. Campaign parameters</h2>
      <p>
        If you arrive from a campaign link, the URL may carry
        <code> utm_source</code>, <code>utm_medium</code>,{" "}
        <code>utm_campaign</code>, <code>utm_term</code>,{" "}
        <code>utm_content</code> or <code>ref</code>. When you click through to
        the app, only those named parameters are passed along, so we can tell
        which campaign worked. Nothing else from the URL is forwarded, and these
        values are not combined with your identity on this page.
      </p>

      <h2>3. The marketplace app</h2>
      <p>
        If you request access or use the app, we process the wallet address you
        authenticate with, the email you give us, and a record of your listings
        and purchases. We use this to operate the marketplace, review listings,
        and contact you about the beta.
      </p>

      <h2>4. Public blockchain data</h2>
      <p>
        Transactions on Stellar are public and permanent by design. A wallet
        address and its transaction history can be read by anyone and{" "}
        <strong>cannot be deleted</strong>, by us or by you. Consider that before
        connecting a wallet that is linked to your identity.
      </p>

      <h2>5. Analytics</h2>
      <p>
        No analytics or error-reporting tool is deployed on this site today. If
        we add one it will be a cookieless, IP-anonymising tool, this page will
        say which one before it goes live, and consent will be requested where
        the law requires it.
      </p>

      <h2>6. Retention and your rights</h2>
      <p>
        Beta data is kept only while the beta runs and is deleted when it ends
        unless we must keep it. Depending on where you live you may have the
        right to access, correct, export or delete your data, and to complain to
        a regulator. Write to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will
        respond within 30 days. On-chain data is the exception described above.
      </p>

      <h2>7. Contact</h2>
      <p>
        Privacy questions: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        A named data controller and postal address must be added here before
        public launch.
      </p>
    </LegalPageShell>
  );
}
