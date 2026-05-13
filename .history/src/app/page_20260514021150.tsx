import Navbar from "@/components/layout/Navbar";
import CTABanner from "@/components/sections/CTABanner";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import LiveDemoSection from "@/components/sections/LiveDemoSection";
import PricingSection from "@/components/sections/PricingSection";
import StatsSection from "@/components/sections/StatsSection";
import TrustedBySection from "@/components/sections/TrustedBySection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <HeroSection />

      <StatsSection />
      <FeaturesSection />
      <LiveDemoSection />
      <PricingSection />
      <TrustedBySection />
      <CTABanner
    </main>
  );
}