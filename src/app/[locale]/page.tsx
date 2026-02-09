import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { FeaturesRow } from "@/components/sections/features-row";
import { ServicesOverview } from "@/components/sections/services-overview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AIProjectCalculator } from "@/components/tools/ai-project-calculator";
import { ServiceConfigurator } from "@/components/tools/service-configurator";
import { ProcessVisualization } from "@/components/sections/process-visualization";
import { TechStackDisplay } from "@/components/sections/tech-stack-display";
import { Testimonials } from "@/components/sections/testimonials";
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

        {/* Trust Stack: Phase 1 */}
        <ProcessVisualization />

        <HowItWorks dict={dict} />

        {/* Interactive Tools Section */}
        <section className="py-24 bg-gray-50 dark:bg-midnight-900 border-y border-gray-100 dark:border-midnight-700">
          <Container>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                    Architect Your <span className="text-electric">Enterprise</span> Future
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Use our proprietary AI tools to map out your project's technical landscape and estimate investment with surgical precision.
                  </p>
                </div>
                <AIProjectCalculator />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    Custom Service <span className="text-electric">Blueprint</span>
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Configure your production stack, security protocols, and maintenance requirements in 4 simple steps.
                  </p>
                </div>
                <ServiceConfigurator />
              </div>
            </div>
          </Container>
        </section>

        {/* Trust Stack: Phase 2 */}
        <TechStackDisplay />
        <Testimonials />

      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
