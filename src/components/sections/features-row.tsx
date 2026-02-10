"use client";

import { Code2, Zap, Rocket, Palette } from "lucide-react";
import { Container } from "../layout/layout-primitives";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: Code2,
        title: "Base Architecture",
        description: "Solid foundation for scalable apps",
        tier: "FREE",
        tierColor: "text-gray-500 bg-gray-100",
        iconBg: "bg-orange-100 text-orange-500",
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "Optimized for core web vitals",
        tier: "PRO",
        tierColor: "text-orange-500 bg-orange-50",
        iconBg: "bg-gray-50 text-gray-400",
    },
    {
        icon: Rocket,
        title: "Rapid Deployment",
        description: "CI/CD pipelines ready to go",
        tier: "PRO",
        tierColor: "text-orange-500 bg-orange-50",
        iconBg: "bg-gray-50 text-gray-400",
    },
    {
        icon: Palette,
        title: "Premium Design",
        description: "Pixel-perfect UI components",
        tier: "PRO",
        tierColor: "text-orange-500 bg-orange-50",
        iconBg: "bg-gray-50 text-gray-400",
    },
];

export function FeaturesRow() {
    return (
        <section className="py-24 bg-white dark:bg-midnight-950 border-b border-gray-100 dark:border-midnight-800">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                        Core Advantages
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
                        Built for <span className="text-electric">Scale & Speed</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        Engineered for performance, designed for growth. We build systems that scale effortlessly with your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div key={i} className="group relative p-8 rounded-3xl bg-white dark:bg-midnight-800 border border-gray-100 dark:border-midnight-700 shadow-xl hover:shadow-2xl hover:border-electric/30 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-full">
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-lg",
                                    feature.iconBg
                                )}>
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-electric transition-colors">{feature.title}</h3>
                                    {feature.tier && (
                                        <span className={cn(
                                            "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                                            feature.tierColor
                                        )}>
                                            {feature.tier}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
