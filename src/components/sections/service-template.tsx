"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/layout-primitives";
import { LucideIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  techStack: { name: string; icon: any; color: string }[];
  outcomes: string[];
  ctaText?: string;
}

export function ServiceTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  techStack,
  outcomes,
  ctaText = "Initiate Project Discovery"
}: ServiceTemplateProps) {
  return (
    <div className="bg-white dark:bg-midnight-950 min-h-screen pt-32 pb-24">
      <Container>
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-widest"
            >
              <Icon size={14} />
              Specialized Laboratory
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight"
            >
              {title} <br />
              <span className="text-electric">{subtitle}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-sm uppercase tracking-wider rounded-xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3">
                {ctaText}
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="p-6 bg-gray-50 dark:bg-midnight-900 rounded-2xl border border-gray-100 dark:border-midnight-800"
              >
                <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <p className="font-bold text-gray-900 dark:text-white">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-24 border-y border-gray-100 dark:border-midnight-800 mb-24">
          <div className="text-center mb-16">
            <h3 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] mb-4">Precision Engineering Stack</h3>
            <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                  <tech.icon className={cn("text-5xl", tech.color)} />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Industrial <span className="text-electric">Outcomes</span></h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Our engineering lab is optimized for these specific KPIs, ensuring your investment translates directly into business value.</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-midnight-900 rounded-2xl border-l-4 border-electric"
              >
                <div className="text-3xl font-black text-electric/30">0{idx + 1}</div>
                <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
