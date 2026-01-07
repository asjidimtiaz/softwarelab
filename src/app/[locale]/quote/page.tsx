import { Container, Section } from "@/components/layout/layout-primitives";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { QuoteWizard } from "@/components/sections/quote-wizard";
import { CheckCircle2, Shield } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";

export default async function QuotePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale) as any;
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1 pt-60 pb-20">
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
                {/* Content Side */}
                <div className="lg:col-span-4 space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">{dict.quote.title}</h1>
                        <p className="text-lg text-muted-foreground">
                            {dict.quote.desc}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {dict.quote.features.map((item: string) => (
                            <div key={item} className="flex items-center gap-3 text-sm font-medium">
                                <CheckCircle2 size={18} className="text-primary" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="text-primary" size={24} />
                            <span className="font-bold">{dict.quote.privacyTitle}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {dict.quote.privacyDesc}
                        </p>
                    </div>
                </div>

                {/* Wizard Side */}
                <div className="lg:col-span-8">
                    <QuoteWizard dict={dict} isRtl={isRtl} locale={locale} />
                </div>
            </div>
        </Container>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
