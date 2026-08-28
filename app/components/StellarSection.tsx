import Image from "next/image";
import Icon, { type IconName } from "./Icon";

const facts = [
  {
    icon: "zap" as IconName,
    title: "~5s ledger close",
    detail:
      "Stellar closes a ledger roughly every five seconds, so a confirmed purchase does not leave the buyer waiting.",
  },
  {
    icon: "receipt" as IconName,
    title: "Auditable records",
    detail:
      "Testnet transactions are publicly inspectable, so a purchase can be checked independently of us.",
  },
  {
    icon: "card" as IconName,
    title: "Low fees",
    detail:
      "Base fees are a tiny fraction of a cent, which is what makes small prompt purchases workable at all.",
  },
];

export default function StellarSection() {
  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
      <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-10">
        <Image
          alt="Stellar"
          className="w-16 h-16 object-contain rounded-full"
          src="/stellar-logo.png"
          width={64}
          height={64}
        />
      </div>
      <h2 className="font-heading text-headline-lg font-bold text-primary mb-6">
        Built on the Stellar network
      </h2>
      <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
        Market V1 runs against the Stellar <strong>test</strong> network. Testnet
        balances are not money, cannot be withdrawn, and may be reset by the
        network at any time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facts.map((fact) => (
          <div
            key={fact.title}
            className="p-12 rounded-xl bg-surface-container-high/30 border border-outline-variant/10"
          >
            <Icon name={fact.icon} className="w-9 h-9 text-accent mb-4 mx-auto" />
            <h3 className="font-bold text-xl text-primary mb-2">{fact.title}</h3>
            <p className="text-on-surface-variant text-sm">{fact.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
