# Services Section Documentation

## Overview
Simplified, focused services section for Rolva - a solo SMMA operation. Features a single core offering with clear monthly plan details.

## Location
- **Component**: `src/components/services-section.tsx`
- **Page Integration**: Inserted after "Benefits" section, before "Process" section
- **Navigation Link**: Added to navbar as "Services"

## Core Service Offering

### Social Media Management & Content Creation
**Icon**: Sparkles  
**Accent**: Orange (#FF4B2B to #FF9F40)

**Headline**: "What I Offer"  
**Description**: "I help businesses grow their online presence through consistent posting, high-quality visuals, and content that converts followers into customers."

**Monthly Plan Includes**:
- 12–16 posts per month
- Captions, hashtags, and scheduling
- Comment and DM engagement
- Monthly performance analytics

## Layout Structure

### 1. Section Header
- Centered layout
- Headline: "What I Offer" with gradient accent on "Offer"
- Description paragraph explaining the value proposition
- Max width: max-w-2xl
- Text size: lg/xl, color: gray-300

### 2. Main Service Card
- Single centered card
- Max width: max-w-4xl container
- Rounded corners: rounded-2xl
- Glass morphism: bg-white/5 backdrop-blur-sm
- Hover effect: subtle gradient border appears

### 3. Card Contents
- Orange Sparkles icon in badge
- Service title (2xl/3xl)
- "What's Included" section header
- 4 bullet points with orange check marks (#FF4B2B)
- Clean spacing between items

### 4. Retainer Note
- Centered below main card
- Rounded card with subtle background
- "Why Monthly Retainer?" heading
- Short paragraph with highlighted keywords
- Max width: max-w-2xl

## Retainer Model Note

Located below the main service card, explains the value of monthly retainers.

### Structure:
- Simple card with centered content
- "Why Monthly Retainer?" heading
- One paragraph with three highlighted benefits:
  - **Predictable results**
  - **Long-term growth**
  - **Consistent brand building**

### Styling:
- Glass morphism: `bg-white/5 backdrop-blur-sm`
- Centered text layout
- Highlighted keywords in white with medium font weight
- Max width: max-w-2xl
- Padding: p-8

## Styling Details

### Card Hover Effects:
```css
- Lift up: y: -8px
- Border brightness: white/10 → white/20
- Gradient overlay: opacity 0 → 5%
- Title gradient effect
- Duration: 300ms
```

### Responsive Design:
- Single column layout at all breakpoints
- Centered content
- Container adjusts width smoothly
- Mobile: Full padding maintained
- Desktop: Content centered with max-width

### Spacing:
- Section padding: py-24 px-6
- Card padding: p-8 (mobile), p-10 (desktop)
- Container max-width: max-w-4xl
- Bottom margin: mb-12 between cards

### Colors:
- Background: bg-white/5
- Borders: border-white/10
- Text primary: text-gray-300
- Text secondary: text-gray-400
- Accent: Orange (#FF4B2B to #FF9F40)
- Check marks: #FF4B2B
- Highlighted text: White with font-medium

## Animations

### Page Load:
- Header: Fade in + slide up (600ms)
- Main card: Fade in + slide up (600ms, 0.2s delay)
- Retainer note: Fade in + slide up (600ms, 0.3s delay)

### Scroll Trigger:
- `whileInView` with `viewport={{ once: true }}`
- Animates when section enters viewport
- Smooth easing for professional feel

### Hover:
- Main card: Gradient border fades in (20% opacity)
- Border color brightens: white/10 → white/20
- Smooth transition: 300-500ms
- No aggressive movements - keeps it professional

## Integration

### Navigation:
Updated navbar items to include:
```typescript
{ href: "/#services", label: "Services" }
```

### Page Order:
1. Hero
2. Benefits (formerly Features)
3. **Services** ← NEW
4. Process
5. Testimonials
6. Pricing
7. CTA
8. Footer

## Customization

### To Update Features:
Modify the `includedFeatures` array at the top of `services-section.tsx`:
```typescript
const includedFeatures = [
  "12–16 posts per month",
  "Captions, hashtags, and scheduling",
  "Comment and DM engagement",
  "Monthly performance analytics"
];
```

### To Change Accent Color:
Replace `#FF4B2B` throughout the component with your brand color. Used in:
- Gradient backgrounds
- Check mark icons
- Icon badge
- Hover border effect

### To Adjust Tone:
- "What I Offer" can be changed to "What We Offer" for team feel
- Update description paragraph for different value props
- Modify retainer note text for different positioning

## Performance

- All animations GPU-accelerated
- Lazy loading via `whileInView`
- Framer Motion automatic optimization
- No layout shift on load
- Optimized for mobile devices

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h2 → h3 → h4)
- Check icon alt text via Lucide React
- Sufficient color contrast ratios
- Keyboard navigation support
- Screen reader friendly

## Browser Support

- ✅ Chrome/Edge
- ✅ Firefox  
- ✅ Safari
- ✅ Mobile browsers
- Graceful degradation for older browsers
