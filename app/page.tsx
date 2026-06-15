"use client";

import { useEffect, useState } from "react";
import { useGlassCardTracking } from "./hooks/useGlassCardTracking";
import UnderConstructionModal from "./components/UnderConstructionModal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoGrid from "./components/BentoGrid";
import RevenueSection from "./components/RevenueSection";
import StellarSection from "./components/StellarSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";

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

        <FAQSection />

        <FinalCTA onUnderConstruction={handleUnderConstruction} />
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
