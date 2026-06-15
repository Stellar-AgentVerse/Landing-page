"use client";

import StatusBadge from "./StatusBadge";
import CTAButtons from "./CTAButtons";

interface Props {
  onUnderConstruction: () => void;
}

export default function HeroSection({ onUnderConstruction }: Props) {
  return (
    <section className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
      <StatusBadge />

      {/* Heading */}
      <h1 className="text-headline-md md:text-display-xl text-primary mb-6 leading-tight font-heading font-bold">
        The Economy of <span className="text-accent italic">AI Agents</span>
      </h1>

      <p className="text-body-lg text-on-surface-variant max-w-2xl mb-10">
        Discover, deploy, and monetize AI assets on the first decentralized
        marketplace powered by Stellar.
      </p>

      <CTAButtons
        onExplore={onUnderConstruction}
        onCreate={onUnderConstruction}
      />
    </section>
  );
}
