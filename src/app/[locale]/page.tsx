import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/layout-primitives";
import { getDictionary } from "@/lib/get-dictionary";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Accordion } from "@/components/ui/accordion";
import { Hero } from "@/components/sections/hero";
import { FeaturesRow } from "@/components/sections/features-row";
import { ServicesOverview } from "@/components/sections/services-overview";
import { AIProjectCalculator } from "@/components/tools/ai-project-calculator";
import { ServiceConfigurator } from "@/components/tools/service-configurator";
import { ProcessVisualization } from "@/components/sections/process-visualization";
import { TechStackDisplay } from "@/components/sections/tech-stack-display";
import { Testimonials } from "@/components/sections/testimonials";

const capabilities = [
  "WordPress Development",
  "Next.js Development",
  "Web Applications",
  "E-commerce Development",
  "AI Workflows & Agents",
  "DevOps & Cloud Support",
  "Local SEO",
  "Technical SEO",
  "Website Maintenance & Support",
];

const industries = [
  "Law Firms",
  "Dental, Medical, Clinics & Med Spas",
  "Home Services",
  "Consultants, Coaches & Agencies",
  "SaaS & B2B Service Companies",
  "Education, Training & eLearning",
];

const faq = [
  { value: "1", title: "What types of businesses do you work with?", content: "We work with growth-focused businesses that want stronger digital systems for credibility, lead generation, SEO, and automation. Our strongest fit includes law firms, clinics, home services, consultants, SaaS, and education-related businesses." },
  { value: "2", title: "Do you build custom websites or use templates?", content: "We position our work around custom solutions tailored to business goals, content structure, and conversion needs. The right approach depends on the project, but our focus is on building systems that fit the business properly." },
  { value: "3", title: "Can you handle SEO and automation too?", content: "Yes. Our services include custom websites, conversion funnels, SEO support, AI chatbots, and automation workflows, allowing us to build more complete digital growth systems." },
  { value: "4", title: "How does the custom project scope process work?", content: "The scope flow helps you define what you need, what your goals are, and where your project stands. It gives us the information needed to recommend the right direction and next steps." },
  { value: "5", title: "Do you offer ongoing support after launch?", content: "Yes. We can provide ongoing support, maintenance, SEO, optimization, and improvement work after launch depending on your needs." },
  { value: "6", title: "How do you use AI in your services?", content: "We use AI where it adds real value, including chat support, lead qualification, workflow automation, content support, and customer communication systems." },
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === "ar" || locale === "ur";

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0F] text-[#F8F8FF]" dir={isRtl ? "rtl" : "ltr"}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1">
        {/* Restored old landing components */}
        <section className="relative">
          <Hero dict={dict} locale={locale} />
        </section>

        <FeaturesRow />

        <ServicesOverview dict={dict} />

        <ProcessVisualization />

        <section className="py-24 bg-[#6366F1]/5 border-y border-[#1E1E2E]">
          <Container>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-[#F8F8FF] tracking-tight leading-tight">
                    Architect Your <span className="text-[#6366F1]">Enterprise</span> Future
                  </h2>
                  <p className="text-lg text-[#94A3B8]">{dict.hero.description}</p>
                </div>
                <AIProjectCalculator />
              </div>
              <div className="space-y-8">
                <ServiceConfigurator />
              </div>
            </div>
          </Container>
        </section>

        <TechStackDisplay />
        <Testimonials />

        {/* New homepage sections kept as requested */}
        <section className="pt-24 pb-24">
          <Container>
            <div className="max-w-6xl mx-auto space-y-8">
              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-3">Built for Businesses That Need More Than Just a Website</h2>
                <p className="text-[#94A3B8]">Digital Web Crew helps businesses build stronger digital foundations through custom websites, funnel systems, SEO improvements, and AI-powered automation.</p>
              </AnimatedSection>

              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-3">Core Services Built for Growth</h2>
                <p className="text-[#94A3B8] mb-4">Our services are structured to help businesses attract attention, convert traffic, improve visibility, and streamline lead handling.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href={`/${locale}/services/custom-software`} className="border border-[#1E1E2E] rounded-lg p-4 bg-[#0F0F18]"><h3 className="font-semibold mb-1">Custom Website Development</h3><p className="text-sm text-[#94A3B8] mb-2">Premium websites built for credibility, performance, and long-term business growth.</p><span className="text-[#6366F1] text-sm font-semibold">Explore Website Development</span></Link>
                  <Link href={`/${locale}/services/conversion-funnels`} className="border border-[#1E1E2E] rounded-lg p-4 bg-[#0F0F18]"><h3 className="font-semibold mb-1">Conversion Funnels & Landing Pages</h3><p className="text-sm text-[#94A3B8] mb-2">Focused page systems designed to turn traffic into inquiries, consultations, bookings, and qualified leads.</p><span className="text-[#6366F1] text-sm font-semibold">Explore Funnels & Landing Pages</span></Link>
                  <Link href={`/${locale}/services/ai-chatbots-automation`} className="border border-[#1E1E2E] rounded-lg p-4 bg-[#0F0F18]"><h3 className="font-semibold mb-1">AI Chatbots & Automation</h3><p className="text-sm text-[#94A3B8] mb-2">AI-powered workflows that help capture leads, qualify interest, improve response speed, and reduce manual follow-up.</p><span className="text-[#6366F1] text-sm font-semibold">Explore AI Automation</span></Link>
                  <Link href={`/${locale}/services/seo-growth-retainers`} className="border border-[#1E1E2E] rounded-lg p-4 bg-[#0F0F18]"><h3 className="font-semibold mb-1">SEO & Growth Retainers</h3><p className="text-sm text-[#94A3B8] mb-2">Ongoing SEO, optimization, updates, and performance support designed to improve visibility and keep your digital systems moving forward.</p><span className="text-[#6366F1] text-sm font-semibold">Explore SEO & Growth</span></Link>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-3">Built for More Than Basic Websites</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {capabilities.map((c) => (
                    <span key={c} className="px-3 py-2 rounded-full border border-[#1E1E2E] text-sm text-[#94A3B8]">{c}</span>
                  ))}
                </div>
                <p className="text-[#94A3B8]">Whether you need a focused website project or a broader digital growth system, we can shape the right service mix around your goals.</p>
              </AnimatedSection>

              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-3">Built for High-Value, Growth-Focused Industries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {industries.map((i) => (
                    <div key={i} className="rounded-lg border border-[#1E1E2E] bg-[#0F0F18] px-4 py-3 text-[#94A3B8]">{i}</div>
                  ))}
                </div>
                <Link href={`/${locale}/industries`} className="text-[#6366F1] font-semibold">View Industries We Serve</Link>
              </AnimatedSection>

              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-3">Selected Work</h2>
                <p className="text-[#94A3B8] mb-4">From custom websites to automation workflows, our work is built to support real business objectives with stronger design, clearer structure, and better digital performance.</p>
                <Link href={`/${locale}/case-studies`} className="text-[#6366F1] font-semibold">View Work</Link>
              </AnimatedSection>

              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-3">A Clear Process from Strategy to Launch</h2>
                <p className="text-[#94A3B8] mb-4">Discover - Scope - Build - Launch & Grow</p>
                <Link href={`/${locale}/process`} className="text-[#6366F1] font-semibold">View Full Process</Link>
              </AnimatedSection>

              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-3">AI Where It Actually Improves Growth</h2>
                <ul className="space-y-2 text-[#94A3B8]">
                  <li>AI chat for first-response support</li>
                  <li>Automation for lead capture and routing</li>
                  <li>Workflow systems that reduce manual tasks</li>
                  <li>Smarter support structures for growing businesses</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-3">Starting Pricing</h2>
                <ul className="space-y-2 text-[#94A3B8] mb-4">
                  <li>Custom Website Development - Starting at $3,500</li>
                  <li>Conversion Funnels & Landing Pages - Starting at $2,000</li>
                  <li>AI Chatbots & Automation - Starting at $2,500</li>
                  <li>SEO & Growth Retainers - Starting at $1,000/month</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/pricing`} className="px-8 py-4 bg-[#6366F1] text-white font-bold rounded-lg text-center">View Pricing</Link>
                  <Link href={`/${locale}/quote`} className="px-8 py-4 border border-[#1E1E2E] text-[#F8F8FF] font-bold rounded-lg text-center">Get Custom Project Scope</Link>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <Accordion items={faq} />
                <div className="mt-4">
                  <Link href={`/${locale}/faqs`} className="text-[#6366F1] font-semibold">View All FAQs</Link>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-[#13131E] border border-[#1E1E2E] rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">Ready to Build a Smarter Growth System?</h2>
                <p className="text-[#94A3B8] mb-6">Whether you need a custom website, stronger landing pages, SEO support, or AI automation, we can help you define the right next step.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`/${locale}/book-consultation`} className="px-8 py-4 bg-[#6366F1] text-white font-bold rounded-lg">Book Consultation</Link>
                  <Link href={`/${locale}/quote`} className="px-8 py-4 border border-[#1E1E2E] text-[#F8F8FF] font-bold rounded-lg">Get Custom Project Scope</Link>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
