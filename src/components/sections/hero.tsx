"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Rocket, Zap } from "lucide-react";
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
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[95vh] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -left-[10%] w-[70%] h-[70%] bg-primary/20 blur-[140px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] -right-[15%] w-[50%] h-[50%] bg-blue-400/20 blur-[120px] rounded-full" 
        />
      </div>

      <Container className="relative">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 mb-10 text-sm font-medium text-gray-500"
          >
             <div className="flex items-center gap-2">
               <span className="text-[#61DAFB]"><Rocket size={16} /></span>
               <span>Built for <span className="text-gray-900 font-semibold">Scale</span></span>
             </div>
             <div className="w-1 h-1 rounded-full bg-gray-300" />
             <div className="flex items-center gap-2">
               <span className="text-[#38BDF8]"><Code2 size={16} /></span>
               <span>Styled with <span className="text-gray-900 font-semibold">Precision</span></span>
             </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-7xl md:text-[8rem] font-black tracking-tighter mb-8 leading-[0.9] text-gray-900"
          >
             {dict.hero.title1} {dict.hero.title2}<br/>
             <span className="text-gray-400">{dict.hero.title3}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {dict.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href={`/${locale}/quote`}
              className="group flex items-center justify-center gap-3 h-14 pl-8 pr-6 rounded-full bg-gray-900 text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/20 active:scale-95"
            >
              <span className="font-bold text-base">{dict.hero.ctaPrimary}</span>
              <span className="text-gray-400 text-sm font-normal border-l border-gray-700 pl-3 ml-1 group-hover:text-white transition-colors">Start for free</span>
              <ArrowRight size={16} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Stat Cards */}
        <div className="mt-32 max-w-7xl mx-auto">
           {/* Decorative Line */}
           <div className="relative h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16">
              <div className="absolute left-0 top-0 h-px w-20 bg-gradient-to-r from-transparent to-red-500 animate-slide-right" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <Code2 size={20} />, label: "Base Architecture", badge: "FREE", desc: "Solid foundation for scalable apps" },
                { icon: <Zap size={20} />, label: "High Performance", badge: "PRO", desc: "Optimized for core web vitals" },
                { icon: <Rocket size={20} />, label: "Rapid Deployment", badge: "PRO", desc: "CI/CD pipelines ready to go" },
                { icon: <Sparkles size={20} />, label: "Premium Design", badge: "PRO", desc: "Pixel-perfect UI components" },
              ].map((item, i) => (
                 <div key={i} className="group flex flex-col items-center text-center p-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                      i === 0 ? "bg-[#EA580C] text-white shadow-lg shadow-orange-500/20" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-900"
                    )}>
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="font-bold text-sm text-gray-900">{item.label}</span>
                       <span className={cn(
                         "text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider",
                         item.badge === "FREE" ? "bg-gray-100 border-gray-200 text-gray-500" : "bg-orange-50 border-orange-100 text-orange-600"
                       )}>
                         {item.badge}
                       </span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </Container>
    </section>
  );
}
