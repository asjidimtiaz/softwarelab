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
    <section className="relative pt-24 pb-0 overflow-hidden bg-electric dark:bg-midnight-950 z-10 w-full">
      {/* Background Decorative Circles - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-gradient-to-br from-white/20 to-indigo-300/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-gradient-to-tr from-indigo-400/30 to-purple-400/20 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-white/10 blur-[100px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh] pb-20 pt-4">

          {/* Left Side: Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white mb-12 text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
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
            <div className="relative z-10 bg-white/90 dark:bg-midnight-900/95 backdrop-blur-2xl shadow-[0_32px_80px_-20px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.9)_inset] dark:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.6)] rounded-[2.5rem] overflow-hidden border border-white/40 dark:border-midnight-700 flex flex-col min-h-[480px]">
              {/* Browser Header - Premium */}
              <div className="flex items-center gap-2 px-6 py-4 bg-gradient-to-b from-gray-50 to-white dark:from-midnight-800 dark:to-midnight-900 border-b border-gray-100/80 dark:border-midnight-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-[0_2px_4px_rgba(239,68,68,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-[0_2px_4px_rgba(251,191,36,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-[0_2px_4px_rgba(52,211,153,0.3)]" />
                </div>
                <div className="mx-auto h-6 w-52 bg-gray-50 dark:bg-midnight-800 rounded-lg border border-gray-100 dark:border-midnight-700 flex items-center px-3 shadow-inner">
                  <div className="h-2 w-full bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-full" />
                </div>
              </div>

              <div className="p-10 space-y-10 flex-1 flex flex-col justify-center">
                {/* Data Bars - Enhanced */}
                <div className="space-y-8">
                  {[
                    { label: dict.hero.stats.efficiency, val: 94, color: "from-electric to-blue-400", glow: "rgba(59,130,246,0.4)" },
                    { label: dict.hero.stats.scalability, val: 88, color: "from-purple-500 to-indigo-400", glow: "rgba(139,92,246,0.4)" },
                    { label: dict.hero.stats.uptime, val: 99, color: "from-emerald-400 to-teal-400", glow: "rgba(52,211,153,0.4)" }
                  ].map((bar, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between text-[11px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                        <span>{bar.label}</span>
                        <span className="text-electric font-black">{bar.val}%</span>
                      </div>
                      <div className="h-3.5 w-full bg-gray-100/80 dark:bg-midnight-800 rounded-full overflow-hidden border border-gray-200/50 dark:border-midnight-700 p-[3px] shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.val}%` }}
                          transition={{ duration: 1.8, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full bg-gradient-to-r ${bar.color} rounded-full relative`}
                          style={{ boxShadow: `0 0 16px ${bar.glow}` }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative summary footer - Premium */}
                <div className="pt-8 border-t border-gray-100/80 dark:border-midnight-700 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric/20 to-indigo-100 dark:from-electric/30 dark:to-midnight-800 flex items-center justify-center text-electric shadow-lg shadow-electric/10">
                      <Rocket size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] leading-none mb-2">Total Scale</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">Global Coverage</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-electric tracking-tight">99.9%</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] leading-none">Industry Lead</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Status Badge - Ultra Premium */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-8 pl-6 pr-10 py-6 bg-white/95 dark:bg-midnight-900/95 backdrop-blur-2xl rounded-[2rem] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.8)_inset] dark:shadow-[0_32px_80px_-12px_rgba(0,0,0,0.6)] z-20 flex items-center gap-5 border border-white/50 dark:border-midnight-700"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-400/30">
                  <Check size={32} strokeWidth={3} />
                </div>
                {/* Animated pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-2xl border-2 border-emerald-400"
                />
              </div>
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] leading-none mb-2">System Status</p>
                <p className="text-xl font-black text-gray-900 dark:text-white leading-none tracking-tight">Accepting Sprints</p>
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
            fill="currentColor"
            className="text-white dark:text-midnight-950"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
