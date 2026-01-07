import { techLabs } from "@/lib/services-data";
import { TechTemplate } from "@/components/sections/tech-template";
import { getDictionary } from "@/lib/get-dictionary";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { notFound } from "next/navigation";

export default async function TechPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar' || locale === 'ur';

  const tech = techLabs.find(t => t.slug === slug);
  if (!tech) notFound();

  return (
    <div className="flex flex-col min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar dict={dict} locale={locale} />
      <TechTemplate 
        tech={tech} 
        dict={dict} 
        locale={locale} 
      />
      <Footer dict={dict} locale={locale} />
    </div>
  );
}

import { locales } from "@/types/i18n";

export async function generateStaticParams() {
  const params = [];

  for (const locale of locales) {
    for (const tech of techLabs) {
      params.push({ locale, slug: tech.slug });
    }
  }

  return params;
}
