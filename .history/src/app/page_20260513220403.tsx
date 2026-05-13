import Navbar from "@/components/layout/Navbar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <HeroSection />

      <StatsSection />
      <FeaturesSection/>
    </main>
  );
}