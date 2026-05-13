"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    id: 1,
    src: "/logo-1.png",
    alt: "Logo 1",
  },
  {
    id: 2,
    src: "/logo-2.png",
    alt: "Logo 2",
  },
  {
    id: 3,
    src: "/logo-3.png",
    alt: "Logo 3",
  },
  {
    id: 4,
    src: "/logo-4.png",
    alt: "Logo 4",
  },
  {
    id: 5,
    src: "/logo-5.png",
    alt: "Logo 5",
  },
];

export default function TrustedBySection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            যারা আমাদের উপর বিশ্বাস রেখেছেন
          </h2>
        </div>

        <div className="relative overflow-hidden">
      
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f7f7f7] to-transparent" />

  
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f7f7f7] to-transparent" />

          <motion.div
            className="flex w-max gap-14"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex min-w-[180px] items-center justify-center opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={60}
                  className="h-auto w-[130px] object-contain grayscale transition-all duration-300 hover:grayscale-0 md:w-[150px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}