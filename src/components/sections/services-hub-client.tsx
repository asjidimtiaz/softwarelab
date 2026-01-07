"use client";

import { Container, Section } from "@/components/layout/layout-primitives";
import { serviceCatalog, techLabs } from "@/lib/services-data";
import { ServiceCard } from "@/components/ui/service-card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Sparkles, Filter, Code2, Globe, ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ServicesHub({ dict, locale }: { dict: any; locale: string }) {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredServices = activeFilter === "all" 
    ? serviceCatalog 
    : serviceCatalog.filter(s => s.slug === activeFilter);

  return (
      <main className="flex-1 pt-32 pb-20 overflow-hidden">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 md:mb-40">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass mb-10 text-xs font-black text-primary uppercase tracking-[0.2em] border border-primary/20">
              <Sparkles size={14} className="text-primary animate-pulse" />
              {dict.services.specializations}
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-10 leading-[0.85]">
              <span className="text-gradient block">{dict.services.hubTitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-semibold max-w-2xl mx-auto leading-relaxed opacity-90">
              {dict.services.hubDesc}
            </p>
          </AnimatedSection>

          {/* Filtering System */}
          <AnimatedSection className="mb-24">
            <div className="flex flex-wrap items-center justify-center gap-6">
               <button 
                  onClick={() => setActiveFilter("all")}
                  className={cn(
                    "px-10 py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                    activeFilter === "all" ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30" : "bg-white border-2 border-primary/10 hover:border-primary/50"
                  )}
               >
                  All Labs
               </button>
               {serviceCatalog.map(service => (
                  <button 
                    key={service.slug}
                    onClick={() => setActiveFilter(service.slug)}
                    className={cn(
                      "px-10 py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                      activeFilter === service.slug ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30" : "bg-white border-2 border-primary/10 hover:border-primary/50"
                    )}
                  >
                    {service.title}
                  </button>
               ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-40">
            {filteredServices.map((service, i) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  iconName={service.iconName}
                  href={`/${locale}/services/${service.slug}`}
                  index={i}
                />
              ))}
          </div>

          {/* Tech Labs Engine Section */}
          <Section className="pb-40">
             <AnimatedSection className="text-center mb-24">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10">Built with <span className="text-primary italic">Industrial-Grade</span> Tech</h2>
                <p className="text-muted-foreground font-semibold max-w-xl mx-auto leading-relaxed text-xl opacity-90">
                  Our specialized technology hubs where we master the tools that power your success.
                </p>
             </AnimatedSection>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {techLabs.map((tech, i) => {
                  const Icon = (tech.iconName === "Zap" ? Zap : tech.iconName === "ShoppingCart" ? ShoppingCart : Code2);
                  return (
                    <AnimatedSection 
                      key={tech.slug}
                      delay={i * 0.1}
                      className="p-12 rounded-[3.5rem] bg-white border border-primary/10 transition-all duration-700 hover:border-primary/50 hover:premium-shadow group"
                    >
                       <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <Icon size={40} />
                       </div>
                       <h4 className="text-3xl font-black tracking-tight mb-6">{tech.title}</h4>
                       <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-12 opacity-90">
                          {tech.description}
                       </p>
                       <Link 
                          href={`/${locale}/tech/${tech.slug}`}
                          className="flex h-16 items-center justify-center rounded-[2rem] bg-primary text-white font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                       >
                          View Tech Laboratory
                       </Link>
                    </AnimatedSection>
                  );
                })}
             </div>
          </Section>

          {/* Premium CTA Section */}
          <AnimatedSection>
            <div className="relative p-16 md:p-24 rounded-[4rem] bg-zinc-950 text-white overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-brand-gold/10 opacity-30 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
                    {dict.services.customSolution}
                  </h2>
                  <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                    {dict.services.customSolutionDesc}
                  </p>
                </div>
                <Link
                  href={`/${locale}/quote`}
                  className="group flex h-20 items-center justify-center rounded-full bg-primary px-12 font-black text-xs text-primary-foreground uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 premium-shadow whitespace-nowrap"
                >
                  {dict.services.getQuote}
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </main>
  );
}
