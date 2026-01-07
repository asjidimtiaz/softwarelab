import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { MotionProvider } from "@/components/MotionProvider";
import { PageTransition } from "@/components/ui/page-transition";

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

export const metadata = {
  title: "Software Lab Admin",
  description: "Authorized Personnel Only",
};

export default function RootAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, outfit.variable, "font-sans antialiased bg-background text-foreground transition-colors duration-300")}>
        <MotionProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </MotionProvider>
      </body>
    </html>
  );
}
