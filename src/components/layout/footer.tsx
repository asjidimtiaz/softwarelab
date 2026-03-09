"use client";

import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

interface FooterProps {
  dict: any;
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#1E1E2E]">
      <div className="container px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="text-[#F8F8FF] font-display font-bold mb-3">Digital Web Crew</h4>
            <p className="text-sm text-[#94A3B8] mb-4">
              Custom websites, funnels, SEO systems, and automation for growth-focused businesses.
            </p>
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <a href="#" className="hover:text-[#F8F8FF]"><FaLinkedin size={16} /></a>
              <a href="#" className="hover:text-[#F8F8FF]"><FaFacebook size={16} /></a>
              <a href="#" className="hover:text-[#F8F8FF]"><FaInstagram size={16} /></a>
              <a href="#" className="hover:text-[#F8F8FF]"><FaXTwitter size={16} /></a>
              <a href="#" className="hover:text-[#F8F8FF]"><FaGithub size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#F8F8FF] font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/services/custom-software`} className="text-[#94A3B8] hover:text-[#F8F8FF]">Custom Website Dev</Link></li>
              <li><Link href={`/${locale}/services/conversion-funnels`} className="text-[#94A3B8] hover:text-[#F8F8FF]">Conversion Funnels</Link></li>
              <li><Link href={`/${locale}/services/ai-chatbots-automation`} className="text-[#94A3B8] hover:text-[#F8F8FF]">AI Chatbots</Link></li>
              <li><Link href={`/${locale}/services/seo-growth-retainers`} className="text-[#94A3B8] hover:text-[#F8F8FF]">SEO & Growth</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F8F8FF] font-display font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/pricing`} className="text-[#94A3B8] hover:text-[#F8F8FF]">Pricing</Link></li>
              <li><Link href={`/${locale}/process`} className="text-[#94A3B8] hover:text-[#F8F8FF]">Process</Link></li>
              <li><Link href={`/${locale}/case-studies`} className="text-[#94A3B8] hover:text-[#F8F8FF]">Work / Case Studies</Link></li>
              <li><Link href={`/${locale}/industries`} className="text-[#94A3B8] hover:text-[#F8F8FF]">Industries</Link></li>
              <li><Link href={`/${locale}/faqs`} className="text-[#94A3B8] hover:text-[#F8F8FF]">FAQs</Link></li>
              <li><Link href={`/${locale}/about`} className="text-[#94A3B8] hover:text-[#F8F8FF]">About</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-[#94A3B8] hover:text-[#F8F8FF]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F8F8FF] font-display font-bold mb-4">Get Started</h4>
            <div className="space-y-3">
              <Link href={`/${locale}/quote`} className="block text-sm text-center px-4 py-2 rounded-md bg-[#6366F1] text-white hover:bg-[#6366F1]/90">Get Custom Project Scope</Link>
              <Link href={`/${locale}/book-consultation`} className="block text-sm text-center px-4 py-2 rounded-md border border-[#1E1E2E] text-[#F8F8FF] hover:border-[#6366F1]/50">Book Consultation</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E1E2E] pt-6 text-xs text-[#94A3B8] flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <span>© 2026 Digital Web Crew</span>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacy`} className="hover:text-[#F8F8FF]">Privacy Protocol</Link>
            <Link href={`/${locale}/terms`} className="hover:text-[#F8F8FF]">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

