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
    color: "text-blue-500"
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
    color: "text-brand-gold"
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
    color: "text-primary"
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
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-32 pb-20">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              <span className="text-gradient block">{dict.pricing.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              {dict.pricing.description}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection 
                key={tier.id}
                delay={i * 0.1}
                className={cn(
                  "group relative p-10 rounded-[2.5rem] glass border flex flex-col transition-all duration-500 hover:premium-shadow active:scale-[0.98]",
                  tier.popular ? "border-primary/30 ring-1 ring-primary/20 scale-105 z-10" : "border-border/50 hover:border-primary/20"
                )}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20">
                    {dict.pricing.mostChosen}
                  </div>
                )}
                
                <div className="mb-10">
                  <div className={cn("w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-border flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", tier.color)}>
                    <tier.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-gradient transition-all duration-300">{(tierLocales as any)[tier.id].name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
                    {tier.id === "retainer" && <span className="text-muted-foreground font-bold uppercase text-[10px] tracking-widest">{dict.pricing.startingAt}</span>}
                  </div>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    {(tierLocales as any)[tier.id].desc}
                  </p>
                </div>

                <div className="space-y-5 mb-12 flex-1">
                  {tier.features.map(feature => (
                    <div key={feature} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full glass border border-primary/20 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-primary" strokeWidth={4} />
                      </div>
                      <span className="text-sm font-semibold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${locale}/quote`}
                  className={cn(
                    "w-full py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2",
                    tier.popular 
                      ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:opacity-90" 
                      : "glass border border-border hover:bg-secondary/50"
                  )}
                >
                  {(tierLocales as any)[tier.id].cta}
                  <ArrowRight size={14} />
                </Link>

                {/* Background Accent */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="glass rounded-[3rem] p-16 mb-32 border border-border/50 text-center relative overflow-hidden group">
             {/* Decor */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors duration-1000" />
             
             <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto text-primary animate-bounce duration-[4s]">
                  <Info size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">{dict.pricing.customTitle}</h2>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                    {dict.pricing.customDesc}
                </p>
                <Link 
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-3 py-4 px-10 rounded-full bg-primary text-primary-foreground font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all premium-shadow"
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
