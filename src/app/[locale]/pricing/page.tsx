import Link from "next/link";
import { Container } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Accordion } from "@/components/ui/accordion";

const supportPoints = [
  "Clear starting prices",
  "Custom scope for larger builds",
  "Built for serious business projects",
  "Flexible across single and multi-service work",
];

const tiers = [
  {
    title: "Custom Website Development",
    price: "$3,500",
    desc: "Best for businesses that need a stronger website foundation, better presentation, clearer structure, and a more professional digital presence.",
    factors: ["Number of pages", "Content complexity", "Custom design depth", "CMS needs", "Integrations", "Technical requirements"],
    cta: "Explore Website Development",
    href: "/services/custom-software",
  },
  {
    title: "Conversion Funnels and Landing Pages",
    price: "$2,000",
    desc: "Best for businesses that need a focused page system for lead generation, service promotion, campaign traffic, bookings, or consultations.",
    factors: ["Single page or multi-step funnel", "Offer complexity", "Copy and messaging needs", "Form or booking integration", "Tracking setup", "Follow-up flow requirements"],
    cta: "Explore Funnels and Landing Pages",
    href: "/services/conversion-funnels",
  },
  {
    title: "AI Chatbots and Automation",
    price: "$2,500",
    desc: "Best for businesses that want faster lead handling, better inquiry routing, reduced manual follow-up, and smarter connected workflows.",
    factors: ["Number of workflows", "Tool integrations", "CRM requirements", "Channel setup", "Qualification logic", "Follow-up complexity"],
    cta: "Explore AI Chatbots and Automation",
    href: "/services/ai-chatbots-automation",
  },
  {
    title: "SEO and Growth Retainers",
    price: "$1,000 per month",
    desc: "Best for businesses that need ongoing search visibility improvements, content refinement, website updates, and continued performance support after launch.",
    factors: ["Website size", "Current SEO condition", "Content needs", "Local competition", "Update frequency", "Level of monthly support"],
    cta: "Explore SEO and Growth Retainers",
    href: "/services/seo-growth-retainers",
  },
];

const customExamples = [
  "Large multi-page websites",
  "Multi-service systems",
  "Advanced automation setups",
  "Full funnel ecosystems",
  "Web applications",
  "Mobile application projects",
  "DevOps-heavy builds",
  "Complex integrations",
  "Broader growth infrastructure projects",
];

const priceFactors = [
  "number of pages",
  "design depth",
  "content structure",
  "custom functionality",
  "CMS requirements",
  "integrations with forms, CRM, booking, or other tools",
  "automation logic",
  "technical setup",
  "timeline and urgency",
  "level of ongoing support needed",
];

const bestFit = [
  "rely on qualified leads, calls, bookings, or consultations",
  "need stronger trust and presentation online",
  "want custom work instead of a generic template setup",
  "value clear process and professional implementation",
  "are investing in growth, not just a basic online presence",
  "may need support beyond just one website page",
];

