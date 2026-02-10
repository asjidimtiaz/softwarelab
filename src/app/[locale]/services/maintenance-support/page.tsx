import { ServiceTemplate } from "@/components/sections/service-template";

export default function MaintenanceSupportPage() {
    return (
        <ServiceTemplate
            title="SLA-Backed"
            subtitle="Engineering Support"
            description="Performance monitoring, security patching, and proactive care plans designed to keep your mission-critical systems running 24/7/365."
            iconName="ShieldCheck"
            features={[
                "24/7 System Monitoring",
                "Security Audit Cycles",
                "Performance Tuning",
                "Emergency Hotfix SLA"
            ]}
            techStack={[
                { name: "Sentry", iconName: "SiSentry", color: "text-[#362D59]" },
                { name: "Grafana", iconName: "SiGrafana", color: "text-[#F46800]" },
                { name: "Datadog", iconName: "SiDatadog", color: "text-[#632CA6]" },
                { name: "New Relic", iconName: "SiNewrelic", color: "text-[#008C99]" },
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
