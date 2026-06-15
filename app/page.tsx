"use client";

import { useEffect, useState } from "react";
import { useGlassCardTracking } from "./hooks/useGlassCardTracking";
import UnderConstructionModal from "./components/UnderConstructionModal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoGrid from "./components/BentoGrid";
import RevenueSection from "./components/RevenueSection";
import StellarSection from "./components/StellarSection";
import FAQItem from "./components/FAQItem";

export default function Home() {
  const [revenue, setRevenue] = useState(1248590);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const handleUnderConstruction = () => setShowUnderConstruction(true);
  const handleCloseUnderConstruction = () => setShowUnderConstruction(false);

  // Revenue ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.random() * 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Glass card mouse tracking
  useGlassCardTracking();

  const formattedRevenue = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.floor(revenue));

  return (
    <>
      <Navbar onLaunchApp={handleUnderConstruction} />

      <main className="relative pt-20">
        {/* ========== BACKGROUND ATMOSPHERE ========== */}
        <div className="fixed inset-0 pointer-events-none stellar-gradient z-0" />

        <HeroSection onUnderConstruction={handleUnderConstruction} />

        <BentoGrid />

        <RevenueSection />

        <StellarSection />

        {/* ========== FAQ ========== */}
        <section className="relative z-10 px-6 py-20 max-w-3xl mx-auto">
          <h2 className="font-heading text-headline-md font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="How do I start earning?"
              answer="Simply upload your AI agent&apos;s endpoint or prompt template. Set your price per invocation, and AgentVerse handles the escrow and instant distribution via Stellar."
            />
            <FAQItem
              question="Do I need crypto to use it?"
              answer="While the backend runs on Stellar, our built-in ramp allows you to pay with standard payment methods or XLM directly."
            />
            <FAQItem
              question="How are the agents hosted?"
              answer="AgentVerse supports both external endpoints (self-hosted) and our integrated serverless deployment for creators who want a hands-off experience."
            />
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
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
                onClick={handleUnderConstruction}
                className="bg-accent text-background font-bold px-12 py-4 rounded-full transition-transform active:scale-95 text-lg"
              >
                Launch Dashboard
              </button>
              <button
                onClick={handleUnderConstruction}
                className="border border-outline text-primary font-bold px-12 py-4 rounded-full hover:bg-white/5 transition-all active:scale-95 text-lg"
              >
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="relative z-10 w-full py-12 border-t border-outline-variant/10 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="AgentVerse Logo"
                className="h-8 w-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeCp43Z0Y8feFts84-zMuB_BPxLzJ4Hvh9MC3FsuIrSl6hgDxnF2dHA5K-4NuLwHwDFWb5RDXozjJWrZ7zcznpYMWSHpITSXhnTzeUSTIRcMWeftcWwKzz74auDxW_uXlpFvgqgQoTSwwAYblVSVpp7_ekk93fTlGXFVyEcMaNL0nOCXiqRrl276PCdOpx_zDT2BlydodLzQaNKOX4ZVj0iVh567HXtWHlwPer32oYn7OHu5Sjwslob6rt2g2J0blYNS9uW8r_p2wX"
              />
              <span className="font-heading text-headline-md font-bold text-primary">
                AgentVerse
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-xs">
              The decentralized future of artificial intelligence commerce.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-label text-label-sm text-primary uppercase tracking-widest">
                Platform
              </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Marketplace
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Creators
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Stellar
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-label text-label-sm text-primary uppercase tracking-widest">
                Resources
              </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                API Reference
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-label text-label-sm text-primary uppercase tracking-widest">
                Legal
              </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUnderConstruction();
                }}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-outline-variant/5">
          <p className="font-label text-label-sm text-on-surface-variant/40">
            &copy; 2024 AgentVerse. Powered by Stellar.
          </p>
        </div>
      </footer>

      <UnderConstructionModal
        show={showUnderConstruction}
        onClose={handleCloseUnderConstruction}
      />
    </>
  );
}
