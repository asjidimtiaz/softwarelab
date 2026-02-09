"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Download, Zap, Code, Server } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalculatorInputs {
    platform: "Web" | "Mobile" | "Both";
    pages: number;
    complexity: number; // 1.0 to 2.5
    apiIntegrations: number;
}

export function AIProjectCalculator() {
    const [inputs, setInputs] = useState<CalculatorInputs>({
        platform: "Web",
        pages: 10,
        complexity: 1.5,
        apiIntegrations: 3,
    });

    const [showResults, setShowResults] = useState(false);

    // Weighted Logic Formula
    const calculateHours = () => {
        const baseHours = (inputs.pages * 12) + (inputs.complexity * 40) + (inputs.apiIntegrations * 15);
        const platformMultiplier = inputs.platform === "Both" ? 1.6 : inputs.platform === "Mobile" ? 1.2 : 1.0;
        return Math.round(baseHours * platformMultiplier);
    };

    const hours = calculateHours();
    const weeks = Math.ceil(hours / 40);
    const estimatedCost = hours * 75; // $75/hour average rate

    const complexityLabels: Record<number, string> = {
        1.0: "Simple Static",
        1.3: "Basic Dynamic",
        1.5: "Standard App",
        1.8: "Complex Features",
        2.0: "Advanced System",
        2.3: "Enterprise Features",
        2.5: "Enterprise Complex",
    };

    const handleDownloadPDF = async () => {
        // TODO: Implement PDF generation via API route
        console.log("PDF Download requested", { inputs, hours, weeks, estimatedCost });
        alert("PDF generation functionality is being developed. Your estimate: " + hours + " hours, " + weeks + " weeks, $" + estimatedCost.toLocaleString());
    };

    return (
        <div className="relative bg-white dark:bg-midnight-800 rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-midnight-700 shadow-2xl dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-electric/10 dark:bg-electric/20 flex items-center justify-center">
                    <Calculator size={24} className="text-electric" />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">AI Project Calculator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Get an instant scope estimate</p>
                </div>
            </div>

            {/* Calculator Form */}
            <div className="space-y-8">
                {/* Platform Selection */}
                <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Platform</label>
                    <div className="grid grid-cols-3 gap-3">
                        {(["Web", "Mobile", "Both"] as const).map((platform) => (
                            <button
                                key={platform}
                                onClick={() => setInputs({ ...inputs, platform })}
                                className={cn(
                                    "px-4 py-3 rounded-xl font-bold text-sm transition-all border-2",
                                    inputs.platform === platform
                                        ? "bg-electric text-white border-electric shadow-lg shadow-electric/30"
                                        : "bg-gray-50 dark:bg-midnight-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-midnight-700 hover:border-electric/50"
                                )}
                            >
                                {platform}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Number of Pages */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Number of Pages/Views</label>
                        <span className="text-2xl font-black text-electric">{inputs.pages}</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={inputs.pages}
                        onChange={(e) => setInputs({ ...inputs, pages: parseInt(e.target.value) })}
                        className="w-full h-3 bg-gray-200 dark:bg-midnight-700 rounded-full appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${inputs.pages}%, #E5E7EB ${inputs.pages}%, #E5E7EB 100%)`
                        }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                        <span>1</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                </div>

                {/* Complexity Factor */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Complexity</label>
                        <span className="text-sm font-black text-electric">{complexityLabels[inputs.complexity]}</span>
                    </div>
                    <input
                        type="range"
                        min="1.0"
                        max="2.5"
                        step="0.3"
                        value={inputs.complexity}
                        onChange={(e) => setInputs({ ...inputs, complexity: parseFloat(e.target.value) })}
                        className="w-full h-3 bg-gray-200 dark:bg-midnight-700 rounded-full appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${((inputs.complexity - 1) / 1.5) * 100}%, #E5E7EB ${((inputs.complexity - 1) / 1.5) * 100}%, #E5E7EB 100%)`
                        }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                        <span>Simple</span>
                        <span>Standard</span>
                        <span>Enterprise</span>
                    </div>
                </div>

                {/* API Integrations */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">API Integrations</label>
                        <span className="text-2xl font-black text-electric">{inputs.apiIntegrations}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={inputs.apiIntegrations}
                        onChange={(e) => setInputs({ ...inputs, apiIntegrations: parseInt(e.target.value) })}
                        className="w-full h-3 bg-gray-200 dark:bg-midnight-700 rounded-full appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(inputs.apiIntegrations / 20) * 100}%, #E5E7EB ${(inputs.apiIntegrations / 20) * 100}%, #E5E7EB 100%)`
                        }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                        <span>0</span>
                        <span>10</span>
                        <span>20</span>
                    </div>
                </div>

                {/* Calculate Button */}
                <button
                    onClick={() => setShowResults(!showResults)}
                    className="w-full py-4 bg-electric hover:bg-electric-dark text-white font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-electric/30 hover:shadow-xl hover:shadow-electric/40 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                    <Zap size={18} />
                    {showResults ? "Update Estimate" : "Calculate Project Scope"}
                </button>
            </div>

            {/* Results Panel */}
            {showResults && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 pt-8 border-t border-gray-200 dark:border-midnight-700 space-y-6"
                >
                    {/* Estimate Box */}
                    <div className="bg-gradient-to-br from-electric/10 to-electric/5 dark:from-electric/20 dark:to-electric/10 rounded-2xl p-6 border border-electric/20">
                        <div className="text-center mb-6">
                            <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-2">Estimated Build Time</p>
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-5xl font-black text-electric">{hours}</span>
                                <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">hours</span>
                            </div>
                            <p className="text-lg font-bold text-gray-600 dark:text-gray-400 mt-2">≈ {weeks} weeks at 40h/week</p>
                        </div>

                        {/* Breakdown */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-3 bg-white/50 dark:bg-midnight-800/50 rounded-xl">
                                <Code size={20} className="text-electric mx-auto mb-2" />
                                <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">Pages</p>
                                <p className="text-lg font-black text-gray-900 dark:text-white">{inputs.pages * 12}h</p>
                            </div>
                            <div className="text-center p-3 bg-white/50 dark:bg-midnight-800/50 rounded-xl">
                                <Zap size={20} className="text-electric mx-auto mb-2" />
                                <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">Complexity</p>
                                <p className="text-lg font-black text-gray-900 dark:text-white">{Math.round(inputs.complexity * 40)}h</p>
                            </div>
                            <div className="text-center p-3 bg-white/50 dark:bg-midnight-800/50 rounded-xl">
                                <Server size={20} className="text-electric mx-auto mb-2" />
                                <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">APIs</p>
                                <p className="text-lg font-black text-gray-900 dark:text-white">{inputs.apiIntegrations * 15}h</p>
                            </div>
                        </div>

                        {/* Estimated Cost */}
                        <div className="text-center py-4 bg-white dark:bg-midnight-900 rounded-xl border border-gray-200 dark:border-midnight-700">
                            <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1">Estimated Investment</p>
                            <p className="text-3xl font-black text-gray-900 dark:text-white">${estimatedCost.toLocaleString()}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Based on $75/hour average rate</p>
                        </div>
                    </div>

                    {/* Download CTA */}
                    <button
                        onClick={handleDownloadPDF}
                        className="w-full py-4 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                    >
                        <Download size={18} />
                        Download Detailed Tech Breakdown
                    </button>

                    <p className="text-xs text-center text-gray-500 dark:text-gray-500">
                        This is an AI-generated estimate. Actual scope may vary based on specific requirements.
                    </p>
                </motion.div>
            )}

            {/* Custom CSS for Slider */}
            <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4);
        }
      `}</style>
        </div>
    );
}
