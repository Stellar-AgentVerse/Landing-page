import RevenueCard from "./RevenueCard";
import Icon from "./Icon";

const points = [
  {
    title: "You set the price",
    detail:
      "List a prompt at the price you choose, in test XLM. You can update or delist it at any time.",
  },
  {
    title: "Settlement runs on Stellar",
    detail:
      "Stellar settles transactions in seconds for a fraction of a cent. During the beta this happens on the test network, so balances have no monetary value.",
  },
];

export default function RevenueSection() {
  return (
    <section className="relative z-10 bg-surface-container-low/50 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="font-heading text-headline-lg md:text-display-xl font-bold text-primary mb-6 leading-tight">
            Publish a prompt. <br />
            <span className="text-accent">Get credited for it.</span>
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-8">
            Creator payouts are live on Testnet only. We are not promising an
            income, and no earnings figure on this site is real.
          </p>
          <div className="space-y-8">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div
                  aria-hidden="true"
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"
                >
                  <Icon name="check" className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{point.title}</h3>
                  <p className="text-on-surface-variant">{point.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <RevenueCard />
      </div>
    </section>
  );
}
