"use client";

import {
  BadgeCheck,
  Headphones,
  ShoppingBag,
  Store,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Store,
    number: "50+",
    title: "সফল স্টোর",
    subtitle: "দেশজুড়ে ব্যবসা পরিচালনা",
    bg: "from-violet-500 to-purple-500",
    shadow: "shadow-violet-200",
  },
  {
    id: 2,
    icon: ShoppingBag,
    number: "10+",
    title: "বহুমুখী ডেমো",
    subtitle: "প্রতিটি ব্যবসার জন্য রেডি",
    bg: "from-fuchsia-500 to-pink-500",
    shadow: "shadow-fuchsia-200",
  },
  {
    id: 3,
    icon: BadgeCheck,
    number: "100%",
    title: "নিরাপদ সিস্টেম",
    subtitle: "সম্পূর্ণ ডাটা প্রোটেকশন",
    bg: "from-orange-400 to-amber-500",
    shadow: "shadow-orange-200",
  },
  {
    id: 4,
    icon: Headphones,
    number: "24/7",
    title: "এক্সপার্ট সাপোর্ট",
    subtitle: "সবসময় সাহায্যের জন্য প্রস্তুত",
    bg: "from-emerald-400 to-green-500",
    shadow: "shadow-green-200",
  },
];

export default function StatsSection() {
  return (
    <section className="relative z-20 -mt-10 px-4 pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 shadow-[0_20px_80px_rgba(124,58,237,0.12)] backdrop-blur-2xl">
      
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-3xl" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden border-b border-violet-100/60 p-8 transition-all duration-500 hover:bg-white/80 sm:border-r xl:border-b-0"
                >
               
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-transparent" />
                  </div>

                  <div className="relative z-10 flex items-start gap-5">
                 
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} text-white shadow-lg ${item.shadow} transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                   
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-4xl font-black text-transparent">
                          {item.number}
                        </h2>

                        <Sparkles className="h-4 w-4 text-violet-400 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                      </div>

                      <p className="mt-1 text-base font-bold text-slate-800">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.bg} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}