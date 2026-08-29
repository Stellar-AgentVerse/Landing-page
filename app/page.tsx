import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoGrid from "./components/BentoGrid";
import RevenueSection from "./components/RevenueSection";
import StellarSection from "./components/StellarSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import GlassCardEffects from "./components/GlassCardEffects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative pt-20">
        {/* ========== BACKGROUND ATMOSPHERE ========== */}
        <div className="fixed inset-0 pointer-events-none stellar-gradient z-0" />

        <HeroSection />

        <BentoGrid />

        <RevenueSection />

        <StellarSection />

        <FAQSection />

        <FinalCTA />
      </main>

      <Footer />

      <GlassCardEffects />
    </>
  );
}
