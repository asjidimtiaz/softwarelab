export type ServiceSubItem = {
  title: string;
  slug: string;
  description: string;
  features: string[];
  outcomes: string[];
  deliverables: string[];
  techStack: string[];
  faqs: { q: string; a: string }[];
};

export type ServiceCategory = {
  title: string;
  slug: string;
  description: string;
  iconName: string;
  subServices: ServiceSubItem[];
};

export type TechLab = {
  title: string;
  slug: string;
  description: string;
  iconName: string;
  capabilities: string[];
  relatedServices: string[]; // Slugs of service categories
};

export const serviceCatalog: ServiceCategory[] = [
  {
    title: "Custom Software",
    slug: "custom-software",
    description: "Enterprise-grade systems engineered for high-stakes business operations and industrial scale.",
    iconName: "Code2",
    subServices: [
      {
        title: "Web App Development",
        slug: "web-app-development",
        description: "Bespoke, high-performance web applications built with the latest reactive frameworks for seamless user experiences.",
        features: ["State-of-the-art SPA/SSR architecture", "Real-time data synchronization", "Advanced RBAC security models"],
        outcomes: ["100% custom business logic", "Scalable cloud-ready infrastructure", "Zero technical debt architecture"],
        deliverables: ["Full source code ownership", "Technical documentation", "CI/CD pipeline setup"],
        techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
        faqs: [
          { q: "Do you use templates?", a: "No, every line of code is written specifically for your business requirements." },
          { q: "How do you handle scaling?", a: "We build on stateless architectures that scale horizontally in the cloud." }
        ]
      },
      {
        title: "Mobile App Development",
        slug: "mobile-app-development",
        description: "Native-quality mobile experiences for iOS and Android built from a single, high-performance codebase.",
        features: ["React Native & Expo expertise", "Native module integration", "Offline-first sync engines"],
        outcomes: ["Faster time-to-market", "Near-native performance", "Feature parity across platforms"],
        deliverables: ["App Store & Play Store builds", "Mobile API backend", "Push notification system"],
        techStack: ["React Native", "Expo", "Firebase", "App Store Connect"],
        faqs: []
      },
      {
        title: "SaaS Development",
        slug: "saas-development",
        description: "Foundational architecture for multi-tenant software platforms with built-in subscription and billing logic.",
        features: ["Multi-tenancy isolation", "Stripe Connect integration", "Usage-based billing engines"],
        outcomes: ["Investor-ready architecture", "Scalable customer onboarding", "Robust subscription management"],
        deliverables: ["SaaS Boilerplate Core", "Tenant management dashboard", "Billing & Analytics sync"],
        techStack: ["NextAuth.js", "Stripe", "Prisma", "AWS"],
        faqs: []
      }
    ]
  },
  {
    title: "Full-Stack Websites",
    slug: "full-stack-websites",
    description: "Conversion-optimized web experiences that combine elite design with industrial-grade performance.",
    iconName: "Globe",
    subServices: [
      {
        title: "Next.js Performance Sites",
        slug: "nextjs-websites",
        description: "Blazing fast, SEO-dominant websites leveraging the power of server-side rendering and edge computing.",
        features: ["Sub-second PageSpeed scores", "Static Site Generation (SSG)", "Incremental Static Regeneration (ISR)"],
        outcomes: ["Higher search engine rankings", "Reduced bounce rates", "Exceptional mobile performance"],
        deliverables: ["Vercel production setup", "Headless CMS integration", "SEO & Metadata engine"],
        techStack: ["Next.js", "Sanity.io", "TailwindCSS", "Vercel"],
        faqs: []
      },
      {
        title: "MERN Stack Solutions",
        slug: "mern-websites",
        description: "Robust, data-intensive websites built on the battle-tested MongoDB, Express, React, and Node.js stack.",
        features: ["Dynamic NoSQL data models", "RESTful & GraphQL APIs", "Complex state management"],
        outcomes: ["High data flexibility", "Modular component architecture", "Efficient large-scale data handling"],
        deliverables: ["Full-stack repository", "Database schema plans", "API documentation"],
        techStack: ["MongoDB", "Express", "React", "Node.js"],
        faqs: []
      }
    ]
  },
  {
    title: "E-commerce Development",
    slug: "ecommerce",
    description: "High-conversion commerce engines that drive predictable revenue and customer loyalty.",
    iconName: "ShoppingCart",
    subServices: [
      {
        title: "Shopify Elite Themes",
        slug: "shopify-development",
        description: "Custom-coded Shopify themes that break free from template restrictions and prioritize performance.",
        features: ["Liquid code optimization", "Custom Shopify apps", "Advanced product filtering"],
        outcomes: ["Unique brand identity", "Superior mobile conversion", "Easy manageable backend"],
        deliverables: ["Custom Shopify Theme", "App configuration guide", "Staff training documentation"],
        techStack: ["Shopify", "Liquid", "Hydrogen", "Stripe"],
        faqs: []
      }
    ]
  },
  {
    title: "Automation & Tools",
    slug: "automation-internal-tools",
    description: "Intelligent systems that automate manual tasks and provide real-time operational visibility.",
    iconName: "Zap",
    subServices: [
      {
        title: "n8n Workflow Automation",
        slug: "n8n-automation",
        description: "Self-hosted, secure workflow automation that connects your entire software stack into one cohesive system.",
        features: ["Complex branching logic", "Webhook & API triggers", "Self-hosted data privacy"],
        outcomes: ["Thousands of hours saved", "Zero manual data errors", "Unified business operations"],
        deliverables: ["Workflow JSON exports", "Self-hosting config", "Monitoring dashboards"],
        techStack: ["n8n", "Docker", "PostgreSQL", "Redis"],
        faqs: []
      }
    ]
  }
];

export const techLabs: TechLab[] = [
  {
    title: "The Next.js Hub",
    slug: "nextjs",
    description: "Our core laboratory for building high-performance, SEO-optimized web experiences.",
    iconName: "Zap",
    capabilities: ["SSR & SSG Optimization", "Edge Function Deployment", "Middleware Security"],
    relatedServices: ["full-stack-websites", "custom-software"]
  },
  {
    title: "The Shopify Lab",
    slug: "shopify",
    description: "Specialized engineering for high-growth merchants requiring custom commerce logic.",
    iconName: "ShoppingCart",
    capabilities: ["Liquid Engineering", "Hydrogen/Headless", "Private App Development"],
    relatedServices: ["ecommerce"]
  },
  {
    title: "The Automation Studio",
    slug: "n8n",
    description: "Where we architect complex workflows and integrate disparate systems.",
    iconName: "Code2",
    capabilities: ["Workflow Design", "Custom Nodes", "Self-hosted Infra"],
    relatedServices: ["automation-internal-tools"]
  }
];

export function getServiceBySlug(catSlug: string, subSlug?: string) {
  const category = serviceCatalog.find(c => c.slug === catSlug);
  if (!subSlug) return { category, subService: null };
  const subService = category?.subServices.find(s => s.slug === subSlug);
  return { category, subService: subService || null };
}

export function getTechLabBySlug(slug: string) {
  return techLabs.find(t => t.slug === slug) || null;
}
