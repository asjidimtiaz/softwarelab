import { Container, Section } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getCaseStudies } from "@/lib/content-engine";
import Link from "next/link";
import { Briefcase, MapPin, ArrowRight, ExternalLink, Sparkles, Target, Zap } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const studies = await getCaseStudies();
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-32 pb-20">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-sm font-bold text-primary uppercase tracking-wider">
              <Sparkles size={14} className="text-brand-gold" />
              {dict.caseStudies.hubTitle} 
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              <span className="text-gradient block">Industrial</span>
              <span className="text-foreground">Proof</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              {dict.caseStudies.hubDesc}
            </p>
          </AnimatedSection>

          <div className="space-y-40 pb-32">
            {studies.map((study, i) => (
              <AnimatedSection 
                key={study.slug}
                direction={i % 2 === 0 ? "right" : "left"}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                {/* Image Side */}
                <div className={cn(
                  "aspect-[4/3] glass rounded-[3rem] border border-border/50 shadow-2xl relative overflow-hidden group-hover:premium-shadow transition-all duration-700",
                  i % 2 === 1 ? 'lg:order-last' : ''
                )}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-brand-gold/5 opacity-50 transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center select-none">
                        <span className="font-black text-[120px] text-primary/5 uppercase tracking-tighter transition-all duration-700 group-hover:scale-110 group-hover:text-primary/10">
                            {study.client.charAt(0)}
                        </span>
                    </div>
                    <div className="absolute bottom-8 left-8 glass px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
                        <Target size={18} className="text-primary" />
                        <span className="text-xs font-black uppercase tracking-widest">{study.industry}</span>
                    </div>
                </div>

                {/* Content Side */}
                <div className="space-y-10">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{study.year}</span>
                            <div className="w-12 h-px bg-border" />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{study.client}</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-[0.9] group-hover:text-gradient transition-all duration-300">
                            {study.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            {study.excerpt}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{dict.caseStudies.outcomes}</h4>
                            <ul className="space-y-3">
                                {study.outcomes.slice(0, 3).map(o => (
                                    <li key={o} className="flex items-start gap-3 text-sm font-bold tracking-tight">
                                        <div className="mt-1 w-5 h-5 rounded-full glass border border-primary/20 flex items-center justify-center shrink-0">
                                            <Zap size={10} className="text-primary" strokeWidth={4} />
                                        </div>
                                        {o}
                                    </li>
                                ))}
                            </ul>
                       </div>
                       <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{dict.caseStudies.techStack}</h4>
                            <div className="flex flex-wrap gap-2">
                                {study.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 rounded-xl glass border border-border text-[10px] font-black uppercase tracking-widest">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                       </div>
                    </div>

                    <div className="pt-6 flex items-center gap-10">
                        <Link 
                            href={`/${locale}/case-studies/${study.slug}`}
                            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all premium-shadow"
                        >
                            {dict.caseStudies.viewProject}
                            <ArrowRight size={16} className={cn(isRtl ? "rotate-180" : "", "transition-transform group-hover:translate-x-1")} />
                        </Link>
                        <button className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:premium-shadow hover:-translate-y-1">
                            <ExternalLink size={18} />
                        </button>
                    </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {studies.length === 0 && (
            <AnimatedSection className="text-center py-32 glass rounded-[4rem] border border-dashed border-border/50 mb-32">
                <p className="text-muted-foreground italic text-xl font-medium">Our portfolio is currently being archived. Check back soon!</p>
            </AnimatedSection>
          )}

          {/* Impact CTA */}
          <AnimatedSection className="pb-32">
             <div className="relative p-16 md:p-24 rounded-[4rem] bg-zinc-950 text-white overflow-hidden group shadow-2xl text-center">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-brand-gold/10 opacity-30 group-hover:scale-110 transition-transform duration-1000" />
                <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                   <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                      Build your own <span className="text-primary italic">Success Story.</span>
                   </h2>
                   <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                      We specialize in high-stakes engineering. Let's discuss how we can deliver these results for your business.
                   </p>
                   <Link 
                      href={`/${locale}/quote`}
                      className="inline-flex h-20 items-center justify-center rounded-full bg-primary px-12 font-black text-xs text-primary-foreground uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 premium-shadow"
                   >
                      Start Your Project
                      <ArrowRight size={20} className="ml-3" />
                   </Link>
                </div>
             </div>
          </AnimatedSection>
        </Container>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
