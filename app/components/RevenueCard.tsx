const steps = [
  {
    step: "1",
    title: "Submit a prompt",
    detail: "You set the listing price in test XLM and keep authorship.",
  },
  {
    step: "2",
    title: "We review it",
    detail: "A human checks scope, safety and originality before it is listed.",
  },
  {
    step: "3",
    title: "A buyer purchases",
    detail: "The purchase is recorded and the prompt is delivered to their library.",
  },
  {
    step: "4",
    title: "Payout is credited",
    detail: "Earnings accrue in test XLM during the beta. See the payout policy for terms.",
  },
];

/**
 * Replaces the previous "Live Revenue Stream" card, which displayed invented
 * XLM amounts and a fabricated transaction ID. Nothing here asserts an amount
 * anyone has earned.
 */
export default function RevenueCard() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
      <div className="relative glass-card p-8 rounded-2xl border-accent/20">
        <div className="flex justify-between items-center mb-8 gap-4">
          <h3 className="font-label text-label-sm text-accent uppercase tracking-widest">
            How a payout works
          </h3>
          <span className="text-on-surface-variant font-label text-label-sm whitespace-nowrap">
            Testnet
          </span>
        </div>
        <ol className="space-y-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex gap-4 items-start p-4 bg-white/5 rounded-lg border border-white/5"
            >
              <span
                aria-hidden="true"
                className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/20 text-accent font-bold text-sm flex items-center justify-center"
              >
                {item.step}
              </span>
              <div>
                <p className="font-bold text-primary mb-1">{item.title}</p>
                <p className="text-on-surface-variant text-sm">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
