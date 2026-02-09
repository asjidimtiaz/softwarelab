import { ServiceTemplate } from "@/components/sections/service-template";
import { Globe } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiTypescript } from "react-icons/si";

export default function FullStackWebsitesPage() {
    return (
        <ServiceTemplate
            title="High-Performance"
            subtitle="Web Applications"
            description="Next.js & React powered websites optimized for technical SEO, extreme performance, and maximum user conversion."
            icon={Globe}
            features={[
                "Server-Side Rendering",
                "Image Optimization",
                "Edge-Side Delivery",
                "High-Conversion UI/UX"
            ]}
            techStack={[
                { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
                { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
                { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
                { name: "Vercel", icon: SiVercel, color: "text-black" },
            ]}
            outcomes={[
                "Sub-1s LCP Performance",
                "100/100 Lighthouse Scores",
                "SEO-First Architecture",
                "A/B Testing Infrastructure"
            ]}
        />
    );
}
