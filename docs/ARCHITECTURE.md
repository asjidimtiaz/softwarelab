# Technical Architecture - Software Lab Company

## 3) Recommended Tech Stack (Enterprise-Grade, MERN-Friendly)

### Frontend

- Next.js (App Router) + TypeScript
- TailwindCSS 4 + Radix UI (or shadcn/ui)
- Framer Motion for UI motion (core)
- GSAP (only for hero/scroll scenes)
- Lottie (selective)

### Backend

- Next.js Route Handlers + Server Actions (Option A)

### Database

- MongoDB Atlas
- ODM: Mongoose

### Caching/Jobs

- Redis (Upstash) for:
  - rate limiting
  - queue jobs (BullMQ)
  - caching expensive reads

### Auth

- NextAuth (admin only)
  - Credentials + strong password policy
  - Optional magic link

### Email + Notifications

- Resend/SendGrid
- Slack notifications (Webhook)

### Analytics

- Plausible/PostHog
- Event tracking: quote funnel steps + CTA clicks

### Hosting

- Vercel for Next.js
- MongoDB Atlas
- Upstash Redis (optional)
- Cloudflare R2 for uploads

## 4) Information Architecture (Routes)

### 4.1 Public Core

- `/` - Home
- `/services` - Service hub
- `/services/[serviceSlug]` - Main service
- `/services/[serviceSlug]/[subServiceSlug]` - Sub service
- `/case-studies`
- `/case-studies/[slug]`
- `/process`
- `/pricing`
- `/about`
- `/contact`
- `/quote` - Wizard
- `/resources` - Blog hub
- `/blog/[slug]`
- `/{locale}/...` - Multi-language routing

### 4.2 Technology & Platform Pages

- `/tech hub`
- `/tech/mern`, `/tech/nextjs`, etc.

### 4.3 Admin (Protected)

- `/admin`
- `/admin/leads`
- `/admin/leads/[id]`
- `/admin/tasks`
- `/admin/settings`
- `/admin/analytics`

## 9) Data Model (MongoDB)

- **users**: email, name, role, passwordHash, lastLoginAt, isActive
- **leads**: leadScore, leadTier, events, tasks, etc.
- **serviceCatalog**: category, service, subservice, SEO fields, features, FAQs
- **content**: type (blog/case-study/page), locale, slug, title, body, status
- **settings**: site name, domains, locales, scoring rules, integrations

## 10) API Design

- Zod validation
- Consistent error schema
- Rate limiting
- Request ID logging

### Public

- `POST /api/leads/contact`
- `POST /api/leads/quote`
- `GET /api/service-catalog`

### Admin

- `GET /api/admin/leads`
- `PATCH /api/admin/leads/:id`
- `POST /api/admin/leads/:id/notes`
- `GET /api/admin/analytics/summary`

## 11) Automations (n8n Workflows)

- Lead Intake: Slack alert + Email + HOT lead reminder
- Quote Submitted: Next steps email + CRM sync
- Follow-up Reminders: Cron daily for overdue tasks

## 15) Observability

- Structured logging (pino/winston)
- Error monitoring (Sentry)
- Track funnel events
- Admin system health widget
