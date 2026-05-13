"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";

import { demos } from "@/lib/demo-data";

export default function LiveDemoSection() {
  const router = useRouter();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            আমাদের লাইভ ডেমো
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            বিভিন্ন ক্যাটাগরির প্রস্তুত ডেমো দেখুন
          </p>
        </div>

     
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {demos.map((demo) => (
            <div
              key={demo.slug}
              onClick={() =>
                router.push(`/demo/${demo.slug}`)
              }
              className="group cursor-pointer overflow-hidden rounded-[26px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
            
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

      
              <div className="flex items-center justify-between p-5">
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100">
                    <ShoppingBag className="h-5 w-5 text-violet-600" />
                  </div>

               
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {demo.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {demo.domain}
                    </p>
                  </div>
                </div>

               
                <div className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}