"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkle, Code2, Rocket, Zap, Check, Star } from "lucide-react";
import Link from "next/link";
import { Container } from "../layout/layout-primitives";
import { AnimatedSection } from "../AnimatedSection";
import { cn } from "@/lib/utils";

interface HeroProps {
  dict: any;
  locale: string;
}

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#4C1D95] z-10 w-full">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-indigo-400/20 blur-[100px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh] pb-20 pt-4">

          {/* Left Side: Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 px-10 py-4 rounded-full border border-white text-white mb-12 text-[11px] font-bold uppercase tracking-[0.4em]"
            >
              <Sparkle size={16} strokeWidth={2.5} className="text-white" />
              <span>{dict.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05] text-white"
            >
              {dict.hero.title1} <br />
              <span className="text-indigo-200">{dict.hero.title2} {dict.hero.title3}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-indigo-50/70 mb-8 leading-relaxed font-medium max-w-lg"
            >
              {dict.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-8"
            >
              <Link
                href={`/${locale}/quote`}
                className="h-16 px-10 rounded-xl bg-gray-50 text-gray-900 font-extrabold text-[13px] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:bg-white hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-[0.15em] border border-white"
              >
                <span>{dict.hero.ctaPrimary}</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-11 h-11 rounded-full border-4 border-[#6366F1] bg-indigo-200 overflow-hidden shadow-xl">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=system${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-widest mt-1.5">100+ Systems Built</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-white/20 flex flex-col min-h-[440px]">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-6 py-4 bg-gray-50/50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="mx-auto h-5 w-48 bg-white rounded-lg border border-gray-100/50 flex items-center px-3">
                  <div className="h-1.5 w-full bg-gray-100 rounded-full" />
                </div>
              </div>

              <div className="p-8 space-y-12 flex-1 flex flex-col justify-center">
                {/* Data Bars */}
                <div className="space-y-8">
                  {[
                    { label: dict.hero.stats.efficiency, val: 94, color: "from-indigo-500 to-blue-400" },
                    { label: dict.hero.stats.scalability, val: 88, color: "from-purple-500 to-indigo-400" },
                    { label: dict.hero.stats.uptime, val: 99, color: "from-emerald-400 to-teal-400" }
                  ].map((bar, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        <span>{bar.label}</span>
                        <span className="text-[#6366F1]">{bar.val}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100 p-[2px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.val}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "anticipate" }}
                          className={`h-full bg-gradient-to-r ${bar.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative summary footer */}
                <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-[#6366F1]">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1.5">Total Scale</p>
                      <p className="text-xs font-bold text-gray-800 leading-none">Global Coverage</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] font-black text-[#6366F1]">99.9%</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Industry Lead</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Status Badge - Premium Pill Style */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-6 pl-5 pr-8 py-4 bg-white rounded-[2rem] shadow-[0_24px_48px_-8px_rgba(0,0,0,0.12)] z-20 flex items-center gap-4 border border-gray-100/80"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-[1.25rem] flex items-center justify-center text-emerald-500 shrink-0">
                <Check size={28} strokeWidth={3} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.25em] leading-none mb-1.5">Status</p>
                <p className="text-lg font-extrabold text-gray-900 leading-none tracking-tight">Accepting Sprints</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>

      {/* Wavy Divider - Compressed */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto min-w-[1440px] translate-y-px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
