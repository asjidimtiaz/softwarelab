"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  dict: any;
  locale: string;
}

export function Navbar({ dict, locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: dict.nav.services, href: `/${locale}/services` },
    { name: dict.nav.process, href: `/${locale}/process` },
    { name: dict.nav.pricing, href: `/${locale}/pricing` },
    { name: dict.nav.caseStudies, href: `/${locale}/case-studies` },
    { name: dict.nav.blog, href: `/${locale}/blog` },
    { name: dict.nav.about, href: `/${locale}/about` },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-[#1E1E2E] flex items-center justify-between px-6 md:px-12 h-16">
      {/* Logo Section */}
      <Link href={`/${locale}`} className="flex items-center gap-2 flex-shrink-0">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-violet-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">D</span>
        </div>
        <span className="text-white font-display font-bold hidden sm:inline-block">DigiWebCrew</span>
      </Link>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-sm font-body text-[#94A3B8] hover:text-[#F8F8FF] transition-colors duration-200",
              pathname === link.href && "text-[#F8F8FF]"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right CTA Buttons */}
      <div className="hidden md:flex items-center gap-4 flex-shrink-0">
        {/* Ghost CTA Button */}
        <button className="border border-[#1E1E2E] text-[#F8F8FF] px-4 py-2 rounded-md hover:bg-[#13131E] font-body text-sm font-medium transition-all duration-200">
          Watch Demo
        </button>
        {/* Primary CTA Button */}
        <Link
          href={`/${locale}/quote`}
          className="bg-[#6366F1] text-white px-5 py-2 rounded-md hover:bg-[#6366F1]/90 font-body text-sm font-medium transition-all duration-200"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          className="p-2 text-[#F8F8FF] hover:bg-[#13131E] rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 inset-x-6 bg-[#0F0F18] border border-[#1E1E2E] rounded-lg shadow-xl z-50 md:hidden p-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm text-[#94A3B8] hover:text-[#F8F8FF] hover:bg-[#13131E] rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-[#1E1E2E] my-2" />
              <Link
                href={`/${locale}/quote`}
                className="block px-4 py-2 text-sm text-white bg-[#6366F1] rounded-md hover:bg-[#6366F1]/90 text-center font-medium transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
