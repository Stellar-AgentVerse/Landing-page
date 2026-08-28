import type { Metadata } from "next";
import LegalPageShell from "../../components/LegalPageShell";
import { getLegalDoc } from "../../config/legal";
import { SUPPORT_EMAIL } from "../../config/site";

const doc = getLegalDoc("terms");

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

export default function TermsPage() {
  return (
    <LegalPageShell doc={doc}>
      <h2>1. What AgentVerse Market V1 is</h2>
      <p>
        AgentVerse Market V1 is an invitation-only beta of a curated marketplace
        for AI prompts. It runs against the Stellar <strong>test</strong> network.
        Test XLM has no monetary value, cannot be exchanged for currency, and may
        be reset by the network without notice. Nothing on this service is an
        offer of a financial product, a security, or an investment.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and legally able to enter a contract.
        Access is granted at our discretion and may be withdrawn at any time
        during the beta. You may not use the service where doing so would break
        the law that applies to you.
      </p>

      <h2>3. Your account</h2>
      <p>
        You authenticate by signing a challenge with a Stellar wallet you
        control. We never take custody of your keys and cannot recover them. You
        are responsible for everything done through your wallet.
      </p>

      <h2>4. Buying a prompt</h2>
      <p>
        A confirmed purchase grants you a personal, non-exclusive, worldwide
        licence to use the prompt, including in commercial work. It does not
        transfer ownership or copyright. You may not resell or redistribute the
        prompt text itself as a competing listing.
      </p>

      <h2>5. Publishing a prompt</h2>
      <p>
        You keep ownership of what you publish and grant us the licence needed to
        display, review and deliver it to buyers. You confirm the prompt is your
        own work and does not infringe anyone&apos;s rights. Listings are reviewed
        before publication and may be rejected or removed under the Content &amp;
        Creator Policy.
      </p>

      <h2>6. Beta status and availability</h2>
      <p>
        The service is provided as-is during the beta. We may change, suspend or
        discontinue any part of it, and data may be reset. We do not promise
        uptime, and we do not promise any level of sales or income to creators.
      </p>

      <h2>7. Prohibited use</h2>
      <p>
        Do not use the service to break the law, to infringe rights, to attack
        the platform or other users, to launder value, or to publish anything
        listed as prohibited in the Content &amp; Creator Policy.
      </p>

      <h2>8. Liability</h2>
      <p>
        To the fullest extent the law allows, our liability arising from the beta
        is limited to the amount you paid us, which during the Testnet beta is
        zero. Nothing here limits liability that cannot be limited by law.
      </p>

      <h2>9. Changes and contact</h2>
      <p>
        We will update this page when the terms change and revise the date above.
        Questions go to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalPageShell>
  );
}
