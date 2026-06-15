"use client";

interface Props {
  onLaunchApp: () => void;
}

export default function Navbar({ onLaunchApp }: Props) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="AgentVerse Logo"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeCp43Z0Y8feFts84-zMuB_BPxLzJ4Hvh9MC3FsuIrSl6hgDxnF2dHA5K-4NuLwHwDFWb5RDXozjJWrZ7zcznpYMWSHpITSXhnTzeUSTIRcMWeftcWwKzz74auDxW_uXlpFvgqgQoTSwwAYblVSVpp7_ekk93fTlGXFVyEcMaNL0nOCXiqRrl276PCdOpx_zDT2BlydodLzQaNKOX4ZVj0iVh567HXtWHlwPer32oYn7OHu5Sjwslob6rt2g2J0blYNS9uW8r_p2wX"
          />
          <span className="font-heading text-3xl font-bold tracking-tighter text-primary hidden sm:block">
            AgentVerse
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onLaunchApp}
            className="font-label text-label-sm px-4 py-2 rounded-full border border-outline text-on-surface hover:text-primary transition-colors duration-300 active:scale-95"
          >
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
}
