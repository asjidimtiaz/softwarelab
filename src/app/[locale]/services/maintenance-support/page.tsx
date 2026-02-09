import { ServiceTemplate } from "@/components/sections/service-template";
import { ShieldCheck } from "lucide-react";
import { SiSentry, SiGrafana, SiDatadog, SiNewrelic } from "react-icons/si";

export default function MaintenanceSupportPage() {
    return (
        <ServiceTemplate
            title="SLA-Backed"
            subtitle="Engineering Support"
            description="Performance monitoring, security patching, and proactive care plans designed to keep your mission-critical systems running 24/7/365."
            icon={ShieldCheck}
            features={[
                "24/7 System Monitoring",
                "Security Audit Cycles",
                "Performance Tuning",
                "Emergency Hotfix SLA"
            ]}
            techStack={[
                { name: "Sentry", icon: SiSentry, color: "text-[#362D59]" },
                { name: "Grafana", icon: SiGrafana, color: "text-[#F46800]" },
                { name: "Datadog", icon: SiDatadog, color: "text-[#632CA6]" },
                { name: "New Relic", icon: SiNewrelic, color: "text-[#008C99]" },
            ]}
            outcomes={[
                "99.99% Uptime Guarantee",
                "Sub-15m Incident Response",
                "Continuous Security Compliance",
                "Predictive Resource Scaling"
            ]}
        />
    );
}
