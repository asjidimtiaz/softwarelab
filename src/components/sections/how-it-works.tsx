"use client";

import { motion } from "framer-motion";
import { Container, Section } from "../layout/layout-primitives";
import { Search, PenTool, Code2, Rocket, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

interface HowItWorksProps {
    dict: any;
}

const icons = [Search, PenTool, Code2, Rocket, HeartHandshake];

export function HowItWorks({ dict }: HowItWorksProps) {
    const stepsData = dict.process.steps;
    const steps = Object.keys(stepsData).map((key, index) => ({
        id: index + 1,
        title: stepsData[key].title,
        desc: stepsData[key].desc,
        Icon: icons[index] || Code2,
    }));

    return (
        <Section className="bg-[#0A0A0F] relative overflow-hidden py-12 md:py-20 border-b border-[#1E1E2E]">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
                        <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#6366F1]">
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F8F8FF] tracking-tight mb-6">
                        How It Works
                    </h2>
                    <p className="text-lg text-[#94A3B8] font-body leading-relaxed">
                        A streamlined methodology built for modern software development and digital transformation.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Center connecting line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1] via-[#8B5CF6]/50 to-transparent transform -translate-x-1/2" />

                    {/* Timeline Steps */}
                    {steps.map((step, index) => {
                        const Icon = step.Icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative mb-16 last:mb-0"
                            >
                                <div className={cn(
                                    "flex gap-8 md:gap-12",
                                    isEven ? "md:flex-row-reverse" : ""
                                )}>
                                    {/* Content */}
                                    <div className="flex-1 md:w-1/2 flex flex-col justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className={cn(
                                                "p-6 rounded-lg bg-[#13131E] border border-[#1E1E2E]",
                                                isEven ? "md:mr-8" : "md:ml-8"
                                            )}
                                        >
                                            <h3 className="text-xl font-display font-bold text-[#F8F8FF] mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-[#94A3B8] font-body leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Timeline Circle */}
                                    <div className="relative w-full md:w-auto flex justify-center md:w-1/2">
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.1 }}
                                            className="relative z-10"
                                        >
                                            {/* Outer glow */}
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 rounded-full bg-[#6366F1]/20 blur-xl"
                                                style={{ width: "100px", height: "100px" }}
                                            />
                                            
                                            {/* Circle */}
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] border-4 border-[#0A0A0F] flex items-center justify-center text-white shadow-lg relative">
                                                <Icon size={24} strokeWidth={2} />
                                            </div>

                                            {/* Step number */}
                                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0A0A0F] border border-[#6366F1] flex items-center justify-center text-xs font-display font-bold text-[#6366F1]">
                                                {step.id}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
