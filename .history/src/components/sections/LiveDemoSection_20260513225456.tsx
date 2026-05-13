"use client";

import Image from "next/image";
import { useState } from "react";

import {
  ArrowUpRight,
  BadgeCheck,
  Globe,
  Layers3,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const demos = [
  {
    id: 1,
    title: "Electronics Demo",
    domain: "electro.shopxet.com",
    image: "/PROJECT-1.png",
    color: "from-blue-500 to-cyan-500",

    description:
      "একটি আধুনিক ইলেকট্রনিক্স ই-কমার্স সলিউশন যেখানে স্মার্ট প্রোডাক্ট ম্যানেজমেন্ট, লাইভ ইনভেন্টরি এবং ফাস্ট চেকআউট সিস্টেম রয়েছে। বড় স্কেলের অনলাইন স্টোর পরিচালনার জন্য এটি সম্পূর্ণ অপ্টিমাইজড।",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],

    features: [
      "লাইভ ইনভেন্টরি ম্যানেজমেন্ট",
      "সিকিউর পেমেন্ট সিস্টেম",
      "রিয়েল টাইম অর্ডার ট্র্যাকিং",
      "SEO অপ্টিমাইজড",
    ],
  },

  {
    id: 2,
    title: "Food Demo",
    domain: "food.shopxet.com",
    image: "/PROJECT-2.png",
    color: "from-orange-500 to-red-500",

    description:
      "ফুড ডেলিভারি ও রেস্টুরেন্ট ম্যানেজমেন্টের জন্য তৈরি শক্তিশালী ওয়েব অ্যাপ্লিকেশন। দ্রুত অর্ডার প্রসেসিং, লাইভ ডেলিভারি স্ট্যাটাস এবং আধুনিক UI সহ সম্পূর্ণ responsive platform।",

    technologies: [
      "React",
      "Express.js",
      "Firebase",
      "Tailwind CSS",
      "Cloudinary",
    ],

    features: [
      "অনলাইন অর্ডার সিস্টেম",
      "লাইভ ডেলিভারি ট্র্যাকিং",
      "মোবাইল ফ্রেন্ডলি ডিজাইন",
      "ফাস্ট পারফরম্যান্স",
    ],
  },

  {
    id: 3,
    title: "Cosmetics Demo",
    domain: "cosmetics.shopxet.com",
    image: "/PROJECT-3.png",
    color: "from-pink-500 to-rose-500",

    description:
      "বিউটি ও কসমেটিকস ব্র্যান্ডের জন্য প্রিমিয়াম UI/UX ভিত্তিক ই-কমার্স প্ল্যাটফর্ম। হাই-কোয়ালিটি প্রোডাক্ট শোকেস, স্মার্ট ফিল্টারিং এবং আধুনিক ডিজাইন সিস্টেম ব্যবহার করা হয়েছে।",

    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "প্রিমিয়াম UI/UX",
      "স্মার্ট প্রোডাক্ট ফিল্টার",
      "হাই স্পিড লোডিং",
      "ডাইনামিক অ্যানিমেশন",
    ],
  },

  {
    id: 4,
    title: "Fashion Demo",
    domain: "fashion.shopxet.com",
    image: "/PROJECT-4.png",
    color: "from-violet-500 to-purple-500",

    description:
      "ফ্যাশন ও লাইফস্টাইল ব্র্যান্ডের জন্য আধুনিক এবং স্টাইলিশ ই-কমার্স প্ল্যাটফর্ম। responsive design, advanced authentication এবং fast browsing experience প্রদান করে।",

    technologies: [
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "JWT Auth",
    ],

    features: [
      "স্টাইলিশ UI ডিজাইন",
      "অ্যাডভান্সড অথেন্টিকেশন",
      "ডাইনামিক ক্যাটাগরি সিস্টেম",
      "রেসপন্সিভ এক্সপেরিয়েন্স",
    ],
  },
];

export default function LiveDemoSection() {
  const [selectedDemo, setSelectedDemo] = useState(demos[0]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <Sparkles className="h-4 w-4" />
            লাইভ ডেমো প্রজেক্ট
          </div>

          <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
            আমাদের লাইভ ডেমো
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
            বিভিন্ন ক্যাটাগরির প্রিমিয়াম ই-কমার্স ডেমো এক্সপ্লোর করুন
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {demos.map((demo) => (
            <div
              key={demo.id}
              onClick={() => setSelectedDemo(demo)}
              className={`group cursor-pointer overflow-hidden rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                selectedDemo.id === demo.id
                  ? "border-violet-500 shadow-xl"
                  : "border-slate-200"
              }`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${demo.color} opacity-10`}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {demo.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {demo.domain}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100">
                    <ShoppingBag className="h-5 w-5 text-violet-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="mt-20 overflow-hidden rounded-[36px] border border-violet-100 bg-white shadow-[0_20px_80px_rgba(124,58,237,0.08)]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative min-h-[500px] w-full">
              <Image
                src={selectedDemo.image}
                alt={selectedDemo.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="p-8 lg:p-14">
              <div
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2 text-sm font-semibold text-white ${selectedDemo.color}`}
              >
                <Globe className="h-4 w-4" />
                {selectedDemo.domain}
              </div>

              <h3 className="mt-6 text-4xl font-black text-slate-900">
                {selectedDemo.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {selectedDemo.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-2">
                  <Layers3 className="h-5 w-5 text-violet-600" />

                  <h4 className="text-xl font-bold text-slate-900">
                    ব্যবহৃত টেক স্ট্যাক
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedDemo.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-2">
                  <MonitorSmartphone className="h-5 w-5 text-emerald-600" />

                  <h4 className="text-xl font-bold text-slate-900">
                    প্রিমিয়াম ফিচারসমূহ
                  </h4>
                </div>

                <div className="space-y-4">
                  {selectedDemo.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                        <BadgeCheck className="h-4 w-4 text-emerald-600" />
                      </div>

                      <p className="text-slate-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-700">
                  লাইভ ডেমো দেখুন
                  <ArrowUpRight className="h-5 w-5" />
                </button>

                <button className="rounded-2xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-violet-200 hover:bg-violet-50">
                  বিস্তারিত জানুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}