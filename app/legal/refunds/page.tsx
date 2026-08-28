import type { Metadata } from "next";
import LegalPageShell from "../../components/LegalPageShell";
import { getLegalDoc } from "../../config/legal";
import { SUPPORT_EMAIL } from "../../config/site";

const doc = getLegalDoc("refunds");

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

export default function RefundsPage() {
  return (
    <LegalPageShell doc={doc}>
      <h2>1. Testnet context</h2>
      <p>
        During Market V1 all purchases are made in test XLM, which has no
        monetary value. A &quot;refund&quot; therefore reverses access to a
        listing; it does not return money, because none changed hands.
      </p>

      <h2>2. Digital goods and the right to cancel</h2>
      <p>
        A prompt is delivered in full the moment a purchase is confirmed, so it
        cannot be returned in the ordinary sense. Where consumer law gives you a
        cancellation right for digital content, that right is set out in the
        Terms and is not removed by this policy.
      </p>

      <h2>3. When we will reverse a purchase</h2>
      <ul>
        <li>The prompt is materially different from its description.</li>
        <li>The delivery failed and we cannot fix it.</li>
        <li>You were charged twice for the same listing.</li>
        <li>The listing was removed for infringing someone else&apos;s rights.</li>
      </ul>
      <p>
        Request it within 14 days of purchase by writing to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the listing
        and what went wrong. We aim to decide within 10 working days.
      </p>

      <h2>4. When we will not</h2>
      <p>
        Changing your mind after using the prompt, a model provider changing
        their behaviour, or the prompt not producing the specific result you
        hoped for are not grounds for reversal.
      </p>

      <h2>5. Creator payouts</h2>
      <p>
        Creators are credited in test XLM when a purchase is confirmed. Because
        this is Testnet, credited balances are a record of activity, not
        withdrawable funds, and there is no withdrawal mechanism during the beta.
        A reversed purchase reverses the corresponding credit.
      </p>
      <p>
        The commission the platform takes, the payout schedule, and the minimum
        payout threshold for Mainnet are <strong>not yet decided</strong>. They
        will be published here, and creators will be notified, before any real
        value is handled.
      </p>

      <h2>6. Disputes</h2>
      <p>
        Contact us first — most problems are resolved directly. If we cannot
        agree, the dispute process in the Terms applies. Chargebacks do not exist
        on Testnet, and an on-chain transaction cannot be reversed by us.
      </p>
    </LegalPageShell>
  );
}
