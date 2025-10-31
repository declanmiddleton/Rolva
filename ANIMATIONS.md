# Animation Guide

This document outlines all the animations implemented in the Rolva website using Framer Motion.

## Global Animations

### Animated Background
**File:** `src/components/animated-background.tsx`
- Three floating gradient orbs (Blue, Orange, Red)
- Each orb moves in a unique pattern
- Duration: 20-25 seconds per loop
- Infinite repeat with smooth easing
- Creates depth and visual interest

### Grainy Texture
**File:** `src/app/globals.css`
- SVG noise filter applied to body
- Creates premium, organic feel
- Subtle and non-intrusive

## Page Load Animations

### Hero Section
**Stagger Container:** All children animate with 0.1s delay between each
- Availability badge: Fade in + slide up (0.6s)
- Main headline: Fade in + slide up (0.6s)
- Subtitle: Fade in + slide up (0.6s)
- CTA buttons: Fade in + slide up (0.6s)
- Hero image: Fade in + slide up (0.6s)
  - Logo inside: Continuous scale + rotate animation (6s loop)

### Navigation
**File:** `src/components/navigation.tsx`
- Slides down from top on page load (0.6s)
- Nav links have animated underlines on hover (0.3s)
- Mobile menu slides down with opacity fade (0.3s)

## Scroll Animations

All sections use **whileInView** trigger:
- Activates when section enters viewport
- `viewport={{ once: true }}` - animates only once
- Prevents re-animation on scroll back

### Feature Cards
- Fade in + slide up on scroll
- Hover: Lift up 8px + scale 1.02 (0.3s)
- Icon rotates 5° and scales 1.1 on hover (0.3s)

### Process Cards
- Fade in + slide up with stagger
- Hover: Scale 1.05 (0.3s)
- Number has gradient background

### Testimonial Cards
- Fade in + slide up with stagger
- Hover: Lift up 5px (0.3s)

### Pricing Section
- Entire card: Fade in + scale from 0.95 to 1 (0.6s)
- Hover: Border color brightens (0.3s)

### CTA Section
**File:** `src/components/cta-section.tsx`
- Animated gradient border that glows on hover
- Border blur opacity: 25% → 40% on hover
- Smooth transition: 1s normal, 0.2s on hover

## Button Animations

**File:** `src/components/ui/button.tsx`
- Default variant: Gradient background (Blue to Purple)
- Hover: Shadow glow + scale 1.05
- All transitions: 0.3s ease

## Animation Principles

1. **Timing:**
   - Quick interactions: 0.3s
   - Page load: 0.6s
   - Background: 20-25s

2. **Easing:**
   - Default: ease-out for natural feel
   - easeInOut for continuous loops

3. **Performance:**
   - GPU-accelerated properties (transform, opacity)
   - Minimal repaints
   - `will-change` applied automatically by Framer Motion

4. **Accessibility:**
   - All animations can be disabled via system preferences
   - No required animations for functionality
   - Smooth, non-jarring movements

## Customization

To adjust animation speeds, modify the `duration` values in:
- Component files (inline Framer Motion props)
- `globals.css` for keyframe animations

To disable animations:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Future Enhancements

Potential additions:
- Parallax scrolling effects
- Mouse-follow gradients
- Magnetic buttons
- Page transition animations
- Loading skeleton screens
- Micro-interactions on form inputs
