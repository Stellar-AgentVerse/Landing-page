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
import Footer from "./components/Footer";

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

      <Footer onUnderConstruction={handleUnderConstruction} />

      <UnderConstructionModal
        show={showUnderConstruction}
        onClose={handleCloseUnderConstruction}
      />
    </>
  );
}
