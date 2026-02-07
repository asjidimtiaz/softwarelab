"use client";

import { Container, Section } from "../layout/layout-primitives";
import { AnimatedSection } from "../AnimatedSection";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2, Zap, Rocket, ShieldCheck, Heart, ChevronRight, Box } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceTemplateProps {
  category: any;
  subService?: any;
  dict: any;
  locale: string;
}

export function ServiceTemplate({ category, subService, dict, locale }: ServiceTemplateProps) {
  const data = subService || category;
  const isSubService = !!subService;
  const Icon = (Icons as any)[data.iconName || category.iconName] || Icons.Circle;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="pt-24 bg-secondary/5 border-b border-border/30">
          <Container>
            <div className="py-4 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground overflow-x-auto no-scrollbar whitespace-nowrap">
              <Link href={`/${locale}`} className="hover:text-primary transition-colors">{dict.services.breadcrumbs.home}</Link>
              <ChevronRight size={12} className="opacity-30" />
              <Link href={`/${locale}/services`} className="hover:text-primary transition-colors">{dict.services.breadcrumbs.services}</Link>
              <ChevronRight size={12} className="opacity-30" />
              <Link
                href={`/${locale}/services/${category.slug}`}
                className={cn("hover:text-primary transition-colors", !isSubService && "text-primary")}
              >
                {category.title}
              </Link>
              {isSubService && (
                <>
                  <ChevronRight size={12} className="opacity-30" />
                  <span className="text-primary">{subService.title}</span>
                </>
              )}
            </div>
          </Container>
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-secondary/5 border-b border-border/50">
          {/* Background Decor */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"
            />
          </div>

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <AnimatedSection direction="right" className="flex flex-col items-start">
                  <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/10 text-white border border-white mb-8 text-[11px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
                    <Icons.Sparkle size={16} strokeWidth={2.5} className="text-white" />
                    {isSubService ? category.title : dict.services.specializations}
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
                    <span className="text-gradient block">{data.title}</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-xl leading-relaxed">
                    {data.description}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <Link
                      href={`/${locale}/quote`}
                      className="group flex h-16 items-center justify-center rounded-xl bg-gray-50 text-gray-900 font-extrabold text-[13px] px-10 uppercase tracking-[0.2em] transition-all hover:bg-white hover:scale-[1.02] active:scale-95 border border-white shadow-lg shadow-black/5"
                    >
                      <span>{dict.services.fastQuote}</span>
                      <ArrowRight size={18} strokeWidth={2.5} className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection direction="left" className="relative group">
                <div className="aspect-[4/3] glass rounded-[3rem] border border-border/50 flex items-center justify-center relative overflow-hidden premium-shadow">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-brand-gold/5 opacity-50" />
                  <Icon size={180} className="text-primary/10 group-hover:text-primary/20 transition-all duration-700 group-hover:scale-110" strokeWidth={0.5} />

                  {/* Floating Features */}
                  {(data.features || []).slice(0, 3).map((feat: string, i: number) => (
                    <div
                      key={feat}
                      className={cn(
                        "absolute glass px-6 py-3 rounded-2xl border border-white/20 shadow-xl text-[10px] font-black uppercase tracking-widest hidden md:block",
                        i === 0 && "top-10 left-10",
                        i === 1 && "bottom-12 right-12",
                        i === 2 && "top-1/2 -right-8 -translate-y-1/2"
                      )}
                    >
                      {feat}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Deliverables / Sub-services Section */}
        {!isSubService ? (
          <Section className="py-24 md:py-32">
            <Container>
              <AnimatedSection className="mb-20">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">Sub-Specializations</h2>
                <div className="w-24 h-2 bg-primary rounded-full" />
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(category.subServices || []).map((sub: any, i: number) => (
                  <AnimatedSection
                    key={sub.slug}
                    delay={i * 0.1}
                    className="group p-10 rounded-[2.5rem] glass border border-border/50 hover:border-primary/30 transition-all duration-500 hover:premium-shadow flex flex-col gap-6 h-full"
                  >
                    <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{sub.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed flex-1">
                      {sub.description}
                    </p>
                    <Link
                      href={`/${locale}/services/${category.slug}/${sub.slug}`}
                      className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-xl bg-gray-50 text-gray-900 font-extrabold text-[11px] uppercase tracking-[0.2em] mt-auto hover:bg-white hover:scale-[1.02] transition-all border border-gray-200/50 shadow-sm"
                    >
                      <span>Explore Lab</span> <ArrowRight size={14} strokeWidth={3} />
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </Container>
          </Section>
        ) : (
          <Section className="py-24 md:py-32 bg-secondary/5">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <AnimatedSection>
                  <h2 className="text-4xl font-extrabold tracking-tighter mb-12">Industrial Deliverables</h2>
                  <div className="space-y-4">
                    {subService.deliverables.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-6 rounded-2xl glass border border-border/30">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <Box size={20} />
                        </div>
                        <span className="font-bold tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="left">
                  <h2 className="text-4xl font-extrabold tracking-tighter mb-12">The Lab Stack</h2>
                  <div className="flex flex-wrap gap-4">
                    {subService.techStack.map((tech: string) => (
                      <div key={tech} className="px-6 py-4 rounded-2xl glass border border-border/50 font-black text-xs uppercase tracking-widest hover:border-primary/40 transition-colors">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 italic text-muted-foreground">
                    "Every laboratory is equipped with the latest versions of these tools, ensuring your code is future-proof from Day 1."
                  </div>
                </AnimatedSection>
              </div>
            </Container>
          </Section>
        )}

        {/* Key Features */}
        <Section className="py-24 md:py-32">
          <Container>
            <AnimatedSection className="mb-20 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">{dict.services.keyFeatures}</h2>
              <div className="w-24 h-2 bg-primary rounded-full mx-auto lg:mx-0" />
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(data.features || []).map((feat: string, i: number) => (
                <AnimatedSection
                  key={feat}
                  delay={i * 0.1}
                  className="p-10 rounded-[2.5rem] glass border border-border/50 hover:border-primary/30 transition-all duration-500 hover:premium-shadow flex flex-col gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight">{feat}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Industrial-grade implementation of {feat.toLowerCase()} focused on longevity and scale.
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </Section>

        {/* Outcomes Section */}
        <Section className="bg-zinc-950 text-white py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10" />
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection direction="right">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                  <span className="text-gradient from-white to-zinc-500 block">{dict.services.expectedOutcomes}</span>
                </h2>
                <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-10 max-w-xl">
                  We don't just deliver code; we deliver measurable business impact and technical excellence.
                </p>
                <div className="space-y-6">
                  {(data.outcomes || []).map((outcome: string) => (
                    <div key={outcome} className="flex items-center gap-4 text-lg font-bold">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        <Rocket size={18} />
                      </div>
                      {outcome}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" className="grid grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, label: "Secure", color: "text-emerald-500" },
                  { icon: Zap, label: "Performant", color: "text-brand-gold" },
                  { icon: Rocket, label: "Scalable", color: "text-blue-500" },
                  { icon: Heart, label: "Premium", color: "text-primary" }
                ].map((item, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-colors">
                    <item.icon size={48} className={cn("mb-2 group-hover:scale-110 transition-transform", item.color)} strokeWidth={1} />
                    <p className="text-xs font-black uppercase tracking-[0.2em]">{item.label}</p>
                  </div>
                ))}
              </AnimatedSection>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section className="md:py-48 py-32 overflow-hidden relative">
          <Container className="relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-10 leading-[0.9]">
                Ready to architect your <span className="text-primary italic">next big leap?</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link
                  href={`/${locale}/quote`}
                  className="group flex h-20 items-center justify-center rounded-xl bg-gray-50 text-gray-900 font-extrabold text-[13px] px-12 uppercase tracking-[0.2em] transition-all hover:bg-white hover:scale-[1.02] active:scale-95 border border-white shadow-xl shadow-black/5"
                >
                  <span>{dict.services.getQuote}</span>
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="flex h-20 items-center justify-center rounded-xl bg-white/5 border border-white/20 px-12 font-extrabold text-[13px] text-white uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  {dict.services.strategyCall}
                </Link>
              </div>
            </AnimatedSection>
          </Container>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-t from-primary/5 to-transparent -z-10" />
        </Section>
      </main>
    </div>
  );
}
