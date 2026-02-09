import { ServiceTemplate } from "@/components/sections/service-template";
import { Cloud } from "lucide-react";
import { SiAmazonwebservices, SiDocker, SiKubernetes, SiTerraform } from "react-icons/si";

export default function DevOpsCloudPage() {
    return (
        <ServiceTemplate
            title="Cloud Infra"
            subtitle="& DevOps Scaling"
            description="Secure, reliable cloud infrastructure and CI/CD pipelines designed for zero-downtime deployments and extreme system resilience."
            icon={Cloud}
            features={[
                "AWS/Azure Mastery",
                "CI/CD Orchestration",
                "Kubernetes Scaling",
                "Security Hardening"
            ]}
            techStack={[
                { name: "AWS", icon: SiAmazonwebservices, color: "text-[#FF9900]" },
                { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
                { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
                { name: "Terraform", icon: SiTerraform, color: "text-[#7B42BC]" },
            ]}
            outcomes={[
                "Zero Downtime Deployment",
                "Infrastructure as Code",
                "SOC2 Ready Security",
                "Automated Scaling"
            ]}
        />
    );
}
