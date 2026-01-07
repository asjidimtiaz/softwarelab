"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  index: number;
  learnMoreLabel?: string;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  iconName, 
  href, 
  index, 
  learnMoreLabel = "Learn More",
  className
}: ServiceCardProps) {
  const Icon = (Icons as any)[iconName] || Icons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-10 rounded-[2rem] bg-white border border-border transition-all duration-500 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 overflow-hidden flex flex-col h-full",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-8 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
          <Icon size={28} />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 tracking-tight text-foreground group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-10 leading-relaxed font-semibold flex-1 opacity-90">
          {description}
        </p>
        
        <Link 
          href={href}
          className="inline-flex items-center text-xs font-bold text-indigo-600 group/link uppercase tracking-wider mt-auto"
        >
          {learnMoreLabel}
          <div className="ml-3 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover/link:bg-indigo-600 group-hover/link:text-white transition-all duration-300">
            <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Soft Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
    </motion.div>
  );
}
