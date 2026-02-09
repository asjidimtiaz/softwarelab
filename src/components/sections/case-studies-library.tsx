"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/layout-primitives";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Fintech", "AI & Automation", "E-commerce", "SaaS"];

const caseStudies = [
    {
        title: "Global Supply Chain Ledger",
        category: "Fintech",
        metrics: "40% Efficiency Gain",
        description: "Architecting a high-throughput blockchain ledger for real-time logistics tracking.",
        image: "/case-studies/supply-chain.jpg",
        tags: ["Next.js", "PostgreSQL", "AWS"]
    },
    {
        title: "Bloom AI Marketing engine",
        category: "AI & Automation",
        metrics: "70% Manual Task reduction",
        description: "Automating content generation and scheduling for 500+ daily social posts.",
        image: "/case-studies/ai-marketing.jpg",
        tags: ["Python", "OpenAI", "Django"]
    },
    {
        title: "Luxe Fashion Headless Store",
        category: "E-commerce",
        metrics: "25% Conversion Bump",
        description: "Transforming a legacy Shopify store into a ultra-fast headless React application.",
        image: "/case-studies/ecommerce.jpg",
        tags: ["Shopify", "Tailwind", "Vercel"]
    },
    {
        title: "Nova CRM for HR Teams",
        category: "SaaS",
        metrics: "10k+ Daily Users",
        description: "Building an enterprise-grade internal CRM tool with complex permissions logic.",
        image: "/case-studies/crm.jpg",
        tags: ["TypeScript", "Node.js", "Docker"]
    }
];

export function CaseStudiesLibrary() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? caseStudies
        : caseStudies.filter(cs => cs.category === activeCategory);

    return (
        <section className="py-24 bg-white dark:bg-midnight-950">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-widest mb-4"
                        >
                            Industrial Proof
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                            Selected Works & <br />
                            <span className="text-electric">Engineering Outcomes</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${activeCategory === cat
                                        ? "bg-gray-900 border-gray-900 text-white dark:bg-white dark:border-white dark:text-gray-900 shadow-xl"
                                        : "bg-white border-gray-100 text-gray-400 hover:border-gray-200 dark:bg-midnight-900 dark:border-midnight-800 dark:text-gray-500"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filtered.map((cs, idx) => (
                        <motion.div
                            key={cs.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] bg-gray-100 dark:bg-midnight-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-midnight-800 mb-8 transition-all group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-12">
                                    <div className="text-white">
                                        <p className="text-xs font-black uppercase tracking-widest text-electric mb-2">KPI METRIC</p>
                                        <p className="text-4xl font-black">{cs.metrics}</p>
                                    </div>
                                </div>

                                {/* Fallback pattern if no image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-midnight-800 transition-transform duration-700 group-hover:scale-110">
                                    <div className="flex flex-col items-center gap-4 opacity-20 dark:opacity-40">
                                        <Search size={64} className="text-gray-400" />
                                        <p className="font-black uppercase tracking-widest text-sm text-gray-400">Project Snapshot</p>
                                    </div>
                                </div>

                                <div className="absolute top-8 right-8 z-20">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 space-y-4">
                                <div className="flex gap-2">
                                    {cs.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-200 dark:border-midnight-800 px-2 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-electric transition-colors">{cs.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-lg">{cs.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
