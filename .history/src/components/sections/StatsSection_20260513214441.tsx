"use client";

import {
  BadgeCheck,
  Headphones,
  ShoppingBag,
  Store,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Store,
    number: "50+",
    title: "সফল স্টোর",
    bg: "bg-violet-100",
    icon: "text-violet-600",
    numberColor: "text-violet-600",
  },
  {
    id: 2,
    icon: ShoppingBag,
    number: "10+",
    title: "বহুমুখী ডেমো",
    bg: "bg-purple-100",
    icon: "text-purple-600",
    numberColor: "text-purple-600",
  },
  {
    id: 3,
    icon: BadgeCheck,
    number: "100%",
    title: "নিরাপদ সিস্টেম",
    bg: "bg-orange-100",
    icon: "text-orange-500",
    numberColor: "text-orange-500",
  },
  {
    id: 4,
    icon: Headphones,
    number: "24/7",
    title: "এক্সপার্ট সাপোর্ট",
    bg: "bg-green-100",
    icon: "text-green-500",
    numberColor: "text-green-500",
  },
];

export default function StatsSection() {
  return (
    <section className="-mt-8 relative z-20 px-4 pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-violet-100 bg-white/80 shadow-[0_10px_50px_rgba(124,58,237,0.08)] backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-y-8 divide-y divide-violet-100 md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group flex cursor-pointer items-center justify-center gap-4 p-6 transition-all duration-300 hover:bg-violet-50/60"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${item.bg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon className={`h-5 w-5 ${item.icon}`} />
                </div>

                <div>
                  <h2
                    className={`text-3xl font-black ${item.numberColor} transition-all duration-300 group-hover:scale-110`}
                  >
                    {item.number}
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}