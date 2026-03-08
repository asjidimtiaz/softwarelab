"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Settings,
  Layers,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Mail,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToolTracking, useFormTracking } from "@/lib/tracking-hooks";
import { useParams } from "next/navigation";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;

interface ConfigValues {
  tier: "MVP" | "Standard" | "Enterprise";
  stack: string[];
  security: string[];
  maintenance: "Bronze" | "Silver" | "Gold";
}

export function ServiceConfigurator() {
  const params = useParams();
  const locale = params?.locale || "en";
  const [step, setStep] = useState<Step>(1);
  const [config, setConfig] = useState<ConfigValues>({
    tier: "Standard",
    stack: ["Next.js", "Tailwind CSS"],
    security: ["SSL", "JWT"],
    maintenance: "Silver",
  });

  const { trackConfiguratorStart, trackConfiguratorComplete } = useToolTracking();
  const { trackPdfDownload } = useFormTracking();

  useEffect(() => {
    trackConfiguratorStart();
  }, [trackConfiguratorStart]);

  const nextStep = () => setStep((s) => (s < 4 ? (s + 1) as Step : s));
  const prevStep = () => setStep((s) => (s > 1 ? (s - 1) as Step : s));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6"><Layers className="text-[#6366F1]" /><h4 className="text-lg font-bold text-[#F8F8FF]">Project Tier</h4></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(["MVP", "Standard", "Enterprise"] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setConfig({ ...config, tier })}
                  className={cn(
                    "p-6 rounded-2xl border-2 text-left transition-all",
                    config.tier === tier ? "border-[#6366F1] bg-[#6366F1]/5 ring-4 ring-[#6366F1]/10" : "border-[#1E1E2E] hover:border-[#6366F1]/30"
                  )}
                >
                  <p className="font-black text-xl mb-2 text-[#F8F8FF]">{tier}</p>
                  <p className="text-xs text-[#94A3B8]">
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
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6"><Settings className="text-[#6366F1]" /><h4 className="text-lg font-bold text-[#F8F8FF]">Tech Stack</h4></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Next.js", "Django", "Tailwind CSS", "PostgreSQL", "AWS", "Python", "React Native", "Docker"].map((tech) => (
                <button
                  key={tech}
                  onClick={() => {
                    const newStack = config.stack.includes(tech) ? config.stack.filter((s) => s !== tech) : [...config.stack, tech];
                    setConfig({ ...config, stack: newStack });
                  }}
                  className={cn(
                    "p-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-between",
                    config.stack.includes(tech) ? "border-[#6366F1] bg-[#6366F1] text-[#F8F8FF]" : "border-[#1E1E2E] text-[#94A3B8]"
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
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6"><Shield className="text-[#6366F1]" /><h4 className="text-lg font-bold text-[#F8F8FF]">Security & Compliance</h4></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["SSL Encryption", "JWT Auth", "Two-Factor Auth", "SOC2 Compliance", "HIPAA Ready", "GDPR Guard"].map((sec) => (
                <button
                  key={sec}
                  onClick={() => {
                    const newSec = config.security.includes(sec) ? config.security.filter((s) => s !== sec) : [...config.security, sec];
                    setConfig({ ...config, security: newSec });
                  }}
                  className={cn(
                    "p-4 rounded-xl border text-sm font-bold transition-all flex items-center gap-3",
                    config.security.includes(sec) ? "border-[#6366F1] bg-[#6366F1]/5 text-[#6366F1]" : "border-[#1E1E2E] text-[#94A3B8]"
                  )}
                >
                  <div className={cn("w-5 h-5 rounded border flex items-center justify-center", config.security.includes(sec) ? "bg-[#6366F1] border-[#6366F1] text-[#F8F8FF]" : "border-[#1E1E2E]")}>
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
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6"><FileText className="text-[#6366F1]" /><h4 className="text-lg font-bold text-[#F8F8FF]">Review Your Scope</h4></div>
            <div className="bg-[#13131E]/40 p-6 rounded-2xl border border-[#1E1E2E]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-black text-[#94A3B8] uppercase tracking-widest mb-2">Project Architecture</p>
                  <p className="text-xl font-black text-[#F8F8FF] mb-4">{config.tier} Infrastructure</p>
                  <p className="text-xs font-black text-[#94A3B8] uppercase tracking-widest mb-2">Technical Core</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {config.stack.map((s) => (
                      <span key={s} className="px-2 py-1 bg-[#6366F1]/10 text-[#6366F1] rounded text-[10px] font-bold uppercase">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-black text-[#94A3B8] uppercase tracking-widest mb-2">Security Standard</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {config.security.map((s) => (
                      <span key={s} className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded text-[10px] font-bold uppercase">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <button
                onClick={() => {
                  trackPdfDownload({ documentName: "Custom_Service_Config", documentType: "scope_pdf" });
                  trackConfiguratorComplete({ tier: config.tier, stack: config.stack, maintenance: config.maintenance });
                }}
                className="w-full py-4 bg-[#13131E] text-[#F8F8FF] font-black text-sm uppercase tracking-wider rounded-xl transition-all border border-[#1E1E2E] hover:bg-[#1E1E2E] hover:border-[#6366F1]/50 flex items-center justify-center gap-3"
              >
                <FileText size={18} />
                Download Scope PDF
              </button>

              <Link href={`/${locale}/quote`} className="w-full py-4 bg-[#6366F1] text-[#F8F8FF] font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-sm hover:scale-[1.02] hover:shadow-[#6366F1]/30 flex items-center justify-center gap-3">
                <Mail size={18} />
                Initiate Industrial Quote
              </Link>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-[#13131E] rounded-3xl p-8 md:p-10 border border-[#1E1E2E] shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className={cn("h-1.5 flex-1 rounded-full transition-all duration-500", s <= step ? "bg-[#6366F1]" : "bg-[#6366F1]/20")} />
        ))}
      </div>

      <div className="min-h-[400px]"><AnimatePresence mode="wait">{renderStep()}</AnimatePresence></div>

      <div className="mt-10 flex items-center justify-between border-t border-[#1E1E2E] pt-8">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className={cn("flex items-center gap-2 text-sm font-bold transition-all", step === 1 ? "opacity-0 pointer-events-none" : "text-[#94A3B8] hover:text-[#F8F8FF]")}
        >
          <ChevronLeft size={18} />
          Back
        </button>

        {step < 4 && (
          <button onClick={nextStep} className="px-8 py-3 bg-[#6366F1] text-[#F8F8FF] font-extrabold text-sm rounded-xl shadow-sm hover:shadow-[#6366F1]/30 hover:scale-105 transition-all flex items-center gap-2 uppercase tracking-widest">
            Inhale Strategy
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
