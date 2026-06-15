"use client";

import { useState } from "react";
import { useGlassCardTracking } from "./hooks/useGlassCardTracking";
import { useRevenueTicker } from "./hooks/useRevenueTicker";
import UnderConstructionModal from "./components/UnderConstructionModal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoGrid from "./components/BentoGrid";
import RevenueSection from "./components/RevenueSection";
import StellarSection from "./components/StellarSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const handleUnderConstruction = () => setShowUnderConstruction(true);
  const handleCloseUnderConstruction = () => setShowUnderConstruction(false);

  useRevenueTicker();
  useGlassCardTracking();

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

      <Footer onUnderConstruction={handleUnderConstruction} />

      <UnderConstructionModal
        show={showUnderConstruction}
        onClose={handleCloseUnderConstruction}
      />
    </>
  );
}
