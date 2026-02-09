import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Digi Web Crew

Full-stack digital engineering laboratory specializing in high-performance web applications, AI automation systems, and enterprise software engineering. Founded by Toqeer Shafique.

## Core Expertise
- **Web Development**: Next.js, React, Node.js, MERN Stack.
- **E-commerce**: Shopify, Custom Headless commerce architectures.
- **Automation**: GPT-4 integrations, custom internal tools, workflow engineering.
- **DevOps**: Secure CI/CD pipelines, Cloud optimization (AWS / Vercel), Proactive Monitoring.

## Our Philosophy
- **Engineering Excellence**: We prioritize code scalability and system resilience.
- **Data-Driven Conversion**: Every pixel is optimized for business KPIs.
- **Agile Architecture**: Fast iterations with transparent logic mapping.

## Key Hubs (Prefix with locale: /en, /ur, /ar)
- Portfolio: /[locale]/case-studies
- Process: /[locale]/process
- Investment: /[locale]/pricing
- Calculator: /[locale]/quote

## Digital Presence
- Web: https://digiwebcrew.com
- Engineering Lead: Toqeer Shafique (github.com/toqeer74)
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
