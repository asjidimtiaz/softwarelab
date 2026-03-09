"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../layout/layout-primitives";

interface HeroProps {
  dict: any;
  locale: string;
}

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-20 bg-[#0A0A0F]">
      {/* Gradient mesh orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[40%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30"
          >
            <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
            <span className="text-xs uppercase tracking-widest text-[#6366F1] font-body font-semibold">
              Built for growth-focused businesses
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F8FF] leading-tight max-w-4xl mb-6"
          >
            Custom Websites, Funnels & AI Automation That Turn Traffic Into Qualified Leads
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-12 font-body leading-relaxed"
          >
            We design and build custom digital systems that help growth-focused businesses launch faster, convert better, and automate lead capture with websites, funnels, SEO, and AI-powered workflows.
          </motion.p>

          {/* CTA Buttons and Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-12 w-full"
          >
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/book-consultation`}
                className="bg-[#6366F1] text-white px-8 py-3 rounded-lg hover:bg-[#6366F1]/90 font-body font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href={`/${locale}/quote`}
                className="border border-[#1E1E2E] text-[#F8F8FF] px-8 py-3 rounded-lg hover:bg-[#13131E] font-body font-medium transition-all duration-200 whitespace-nowrap"
              >
                Get Custom Project Scope
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 py-8 border-y border-[#1E1E2E]">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#F8F8FF] font-display">100+</p>
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-body font-semibold mt-2">Systems Built</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#1E1E2E] to-transparent" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#F8F8FF] font-display">99.9%</p>
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-body font-semibold mt-2">Uptime</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#1E1E2E] to-transparent" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#F8F8FF] font-display">94%</p>
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-body font-semibold mt-2">Efficiency</p>
              </div>
            </div>

            {/* Logo Marquee */}
            <div className="w-full overflow-hidden">
              <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-body font-semibold text-center mb-6">
                Trusted by Industry Leaders
              </p>
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="flex gap-12 whitespace-nowrap"
              >
                {[...Array(2)].map((_, batch) =>
                  ["Company A", "Company B", "Company C", "Company D", "Startup X", "Enterprise Y"].map((company, i) => (
                    <div
                      key={`${batch}-${i}`}
                      className="px-6 py-3 border border-[#1E1E2E] rounded-lg bg-[#13131E]/50 text-[#94A3B8] text-sm font-body whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity"
                    >
                      {company}
                    </div>
                  ))
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
