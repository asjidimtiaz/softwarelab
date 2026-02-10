"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./layout-primitives";
import { FaFacebook, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";
import { ChevronDown, Globe } from "lucide-react";

interface FooterProps {
  dict: any;
  locale: string;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-midnight-950 border-t border-gray-100 dark:border-midnight-800 mt-auto">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Logo + Copyright + Social Icons */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-5 h-5 rounded-full border-[2px] border-electric/80 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-electric shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                </div>
              </div>
              <span className="font-black text-gray-900 dark:text-white uppercase tracking-tighter text-xl">Digi <span className="text-electric">Web Crew</span></span>
            </Link>

            {/* Copyright */}
            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Precision Engineering
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-electric transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/toqeer74" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Right: Links + Language + CTA */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Links */}
            <div className="flex items-center gap-8">
              <Link href={`/${locale}/privacy`} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy Protocol
              </Link>
              <Link href={`/${locale}/terms`} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
              <Globe size={14} className="text-electric" />
              <span>{locale === 'en' ? 'EN-US' : locale === 'ur' ? 'UR-PK' : 'AR-SA'}</span>
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}/quote`}
              className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Initiate Project
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
