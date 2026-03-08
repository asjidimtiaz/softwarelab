import { Container, Section } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Award, Code2, Users2, ShieldCheck, Microscope, Zap, Target, Github, Globe, ExternalLink } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

import { HowItWorks } from "@/components/sections/how-it-works";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0F] dark:bg-[#0A0A0F]" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-32 pb-20">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/20 text-[#6366F1] text-xs font-bold uppercase tracking-widest mb-8">
                <Microscope size={14} />
                The Laboratory Brief
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] text-[#F8F8FF]">
                Expert-Led <br />
                <span className="text-[#6366F1]">Digital Scaling</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed font-medium max-w-xl">
                Digi Web Crew is a specialized engineering lab founded by Toqeer Shafique, dedicated to building high-performance systems for the next generation of industry leaders.
              </p>

              <div className="flex gap-4 mt-12">
                <a href="https://github.com/toqeer74" target="_blank" className="p-4 bg-[#13131E] rounded-2xl border border-[#1E1E2E] hover:border-[#6366F1] transition-colors group">
                  <Github className="text-[#94A3B8] group-hover:text-[#6366F1] transition-colors" size={24} />
                </a>
                <div className="flex-1 p-4 bg-[#13131E] rounded-2xl border border-[#1E1E2E] flex items-center justify-between group hover:border-[#6366F1]">
                  <div>
                    <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">Engineering Lead</p>
                    <p className="font-bold text-[#F8F8FF]">Toqeer Shafique</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
                    <span className="text-[10px] font-black text-[#6366F1] uppercase tracking-widest">Active</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="relative">
              <div className="aspect-square bg-[#13131E] rounded-[4rem] border border-[#1E1E2E] flex items-center justify-center relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/10 via-transparent to-transparent group-hover:scale-110 transition-transform duration-1000" />
                <Code2 size={200} className="text-[#6366F1]/5 group-hover:text-[#6366F1]/10 transition-colors duration-700" strokeWidth={0.5} />

                {/* Visual Trust Stack */}
                <div className="absolute top-12 left-12 grid grid-cols-2 gap-4">
                  <div className="px-4 py-2 bg-[#1E1E2E] rounded-xl shadow-lg border border-[#1E1E2E]">
                    <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">UPWORK</p>
                    <p className="text-xs font-bold text-[#F8F8FF]">TOP RATED</p>
                  </div>
                  <div className="px-4 py-2 bg-[#1E1E2E] rounded-xl shadow-lg border border-[#1E1E2E]">
                    <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">FIVERR</p>
                    <p className="text-xs font-bold text-[#F8F8FF]">EXPERT PRO</p>
                  </div>
                </div>

                <div className="absolute bottom-12 right-12 w-32 h-32 rounded-3xl bg-[#6366F1] flex items-center justify-center shadow-[0_20px_40px_rgba(99,102,241,0.3)] animate-float">
                  <Zap size={48} className="text-[#0A0A0F]" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Section>

        {/* Philosophy / Values */}
        <Section className="bg-[#13131E] border-y border-[#1E1E2E]">
          <AnimatedSection className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-[#F8F8FF]">{dict.about.philosophy}</h2>
            <p className="text-xl text-[#94A3B8] font-medium">{dict.about.philosophyDesc}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "quality", icon: Award, color: "text-[#6366F1]", bg: "bg-[#13131E]" },
              { id: "partner", icon: Users2, color: "text-[#6366F1]", bg: "bg-[#13131E]" },
              { id: "agile", icon: Zap, color: "text-[#6366F1]", bg: "bg-[#13131E]" },
              { id: "security", icon: ShieldCheck, color: "text-[#6366F1]", bg: "bg-[#13131E]" }
            ].map((val, i) => (
              <AnimatedSection key={val.id} delay={i * 0.1} className="p-10 rounded-[2.5rem] bg-[#1E1E2E] border border-[#1E1E2E] group hover:border-[#6366F1]/50 transition-all shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)]">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-[#6366F1]/20 bg-[#6366F1]/10", val.color)}>
                  <val.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight text-[#F8F8FF]">{(dict.about.values as any)[val.id].title}</h4>
                <p className="text-[#94A3B8] leading-relaxed font-medium text-sm">{(dict.about.values as any)[val.id].desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </Section>

        <HowItWorks dict={dict} />

        {/* Global Impact */}

        <Section>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-10 p-16 rounded-[4rem] bg-[#0A0A0F] text-[#F8F8FF] shadow-2xl relative overflow-hidden group border border-[#6366F1]/10">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#6366F1]/20 via-transparent to-transparent opacity-50 group-hover:scale-110 transition-transform duration-1000" />

            <div className="relative z-10 text-center">
              <p className="text-7xl font-black mb-3 tracking-tighter">50+</p>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6366F1]">{dict.about.stats.launched}</p>
            </div>

            <div className="relative z-10 text-center border-y md:border-y-0 md:border-x border-[#6366F1]/10 py-10 md:py-0">
              <p className="text-7xl font-black mb-3 tracking-tighter">99.9%</p>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6366F1]">{dict.about.stats.uptime}</p>
            </div>

            <div className="relative z-10 text-center">
              <p className="text-7xl font-black mb-3 tracking-tighter">15k+</p>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6366F1]">{dict.about.stats.hours}</p>
            </div>
          </AnimatedSection>
        </Section>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
