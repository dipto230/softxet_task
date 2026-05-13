import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <HeroSection />
      <

      <section
        id="demo"
        className="flex h-screen items-center justify-center bg-slate-50"
      >
        <h2 className="text-5xl font-black text-slate-900">
          ডেমো সেকশন
        </h2>
      </section>

      <section
        id="features"
        className="flex h-screen items-center justify-center bg-white"
      >
        <h2 className="text-5xl font-black text-slate-900">
          ফিচার সেকশন
        </h2>
      </section>

      <section
        id="pricing"
        className="flex h-screen items-center justify-center bg-slate-50"
      >
        <h2 className="text-5xl font-black text-slate-900">
          প্রাইসিং সেকশন
        </h2>
      </section>

      <section
        id="lifetime"
        className="flex h-screen items-center justify-center bg-white"
      >
        <h2 className="text-5xl font-black text-slate-900">
          লাইফটাইম প্ল্যান
        </h2>
      </section>

      <section
        id="blog"
        className="flex h-screen items-center justify-center bg-slate-50"
      >
        <h2 className="text-5xl font-black text-slate-900">
          ব্লগ সেকশন
        </h2>
      </section>

      <section
        id="contact"
        className="flex h-screen items-center justify-center bg-white"
      >
        <h2 className="text-5xl font-black text-slate-900">
          যোগাযোগ সেকশন
        </h2>
      </section>
    </main>
  );
}