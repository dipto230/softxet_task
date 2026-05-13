import Image from "next/image";
import Link from "next/link";

import {
  ExternalLink,
  Github,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import { demos } from "@/lib/demo-data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DemoDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const demo = demos.find(
    (item) => item.slug === slug
  );

  if (!demo) {
    return (
      <div className="py-32 text-center text-2xl font-bold">
        Demo not found
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative min-h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={demo.image}
              alt={demo.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-5xl font-black text-slate-900">
              {demo.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {demo.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap gap-3">
              {demo.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-violet-100 px-4 py-2 font-medium text-violet-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              {/* Live Demo */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-700"
              >
                লাইভ ডেমো দেখুন
                <ExternalLink className="h-5 w-5" />
              </Link>

            
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-violet-200 hover:bg-violet-50"
              >
                Github Link
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}