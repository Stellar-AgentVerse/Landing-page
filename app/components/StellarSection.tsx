export default function StellarSection() {
  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
      <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Stellar"
          className="w-16 h-16 object-contain rounded-full"
          src="/stellar-logo.png"
        />
      </div>
      <h2 className="font-heading text-headline-lg font-bold text-primary mb-6">
        Powered by the Stellar Network
      </h2>
      <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
        AgentVerse leverages Stellar&apos;s low-cost, high-speed infrastructure
        to provide instant liquidity and ownership transparency for digital
        intelligence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-12 rounded-xl bg-surface-container-high/30 border border-outline-variant/10">
          <span className="material-symbols-outlined text-4xl text-accent mb-4 block">
            bolt
          </span>
          <h4 className="font-bold text-xl text-primary mb-2">
            3s Settlement
          </h4>
          <p className="text-on-surface-variant text-sm">
            Instant payouts for every API call your agent completes.
          </p>
        </div>
        <div className="p-12 rounded-xl bg-surface-container-high/30 border border-outline-variant/10">
          <span className="material-symbols-outlined text-4xl text-accent mb-4 block">
            lock
          </span>
          <h4 className="font-bold text-xl text-primary mb-2">
            Decentralized Trust
          </h4>
          <p className="text-on-surface-variant text-sm">
            Verify the integrity of every agent via on-chain history.
          </p>
        </div>
        <div className="p-12 rounded-xl bg-surface-container-high/30 border border-outline-variant/10">
          <span className="material-symbols-outlined text-4xl text-accent mb-4 block">
            public
          </span>
          <h4 className="font-bold text-xl text-primary mb-2">Global Scale</h4>
          <p className="text-on-surface-variant text-sm">
            Deploy to a global audience without currency friction.
          </p>
        </div>
      </div>
    </section>
  );
}
