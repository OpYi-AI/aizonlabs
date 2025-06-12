# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 14 AizonLabs landing page built with TypeScript, Tailwind CSS, and Framer Motion.

### Key Structure

- **App Router**: Uses Next.js App Router with `app/` directory structure
- **Layout Pattern**: Root layout includes global Navbar, Footer, and ThemeProvider wrapper
- **Landing Page Components**: Modular landing page sections (Hero, Features, Testimonials, LeadForm, FAQ) composed in `app/page.tsx`
- **Theme System**: Dark/light mode toggle using `next-themes` with system preference detection
- **Component Architecture**: Reusable UI components in `/components` directory
- **Styling**: Tailwind CSS with custom utilities in `lib/utils.ts` using `clsx` and `tailwind-merge`

### Special Integrations

- **Cal.com Embed**: Integration via `@calcom/embed-react` with custom hook and modal system (see booking-button.tsx, booking-modal.tsx, inline-booking.tsx)
- **Supabase**: Database integration for lead form submissions via `utils/supabaseClient.ts`
- **Animations**: Framer Motion for page transitions and component animations
- **Icons**: Mix of Lucide React, Tabler Icons, and React Icons
- **Image Optimization**: Next.js Image component with remote patterns configured for assets.aceternity.com and images.unsplash.com

### Cal.com Booking System

The booking system uses a modal-based approach:
- `BookingButton` triggers `BookingModal`
- `BookingModal` contains `InlineBooking` component
- Configuration stored in `constants/links.ts` (CALCOM_* constants)
- Cal.com script loaded via `CalScript` component in layout

### Import Aliases

Uses `@/*` path mapping to root directory for cleaner imports.

## 🚀 Project Overview

**AizonLabs Landing Page** - A modern Next.js 14 website for AI automation solutions with advanced features and integrations.

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion for interactive effects
- **Theme System**: Enhanced next-themes with system preference detection
- **Icons**: Lucide React, Tabler Icons, React Icons

## 🎨 Key Features Implemented

### 1. **Hero Section with Animated Background**
- Orange/yellow diagonal lines that fall like rain across the screen
- Explosion effects when lines hit the bottom boundary
- 5 animated beams with staggered timing for dynamic visual appeal
- Responsive animation that spans full page width

### 2. **Cal.com Booking Integration**
- Modal-based booking system triggered from navbar and footer
- Integrated with actual AizonLabs Cal.com account (`aizonlabs/30min`)
- Seamless booking experience without leaving the website
- Custom styling with blue gradient branding

### 3. **Enhanced Theme System**
- Auto-detects system color scheme on first visit
- Respects user manual preferences stored in localStorage
- Dynamic system theme change detection
- Global theme application via HTML class manipulation

### 4. **Company Branding**
- Custom AizonLabs logo integration (`aizonlabs_logo.png`)
- Responsive logo sizing across all pages
- Consistent brand colors and styling throughout

### 5. **Legal Pages**
- Privacy Policy page (`/privacy-policy`)
- Terms of Service page (`/terms-of-service`)
- Cross-linked with proper new tab behavior
- Professional legal content with proper formatting

### 6. **Interactive Components**
- FAQ section with gradient hover effects
- Testimonials with company logo showcase (6 branded SVG logos)
- Responsive navigation with mobile support
- Footer with social links (Instagram, Twitter, LinkedIn)

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind responsive classes
- **Navbar**: Collapsible mobile menu with booking integration
- **Logo**: Scales from 56px (mobile) to 64px (desktop)
- **Testimonials**: 2-column mobile, 6-column desktop layout
- **Animations**: Optimized for all screen sizes

## 🔧 Technical Enhancements

### Theme System
```javascript
// Auto-detects system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// Respects user manual choices in localStorage
// Dynamic system theme change listening
```

### Cal.com Integration
```javascript
// Custom booking modal with aizonlabs/30min
CALCOM_LINK: "aizonlabs/30min"
CALCOM_NAMESPACE: "aizonlabs-30min"
```

### Animation System
- 5 animated beams with explosion effects
- Proper collision detection at page boundaries
- Particle systems with realistic physics

## 📄 Page Structure

- **Home** (`/`): Hero, Features, Testimonials, Contact, FAQ
- **Privacy Policy** (`/privacy-policy`): Legal content with logo
- **Terms of Service** (`/terms-of-service`): Legal content with cross-links
- **Responsive layouts** with consistent spacing and typography

## 🎯 User Experience Features

- **Booking**: Seamless Cal.com integration in modal
- **Navigation**: Smooth scrolling to sections
- **Theme**: Automatic system preference detection
- **Legal**: New tab opening for legal pages
- **Visual**: Engaging animations without being overwhelming
- **Mobile**: Fully responsive across all devices

## 🔗 External Integrations

- **Cal.com**: Live booking system for consultations
- **Next.js Image**: Optimized logo and asset loading
- **Framer Motion**: Smooth animations and transitions
- **Tailwind**: Utility-first styling with dark mode

## 📊 Performance Optimizations

- Next.js automatic code splitting
- Optimized images with Next.js Image component
- Efficient animation with Framer Motion
- Minimal bundle size with selective imports

This project represents a professional, modern landing page with advanced features that provide an excellent user experience while maintaining clean, maintainable code architecture.