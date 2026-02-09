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
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Django", icon: SiDjango, color: "text-[#092E20] dark:text-[#092E20] bg-white rounded p-1" },
    { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-[#FF9900]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
];

export function TechStackDisplay() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-midnight-900 border-y border-gray-100 dark:border-midnight-800">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/3 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-widest"
                        >
                            The Stack
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight"
                        >
                            Engineered for <br />
                            <span className="text-electric">Extreme Scale</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 dark:text-gray-400"
                        >
                            We deploy industrial-grade technologies that ensure your system remains bulletproof under load. No legacy bloat, just pure performance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-4 bg-white dark:bg-midnight-800 rounded-2xl border border-gray-200 dark:border-midnight-700 shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Git Monitoring</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Toqeer Shafique (toqeer74)</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="bg-white dark:bg-midnight-800 p-6 rounded-2xl border border-gray-200 dark:border-midnight-700 shadow-sm flex flex-col items-center justify-center gap-4 transition-all hover:shadow-xl hover:border-electric/30"
                            >
                                <tech.icon className={tech.color} size={40} />
                                <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider">
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
