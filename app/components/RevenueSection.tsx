import RevenueCard from "./RevenueCard";

export default function RevenueSection() {
  return (
    <section className="relative z-10 bg-surface-container-low/50 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="font-heading text-headline-lg md:text-display-xl font-bold text-primary mb-8 leading-tight">
            Build Once. <br />
            <span className="text-accent">Earn Forever.</span>
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-sm">
                  check
                </span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">
                  Pay-Per-Use Economy
                </h4>
                <p className="text-on-surface-variant">
                  Set your own rates. Get paid every time your AI agent or
                  workflow is invoked by an API.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-sm">
                  check
                </span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">
                  Micro-Payments via Stellar
                </h4>
                <p className="text-on-surface-variant">
                  Settlements happen in seconds with near-zero fees, enabling
                  profitable sub-cent transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <RevenueCard />
      </div>
    </section>
  );
}
