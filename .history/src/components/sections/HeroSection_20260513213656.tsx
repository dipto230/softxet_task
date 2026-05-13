"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    )
      .fromTo(
        descRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        {
          x: 120,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.8"
      );
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white pt-32"
    >
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-3xl" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 lg:grid-cols-2 lg:px-8">
      
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-3 shadow-lg shadow-violet-100 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <Sparkles className="h-4 w-4 text-violet-600" />

            <span className="text-sm font-bold text-violet-700">
              আপনার নিজের ব্র্যান্ড, আপনার নিজের ই-কমার্স
            </span>
          </div>

          <h1
            ref={titleRef}
            className="max-w-2xl text-5xl font-black leading-tight text-slate-900 transition-all duration-500 hover:scale-[1.02] lg:text-7xl"
          >
            আপনার ই-কমার্স ব্যবসার জন্য

            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent transition-all duration-500 hover:from-pink-500 hover:to-violet-600">
              {" "}
              সম্পূর্ণ SaaS সমাধান
            </span>
          </h1>

          <p
            ref={descRef}
            className="mt-8 max-w-2xl text-lg leading-9 text-slate-600 transition-all duration-300 hover:text-slate-900"
          >
            Ecomtara একটি শক্তিশালী ও সহজেই ব্যবহারযোগ্য ই-কমার্স SaaS
            প্ল্যাটফর্ম। ওয়েবসাইট, ইনভেন্টরি, CRM, কুরিয়ার অটোমেশনসহ
            সবকিছু এক জায়গায় — আপনার ব্যবসাকে দিন নতুন উচ্চতা।
          </p>

          <div
            ref={buttonRef}
            className="mt-10 flex flex-col gap-5 sm:flex-row"
          >
            <button className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              ডেমো দেখুন

              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
            </button>

            <button className="rounded-2xl border-2 border-violet-200 bg-white px-8 py-4 text-lg font-bold text-violet-700 transition-all duration-300 hover:border-violet-500 hover:bg-violet-50 hover:-translate-y-1">
              মূল্য পরিকল্পনা দেখুন
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <BadgeCheck className="h-5 w-5 text-violet-600" />

              <span className="font-semibold text-slate-700">
                সহজ সেটআপ
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <BadgeCheck className="h-5 w-5 text-violet-600" />

              <span className="font-semibold text-slate-700">
                কোন কোডিং নয়
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <BadgeCheck className="h-5 w-5 text-violet-600" />

              <span className="font-semibold text-slate-700">
                ২৪/৭ সাপোর্ট
              </span>
            </div>
          </div>
        </div>

       
        <div ref={imageRef} className="relative">
          <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />

          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />

          {/* Transparent Image Container */}
          <div className="relative rounded-[40px] p-2 transition-all duration-500 hover:scale-[1.02]">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={900}
              height={700}
              priority
              className="rounded-[30px] object-cover mix-blend-darken drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}