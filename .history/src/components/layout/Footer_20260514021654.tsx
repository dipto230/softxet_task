"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Headphones,
  Send,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "আমাদের সম্পর্কে", href: "#" },
    { label: "ফিচারসমূহ", href: "#" },
    { label: "প্রাইসিং", href: "#" },
    { label: "যোগাযোগ", href: "#" },
  ],

  resources: [
    { label: "ব্লগ", href: "#" },
    { label: "হেল্প সেন্টার", href: "#" },
    { label: "ডকুমেন্টেশন", href: "#" },
    { label: "সাপোর্ট", href: "#" },
  ],

  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1020] text-white">
     
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C3BFF] to-[#8E61FF]">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Ecomtora</h2>

                <p className="text-sm text-gray-400">
                  Smart E-Commerce Solution
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              আপনার অনলাইন ব্যবসাকে আরও দ্রুত, স্মার্ট এবং প্রফেশনালভাবে
              পরিচালনা করতে Ecomtora সবসময় প্রস্তুত।
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={18} />

                <span>support@ecomtora.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone size={18} />

                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={18} />

                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

          
            <div className="mt-8 flex items-center gap-4">
              {[
                Globe,
                MessageCircle,
                Headphones,
                Send,
              ].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/20"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

                
                  <div>
            <h3 className="text-lg font-semibold">Company</h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Resources</h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

    
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © 2026 Ecomtora. All rights reserved.
            </p>

            <p className="text-sm text-gray-500">
              Designed with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}