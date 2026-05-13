"use client";

import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#5B2EFF] via-[#6A35FF] to-[#7B3FFF] px-6 py-6 shadow-lg md:flex-row md:px-10">
        
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
            <Image
              src="/cta.png"
              alt="CTA Image"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              আজই শুরু করুন আপনার ই-কমার্স যাত্রা!
            </h2>

            <p className="mt-1 text-sm text-white/80 md:text-base">
              Ecomtora এর সাথে আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায়।
            </p>
          </div>
        </div>

      
        <div className="flex items-center gap-4">
          <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#5B2EFF] transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            ডেমো দেখুন
          </button>

          <button className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10">
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </section>
  );
}