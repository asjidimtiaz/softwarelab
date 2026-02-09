"use client";

import { motion } from "framer-motion";
import {
    Search,
    PenTool,
    Code2,
    CheckCircle2,
    Rocket
} from "lucide-react";
import { Container } from "../layout/layout-primitives";
import { cn } from "@/lib/utils";

const stages = [
    {
        icon: Search,
        title: "Discovery & Logic Mapping",
        description: "Deep dive into business logic, user journeys, and technical architecture.",
        color: "bg-blue-500",
        delay: 0.1
    },
    {
        icon: PenTool,
        title: "High-Fidelity Prototyping",
        description: "Creating interactive blueprints to validate UX before coding starts.",
        color: "bg-purple-500",
        delay: 0.2
    },
    {
        icon: Code2,
        title: "Agile Development Sprints",
        description: "Clean, scalable code delivered in iterative cycles with regular demos.",
        color: "bg-electric",
        delay: 0.3
    },
    {
        icon: CheckCircle2,
        title: "Automated QA Testing",
        description: "Comprehensive unit, integration, and performance testing protocols.",
        color: "bg-emerald-500",
        delay: 0.4
    },
    {
        icon: Rocket,
        title: "Deployment & Scaling",
        description: "Production launch with active monitoring and performance optimization.",
        color: "bg-orange-500",
        delay: 0.5
    }
];

export function ProcessVisualization() {
    return (
        <section className="py-24 bg-white dark:bg-midnight-950 overflow-hidden">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                        Our Methodology
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6"
                    >
                        Engineering Excellence, <br />
                        <span className="text-electric">By Design</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 font-medium"
                    >
                        A proven 5-stage framework that transforms complex challenges into scalable, production-ready digital assets.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-midnight-800 -translate-y-1/2 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {stages.map((stage, idx) => (
                            <motion.div
                                key={stage.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: stage.delay, type: "spring", stiffness: 100 }}
                                className="group relative"
                            >
                                {/* Stage Number (Background) */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-gray-50 dark:text-midnight-900/40 -z-10 transition-colors group-hover:text-electric/10">
                                    {idx + 1}
                                </div>

                                <div className="bg-white dark:bg-midnight-900 rounded-3xl p-8 border border-gray-100 dark:border-midnight-800 shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-electric/30 dark:hover:border-electric/50 transition-all hover:-translate-y-2 flex flex-col items-center text-center h-full">
                                    <div className={cn(
                                        "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg",
                                        stage.color
                                    )}>
                                        <stage.icon size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-tight">
                                        {stage.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {stage.description}
                                    </p>
                                </div>

                                {/* Arrow (Mobile/Small Tablets) */}
                                {idx < stages.length - 1 && (
                                    <div className="lg:hidden flex justify-center py-4">
                                        <div className="w-0.5 h-8 bg-gray-200 dark:bg-midnight-800" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block p-1 rounded-2xl bg-gray-50 dark:bg-midnight-900 border border-gray-200 dark:border-midnight-800">
                        <div className="flex flex-col md:flex-row items-center gap-6 px-8 py-4">
                            <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
                                Ready to initiate the first stage?
                            </p>
                            <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                                Start Discovery Phase
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
