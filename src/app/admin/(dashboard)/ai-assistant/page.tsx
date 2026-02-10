"use client";

import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, Bot, Zap, MessageSquare, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIAssistantPage() {
    const features = [
        { title: "Logic Mapping", desc: "AI-driven architecture blueprints based on lead intent.", icon: BrainCircuit, color: "text-blue-500" },
        { title: "Scope Extraction", desc: "Automated cost and timeline estimations for new inquiries.", icon: Zap, color: "text-amber-500" },
        { title: "Drafting Assistant", desc: "AI-powered proposal generation and technical responses.", icon: Bot, color: "text-electric" },
    ];

    return (
        <div className="space-y-10 pb-12">
            <div className="flex flex-col gap-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-[10px] font-black uppercase tracking-widest w-fit"
                >
                    <Sparkles size={12} />
                    Experimental Feature
                </motion.div>
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-gray-900 uppercase">AI <span className="text-electric">Assistant</span></h1>
                    <p className="text-lg font-bold text-gray-400 mt-2 italic flex items-center gap-2">
                        <Terminal size={18} />
                        Unified Intelligence Layer Operational.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="rounded-[2rem] border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all h-full group">
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-2xl ${feature.color.replace('text', 'bg').replace('-500', '/10')} flex items-center justify-center ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={24} />
                                </div>
                                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="rounded-[3rem] border-dashed border-2 border-gray-100 bg-gray-50/50 p-12 flex flex-col items-center text-center justify-center min-h-[300px]">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-300 mb-6">
                    <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-400">Initialize Neural Processing</h3>
                <p className="max-w-md text-gray-400 font-medium mt-2">Connect your logic mapping module to start generating AI-driven insights for your leads.</p>
                <button className="mt-8 px-8 h-12 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-900/20">
                    Connect Modules
                </button>
            </Card>
        </div>
    );
}
