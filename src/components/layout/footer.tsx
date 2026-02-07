"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./layout-primitives";
import { FaFacebook, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

interface FooterProps {
  dict: any;
  locale: string;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <Container className="py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo + Copyright + Social Icons */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md transition-transform group-hover:scale-105">
                <span className="text-sm">s</span>
              </div>
              <span className="font-bold text-gray-900">Software Lab</span>
            </Link>

            {/* Copyright */}
            <span className="text-sm text-gray-400 hidden sm:block">
              © {new Date().getFullYear()} Software Lab
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaLinkedin size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaDribbble size={16} />
              </a>
            </div>
          </div>

          {/* Right: Links + Language + CTA */}
          <div className="flex items-center gap-6">
            {/* Links */}
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Terms of use
              </Link>
            </div>

            {/* Language Selector */}
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {locale === 'en' ? 'English' : locale === 'ur' ? 'Urdu' : 'Arabic'}
              <ChevronDown size={14} className="text-gray-400" />
            </button>

            {/* CTA Button */}
            <Link
              href={`/${locale}/pricing`}
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
            >
              Start Free
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
