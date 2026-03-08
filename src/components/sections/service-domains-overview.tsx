"use client";

import { serviceDomains } from "@/lib/services-data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Sparkle, Globe, Smartphone, ShoppingCart, Zap, Code2, Server, FileText, Wrench } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<any>> = {
  "Globe": Globe,
  "Smartphone": Smartphone,
  "ShoppingCart": ShoppingCart,
  "Zap": Zap,
  "Code2": Code2,
  "Server": Server,
  "FileText": FileText,
  "Wrench": Wrench,
};

export default function ServiceDomainsOverview({ dict, locale }: { dict: any; locale: string }) {
  return (
    <>
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 md:mb-40 bg-[#0A0A0F] py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 mb-6">
            <Sparkle size={16} strokeWidth={2.5} className="text-[#6366F1] animate-pulse" />
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#6366F1]">
              Service Architecture
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight text-[#F8F8FF]">
            Service<br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Domains
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] font-body leading-relaxed max-w-2xl mx-auto">
            {dict.services.hubDesc}
          </p>
        </AnimatedSection>

        {/* Service Domains Grid */}
        <AnimatedSection className="pb-40 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceDomains.map((domain, i) => {
              const Icon = iconMap[domain.icon] || Globe;
              
              return (
                <Link
                  key={domain.slug}
                  href={`/${locale}/services/${domain.slug}`}
                >
                  <AnimatedSection
                    delay={i * 0.1}
                    className="h-full p-6 rounded-lg group cursor-pointer transition-all duration-300 border border-[#1E1E2E] hover:border-[#6366F1]/50 bg-[#13131E] hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] overflow-hidden relative"
                  >
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 bg-[#6366F1] blur-2xl rounded-full transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 bg-[#6366F1]/10 text-[#6366F1]">
                        <Icon size={24} strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-display font-bold tracking-tight mb-2 text-[#F8F8FF] group-hover:text-[#6366F1] transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] font-body leading-relaxed mb-6">
                        {domain.description}
                      </p>

                      {/* Service Count */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#1E1E2E]">
                        <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#94A3B8]">
                          {domain.categories.length} Service{domain.categories.length !== 1 ? 's' : ''}
                        </span>
                        <ArrowRight size={16} className="text-[#6366F1] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </AnimatedSection>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Premium CTA Section */}
        <AnimatedSection>
          <div className="relative p-12 md:p-20 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-violet-900/30 border border-indigo-500/20 overflow-hidden group">
            {/* Decorative orb */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-[#F8F8FF]">
                  {dict.services.customSolution}
                </h2>
                <p className="text-lg text-[#94A3B8] font-body leading-relaxed">
                  {dict.services.customSolutionDesc}
                </p>
              </div>
              <Link
                href={`/${locale}/quote`}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#6366F1] hover:bg-[#6366F1]/90 text-white font-body font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0"
              >
                <span>{dict.services.getQuote}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </>
    );
  }
