"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiDjango,
  SiLaravel,
  SiDocker,
  SiAmazonwebservices,
  SiPostgresql,
  SiMongodb,
  SiJavascript
} from "react-icons/si";
import { Container } from "../layout/layout-primitives";

const techStack = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-[#F8F8FF]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
  { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "AWS", icon: SiAmazonwebservices, color: "text-[#FF9900]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
];

export function TechStackDisplay() {
  return (
    <section className="py-24 bg-[#0A0A0F] border-y border-[#1E1E2E]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
              <span className="text-xs text-[#6366F1] font-body font-semibold uppercase tracking-widest">
                The Stack
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-[#F8F8FF] tracking-tight leading-tight"
            >
              Engineered for<br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Extreme Scale
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#94A3B8] font-body leading-relaxed"
            >
              We deploy industrial-grade technologies that ensure your system remains bulletproof under load. Pure performance, zero legacy bloat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-[#13131E] rounded-lg border border-[#1E1E2E] hover:border-[#6366F1]/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6366F1] animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8] font-body font-semibold uppercase tracking-widest">Active Development</p>
                  <p className="text-sm font-display font-bold text-[#F8F8FF]">Toqeer Shafique</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Tech Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#13131E] p-6 rounded-lg border border-[#1E1E2E] hover:border-[#6366F1]/50 flex flex-col items-center justify-center gap-4 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
              >
                <tech.icon className={tech.color} size={40} />
                <span className="text-xs font-body font-semibold text-[#94A3B8] uppercase tracking-wider">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
