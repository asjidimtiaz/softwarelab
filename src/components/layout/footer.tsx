"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  dict: any;
  locale: string;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#1E1E2E]">
      <div className="container px-6 md:px-12 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12 pb-12 border-b border-[#1E1E2E]">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-violet-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-[#F8F8FF] font-display font-bold">DigiWebCrew</span>
            </Link>
            <p className="text-[#94A3B8] text-sm font-body leading-relaxed mb-6">
              Enterprise-grade software development solutions for mission-critical systems. Trusted by global leaders.
            </p>
            {/* Newsletter */}
            <div className="space-y-3">
              <label className="text-xs text-[#94A3B8] font-body font-semibold uppercase tracking-widest">
                Stay Updated
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-[#13131E] border border-[#1E1E2E] rounded-lg text-[#F8F8FF] text-sm placeholder-[#494970] focus:outline-none focus:border-[#6366F1]/50"
                />
                <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#6366F1]/90 text-white rounded-lg transition-all font-body text-sm font-semibold">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[#F8F8FF] font-display font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/services`} className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  DevOps & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[#F8F8FF] font-display font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/about`} className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies`} className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-[#F8F8FF] font-display font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/privacy`} className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-[#F8F8FF] text-sm font-body transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <div className="text-xs text-[#94A3B8] font-body">
            © 2024 DigiWebCrew. All rights reserved.
          </div>

          {/* Center: Language Selector */}
          <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-body">
            <Globe size={14} className="text-[#6366F1]" />
            <span className="uppercase tracking-widest">
              {locale === 'en' ? 'EN-US' : locale === 'ur' ? 'UR-PK' : 'AR-SA'}
            </span>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#6366F1] transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#6366F1] transition-colors"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#6366F1] transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
