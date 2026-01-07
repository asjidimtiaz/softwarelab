"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Search, Command, ChevronDown } from "lucide-react";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface NavbarProps {
  dict: any;
  locale: string;
}

export function Navbar({ dict, locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center gap-6 px-3 py-2.5 rounded-full bg-white transition-all duration-300",
          isScrolled ? "shadow-xl shadow-black/5" : "shadow-lg shadow-black/5"
        )}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 pl-1">
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#EA580C] rounded-lg flex items-center justify-center text-white shadow-sm transition-transform hover:scale-105">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                 <line x1="9" y1="9" x2="15" y2="15" />
               </svg>
            </div>
          </Link>
          <div className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-bold text-gray-500 border border-gray-200">
            v1.2
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 px-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1 group whitespace-nowrap"
            >
              {link.name}
              {(link.href.includes('services') || link.href.includes('blog')) && (
                <ChevronDown size={12} className="text-gray-400 group-hover:text-black transition-colors" />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-3 pl-2 border-l border-gray-100">
             {/* Search Bar */}
            <div className="relative group cursor-pointer hidden lg:block">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-400 w-48 transition-colors group-hover:bg-gray-100 group-hover:border-gray-200">
                    <Search size={14} />
                    <span className="text-xs font-medium">Quick search...</span>
                    <div className="ml-auto flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-white border border-gray-200 shadow-sm">
                        <Command size={10} className="text-gray-400" />
                        <span className="text-[10px] font-bold text-gray-400">K</span>
                    </div>
                </div>
            </div>

             {/* Social Icons */}
             <div className="flex items-center gap-1">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-black transition-colors">
                    <FaTwitter size={14} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-black transition-colors">
                    <FaGithub size={14} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-black transition-colors">
                    <FaDiscord size={14} />
                </a>
             </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden pl-2 border-l border-gray-100">
          <button
            className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 inset-x-4 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 z-40 md:hidden origin-top"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2" />
               <div className="flex items-center gap-4 px-4 py-2">
                    <FaTwitter size={16} className="text-gray-400" />
                    <FaGithub size={16} className="text-gray-400" />
                    <FaDiscord size={16} className="text-gray-400" />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
