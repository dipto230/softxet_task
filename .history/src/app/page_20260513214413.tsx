import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <HeroSection />

      <StatsSection />
    </main>
  );
}