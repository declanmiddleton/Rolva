# Pricing Structure Documentation

## Overview
Two-tier pricing model for Rolva SMMA, combining service offerings with clear pricing in a single, focused section.

## Pricing Tiers

### 1. Social Media Growth Plan
**Price**: $1,497/month
**Target**: Businesses that want consistent, high-quality content and a strong online presence

**Includes**:
- 12–16 posts per month (Instagram + TikTok or Facebook)
- Captions, hashtags, and posting schedule
- Comment and DM engagement
- Monthly analytics report
- Growth strategy and optimization

**Styling**:
- White "Get Started" button
- Standard white/10 border
- Subtle hover effects

### 2. Growth + Ads Plan (Most Popular)
**Price**: $2,497/month
**Target**: Brands ready to scale their reach through organic and paid strategy

**Includes**:
- Everything in the Social Media Growth Plan
- Facebook and Instagram ad campaign setup
- Ongoing ad optimization and reporting
- Monthly strategy session
- Content repurposing for ads

**Styling**:
- Orange gradient button (#FF4B2B to #FF9F40)
- Orange gradient border (#FF4B2B/30)
- "Most Popular" badge at top
- Enhanced hover glow effect

## Design Specifications

### Section Header
- Title: "Simple **Pricing**" (Pricing in orange gradient)
- Subtitle: "Choose the plan that fits your goals. No hidden fees, no surprises."
- Centered layout
- Max width: 3xl

### Grid Layout
- Responsive: `grid md:grid-cols-2 gap-8`
- Mobile: Single column, full width
- Desktop: Two columns, equal width
- Container: `max-w-6xl mx-auto`
- Section padding: `py-24 px-6`

### Card Structure

#### Header
1. **"Most Popular" Badge** (Growth + Ads Plan only)
   - Positioned absolutely at top center
   - Orange gradient background
   - White uppercase text
   - Rounded full pill shape

2. **Plan Name**
   - Font: `text-2xl font-bold`
   - Color: White
   - Margin bottom: 2

3. **Description**
   - Font: `text-sm text-gray-400 leading-relaxed`
   - One-line explanation
   - Margin bottom: 6

#### Pricing
- Large price display: `text-4xl md:text-5xl font-bold`
- Subtext "/month": `text-xl text-gray-400`
- Flexbox baseline alignment
- Margin bottom: 8

#### Features List
- Bullet points with orange check icons
- Icon: CheckCircle2 from Lucide React
- Icon color: #FF4B2B
- Text: `text-sm text-gray-300 leading-relaxed`
- Spacing: `space-y-3`
- Margin bottom: 8

#### CTA Button
- Full width
- Padding: `py-3 px-6`
- Rounded: `rounded-lg`
- Font: `font-medium text-sm`

**Social Media Growth Plan**:
```css
bg-white text-black hover:bg-gray-200
```

**Growth + Ads Plan**:
```css
bg-gradient-to-r from-[#FF4B2B] to-[#FF9F40] 
text-white 
hover:shadow-lg hover:shadow-[#FF4B2B]/20
```

### Hover Effects

**All Cards**:
- Lift animation: `y: -8px`
- Duration: 300ms
- Smooth easing

**Social Media Growth Plan**:
- Border: white/10 → white/20
- Gradient border fade: 0% → 20%

**Growth + Ads Plan**:
- Border: #FF4B2B/30 → #FF4B2B/50
- Gradient border: Always visible at 10%, increases to 20% on hover
- Enhanced shadow glow

### Retainer Note Section
Located below pricing cards, centered

**Styling**:
- Max width: 3xl
- Glass morphism: `bg-white/5 backdrop-blur-sm`
- Border: `border-white/10`
- Padding: `p-8`
- Rounded: `rounded-2xl`

**Content**:
- Heading: "Why Monthly Retainer?"
- Body text with highlighted keywords:
  - Predictable results
  - Long-term growth
  - Consistent brand building

## Color Palette

### Primary Colors
- Orange Primary: `#FF4B2B`
- Orange Secondary: `#FF9F40`
- Background: Black with gradient overlays
- Card Background: `white/5` with backdrop blur

### Text Colors
- Headings: White
- Body: `text-gray-300`
- Muted: `text-gray-400`
- Highlighted: White with `font-medium`

### UI Elements
- Borders: `white/10` to `white/20`
- Check marks: `#FF4B2B`
- Badges: Orange gradient
- Popular plan border: `#FF4B2B/30` to `#FF4B2B/50`

## Responsive Behavior

### Mobile (<768px)
- Single column layout
- Full-width cards
- Stacked vertically
- Price text: 4xl
- Maintains all features

### Tablet (768px - 1024px)
- Two column grid
- Cards side by side
- Equal width distribution
- Price text: 5xl

### Desktop (>1024px)
- Two column grid
- Max width container (6xl)
- Centered on page
- Full hover effects active

## Animations

### Page Load
- Stagger animation: 0.1s delay between cards
- Fade in + slide up from 20px
- Duration: 600ms
- Smooth easing

### Scroll Trigger
- Activates when section enters viewport
- `whileInView` with `viewport={{ once: true }}`
- Only animates once

### Hover
- Card lifts 8px upward
- Border opacity increases
- Gradient border fades in
- Shadow appears (popular plan)
- All transitions: 300-500ms

## Integration

### Navigation
- Link: "Pricing" → `/#pricing`
- Smooth scroll behavior
- Active state when in section

### CTA Buttons Throughout Site
All "Get Started", "Book a call", "See plans" buttons link to:
- Primary CTA: `/book` (Calendly page)
- Secondary: `/#pricing` (This pricing section)

## Customization

### To Update Pricing
Change the `price` and `priceSubtext` props:
```tsx
<PricingCard
  price="$1,997"
  priceSubtext="/month"
  ...
/>
```

### To Add/Remove Features
Modify the `features` array:
```tsx
features={[
  "Feature 1",
  "Feature 2",
  "Feature 3"
]}
```

### To Change Popular Plan
Toggle the `isPopular` prop:
```tsx
<PricingCard
  isPopular={true}  // Shows badge and enhanced styling
  ...
/>
```

### To Adjust Colors
Replace orange color values:
- `#FF4B2B` - Primary orange (Rolva brand color)
- `#FF9F40` - Secondary orange
- Gradients: `from-[#FF4B2B] to-[#FF9F40]`

## Benefits of This Structure

1. **Clear Value Proposition**: Each plan clearly states who it's for
2. **Visual Hierarchy**: Most Popular badge draws attention to higher tier
3. **Easy Comparison**: Side-by-side layout for quick comparison
4. **Transparent Pricing**: No "Contact for pricing" - builds trust
5. **Scalable**: Easy to add a third tier if needed
6. **Mobile Optimized**: Perfect display on all devices
7. **Conversion Focused**: Clear CTAs with direct booking integration

## Performance

- Lazy loaded animations
- GPU-accelerated transforms
- Optimized for mobile
- No layout shift
- Fast interaction response

## Analytics Tracking (Recommended)

Track these events:
- Pricing section viewed
- Plan card hovered
- "Get Started" button clicked (by plan)
- Comparison time spent
- Mobile vs desktop interaction