const faqItems = [
  {
    value: "faq-1",
    title: "Do you offer fixed packages?",
    content:
      "We use starting prices instead of rigid fixed packages so projects can be scoped around real business needs.",
  },
  {
    value: "faq-2",
    title: "Can I hire you for one service only?",
    content:
      "Yes. Some clients come to us for one focused project, while others need a combination of services.",
  },
  {
    value: "faq-3",
    title: "Will I get an exact quote before starting?",
    content:
      "Yes. Once the scope is clear, we can define the project direction and provide pricing based on the actual requirements.",
  },
  {
    value: "faq-4",
    title: "What if I am not sure which service I need?",
    content:
      "The custom project scope flow is the best place to start if you want help defining what fits your business.",
  },
  {
    value: "faq-5",
    title: "Do you offer monthly support after launch?",
    content:
      "Yes. Ongoing support, SEO, updates, and optimization can be provided depending on the project and the level of support needed.",
  },
];

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === "ar" || locale === "ur";

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0F]" dir={isRtl ? "rtl" : "ltr"}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-32 pb-24">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <AnimatedSection className="text-center">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-[#F8F8FF]">
                Clear Starting Pricing for Custom Digital Work
              </h1>
              <p className="text-lg text-[#94A3B8] mb-6">
                Every project is shaped around your goals, scope, and technical requirements. To help you plan with more confidence, we provide starting prices for our core services while keeping room for the right level of customization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {supportPoints.map((point) => (
                  <div key={point} className="rounded-lg border border-[#1E1E2E] bg-[#13131E] px-4 py-3 text-sm text-[#94A3B8]">
                    {point}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/book-consultation`} className="px-8 py-4 bg-[#6366F1] text-white font-bold rounded-lg">Book Consultation</Link>
                <Link href={`/${locale}/quote`} className="px-8 py-4 border border-[#1E1E2E] bg-[#13131E] text-[#F8F8FF] font-bold rounded-lg">Get Custom Project Scope</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">Pricing That Filters for Fit and Leaves Room for the Right Scope</h2>
              <p className="text-[#94A3B8] mb-3">Not every project needs the same level of work. A focused landing page is not priced like a custom multi-page website.</p>
              <p className="text-[#94A3B8] mb-3">Digital Web Crew uses starting prices to make the investment level more transparent while keeping each project tailored to the real business need.</p>
              <p className="text-[#94A3B8]">If you already know what you need, you can book a consultation. If you want help defining the right direction first, the custom project scope flow is the better place to start.</p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">Starting Investment Levels</h2>
              <p className="text-[#94A3B8] mb-4">These starting prices reflect the base level for our core services.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tiers.map((tier) => (
                  <div key={tier.title} className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-[#F8F8FF] mb-1">{tier.title}</h3>
                    <p className="text-2xl font-bold text-[#F8F8FF] mb-2">Starting at {tier.price}</p>
                    <p className="text-sm text-[#94A3B8] mb-3">{tier.desc}</p>
                    <p className="text-sm text-[#94A3B8] mb-2">Typical factors that affect price:</p>
                    <ul className="list-disc list-inside text-sm text-[#94A3B8] mb-3">
                      {tier.factors.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <Link href={`/${locale}${tier.href}`} className="text-[#6366F1] font-semibold text-sm">
                      {tier.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">When a Custom Quote Makes More Sense</h2>
              <p className="text-[#94A3B8] mb-3">Some projects are too broad or too specific for a simple starting-price model.</p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] mb-4">
                {customExamples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[#94A3B8]">If your project includes multiple services or a higher level of technical depth, we will shape the quote around the actual requirements.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">What Usually Changes the Price</h2>
              <p className="text-[#94A3B8] mb-3">The final cost of a project depends on the amount of work involved and the complexity behind it.</p>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] mb-4">
                {priceFactors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[#94A3B8]">A clear scope helps us recommend the right build level without overcomplicating the project.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">Built for Businesses Investing in Better Digital Infrastructure</h2>
              <p className="text-[#94A3B8]">Digital Web Crew is designed for businesses that understand the value of stronger digital presentation, better lead flow, cleaner systems, and long-term growth support.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">Who This Pricing Is Best Suited For</h2>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8] mb-4">
                {bestFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[#94A3B8]">If your priority is business value, clarity, and a stronger long-term system, this pricing model is built for that kind of project.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">Two Ways to Move Forward</h2>
              <p className="text-[#94A3B8] mb-2"><strong className="text-[#F8F8FF]">Option 1 Book Consultation:</strong> Best for businesses that already have a clear need and want to discuss the project directly.</p>
              <p className="text-[#94A3B8] mb-4"><strong className="text-[#F8F8FF]">Option 2 Get Custom Project Scope:</strong> Best for businesses that want help defining the right service mix, priorities, timeline, and budget before booking a call.</p>
              <p className="text-[#94A3B8]">Both paths are designed to make the next step easier and more aligned with where you are in the decision process.</p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-4">Questions About Pricing</h2>
              <Accordion items={faqItems} />
            </AnimatedSection>

            <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-[#F8F8FF] mb-3">Ready to Scope the Right Project for Your Business?</h2>
              <p className="text-[#94A3B8] mb-6">Whether you need a website, a landing page system, automation support, or ongoing SEO work, the next step is to define the right scope.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/book-consultation`} className="px-8 py-4 bg-[#6366F1] text-white font-bold rounded-lg">Book Consultation</Link>
                <Link href={`/${locale}/quote`} className="px-8 py-4 border border-[#1E1E2E] bg-[#0F0F18] text-[#F8F8FF] font-bold rounded-lg">Get Custom Project Scope</Link>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
