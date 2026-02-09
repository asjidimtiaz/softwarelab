"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Placeholder for future analytics integration (GA4, Vercel Analytics, etc.)
export const useAnalytics = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            // Track page view
            // console.log(`[Analytics] PageView: ${pathname}`);

            // If we had GA4:
            // window.gtag('config', 'G-XXXXXXXXXX', { page_path: pathname });
        }
    }, [pathname, searchParams]);

    const trackEvent = (eventName: string, properties?: any) => {
        // console.log(`[Analytics] Event: ${eventName}`, properties);

        // If we had GA4:
        // window.gtag('event', eventName, properties);
    };

    return { trackEvent };
};

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    useAnalytics();
    return <>{ children } </>;
}
