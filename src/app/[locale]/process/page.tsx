import { Container, Section } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Search, PenTool, Code2, Rocket, HeartHandshake, ArrowRight, Zap, Target } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProcessVisualization } from "@/components/sections/process-visualization";
import Link from "next/link";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "step1",
    icon: Search,
    details: ["Requirements gathering", "Feasibility audit", "Competitive analysis"],
    bg: "bg-[#13131E]",
    accent: "text-[#6366F1]"
  },
  {
    id: "step2",
    icon: PenTool,
    details: ["User journeys", "High-fidelity mockups", "Interactive prototyping"],
    bg: "bg-[#13131E]",
    accent: "text-[#6366F1]"
  },
  {
    id: "step3",
    icon: Code2,
    details: ["Frontend / Backend dev", "Unit & Integration testing", "Agile sprints"],
    bg: "bg-[#13131E]",
    accent: "text-[#6366F1]"
  },
  {
    id: "step4",
    icon: Rocket,
    details: ["Infrastructure setup", "Deployment automated", "Performance tuning"],
    bg: "bg-[#13131E]",
    accent: "text-[#6366F1]"
  },
  {
    id: "step5",
    icon: HeartHandshake,
    details: ["Security patches", "Feature iteration", "24/7 Monitoring"],
    bg: "bg-[#13131E]",
    accent: "text-[#6366F1]"
  }
];

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0F] dark:bg-[#0A0A0F]" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-32 pb-20">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/20 text-[#6366F1] text-xs font-bold uppercase tracking-widest mb-6">
              Agile-Led Framework
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-[#F8F8FF]">
              <span className="block">{dict.process.title1}</span>
              <span className="text-[#6366F1]">{dict.process.title2}</span>
            </h1>
            <p className="text-xl text-[#94A3B8] font-medium max-w-2xl mx-auto leading-relaxed">
              {dict.process.description}
            </p>
          </AnimatedSection>

          {/* New Process Visualization integrated here */}
          <div className="mb-32">
            <ProcessVisualization />
          </div>

          <div className="space-y-24 pb-32">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
              >
                {/* Number Side */}
                <div className="md:col-span-2 flex flex-col items-center">
                  <AnimatedSection delay={i * 0.1} className="relative">
                    <div className="w-20 h-20 rounded-3xl bg-[#13131E] border border-[#6366F1]/20 flex items-center justify-center text-3xl font-black text-[#F8F8FF] group-hover:bg-[#6366F1] group-hover:text-[#0A0A0F] transition-all duration-500 group-hover:scale-110 shadow-xl">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden md:block w-px h-32 bg-gradient-to-b from-[#6366F1]/30 to-transparent my-6 opacity-50" />
                    )}
                  </AnimatedSection>
                </div>

                {/* Content Side */}
                <AnimatedSection direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1} className={`md:col-span-10 p-12 rounded-[3.5rem] bg-[#13131E] border border-[#1E1E2E] transition-all duration-700 hover:border-[#6366F1]/50`}>
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="shrink-0">
                      <div className={cn("w-16 h-16 rounded-2xl bg-[#1E1E2E] border border-[#6366F1]/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500", step.accent)}>
                        <step.icon size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-6 tracking-tight text-[#F8F8FF]">{(dict.process.steps as any)[step.id].title}</h3>
                      <p className="text-lg text-[#94A3B8] font-medium leading-relaxed mb-8 max-w-2xl">
                        {(dict.process.steps as any)[step.id].desc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {step.details.map(detail => (
                          <span key={detail} className="px-5 py-2 rounded-xl bg-[#1E1E2E] border border-[#6366F1]/20 text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">
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
            <div className="p-20 rounded-[4rem] bg-[#0A0A0F] text-[#F8F8FF] shadow-2xl relative overflow-hidden group text-center border border-[#6366F1]/10">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#6366F1]/20 via-transparent to-transparent opacity-30 group-hover:scale-110 transition-transform duration-1000" />

              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 relative z-10 leading-[0.9]">{dict.process.ctaTitle}</h2>
              <p className="opacity-70 mb-12 text-xl font-medium max-w-2xl mx-auto relative z-10 text-[#94A3B8]">
                {dict.process.ctaDesc}
              </p>
              <Link
                href={`/${locale}/quote`}
                className="inline-flex items-center gap-4 px-12 py-5 bg-[#6366F1] text-[#F8F8FF] rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl relative z-10 hover:shadow-[#6366F1]/30"
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
