"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Globe, ShoppingCart, Zap, Cloud, ShieldCheck, ArrowRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  index: number;
  isHighlighted?: boolean;
}

const icons: Record<string, any> = {
  Code2, Globe, ShoppingCart, Zap, Cloud, ShieldCheck
};

export function ServiceCard({
  title,
  description,
  href,
  iconName,
  index,
  isHighlighted
}: ServiceCardProps) {
  const Icon = icons[iconName] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "group relative p-8 rounded-3xl bg-white dark:bg-midnight-900 border border-gray-100 dark:border-midnight-800 transition-all duration-500 shadow-xl hover:shadow-2xl hover:border-electric/30 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center h-full",
        isHighlighted && "ring-4 ring-electric/10 border-electric shadow-electric/20 z-10"
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-midnight-800 flex items-center justify-center mb-6 text-gray-900 dark:text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-electric group-hover:text-white group-hover:rotate-6 shadow-lg">
        <Icon size={32} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white group-hover:text-electric transition-colors leading-tight">
        {title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-medium flex-1">
        {description}
      </p>

      <div className="mt-auto relative z-20">
        <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gray-50 dark:bg-midnight-800 text-gray-900 dark:text-white font-bold text-xs uppercase tracking-widest group-hover:bg-electric group-hover:text-white group-hover:scale-105 transition-all border border-gray-100 dark:border-midnight-700 group-hover:border-electric">
          <span>Explore</span>
          <ArrowRight size={14} strokeWidth={2.5} />
        </span>
      </div>

      {/* Full Card Link */}
      <Link href={href} className="absolute inset-0 z-10" aria-label={`Explore ${title}`} />

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
    </motion.div>
  );
}
