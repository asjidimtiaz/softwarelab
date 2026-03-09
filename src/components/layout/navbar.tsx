"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/theme-provider";

interface NavbarProps {
  dict: any;
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: `/${locale}` },
    { label: "Services", href: `/${locale}/services`, dropdown: true },
    { label: "Pricing", href: `/${locale}/pricing` },
    { label: "Process", href: `/${locale}/process` },
    { label: "Work", href: `/${locale}/case-studies` },
    { label: "About", href: `/${locale}/about` },
    { label: "Contact", href: `/${locale}/contact` },
  ];

  const serviceItems = [
    { label: "Custom Website Dev", href: `/${locale}/services/custom-software` },
    { label: "Conversion Funnels", href: `/${locale}/services/conversion-funnels` },
    { label: "AI Chatbots", href: `/${locale}/services/ai-chatbots-automation` },
    { label: "SEO & Growth", href: `/${locale}/services/seo-growth-retainers` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-[#1E1E2E]">
      <div className="h-full px-6 md:px-12 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="text-[#F8F8FF] font-display font-bold hidden sm:inline">Digital Web Crew</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={cn("text-sm text-[#94A3B8] hover:text-[#F8F8FF] transition-colors", pathname.startsWith(link.href) && "text-[#F8F8FF]")}>
                  {link.label}
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-lg border border-[#1E1E2E] bg-[#0F0F18] p-3">
                    <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-2">Services</p>
                    <div className="space-y-1 mb-3">
                      {serviceItems.map((item) => (
                        <Link key={item.label} href={item.href} className="block px-3 py-2 rounded-md text-sm text-[#94A3B8] hover:text-[#F8F8FF] hover:bg-[#13131E]">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <Link href={`/${locale}/services`} className="block px-3 py-2 rounded-md text-sm text-[#6366F1] hover:bg-[#13131E]">
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} href={link.href} className={cn("text-sm text-[#94A3B8] hover:text-[#F8F8FF] transition-colors", pathname === link.href && "text-[#F8F8FF]")}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-md border border-[#1E1E2E] text-[#94A3B8] hover:text-[#F8F8FF] hover:bg-[#13131E] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <a href="#" className="text-[#94A3B8] hover:text-[#F8F8FF]"><FaLinkedin size={14} /></a>
          <a href="#" className="text-[#94A3B8] hover:text-[#F8F8FF]"><FaFacebook size={14} /></a>
          <a href="#" className="text-[#94A3B8] hover:text-[#F8F8FF]"><FaInstagram size={14} /></a>
          <a href="#" className="text-[#94A3B8] hover:text-[#F8F8FF]"><FaXTwitter size={14} /></a>
          <a href="#" className="text-[#94A3B8] hover:text-[#F8F8FF]"><FaGithub size={14} /></a>
          <Link href={`/${locale}/book-consultation`} className="px-4 py-2 rounded-md bg-[#6366F1] text-white text-sm font-semibold hover:bg-[#6366F1]/90">
            Book Consultation
          </Link>
        </div>

        <button onClick={() => setMobileOpen((v) => !v)} className="lg:hidden text-[#F8F8FF] p-2">
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 border-t border-[#1E1E2E] bg-[#0F0F18] px-6 py-6 overflow-y-auto">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block py-3 text-base text-[#94A3B8] hover:text-[#F8F8FF]" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-6 mt-6 border-t border-[#1E1E2E]">
            <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-2">Services</p>
            <div className="space-y-1">
              {serviceItems.map((item) => (
                <Link key={item.label} href={item.href} className="block py-2 text-sm text-[#94A3B8] hover:text-[#F8F8FF]" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="pt-6 space-y-2 border-t border-[#1E1E2E] mt-6">
            <button
              onClick={() => {
                toggleTheme();
                setMobileOpen(false);
              }}
              className="w-full px-4 py-2 rounded-md border border-[#1E1E2E] text-[#94A3B8] hover:text-[#F8F8FF] hover:bg-[#13131E] text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
            <Link href={`/${locale}/book-consultation`} className="block w-full px-4 py-2 rounded-md bg-[#6366F1] text-white text-sm text-center font-semibold" onClick={() => setMobileOpen(false)}>
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
