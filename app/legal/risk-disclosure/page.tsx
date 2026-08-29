import type { Metadata } from "next";
import LegalPageShell from "../../components/LegalPageShell";
import { getLegalDoc } from "../../config/legal";

const doc = getLegalDoc("risk-disclosure");

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

export default function RiskDisclosurePage() {
  return (
    <LegalPageShell doc={doc}>
      <h2>1. This is a test network</h2>
      <p>
        Market V1 runs on the Stellar test network. Test XLM is not money. It has
        no value, cannot be sold or exchanged, and the network operators reset
        Testnet periodically — when that happens, balances and history are wiped.
        Do not treat a Testnet balance as an asset.
      </p>

      <h2>2. No investment, no returns</h2>
      <p>
        AgentVerse does not offer securities, investment products, yield, or any
        return on money. Listing a prompt is not an investment and we make no
        prediction, promise or guarantee about earnings. Any figure shown in
        marketing material is illustrative and not a forecast.
      </p>

      <h2>3. You hold your own keys</h2>
      <p>
        Wallet authentication means you control your keys. If you lose them,
        nobody — including us — can restore your access. Blockchain transactions
        are irreversible: a transfer sent to the wrong address cannot be recalled.
      </p>

      <h2>4. Everything on-chain is public</h2>
      <p>
        Addresses, amounts and timestamps are permanently visible to anyone. A
        wallet linked to your real identity makes your activity linkable too.
      </p>

      <h2>5. Software and network risk</h2>
      <p>
        This is beta software. It may contain defects, may be unavailable, and
        may lose data. Smart contracts and dependencies can carry bugs or
        vulnerabilities, and no audit has been published for this project.
        Network congestion or an outage can delay or fail a transaction.
      </p>

      <h2>6. Regulatory risk</h2>
      <p>
        Rules for crypto-assets and marketplaces differ by country and change
        often. A change in law may force us to restrict features, block a
        jurisdiction, or stop the service. You are responsible for whether your
        own use is lawful where you live, including any tax you owe.
      </p>

      <h2>7. Before Mainnet</h2>
      <p>
        Moving to Mainnet would introduce real financial risk and is not covered
        by this disclosure. This document must be re-reviewed by a qualified
        professional before any real value is accepted.
      </p>
    </LegalPageShell>
  );
}
