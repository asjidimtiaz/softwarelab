import { ServiceTemplate } from "@/components/sections/service-template";
import { Zap } from "lucide-react";
import { SiPython, SiOpenai, SiDjango, SiDocker } from "react-icons/si";

export default function AutomationPage() {
    return (
        <ServiceTemplate
            title="AI & Workflow"
            subtitle="Automation Tools"
            description="Internal dashboards, GPT integrations, and automated workflows that eliminate manual processing and save thousands of engineering hours."
            icon={Zap}
            features={[
                "GPT-4 Integrations",
                "Workflow Automation",
                "Custom Dashboards",
                "Data Mining Pipelines"
            ]}
            techStack={[
                { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
                { name: "OpenAI", icon: SiOpenai, color: "text-[#412991]" },
                { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
                { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
            ]}
            outcomes={[
                "70% Manual Task Reduction",
                "AI-Driven Logic Mapping",
                "24/7 Automated Processing",
                "Unified Control Panels"
            ]}
        />
    );
}
