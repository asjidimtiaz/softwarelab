import { ServiceTemplate } from "@/components/sections/service-template";

export default function DevOpsCloudPage() {
    return (
        <ServiceTemplate
            title="Cloud Infra"
            subtitle="& DevOps Scaling"
            description="Secure, reliable cloud infrastructure and CI/CD pipelines designed for zero-downtime deployments and extreme system resilience."
            iconName="Cloud"
            features={[
                "AWS/Azure Mastery",
                "CI/CD Orchestration",
                "Kubernetes Scaling",
                "Security Hardening"
            ]}
            techStack={[
                { name: "AWS", iconName: "SiAmazonwebservices", color: "text-[#FF9900]" },
                { name: "Docker", iconName: "SiDocker", color: "text-[#2496ED]" },
                { name: "Kubernetes", iconName: "SiKubernetes", color: "text-[#326CE5]" },
                { name: "Terraform", iconName: "SiTerraform", color: "text-[#7B42BC]" },
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
