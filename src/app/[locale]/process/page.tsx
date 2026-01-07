import { Container, Section } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Search, PenTool, Code2, Rocket, HeartHandshake, ArrowRight, Zap, Target } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

const steps = [
  {
    id: "step1",
    icon: Search,
    details: ["Requirements gathering", "Feasibility audit", "Competitive analysis"],
    color: "from-blue-500/10 to-blue-500/5",
    accent: "text-blue-500"
  },
  {
    id: "step2",
    icon: PenTool,
    details: ["User journeys", "High-fidelity mockups", "Interactive prototyping"],
    color: "from-purple-500/10 to-purple-500/5",
    accent: "text-purple-500"
  },
  {
    id: "step3",
    icon: Code2,
    details: ["Frontend / Backend dev", "Unit & Integration testing", "Agile sprints"],
    color: "from-primary/10 to-primary/5",
    accent: "text-primary"
  },
  {
    id: "step4",
    icon: Rocket,
    details: ["Infrastructure setup", "Deployment automated", "Performance tuning"],
    color: "from-brand-gold/10 to-brand-gold/5",
    accent: "text-brand-gold"
  },
  {
    id: "step5",
    icon: HeartHandshake,
    details: ["Security patches", "Feature iteration", "24/7 Monitoring"],
    color: "from-emerald-500/10 to-emerald-500/5",
    accent: "text-emerald-500"
  }
];

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-32 pb-20">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              <span className="text-gradient block">{dict.process.title1}</span>
              <span className="text-foreground">{dict.process.title2}</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              {dict.process.description}
            </p>
          </AnimatedSection>

          <div className="space-y-24 pb-32">
            {steps.map((step, i) => (
              <div 
                key={step.id}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
              >
                {/* Number Side */}
                <div className="md:col-span-2 flex flex-col items-center">
                  <AnimatedSection delay={i * 0.1} className="relative">
                    <div className="w-20 h-20 rounded-3xl glass border border-border/50 flex items-center justify-center text-3xl font-black group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl group-hover:shadow-primary/20">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden md:block w-px h-32 bg-gradient-to-b from-primary/30 to-transparent my-6 opacity-50" />
                    )}
                  </AnimatedSection>
                </div>

                {/* Content Side */}
                <AnimatedSection direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1} className={`md:col-span-10 p-12 rounded-[3.5rem] glass border border-border/50 bg-gradient-to-br transition-all duration-700 hover:border-primary/30 hover:premium-shadow ${step.color}`}>
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="shrink-0">
                      <div className={cn("w-16 h-16 rounded-2xl bg-white dark:bg-zinc-950 border border-border/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500", step.accent)}>
                        <step.icon size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-extrabold mb-6 tracking-tight group-hover:text-gradient transition-all duration-300">{(dict.process.steps as any)[step.id].title}</h3>
                      <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl">
                        {(dict.process.steps as any)[step.id].desc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {step.details.map(detail => (
                          <span key={detail} className="px-5 py-2 rounded-xl glass border border-primary/10 text-[10px] font-black uppercase tracking-[0.1em] text-primary">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          <AnimatedSection className="pb-32">
            <div className="p-20 rounded-[4rem] bg-zinc-950 text-white border border-white/10 shadow-2xl relative overflow-hidden group text-center">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-brand-gold/10 opacity-30 group-hover:scale-110 transition-transform duration-1000" />
                
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 relative z-10 leading-[0.9]">{dict.process.ctaTitle}</h2>
                <p className="text-zinc-400 mb-12 text-xl font-medium max-w-2xl mx-auto relative z-10">
                    {dict.process.ctaDesc}
                </p>
                <Link 
                  href={`/${locale}/quote`}
                  className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-primary-foreground rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all premium-shadow relative z-10"
                >
                    {dict.process.ctaButton}
                    <ArrowRight size={18} />
                </Link>
            </div>
          </AnimatedSection>
        </Container>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
