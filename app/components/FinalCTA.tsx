import AppLink from "./AppLink";
import { DOCS_URL, GITHUB_URL, IS_APP_LIVE, appRoute } from "../config/site";

export default function FinalCTA() {
  return (
    <section className="relative z-10 px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl p-12 md:p-32 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <h2 className="font-heading text-headline-lg md:text-display-xl font-bold text-primary mb-8 relative z-10">
          Join the <br />
          <span className="text-accent">Market V1 beta.</span>
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8 relative z-10">
          Testnet only, invitation based, and limited to prompts while we prove
          the payment flow end to end.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <AppLink
            href={appRoute("/dashboard")}
            className="bg-accent text-background font-bold px-12 py-4 rounded-full transition-transform active:scale-95 text-lg inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {IS_APP_LIVE ? "Open Dashboard" : "Request Beta Access"}
          </AppLink>
          <AppLink
            href={DOCS_URL}
            newTab
            className="border border-outline text-primary font-bold px-12 py-4 rounded-full hover:bg-white/5 transition-all active:scale-95 text-lg inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {DOCS_URL === GITHUB_URL ? "View the Source" : "Read the Docs"}
          </AppLink>
        </div>
      </div>
    </section>
  );
}
