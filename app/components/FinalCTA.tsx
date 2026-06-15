"use client";

interface Props {
  onUnderConstruction: () => void;
}

export default function FinalCTA({ onUnderConstruction }: Props) {
  return (
    <section className="relative z-10 px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl p-12 md:p-32 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <h2 className="font-heading text-headline-lg md:text-display-xl font-bold text-primary mb-8 relative z-10">
          Start Your <br />
          <span className="text-accent">AI Business Today.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button
            onClick={onUnderConstruction}
            className="bg-accent text-background font-bold px-12 py-4 rounded-full transition-transform active:scale-95 text-lg"
          >
            Launch Dashboard
          </button>
          <button
            onClick={onUnderConstruction}
            className="border border-outline text-primary font-bold px-12 py-4 rounded-full hover:bg-white/5 transition-all active:scale-95 text-lg"
          >
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
