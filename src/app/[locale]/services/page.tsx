import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getDictionary } from "@/lib/get-dictionary";
import ServicesHubClient from "@/components/sections/services-hub-client";
import { Container } from "@/components/layout/layout-primitives";
import { AIExecutiveSummary } from "@/components/ui/ai-summary";

export default async function ServicesHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />

      {/* Service Schema for machine understanding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Enterprise Web Development & SEO Architecture",
            "provider": { "@type": "Organization", "name": "Digi Web Crew" },
            "description": "Premium full-stack development and technical SEO solutions designed for high-scale enterprise environments.",
            "areaServed": "Global",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technical Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Stack Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO & GEO" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation" } }
              ]
            }
          })
        }}
      />

      <main className="flex-1">
        <Container>
          <AIExecutiveSummary
            title="Service Architecture & Intelligence"
            summary="Our service ecosystem is engineered for technical authority. We bridge the gap between human-centric UI and machine-centric semantic structures, ensuring your project is visible to both search crawlers and AI answer engines. Every module is optimized for performance, security, and information gain."
            techStack={["Microservices", "Serverless Architecture", "Semantic SEO", "RAG Systems", "Core Web Vitals"]}
          />
        </Container>
        <ServicesHubClient dict={dict} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
