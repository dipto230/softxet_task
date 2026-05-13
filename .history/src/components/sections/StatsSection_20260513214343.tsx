"use client";

import {
  BadgeCheck,
  Headphones,
  ShoppingBag,
  Store,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  {
    id: 1,
    icon: Store,
    number: "50+",
    title: "সফল স্টোর",
    color:
      "from-violet-500 to-indigo-500",
    bg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    id: 2,
    icon: ShoppingBag,
    number: "10+",
    title: "বহুমুখী ডেমো",
    color:
      "from-purple-500 to-fuchsia-500",
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    icon: BadgeCheck,
    number: "100%",
    title: "নিরাপদ সিস্টেম",
    color:
      "from-orange-400 to-amber-500",
    bg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    id: 4,
    icon: Headphones,
    number: "24/7",
    title: "এক্সপার্ট সাপোর্ট",
    color:
      "from-green-400 to-emerald-500",
    bg: "bg-green-100",
    iconColor: "text-green-500",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      ".stats-card",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white to-violet-50 py-24"
      id="stats"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div
        ref={sectionRef}
        className="relative mx-auto max-w-7xl px-4 lg:px-8"
      >
        <div className="grid gap-6 rounded-[40px] border border-violet-100 bg-white/70 p-6 shadow-[0_20px_80px_rgba(124,58,237,0.08)] backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="stats-card group relative overflow-hidden rounded-[32px] border border-transparent bg-white p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-violet-200 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-violet-50/0 to-violet-50 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div
                  className={`relative mx-auto flex h-24 w-24 items-center justify-center rounded-full ${item.bg} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon
                    className={`h-10 w-10 ${item.iconColor}`}
                  />
                </div>

                <h2
                  className={`relative mt-8 bg-gradient-to-r ${item.color} bg-clip-text text-6xl font-black text-transparent transition-all duration-500 group-hover:scale-110`}
                >
                  {item.number}
                </h2>

                <p className="relative mt-4 text-xl font-bold text-slate-700">
                  {item.title}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}