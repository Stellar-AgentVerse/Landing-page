import StatusBadge from "./StatusBadge";
import CTAButtons from "./CTAButtons";

export default function HeroSection() {
  return (
    <section className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
      <StatusBadge />

      <h1 className="text-headline-md md:text-display-xl text-primary mb-6 leading-tight font-heading font-bold">
        A curated market for <span className="text-accent italic">AI prompts</span>
      </h1>

      <p className="text-body-lg text-on-surface-variant max-w-2xl mb-10">
        Buy and sell prompts that a human has reviewed before listing. Market V1
        is a private beta on the Stellar test network — no real funds are
        involved.
      </p>

      <CTAButtons />
    </section>
  );
}
