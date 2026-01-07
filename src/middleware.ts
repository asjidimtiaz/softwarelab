import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { locales, defaultLocale } from './types/i18n';
export type { Locale } from './types/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip if it's an internal next.js path or api
  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') // Admin usually stays non-localized or custom
  ) {
    return;
  }

  // 2. Check if the pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 3. Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};
