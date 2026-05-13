"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = [
  { label: "হোম", href: "#home" },
  { label: "ডেমো", href: "#demo" },
  { label: "ফিচারসমূহ", href: "#features" },
  { label: "মূল্য পরিকল্পনা", href: "#pricing" },
  { label: "লাইফটাইম প্ল্যান", href: "#lifetime" },
  { label: "ব্লগ", href: "#blog" },
  { label: "যোগাযোগ", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-violet-100 bg-white/80 backdrop-blur-xl">
      <div
        ref={navRef}
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 shadow-xl shadow-violet-300">
            <ShoppingBag className="h-6 w-6 text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Ecomtara
            </h2>

            <p className="text-xs font-medium text-slate-500">
              Smart SaaS Platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[17px] font-bold text-slate-700 transition-all duration-300 hover:text-violet-600"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-violet-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 px-7 py-3 text-sm font-bold text-white shadow-xl shadow-violet-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            ডেমো দেখুন
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-violet-200 p-2 text-violet-600 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-violet-100 bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-bold text-slate-700"
              >
                {item.label}
              </a>
            ))}

            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-3 font-bold text-white">
              ডেমো দেখুন
            </button>
          </div>
        </div>
      )}
    </header>
  );
}