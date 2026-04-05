import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: "Digi Web Crew Admin",
  description: "Authorized Personnel Only",
};

export default function RootAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
        style={{
          background: "var(--adm-bg, #f4f6fb)",
          color: "var(--adm-text, #0f172a)",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
