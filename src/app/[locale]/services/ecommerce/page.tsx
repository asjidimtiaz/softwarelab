import { ServiceTemplate } from "@/components/sections/service-template";
import { ShoppingCart } from "lucide-react";
import { SiShopify, SiNextdotjs, SiStripe, SiPostgresql } from "react-icons/si";

export default function EcommercePage() {
    return (
        <ServiceTemplate
            title="Enterprise"
            subtitle="E-commerce Ops"
            description="Scalable Shopify, Headless Commerce, and custom commerce solutions built to maximize conversion, loyalty, and average order value."
            icon={ShoppingCart}
            features={[
                "Headless Commerce",
                "Stripe Integration",
                "Inventory Automation",
                "Custom Loyalty Systems"
            ]}
            techStack={[
                { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
                { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
                { name: "Stripe", icon: SiStripe, color: "text-[#635BFF]" },
                { name: "Postgres", icon: SiPostgresql, color: "text-[#4169E1]" },
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
