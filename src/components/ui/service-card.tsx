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
        "group relative p-12 rounded-[2.5rem] bg-white transition-all duration-500 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:shadow-[#6366F1]/10 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center h-full",
        isHighlighted && "lg:-translate-y-12 border-2 border-indigo-100 ring-4 ring-indigo-50 shadow-2xl shadow-[#6366F1]/20 z-10"
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-10 text-[#6366F1] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#6366F1] group-hover:text-white group-hover:rotate-6 shadow-inner">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-black mb-6 tracking-tight text-foreground group-hover:text-[#6366F1] transition-colors uppercase tracking-[0.1em] leading-tight">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mb-10 leading-relaxed opacity-90 flex-1">
        {description}
      </p>

      <Link
        href={href}
        className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-xl bg-gray-50 text-gray-900 font-extrabold text-[11px] uppercase tracking-[0.2em] mt-auto hover:bg-white hover:scale-[1.02] transition-all border border-gray-200/50 shadow-sm"
      >
        <span>Discover Laboratory</span>
        <ArrowRight size={14} strokeWidth={3} />
      </Link>

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
