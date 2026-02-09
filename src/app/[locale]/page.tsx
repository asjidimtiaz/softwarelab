import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { FeaturesRow } from "@/components/sections/features-row";
import { ServicesOverview } from "@/components/sections/services-overview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AIProjectCalculator } from "@/components/tools/ai-project-calculator";
import { Footer } from "@/components/layout/footer";
import { getDictionary } from "@/lib/get-dictionary";
import { Container } from "@/components/layout/layout-primitives";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1">
        <Hero dict={dict} locale={locale} />
        <FeaturesRow />
        <ServicesOverview dict={dict} />
        <HowItWorks dict={dict} />

        {/* AI Project Calculator Section */}
        <section className="py-20 bg-gray-50 dark:bg-midnight-900 border-y border-gray-100 dark:border-midnight-700">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AIProjectCalculator />
            </div>
          </Container>
        </section>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
