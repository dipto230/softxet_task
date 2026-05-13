"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { demos } from "@/lib/demo-data";

export default function LiveDemoSection() {
  const router = useRouter();

  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 xl:grid-cols-4">
        {demos.map((demo) => (
          <div
            key={demo.slug}
            onClick={() => router.push(`/demo/${demo.slug}`)}
            className="cursor-pointer overflow-hidden rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-52">
              <Image
                src={demo.image}
                alt={demo.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold">
                {demo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}