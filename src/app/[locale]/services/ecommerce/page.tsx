import { ServiceTemplate } from "@/components/sections/service-template";

export default function EcommercePage() {
    return (
        <ServiceTemplate
            title="Enterprise"
            subtitle="E-commerce Ops"
            description="Scalable Shopify, Headless Commerce, and custom commerce solutions built to maximize conversion, loyalty, and average order value."
            iconName="ShoppingCart"
            features={[
                "Headless Commerce",
                "Stripe Integration",
                "Inventory Automation",
                "Custom Loyalty Systems"
            ]}
            techStack={[
                { name: "Shopify", iconName: "SiShopify", color: "text-[#96BF48]" },
                { name: "Next.js", iconName: "SiNextdotjs", color: "text-gray-900" },
                { name: "Stripe", iconName: "SiStripe", color: "text-[#635BFF]" },
                { name: "Postgres", iconName: "SiPostgresql", color: "text-[#4169E1]" },
            ]}
            outcomes={[
                "25%+ Conversion Increase",
                "Seamless Mobile Shopping",
                "Inventory Sync Precision",
                "Automated Lead Capture"
            ]}
        />
    );
}
