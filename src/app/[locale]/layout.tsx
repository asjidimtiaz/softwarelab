import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/get-dictionary";
import { MotionProvider } from "@/components/MotionProvider";
import { PageTransition } from "@/components/ui/page-transition";
import { AnalyticsProvider } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
  preload: true
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.meta.title,
      template: `%s | Digi Web Crew`
    },
    description: dict.meta.description,
    keywords: ["software agency", "custom software", "next.js", "premium design", "automation", "AI automation", "Digi Web Crew", "Toqeer Shafique"],
    authors: [{ name: "Toqeer Shafique" }],
    creator: "Digi Web Crew",
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://digiwebcrew.com'),
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDesc,
      url: `/${locale}`,
      siteName: "Digi Web Crew",
      locale: locale,
      type: "website",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Digi Web Crew Engineering'
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDesc,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ur': '/ur',
        'ar': '/ar',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRtl = locale === 'ar' || locale === 'ur';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "font-sans antialiased bg-background text-foreground transition-all duration-300 font-medium")}>
        <AnalyticsProvider>
          <MotionProvider>
            <PageTransition>
              {children}
            </PageTransition>
          </MotionProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
