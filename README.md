# Rolva - Social Marketing Agency Website

A stunning, modern SMMA website built with Next.js 14, featuring a premium dark design aesthetic with grainy texture effects and beautiful Framer Motion animations.

## ✨ Features

- **Premium Dark Design** - Modern black background with grainy texture that creates depth
- **Vibrant Color Scheme** - Blue, orange, and red gradient accents matching the logo
- **Framer Motion Animations** - Smooth page transitions, hover effects, and scroll animations
- **Floating Background Orbs** - Animated gradient spheres that move organically
- **Fully Responsive** - Mobile-first design that scales beautifully across all devices
- **Modern UI Components** - Built with shadcn/ui for consistent, accessible components
- **Legal Pages Included** - Complete Terms of Service and Privacy Policy pages
- **Optimized Performance** - Server components by default, minimal client-side JavaScript
- **SEO Ready** - Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality component library
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icons
- **pnpm** - Fast, disk space efficient package manager

## 🚀 Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with Inter font
│   │   ├── page.tsx              # Main landing page (client component)
│   │   ├── globals.css           # Global styles, animations & grainy texture
│   │   ├── book/
│   │   │   └── page.tsx         # Calendly booking page
│   │   ├── terms-of-service/
│   │   │   └── page.tsx         # Terms of Service page
│   │   └── privacy-policy/
│   │       └── page.tsx         # Privacy Policy page
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx       # Custom button with gradient
│   │   ├── navigation.tsx       # Main navbar with mobile menu
│   │   ├── animated-background.tsx  # Floating gradient orbs
│   │   ├── cta-section.tsx      # CTA with gradient border
│   │   └── scroll-fade-in.tsx   # Scroll animation wrapper
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── public/
│   ├── images/
│   │   ├── logo-transparent.png # Your cube logo (used in nav/footer)
│   │   └── logo.svg             # Alternative gradient logo
│   ├── grid.svg                 # Grid pattern overlay
│   └── noise.svg                # Grainy texture effect
└── components.json              # Shadcn UI configuration
```

## 🎨 Design Features

### Navigation
- Fixed navbar with backdrop blur and gradient logo
- Smooth scroll navigation with animated underlines
- Mobile menu with slide-down animation
- Links to Terms of Service and Privacy Policy

### Hero Section
- Large, elegant typography mixing sans-serif and italic serif
- Animated availability badge with pulse effect
- Dual CTA buttons with gradient backgrounds and hover scale
- Mockup showcase with rotating logo animation
- Grainy texture overlay for premium feel

### Sections Included
- **Hero** - Large headline with CTA buttons and animated logo showcase
- **Benefits** - 6 feature cards with icons and hover lift effects
- **Process** - 3-step numbered cards with gradient numbers
- **Testimonials** - 3 customer reviews with star ratings and hover effects
- **Pricing** - Two-tier pricing with Social Media Growth Plan and Growth + Ads Plan
- **CTA Section** - Gradient border card with animated glow effect
- **Footer** - Minimal footer with gradient logo and legal links

### Animation Details
- Page load animations with staggered children
- Scroll-triggered fade-in effects
- Hover scale and lift animations on cards
- Floating gradient orbs in background (20-25s loops)
- Rotating logo showcase in hero
- Smooth transitions on all interactive elements

## 🎯 Performance

- Server-side rendering by default
- Minimal client components (only for animations)
- Optimized fonts and images
- Clean, semantic HTML

## 📱 Responsive Design

- Mobile: Stack layout, full-width cards
- Tablet: 2-column grid for features
- Desktop: 3-column grid, large typography

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌈 Color Scheme & Background

### Background
- Pure black `#000000` base
- Layered radial gradients with noise texture
- Blue gradient at top (15% opacity)
- Red gradient on left (10% opacity)
- Orange gradient on right (10% opacity)
- Blue gradient at bottom (12% opacity)
- Grainy SVG overlay (200px tiles)
- Fixed attachment for parallax effect

### Colors
- Primary Blue: `#5B7CFF` 
- Accent Orange: `#FF9F40`
- Accent Red: `#FF6B4A`
- Text: White with varying opacity (98% for primary, 40% for muted)
- Borders: White with 5-15% opacity
- Gradient: Blue → Orange → Red (matching logo)

## 📝 License

ISC
