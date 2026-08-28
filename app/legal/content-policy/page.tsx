import type { Metadata } from "next";
import LegalPageShell from "../../components/LegalPageShell";
import { getLegalDoc } from "../../config/legal";
import { SUPPORT_EMAIL } from "../../config/site";

const doc = getLegalDoc("content-policy");

export const metadata: Metadata = { title: doc.title, description: doc.summary };

export default function ContentPolicyPage() {
  return (
    <LegalPageShell doc={doc}>
      <h2>1. Every listing is reviewed</h2>
      <p>
        Market V1 is curated. A human reviews each submitted prompt for scope,
        originality and safety before it appears. Review is not a guarantee of
        quality or fitness for your purpose.
      </p>

      <h2>2. What you may publish</h2>
      <p>
        Prompts that you wrote, that work as described, and that a buyer can use
        without breaking the law or the terms of the model provider they run it
        against.
      </p>

      <h2>3. Prohibited content</h2>
      <p>Listings will be rejected or removed if they involve:</p>
      <ul>
        <li>Child sexual abuse material, or any sexual content involving minors.</li>
        <li>
          Instructions for weapons, explosives, or biological, chemical, nuclear
          or radiological harm.
        </li>
        <li>Malware, exploitation, credential theft, or attacking systems.</li>
        <li>
          Prompts whose purpose is to defeat the safety systems of a model
          provider, or to impersonate a real person or organisation.
        </li>
        <li>
          Fraud, scams, phishing, or financial, medical or legal advice presented
          as professional advice.
        </li>
        <li>
          Harassment, hate speech, or incitement to violence against people or
          groups.
        </li>
        <li>
          Content that infringes copyright, trademark or trade secrets, including
          prompts copied from another marketplace.
        </li>
        <li>Personal data about identifiable people, gathered without consent.</li>
      </ul>

      <h2>4. Creator obligations</h2>
      <p>
        Describe honestly what a prompt does and what it does not do. Do not
        claim guaranteed outcomes or earnings. Disclose if a prompt only works
        with a specific model or requires a paid third-party service. Keep your
        listing updated if it stops working.
      </p>

      <h2>5. Enforcement</h2>
      <p>
        We may remove a listing, withhold a payout, or suspend an account for
        breaking this policy. Severe or repeated breaches lead to a permanent
        ban. We will tell you the reason unless the law prevents it.
      </p>

      <h2>6. Reporting and appeals</h2>
      <p>
        Report a listing to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the listing
        link and what is wrong. We aim to acknowledge within 3 working days. If
        your listing was removed and you think we got it wrong, reply to the
        removal notice and a different reviewer will look at it.
      </p>
    </LegalPageShell>
  );
}
