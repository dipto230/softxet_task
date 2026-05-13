"use client";

import Image from "next/image";

import {
  Check,
  Crown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    id: 1,
    title: "বেসিক প্ল্যান",
    price: "৳2,999",
    period: "/মাস",
    color: "violet",

    features: [
      "১,০০০ প্রোডাক্ট",
      "সকল ফিচার",
      "ফ্রি ডোমেইন",
      "ইমেইল সাপোর্ট",
      "২৪/৭ সাপোর্ট",
    ],
  },

  {
    id: 2,
    title: "স্ট্যান্ডার্ড প্ল্যান",
    price: "৳14,999",
    period: "/৬ মাস",

    badge: "জনপ্রিয়",

    color: "orange",

    features: [
      "৫,০০০ প্রোডাক্ট",
      "সকল ফিচার",
      "ফ্রি ডোমেইন",
      "অ্যানালাইটিক্স রিপোর্ট",
      "প্রায়োরিটি সাপোর্ট",
    ],
  },

  {
    id: 3,
    title: "বিজনেস প্ল্যান",
    price: "৳26,999",
    period: "/বছর",

    badge: "সাশ্রয়ী",

    color: "green",

    features: [
      "১০,০০০ প্রোডাক্ট",
      "সকল ফিচার",
      "ফ্রি ডোমেইন",
      "অ্যাডভান্স রিপোর্ট",
      "২৪/৭ লাইভ সাপোর্ট",
    ],
  },
];

const colorClasses = {
  violet: {
    text: "text-violet-700",
    bg: "bg-violet-600",
    light: "bg-violet-100",
    border: "border-violet-200",
    hover: "hover:border-violet-300",
  },

  orange: {
    text: "text-orange-600",
    bg: "bg-orange-500",
    light: "bg-orange-100",
    border: "border-orange-200",
    hover: "hover:border-orange-300",
  },

  green: {
    text: "text-green-600",
    bg: "bg-green-500",
    light: "bg-green-100",
    border: "border-green-200",
    hover: "hover:border-green-300",
  },
};

export default function PricingSection() {
  return (
    <section className="bg-[#faf7ff] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <Sparkles className="h-4 w-4" />
            SaaS Pricing
          </div>

          <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
            SaaS মূল্য পরিকল্পনা
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            আপনার ব্যবসার উপযোগী প্ল্যান সিলেক্ট করুন
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid items-start gap-6 lg:grid-cols-4">
          {plans.map((plan) => {
            const colors =
              colorClasses[
                plan.color as keyof typeof colorClasses
              ];

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-[30px] border bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${colors.border} ${colors.hover}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-bold text-white ${colors.bg}`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Title */}
                <h3
                  className={`text-lg font-bold ${colors.text}`}
                >
                  {plan.title}
                </h3>

                {/* Price */}
                <div className="mt-6 flex items-end gap-2">
                  <h2
                    className={`text-4xl font-black ${colors.text}`}
                  >
                    {plan.price}
                  </h2>

                  <span className="pb-1 text-sm font-medium text-slate-500">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full ${colors.light}`}
                      >
                        <Check
                          className={`h-3.5 w-3.5 ${colors.text}`}
                        />
                      </div>

                      <p className="text-sm font-medium text-slate-600">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

            
                <button
                  className={`mt-8 w-full rounded-2xl px-5 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90 ${colors.bg}`}
                >
                  এখনই শুরু করুন
                </button>
              </div>
            );
          })}

      
          <div className="flex flex-col rounded-[30px] border border-violet-200 bg-gradient-to-br from-white to-violet-50 p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex flex-col justify-between">
        
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  <Crown className="h-4 w-4" />
                  লাইফটাইম প্ল্যান
                </div>

                <h3 className="mt-5 text-4xl font-black leading-tight text-slate-900">
                  একবার পেমেন্ট,
                  <br />
                  আজীবন ব্যবহার
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  সম্পূর্ণ লাইফটাইম এক্সেস, সকল
                  প্রিমিয়াম ফিচার এবং ভবিষ্যতের
                  আপডেট একদম ফ্রি।
                </p>

            
                <div className="mt-6 flex items-start gap-4">
               
                  <div className="flex-1 space-y-4">
                    {[
                      "সকল প্রিমিয়াম ফিচার",
                      "আজীবন ফ্রি আপডেট",
                      "অ্যাডভান্স অ্যানালাইটিক্স",
                      "প্রায়োরিটি সাপোর্ট",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <ShieldCheck className="h-5 w-5 shrink-0 text-violet-600" />

                        <p className="text-sm font-medium text-slate-600">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

              
                  <div className="shrink-0">
                    <Image
                      src="/server.jpg"
                      alt="Server"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

          
              <button className="mt-8 w-full rounded-2xl bg-violet-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-700">
                বিস্তারিত জানতে যোগাযোগ করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}