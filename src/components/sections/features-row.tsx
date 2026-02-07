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
        <section className="py-16 bg-white border-b border-gray-100">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110",
                                    feature.iconBg
                                )}>
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                                    <span className={cn(
                                        "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded",
                                        feature.tierColor
                                    )}>
                                        {feature.tier}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
