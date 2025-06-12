# AizonLabs Landing Page - Project Summary

## Overview
A modern, responsive landing page for AizonLabs AI automation services built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features advanced animations, lead capture, and Supabase integration.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Supabase (backend/database)
- React Icons / Tabler Icons
- React Wrap Balancer

## Key Features

### 1. Animated Hero Section
- Staggered word animations with blur effects
- Multiple animated beam effects with collision detection
- Rotating background grid patterns
- Explosion animations on beam collisions
- Smooth fade-in transitions

### 2. Responsive Navigation
- Animated navbar with scroll-based transformations
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Dark/light mode toggle

### 3. Lead Generation System
- Professional lead capture form
- Supabase database integration
- Form validation and error handling
- Success/error messaging
- Collects: name, email, company, message

### 4. Content Sections
- Features showcase with interactive cards
- Testimonials with social proof statistics
- Interactive FAQ with accordion functionality
- Professional footer with proper navigation

### 5. Performance & UX
- Server-side rendering (SSR)
- Optimized animations and transitions
- Responsive design (mobile-first)
- Proper section spacing and visual hierarchy

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Supabase database:
   - Create 'leads' table with columns: id, name, email, company, message, created_at
   - Enable Row Level Security (RLS)
   - Create INSERT policy for public access

3. Configure Supabase client in /utils/supabaseClient.ts with your credentials

4. Run development server:
   ```bash
   npm run dev
   ```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure
```
/app
  /hooks         - Custom React hooks (Cal.com embed)
  layout.tsx     - Root layout with navbar/footer
  page.tsx       - Main landing page
  globals.css    - Global styles

/components
  hero.tsx       - Animated hero section
  navbar.tsx     - Navigation with animations
  features.tsx   - Services showcase
  testimonials.tsx - Social proof section
  lead-form.tsx  - Lead capture form
  faq.tsx        - FAQ accordion
  footer.tsx     - Site footer
  button.tsx     - Reusable button component

/utils
  supabaseClient.ts - Supabase configuration

/constants
  links.ts       - App constants and links
```

## Current Page Flow
1. **Hero** - Animated introduction with CTA
2. **Features** - AI automation services showcase
3. **Testimonials** - Social proof and statistics  
4. **Lead Form** - Main conversion point
5. **FAQ** - Common questions and answers
6. **Footer** - Navigation and company info

## Database Schema (Supabase)
```sql
CREATE TABLE leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT,
  email TEXT, 
  company TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT now()
);
```

## Key Design Decisions
- Used Framer Motion for smooth, professional animations
- Implemented proper section spacing with space-y-16
- Maintained consistent py-20 padding across sections
- Used alternating background colors for visual separation
- Positioned lead form after testimonials for better conversion
- Added comprehensive FAQ section to address common concerns

## Performance Notes
- All animations use hardware acceleration
- Images optimized with Next.js Image component
- CSS-in-JS with Tailwind for optimal bundle size
- Server-side rendering for fast initial load
- Smooth scrolling behavior for navigation

## Deployment Ready
- Build passes all TypeScript checks
- ESLint configured and passing
- Production-optimized bundle
- Environment variables properly configured
- Database schema documented and tested

## Future Enhancements
- A/B test different CTA placements
- Add more interactive animations
- Implement email marketing integration
- Add analytics tracking
- Create admin dashboard for leads

Built with ❤️ for professional AI automation lead generation.