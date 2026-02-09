import { Container, Section } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Check, Info, Zap, Crown, BarChart3, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

const pricingTiers = [
  {
    id: "mvp",
    price: "$5k - $10k",
    features: [
      "Next.js / React Frontend",
      "Standard UI/UX Design",
      "Authentication Support",
      "Basic SEO Layout",
      "4-6 Weeks Delivery"
    ],
    popular: false,
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: "enterprise",
    price: "$25k+",
    features: [
      "Fully Custom Architecture",
      "Premium Brand Identity",
      "Advanced API Orchestration",
      "Role-Based Dashboards",
      "8-12 Weeks Delivery"
    ],
    popular: true,
    icon: Crown,
    color: "text-electric",
    bg: "bg-electric/10"
  },
  {
    id: "retainer",
    price: "$2k/mo",
    features: [
      "20 Dev Hours / Month",
      "Priority Bug Support",
      "CI/CD Pipeline Care",
      "Monthly Growth Audit",
      "Rolling Contract"
    ],
    popular: false,
    icon: BarChart3,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar' || locale === 'ur';

  const tierLocales = {
    mvp: { name: "Standard MVP", desc: "Perfect for startups needing a fast, high-quality market entry.", cta: "Start MVP" },
    enterprise: { name: "Enterprise Build", desc: "Custom enterprise-grade systems with high scale requirements.", cta: "Request Consultation" },
    retainer: { name: "Scale Retainer", desc: "Ongoing engineering support to iterate and grow your product.", cta: "Book Retainer" }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight-950" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-32 pb-20">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-widest mb-6">
              Transparent Allocation
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-gray-900 dark:text-white">
              Surgical <br />
              <span className="text-electric">Investment</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              {dict.pricing.description}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection
                key={tier.id}
                delay={i * 0.1}
                className={cn(
                  "group relative p-10 rounded-[2.5rem] bg-gray-50 dark:bg-midnight-900 border flex flex-col transition-all duration-500 hover:scale-[1.02]",
                  tier.popular ? "border-electric shadow-2xl scale-105 z-10" : "border-gray-100 dark:border-midnight-800 hover:border-electric/30"
                )}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-electric text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                    {dict.pricing.mostChosen}
                  </div>
                )}

                <div className="mb-10">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", tier.bg, tier.color)}>
                    <tier.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black mb-3 tracking-tight text-gray-900 dark:text-white">{(tierLocales as any)[tier.id].name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black tracking-tighter text-gray-900 dark:text-white">{tier.price}</span>
                    {tier.id === "retainer" && <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{dict.pricing.startingAt}</span>}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                    {(tierLocales as any)[tier.id].desc}
                  </p>
                </div>

                <div className="space-y-5 mb-12 flex-1">
                  {tier.features.map(feature => (
                    <div key={feature} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-electric/10 flex items-center justify-center shrink-0">
                        <Check size={10} className="text-electric" strokeWidth={4} />
                      </div>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${locale}/quote`}
                  className={cn(
                    "w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
                    tier.popular
                      ? "bg-electric text-white hover:bg-blue-600"
                      : "bg-white dark:bg-midnight-800 border-gray-200 dark:border-midnight-700 hover:border-electric/50 text-gray-900 dark:text-white"
                  )}
                >
                  {(tierLocales as any)[tier.id].cta}
                  <ArrowRight size={14} />
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="bg-gray-900 dark:bg-white rounded-[3rem] p-16 mb-32 text-center relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric/10 blur-[100px] rounded-full group-hover:bg-electric/20 transition-colors duration-1000" />

            <div className="max-w-2xl mx-auto space-y-8 relative z-10 text-white dark:text-gray-900">
              <div className="w-16 h-16 rounded-2xl bg-electric/20 flex items-center justify-center mx-auto text-electric animate-bounce">
                <Info size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{dict.pricing.customTitle}</h2>
              <p className="text-xl opacity-70 font-medium leading-relaxed">
                {dict.pricing.customDesc}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-3 py-5 px-10 rounded-2xl bg-electric text-white font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                {dict.pricing.customCta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
