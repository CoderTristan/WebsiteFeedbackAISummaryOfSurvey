# AI Survey Response Analyzer
Cloud-native survey tool and feedback analyzer built with Next.js, TypeScript, Supabase, Stripe, Clerk, PostHog, and Sentry. 
> Designed to collect user responses directly from websites and automatically generate summaries using integrated AI analysis. Processes user feedback through data pipelines including structured
> response aggregation and AI-driven summarization handled by Supabase.
> User authentication is managed via Clerk, monetization is handled with
> Stripe billing, and the entire platform is deployed to Vercel.
---
## Features
- AI-powered automated response summarization
- Customizable survey creation and deployment
- Complete user authentication and session sync with Clerk
- Tiered web-billing and subscription management with Stripe
- Full telemetry and user event tracking using PostHog and Sentry
- API-first route handling with data stored in Supabase
---
## Architecture
```text
Client (Browser)
   │
   ▼
Next.js App Router (Vercel)
   │
   ├── Core Components & Custom UI (Tailwind CSS)
   │
   ├── Clerk (Auth Processing)
   │
   ├── Stripe (Subscription Billing Webhooks)
   |
   ├── Supabase (Database)
   │
   └── Analytics & Telemetry (PostHog & Sentry)
```
---
## Engineering Challenges
- Synced authentication records securely via Clerk backend webhooks
- Processed login and sign-up event streams safely with Stripe webhook verification
- Dynamic path routing optimization for custom survey asset generation (survey/[surveyId])
- Normalized text data to serve structured AI summaries
- Configured modular layouts, analytics wrappers, and global error boundaries natively at the edge
---
## API Overview
### Submit Survey Response
```http
POST /api/surveys/[surveyId]
```
---
**Authentication:** Clerk Session Token
### Sync Billing State
```http
POST /api/stripe/webhooks
```
**Authentication:** Stripe Signature Header 
Listens to invoice events and handles user tier states.
---
## Architecture App Map
| Route | Module Description |
|---------|-------------|
| `(auth)` | Secure user registration |
| `authentication` | Session gating |
| `dashboard` | Core workspace showing overall active metrics, forms, and results |
| `survey/[surveyId]` | Dynamically targeted consumer-facing interactive data collection points |
| `api/cron` | Programmatic automated maintenance schedules or summary generation engines |
---
## Requirements
- Node.js (v18.x or newer)
- npm / yarn / pnpm
- Clerk Account Credentials
- Stripe Account Credentials
- Supabase Account Credentials
- Posthog Account Credentials
---
## Installation
### Project Setup
### Clone the repository and navigate into the folder
```
cd AISurveyResponseAnalyzer
```
---
### Install the necessary production and development dependencies
npm install
Verify the installation:
```bash
node --version
npm --version
```
---
## Configuration

### Update your root project directory 
```
.env.local 
Clerk Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key

STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_signing_secret
POSTHOG_KEY=key
SUPABASE_KEY=key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
