"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./layout-primitives";
import { Github, Twitter, Linkedin, Mail, Globe, ArrowRight, Send } from "lucide-react";
import { serviceCatalog } from "@/lib/services-data";

interface FooterProps {
  dict: any;
  locale: string;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 mt-auto">
      <Container className="py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Brand Info */}
          <div className="space-y-10">
            <Link href={`/${locale}`} className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-primary rounded-[1.5rem] flex items-center justify-center text-primary-foreground font-black shadow-2xl shadow-primary/20 group-hover:rotate-12 transition-transform duration-500 text-xl">
                S
              </div>
              <span className="font-black text-3xl tracking-tighter">Lab.</span>
            </Link>
            <p className="text-lg text-muted-foreground leading-relaxed font-semibold opacity-80">
              {dict.footer.brandDesc}
            </p>
            <div className="flex items-center gap-6">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-primary/20">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Laboratory */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-12 text-primary">Specializations</h4>
            <ul className="space-y-8">
              {serviceCatalog.slice(0, 4).map(item => (
                <li key={item.slug}>
                  <Link href={`/${locale}/services/${item.slug}`} className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all flex items-center group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 mr-4 group-hover:w-4 transition-all" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Laboratory */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-12 text-primary">Ecosystem</h4>
            <ul className="space-y-8">
              {[
                { name: dict.nav.process, href: `/${locale}/process` },
                { name: dict.nav.pricing, href: `/${locale}/pricing` },
                { name: dict.nav.caseStudies, href: `/${locale}/case-studies` },
                { name: dict.nav.blog, href: `/${locale}/blog` },
                { name: dict.nav.about, href: `/${locale}/about` }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all flex items-center group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 mr-4 group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join the Lab */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-12 text-primary">Join the Lab</h4>
            <div className="space-y-10">
              <p className="text-sm text-muted-foreground font-semibold leading-relaxed">Exclusive engineering insights delivered to your inbox.</p>
              <form 
                onSubmit={(e) => { e.preventDefault(); alert("Welcome to the laboratory!"); }}
                className="relative group/form"
              >
                <input 
                  type="email" 
                  placeholder="lab@company.com"
                  required
                  className="w-full h-16 bg-white border-2 border-primary/10 rounded-[1.5rem] px-8 text-sm font-bold focus:border-primary outline-none transition-all shadow-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl shadow-primary/20"
                >
                  <Send size={18} />
                </button>
              </form>
              <div className="flex items-center gap-5 text-sm font-black uppercase tracking-widest text-primary pt-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-primary/10 flex items-center justify-center shadow-sm">
                  <Mail size={20} />
                </div>
                lab@software-lab.com
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-12 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-10 text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Software Lab. Ecosystem</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Agreement</Link>
            <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-primary/10 shadow-sm">
              <Globe size={16} className="text-primary" />
              <div className="flex gap-6">
                {['en', 'ur', 'ar'].map(l => (
                  <Link key={l} href={`/${l}`} className={cn("transition-colors", locale === l ? "text-primary" : "hover:primary")}>{l.toUpperCase()}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
