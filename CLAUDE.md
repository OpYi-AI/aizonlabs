# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production (static export to `./out`)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx tsc --noEmit` - Type check without emitting files
- `npm run deploy` - Deploy to Cloudflare using Wrangler
- `npm run deploy:preview` - Deploy to Cloudflare preview environment
- `npm run deploy:pages` - Deploy to Cloudflare Pages directly

## Architecture Overview

This is a Next.js 14 AizonLabs landing page built with TypeScript, Tailwind CSS, and Framer Motion. It's configured for **static export** deployment to Cloudflare Pages.

### Key Structure

- **App Router**: Uses Next.js App Router with `app/` directory structure
- **Static Export**: Configured with `output: 'export'` in `next.config.mjs` for Cloudflare Pages
- **Layout Pattern**: Root layout includes global Navbar, Footer, and ThemeProvider wrapper
- **Landing Page Components**: Modular landing page sections (Hero, Features, Testimonials, LeadForm, FAQ) composed in `app/page.tsx`
- **Theme System**: Dark/light mode toggle using `next-themes` with system preference detection
- **Component Architecture**: Reusable UI components in `/components` directory
- **Styling**: Tailwind CSS with custom utilities in `lib/utils.ts` using `clsx` and `tailwind-merge`

### Critical Integrations

- **Cal.com Embed**: Integration via `@calcom/embed-react` with custom hook and modal system
  - `BookingButton` → `BookingModal` → `InlineBooking` component flow
  - Configuration in `constants/links.ts` (CALCOM_* constants)
  - Cal.com script loaded via `CalScript` component in layout
- **Supabase**: Database integration for lead form submissions via `utils/supabaseClient.ts`
- **Cloudflare Pages**: Static site deployment with nodejs_compat flag in `wrangler.jsonc`

### Build Configuration

- **Static Export**: `next.config.mjs` configured for static HTML generation
- **Image Optimization**: Disabled (`unoptimized: true`) for static export compatibility
- **Trailing Slashes**: Enabled for proper static routing
- **Remote Images**: Patterns configured for assets.aceternity.com and images.unsplash.com

### Import Aliases

Uses `@/*` path mapping to root directory for cleaner imports.

## Page Structure & Responsive Layout

- **Home** (`/`): Hero, Features, Testimonials (responsive layout), LeadForm (different placement mobile vs desktop), FAQ
- **Privacy Policy** (`/privacy-policy`): Legal content with proper formatting
- **Terms of Service** (`/terms-of-service`): Legal content with cross-links
- **Login** (`/login`): Authentication page

## Key Technical Details

### Theme System
- Auto-detects system preference on first visit
- Respects user manual preferences stored in localStorage
- Global theme application via HTML class manipulation

### Cal.com Integration
- Modal-based booking system triggered from navbar and footer
- Integrated with AizonLabs Cal.com account (`aizonlabs/30min`)
- Custom styling with brand colors

### Responsive Design
- Mobile-first approach with Tailwind responsive classes
- LeadForm appears after Features on mobile, after Testimonials on desktop
- Logo scales from 56px (mobile) to 64px (desktop)
- Testimonials: 2-column mobile, 6-column desktop layout

### Animation System
- Framer Motion for page transitions and component animations
- Hero section with animated background beams and explosion effects
- Optimized for all screen sizes

## Deployment

This project is configured for **Cloudflare Pages** deployment with static export. The build process generates static HTML files in the `./out` directory. See `DEPLOYMENT.md` for detailed deployment instructions.