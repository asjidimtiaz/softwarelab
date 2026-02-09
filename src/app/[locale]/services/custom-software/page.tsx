import { ServiceTemplate } from "@/components/sections/service-template";
import { Code2 } from "lucide-react";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiDocker } from "react-icons/si";

export default function CustomSoftwarePage() {
    return (
        <ServiceTemplate
            title="Custom Software"
            subtitle="Engineering Solutions"
            description="We build industrial-grade applications designed to solve unique business challenges with scalable architecture and clean code."
            icon={Code2}
            features={[
                "Enterprise Architecture",
                "Microservices Design",
                "Scalable Cloud APIs",
                "Legacy system migration"
            ]}
            techStack={[
                { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
                { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
                { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
            ]}
            outcomes={[
                "99.9% System Availability",
                "Scalability for 1M+ Users",
                "zero legacy debt architecture",
                "Reduced Operational Costs"
            ]}
        />
    );
}
