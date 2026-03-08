"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "../layout/layout-primitives";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO @ Fintech Innovators",
    content: "Building an enterprise system with Digi Web Crew was the best decision we made this year. Their engineering standard is unparalleled.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom AI",
    content: "Toqeer's deep expertise in AI automation transformed our manual pipelines into a scalable asset. Fast, reliable, and truly expert-led development.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "VP Engineering, ScaleUp",
    content: "Zero friction from discovery to deployment. High-performance code that handles our traffic with ease and reliability.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0F] border-b border-[#1E1E2E]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#6366F1]">
              Trusted by Leaders
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-[#F8F8FF] tracking-tight mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-lg text-[#94A3B8] font-body leading-relaxed">
            Hear from global leaders who trust Digi Web Crew for their mission-critical infrastructure.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#13131E] p-8 rounded-xl border border-[#1E1E2E] hover:border-[#6366F1]/30 transition-all duration-300 group relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote size={32} className="text-[#6366F1]" />
              </div>

              {/* Star rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#22C55E] text-[#22C55E]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#94A3B8] font-body leading-relaxed mb-8 italic text-sm">
                "{t.content}"
              </p>

              {/* Author info */}
              <div className="pt-6 border-t border-[#1E1E2E]">
                <p className="text-[#F8F8FF] font-display font-bold text-sm leading-none mb-1">
                  {t.name}
                </p>
                <p className="text-[#6366F1] text-xs font-body font-semibold uppercase tracking-widest">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Marquee / Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="py-8 border-y border-[#1E1E2E]"
        >
          <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-body font-semibold text-center mb-6">
            Verified Credentials
          </p>
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...Array(2)].map((_, batch) => (
              <div key={batch} className="flex gap-12">
                <div className="px-6 py-3 border border-[#1E1E2E] rounded-lg bg-[#13131E]/50 text-[#94A3B8] text-xs font-body font-semibold uppercase tracking-widest whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
                  Upwork Verified
                </div>
                <div className="px-6 py-3 border border-[#1E1E2E] rounded-lg bg-[#13131E]/50 text-[#94A3B8] text-xs font-body font-semibold uppercase tracking-widest whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
                  Fiverr Pro
                </div>
                <div className="px-6 py-3 border border-[#1E1E2E] rounded-lg bg-[#13131E]/50 text-[#94A3B8] text-xs font-body font-semibold uppercase tracking-widest whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
                  GitHub Verified
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
