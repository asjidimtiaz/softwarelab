"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    Settings,
    Layers,
    Server,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Mail,
    FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;

interface ConfigValues {
    tier: "MVP" | "Standard" | "Enterprise";
    stack: string[];
    security: string[];
    maintenance: "Bronze" | "Silver" | "Gold";
}

export function ServiceConfigurator() {
    const [step, setStep] = useState<Step>(1);
    const [config, setConfig] = useState<ConfigValues>({
        tier: "Standard",
        stack: ["Next.js", "Tailwind CSS"],
        security: ["SSL", "JWT"],
        maintenance: "Silver",
    });

    const nextStep = () => setStep((s) => (s < 4 ? (s + 1) as Step : s));
    const prevStep = () => setStep((s) => (s > 1 ? (s - 1) as Step : s));

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="text-electric" />
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Project Tier</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {(["MVP", "Standard", "Enterprise"] as const).map((tier) => (
                                <button
                                    key={tier}
                                    onClick={() => setConfig({ ...config, tier })}
                                    className={cn(
                                        "p-6 rounded-2xl border-2 text-left transition-all",
                                        config.tier === tier
                                            ? "border-electric bg-electric/5 dark:bg-electric/10 ring-4 ring-electric/10"
                                            : "border-gray-100 dark:border-midnight-700 hover:border-electric/30"
                                    )}
                                >
                                    <p className="font-black text-xl mb-2 text-gray-900 dark:text-white">{tier}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {tier === "MVP" && "Rapid launch focus"}
                                        {tier === "Standard" && "Scale & performance"}
                                        {tier === "Enterprise" && "Complex infrastructure"}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="text-electric" />
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Tech Stack</h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {["Next.js", "Django", "Tailwind CSS", "PostgreSQL", "AWS", "Python", "React Native", "Docker"].map((tech) => (
                                <button
                                    key={tech}
                                    onClick={() => {
                                        const newStack = config.stack.includes(tech)
                                            ? config.stack.filter((s) => s !== tech)
                                            : [...config.stack, tech];
                                        setConfig({ ...config, stack: newStack });
                                    }}
                                    className={cn(
                                        "p-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-between",
                                        config.stack.includes(tech)
                                            ? "border-electric bg-electric text-white"
                                            : "border-gray-200 dark:border-midnight-700 text-gray-600 dark:text-gray-400"
                                    )}
                                >
                                    {tech}
                                    {config.stack.includes(tech) && <CheckCircle2 size={14} />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="text-electric" />
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Security & Compliance</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {["SSL Encryption", "JWT Auth", "Two-Factor Auth", "SOC2 Compliance", "HIPAA Ready", "GDPR Guard"].map((sec) => (
                                <button
                                    key={sec}
                                    onClick={() => {
                                        const newSec = config.security.includes(sec)
                                            ? config.security.filter((s) => s !== sec)
                                            : [...config.security, sec];
                                        setConfig({ ...config, security: newSec });
                                    }}
                                    className={cn(
                                        "p-4 rounded-xl border text-sm font-bold transition-all flex items-center gap-3",
                                        config.security.includes(sec)
                                            ? "border-electric bg-electric/5 dark:bg-electric/10 text-electric"
                                            : "border-gray-200 dark:border-midnight-700 text-gray-600 dark:text-gray-400"
                                    )}
                                >
                                    <div className={cn(
                                        "w-5 h-5 rounded border flex items-center justify-center",
                                        config.security.includes(sec) ? "bg-electric border-electric text-white" : "border-gray-300 dark:border-midnight-600"
                                    )}>
                                        {config.security.includes(sec) && <CheckCircle2 size={12} />}
                                    </div>
                                    {sec}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="text-electric" />
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Review Your Scope</h4>
                        </div>
                        <div className="bg-gray-50 dark:bg-midnight-950 p-6 rounded-2xl border border-gray-100 dark:border-midnight-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Project Architecture</p>
                                    <p className="text-xl font-black text-gray-900 dark:text-white mb-4">{config.tier} Infrastructure</p>

                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Technical Core</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {config.stack.map(s => (
                                            <span key={s} className="px-2 py-1 bg-electric/10 text-electric rounded text-[10px] font-bold uppercase">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Security Standard</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {config.security.map(s => (
                                            <span key={s} className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded text-[10px] font-bold uppercase">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3">
                                <Mail size={18} />
                                Send Customized Project PDF
                            </button>
                        </div>
                    </motion.div>
                );
        }
    };

    return (
        <div className="bg-white dark:bg-midnight-800 rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-midnight-700 shadow-2xl overflow-hidden">
            {/* Progress Bar */}
            <div className="flex items-center gap-2 mb-10">
                {[1, 2, 3, 4].map((s) => (
                    <div
                        key={s}
                        className={cn(
                            "h-1.5 flex-1 rounded-full transition-all duration-500",
                            s <= step ? "bg-electric" : "bg-gray-100 dark:bg-midnight-900"
                        )}
                    />
                ))}
            </div>

            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {renderStep()}
                </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-gray-100 dark:border-midnight-700 pt-8">
                <button
                    onClick={prevStep}
                    disabled={step === 1}
                    className={cn(
                        "flex items-center gap-2 text-sm font-bold transition-all",
                        step === 1 ? "opacity-0 pointer-events-none" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    )}
                >
                    <ChevronLeft size={18} />
                    Back
                </button>

                {step < 4 && (
                    <button
                        onClick={nextStep}
                        className="px-8 py-3 bg-electric text-white font-bold text-sm rounded-xl shadow-lg shadow-electric/20 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                    >
                        Inhale Strategy
                        <ChevronRight size={18} />
                    </button>
                )}
            </div>
        </div>
    );
}
