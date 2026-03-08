"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../layout/layout-primitives";

interface CtaBannerProps {
  dict: any;
  locale: string;
}

export function CtaBanner({ dict, locale }: CtaBannerProps) {
  return (
    <section className="py-20 bg-[#0A0A0F]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-12 md:p-16 text-center bg-gradient-to-br from-indigo-900/40 to-violet-900/30 border border-indigo-500/20"
        >
          {/* Decorative orb */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[80px]"
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 mb-6"
            >
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#6366F1]">
                Ready to Transform?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-[#F8F8FF] mb-6 leading-tight"
            >
              Let's Build Something<br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-10 font-body leading-relaxed"
            >
              Join hundreds of companies trusting us with their mission-critical infrastructure. Get started today with a custom scope assessment.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href={`/${locale}/quote`}
                className="bg-[#6366F1] hover:bg-[#6366F1]/90 text-white px-8 py-4 rounded-lg font-body font-semibold transition-all duration-200 inline-flex items-center gap-2 whitespace-nowrap"
              >
                Get Custom Scope
                <ArrowRight size={20} />
              </Link>
              <button className="border border-[#6366F1]/30 text-[#F8F8FF] hover:bg-[#6366F1]/10 px-8 py-4 rounded-lg font-body font-semibold transition-all duration-200 whitespace-nowrap">
                Schedule Call
              </button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
