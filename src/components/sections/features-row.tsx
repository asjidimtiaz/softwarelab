"use client";

import { Code2, Zap, Rocket, Palette, ArrowRight } from "lucide-react";
import { Container } from "../layout/layout-primitives";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Complete end-to-end solutions with modern tech stack",
    category: "Full-Stack",
  },
  {
    icon: Zap,
    title: "AI/ML Solutions",
    description: "Leverage machine learning for intelligent automation",
    category: "AI/ML",
  },
  {
    icon: Rocket,
    title: "DevOps & Infrastructure",
    description: "Scalable cloud infrastructure and CI/CD pipelines",
    category: "DevOps",
  },
  {
    icon: Palette,
    title: "Premium Design",
    description: "Beautiful, responsive interfaces that delight users",
    category: "Design",
  },
];

export function FeaturesRow() {
  return (
    <section className="py-24 bg-[#0A0A0F] border-b border-[#1E1E2E]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#6366F1]">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8F8FF] tracking-tight mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-lg text-[#94A3B8] font-body leading-relaxed">
            Comprehensive services designed to transform your business with cutting-edge technology.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group relative p-6 rounded-xl bg-[#13131E] border border-[#1E1E2E] hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] flex flex-col h-full"
              >
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center mb-4 text-[#6366F1] group-hover:bg-[#6366F1]/20 transition-colors">
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-[#F8F8FF] mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] font-body leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Category Tag - appears at bottom */}
                <div className="mt-6 pt-6 border-t border-[#1E1E2E] flex items-center justify-between">
                  <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#6366F1]">
                    {feature.category}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#6366F1] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
