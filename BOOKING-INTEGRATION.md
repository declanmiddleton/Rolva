# Calendly Booking Integration

## Overview
Fully integrated Calendly booking system for scheduling client consultations directly on the Rolva website.

## Booking Page

### Location
- **URL**: `/book`
- **File**: `src/app/book/page.tsx`
- **Accessible from**: All "Book a call" and "Get in touch" buttons

### Page Components

#### 1. Header Section
- Page title: "Let's **Talk**" (with orange gradient accent)
- Subtitle: "Schedule a free 30-minute call..."
- Back to home link

#### 2. Calendly Widget
- Embedded inline widget
- Calendly URL: `https://calendly.com/rolvamedia/30min`
- Settings:
  - `hide_event_type_details=1` - Cleaner interface
  - `hide_gdpr_banner=1` - Less clutter
- Container styling:
  - Glass morphism background
  - Rounded corners (rounded-2xl)
  - Border with soft glow
  - Responsive height: 700px

#### 3. Info Cards (Below Widget)
Three benefit cards in responsive grid:
- ⚡ **Quick Response** - Usually within 24 hours
- 🎯 **No Commitment** - Free consultation, no strings attached
- 💡 **Actionable Insights** - Walk away with clear next steps

## Integration Points

All CTAs throughout the site now link to `/book`:

### Navigation
- Desktop: "Get in touch" button → `/book`
- Mobile: "Get in touch" button → `/book`

### Homepage Hero
- Primary CTA: "Book a call" → `/book`
- Secondary CTA: "See plans" → `/#pricing`

### Pricing Section
- "Subscribe now" button → `/book`

### CTA Section
- "Start your subscription" → `/book`
- "Schedule a call" → `/book`

## Technical Implementation

### Next.js Script Component
```tsx
<Script
  src="https://assets.calendly.com/assets/external/widget.js"
  strategy="lazyOnload"
/>
```
- Loads Calendly script efficiently
- `lazyOnload` strategy for performance
- Non-blocking page load

### Widget HTML
```tsx
<div 
  className="calendly-inline-widget" 
  data-url="https://calendly.com/rolvamedia/30min?hide_event_type_details=1&hide_gdpr_banner=1"
  style={{ minWidth: "320px", height: "700px" }}
/>
```

### Styling
Custom CSS in `globals.css`:
```css
.calendly-inline-widget {
  border-radius: 0.75rem;
  overflow: hidden;
}

.calendly-inline-widget iframe {
  border-radius: 0.75rem;
}
```

## Design Features

### Dark Theme Integration
- Widget container has glass morphism effect
- Border matches site's white/10 opacity
- Background gradient overlay subtle
- Rounded corners consistent with site design

### Responsive Design
- Mobile: Single column, full width
- Tablet: Centered with max-width
- Desktop: Optimal reading width (max-w-5xl)
- Widget min-width: 320px for mobile compatibility

### Visual Hierarchy
1. Navigation (consistent across site)
2. Page header with gradient accent
3. Calendly widget (main focus)
4. Supporting info cards
5. Ample spacing throughout

## SEO & Meta

```typescript
export const metadata: Metadata = {
  title: "Book a Call - Rova",
  description: "Schedule a free 30-minute consultation with Rova Social Marketing Agency",
};
```

## User Flow

1. User clicks any "Book a call" / "Get in touch" button
2. Navigates to `/book` page
3. Sees clear headline and description
4. Calendly widget loads (lazy loaded for performance)
5. User selects available time slot
6. Books directly through Calendly interface
7. Receives confirmation email from Calendly

## Customization

### To Change Calendly URL:
Update the `data-url` attribute in `src/app/book/page.tsx`:
```tsx
data-url="https://calendly.com/YOUR_USERNAME/EVENT_TYPE"
```

### To Adjust Widget Height:
Modify the inline style:
```tsx
style={{ minWidth: "320px", height: "800px" }} // Changed from 700px
```

### To Add More Info Cards:
Add new grid items in the info cards section:
```tsx
<div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
  <div className="text-3xl mb-2">🎨</div>
  <h3 className="font-semibold mb-2">Your Title</h3>
  <p className="text-sm text-gray-400">Your description</p>
</div>
```

### To Update Query Parameters:
Available Calendly parameters:
- `hide_event_type_details=1` - Hide event type details
- `hide_gdpr_banner=1` - Hide GDPR banner
- `background_color=ffffff` - Change background color
- `text_color=000000` - Change text color
- `primary_color=ff4b2b` - Change primary button color

## Performance

- **Lazy Loading**: Script loads after page content
- **Non-blocking**: Doesn't slow down initial page render
- **Async**: Script loads asynchronously
- **Optimized**: Next.js Script component handles optimization

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h3)
- Back navigation link
- Keyboard accessible
- Screen reader friendly
- High contrast ratios

## Browser Compatibility

- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS/Android)
- ✅ All modern browsers with iframe support

## Troubleshooting

### Widget Not Loading
- Check browser console for errors
- Verify Calendly URL is correct
- Ensure script is loading (Network tab)
- Check iframe not blocked by browser

### Styling Issues
- Widget uses iframe (limited styling control)
- Container styling works, iframe content styled by Calendly
- Use Calendly's URL parameters for internal styling

### Mobile Issues
- Ensure min-width is set (320px minimum)
- Check responsive container padding
- Test on actual devices, not just browser resize

## Analytics

Calendly provides its own analytics dashboard showing:
- Booking rates
- Popular time slots
- Cancellation rates
- No-show rates

Access at: calendly.com/app/analytics

## Future Enhancements

Potential improvements:
- Add "Why book a call?" section with benefits
- Integrate testimonials on booking page
- Add FAQ section below widget
- Create thank you page after booking
- Add email automation trigger
