"use client";

import {
  MonitorSmartphone,
  Package,
  ShieldCheck,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";

const features = [
  {
    title: "ই-কমার্স ম্যানেজমেন্ট",
    description:
      "ব্যবসার সব ধরনের ডিজিটাল ই-কমার্স সলিউশন",
    icon: ShoppingCart,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "ইনভেন্টরি ম্যানেজমেন্ট",
    description:
      "স্টক, অর্ডার, প্রোডাক্ট ম্যানেজমেন্ট সিস্টেম",
    icon: Package,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "CRM সিস্টেম",
    description:
      "কাস্টমার, লিড এবং সেলস ম্যানেজমেন্ট",
    icon: Users,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "ফাইন্যান্স অটোমেশন",
    description:
      "অ্যাকাউন্টিং সিস্টেম ও ফাইন্যান্স কন্ট্রোল",
    icon: Wallet,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "ডাটা সিকিউরিটি",
    description:
      "আপনার সব ইনফরমেশন সম্পূর্ণ নিরাপদ",
    icon: ShieldCheck,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "স্মার্ট রিপোর্ট",
    description:
      "ব্যবসার জন্য রিয়েলটাইম এনালাইটিক্স রিপোর্ট",
    icon: MonitorSmartphone,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            সবকিছু এক প্ল্যাটফর্মে
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 lg:text-lg">
            আপনার ব্যবসার সকল অপারেশন এক জায়গা থেকে সহজভাবে পরিচালনা করুন
          </p>
        </div>

      
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-violet-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}