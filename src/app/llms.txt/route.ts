import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Software Lab

Full-stack digital engineering laboratory specializing in high-performance web applications, automation systems, and enterprise software.

## Core Expertise
- **Web Development**: Next.js, React, Node.js, MERN Stack.
- **E-commerce**: Shopify, Custom Headless builds.
- **Automation**: n8n, custom internal tools, Notion/ClickUp workspace engineering.
- **DevOps**: CI/CD pipelines, Cloud infrastructure (AWS / Vercel), Monitoring.

## Our Philosophy
- **Engineering First**: We prioritize code integrity and scalability.
- **Conversion Focused**: Every pixel serves a business goal.
- **Agile Methodology**: Fast iterations and transparent communication.

## Key Links (Prefix with locale: /en, /ur, /ar)
- Services: /[locale]/services
- Case Studies: /[locale]/case-studies
- Pricing: /[locale]/pricing
- Quote Wizard: /[locale]/quote

## Contact
- Web: https://software-lab.com
- Status: Active engineering lab accepting global sprints.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
