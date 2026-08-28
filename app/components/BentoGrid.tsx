import FeatureCard from "./FeatureCard";
import Icon from "./Icon";

/**
 * Market V1 scope only. Agents, datasets, models, tools and oracles exist in the
 * data model but are not purchasable yet, so they are deliberately not sold here.
 */
export default function BentoGrid() {
  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Feature — Curated catalog */}
        <div className="md:col-span-8 glass-card rounded-xl p-12 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
              <Icon name="terminal" className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-headline-md font-semibold text-primary mb-4">
              A curated prompt catalog
            </h3>
            <p className="text-on-surface-variant max-w-md">
              Every prompt is submitted by a creator and reviewed before it is
              listed. The catalog stays small on purpose — Market V1 is about
              quality and a payment flow we can prove, not volume.
            </p>
          </div>
        </div>

        <FeatureCard
          className="md:col-span-4"
          icon="wallet"
          title="Sign in with Stellar"
          description="Authenticate by signing a challenge with your Stellar wallet. No password to store, and no custody of your keys."
        />

        <FeatureCard
          className="md:col-span-4"
          icon="beaker"
          title="Testnet checkout"
          description="Purchases are settled in test XLM on the Stellar test network. No real funds move, and nothing here is an investment."
        />

        {/* Large Feature — Delivery */}
        <div className="md:col-span-8 glass-card rounded-xl p-12 flex flex-col md:flex-row gap-6 group items-center">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
              <Icon name="package" className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-headline-md font-semibold text-primary mb-4">
              Buy once, keep access
            </h3>
            <p className="text-on-surface-variant">
              A confirmed purchase unlocks the full prompt in your library. What
              a creator earns and when they are paid is described in the{" "}
              <a
                href="/legal/refunds"
                className="text-accent underline underline-offset-4 hover:opacity-80"
              >
                refund and payout policy
              </a>
              .
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-video glass-card rounded-lg flex items-center justify-center relative overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 bg-accent/5" />
              <Icon name="receipt" className="w-16 h-16 text-accent opacity-50" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-body-md text-on-surface-variant/70 mt-8 max-w-3xl">
        Agents, datasets, models and workflows are not part of Market V1 and are
        not available to buy or sell. We will announce them when they ship.
      </p>
    </section>
  );
}
