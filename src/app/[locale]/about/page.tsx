import { Container, Section } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Award, Code2, Users2, ShieldCheck, Microscope, Zap, Target, Heart } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-32 pb-20">
        {/* Intro Section */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-sm font-bold text-primary uppercase tracking-wider">
                <Microscope size={14} className="text-brand-gold" />
                {dict.about.badge}
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-10 leading-[0.9]">
                <span className="text-gradient block">{dict.about.title}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl">
                {dict.about.description}
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="relative">
              <div className="aspect-square glass rounded-[3rem] border border-border/50 flex items-center justify-center relative overflow-hidden premium-shadow group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-brand-gold/5 group-hover:scale-110 transition-transform duration-1000" />
                <Code2 size={160} className="text-primary/10 group-hover:text-primary/20 transition-colors duration-700" strokeWidth={0.5} />
                
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-24 h-24 glass rounded-3xl border border-white/20 flex items-center justify-center animate-bounce duration-[3s]">
                  <Zap size={32} className="text-brand-gold" />
                </div>
                <div className="absolute bottom-12 left-12 w-20 h-20 glass rounded-full border border-white/20 flex items-center justify-center animate-pulse">
                  <Target size={28} className="text-primary" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Section>

        {/* Philosophy / Values */}
        <Section className="bg-secondary/5 border-y border-border/50">
          <AnimatedSection className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">{dict.about.philosophy}</h2>
            <p className="text-xl text-muted-foreground font-medium">{dict.about.philosophyDesc}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "quality", icon: Award, color: "text-brand-gold" },
              { id: "partner", icon: Users2, color: "text-blue-500" },
              { id: "agile", icon: Zap, color: "text-orange-500" },
              { id: "security", icon: ShieldCheck, color: "text-emerald-500" }
            ].map((val, i) => (
              <AnimatedSection key={val.id} delay={i * 0.1} className="p-10 rounded-[2.5rem] glass border border-border/50 group hover:border-primary/30 transition-all hover:premium-shadow">
                <div className={cn("w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-border flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", val.color)}>
                  <val.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{(dict.about.values as any)[val.id].title}</h4>
                <p className="text-muted-foreground leading-relaxed font-medium text-sm">{(dict.about.values as any)[val.id].desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </Section>

        {/* Impact Stats */}
        <Section>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-10 p-16 rounded-[4rem] bg-zinc-950 text-white shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-brand-gold/10 opacity-50 group-hover:scale-110 transition-transform duration-1000" />
            
            <div className="relative z-10 text-center">
              <p className="text-7xl font-black mb-3 tracking-tighter text-gradient-inverse">50+</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{dict.about.stats.launched}</p>
            </div>
            
            <div className="relative z-10 text-center border-y md:border-y-0 md:border-x border-white/10 py-10 md:py-0">
              <p className="text-7xl font-black mb-3 tracking-tighter text-gradient-inverse">99%</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{dict.about.stats.uptime}</p>
            </div>
            
            <div className="relative z-10 text-center">
              <p className="text-7xl font-black mb-3 tracking-tighter text-gradient-inverse">150k+</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{dict.about.stats.hours}</p>
            </div>
          </AnimatedSection>
        </Section>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
