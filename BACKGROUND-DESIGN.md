# Background Design Documentation

## Overview
The Rolva website features a modern, sophisticated black background with multiple layered gradients and a grainy texture overlay for depth and visual interest.

## Background Composition

### Layer 1: Base Color
```css
background: #000000;
```
Pure black foundation for maximum contrast.

### Layer 2: Noise Texture
```css
url('/noise.svg')
background-size: 200px 200px;
background-repeat: repeat;
```
SVG fractal noise creates organic grain texture.

### Layer 3: Top Blue Gradient
```css
radial-gradient(ellipse 80% 50% at 50% -20%, rgba(91, 124, 255, 0.15), transparent)
```
- Position: Top center (extending above viewport)
- Size: Wide ellipse (80% width, 50% height)
- Color: Blue (#5B7CFF) at 15% opacity
- Effect: Subtle glow from top

### Layer 4: Left Red Gradient
```css
radial-gradient(ellipse 60% 50% at 0% 50%, rgba(255, 107, 74, 0.1), transparent)
```
- Position: Left center
- Size: Medium ellipse (60% width, 50% height)
- Color: Red (#FF6B4A) at 10% opacity
- Effect: Warm glow from left side

### Layer 5: Right Orange Gradient
```css
radial-gradient(ellipse 60% 50% at 100% 50%, rgba(255, 159, 64, 0.1), transparent)
```
- Position: Right center
- Size: Medium ellipse (60% width, 50% height)
- Color: Orange (#FF9F40) at 10% opacity
- Effect: Warm glow from right side

### Layer 6: Bottom Blue Gradient
```css
radial-gradient(ellipse 80% 80% at 50% 100%, rgba(91, 124, 255, 0.12), transparent)
```
- Position: Bottom center
- Size: Large ellipse (80% width, 80% height)
- Color: Blue (#5B7CFF) at 12% opacity
- Effect: Subtle glow from bottom

## Technical Details

### Fixed Attachment
```css
background-attachment: fixed;
```
Creates a subtle parallax effect when scrolling.

### Stacking Order
Top to bottom:
1. Noise texture (repeating)
2. Top blue gradient
3. Left red gradient
4. Right orange gradient
5. Bottom blue gradient
6. Pure black base

### Performance Considerations
- All gradients are CSS-based (no images)
- Single SVG for noise (cacheable)
- GPU-accelerated rendering
- Fixed attachment for smooth scroll

## Visual Effect

The combination creates:
- **Depth**: Multiple gradient layers add dimension
- **Organic Feel**: Noise texture prevents flat appearance
- **Color Harmony**: Logo colors subtly present throughout
- **Modern Aesthetic**: Dark, sophisticated, premium feel
- **Focus**: Dark background makes content pop

## Customization

To adjust gradient intensity, modify the opacity values:
- Stronger effect: Increase opacity (0.1 → 0.2)
- Subtler effect: Decrease opacity (0.1 → 0.05)

To change gradient colors, update the rgba values to match your brand colors.

To adjust noise intensity, modify the SVG filter parameters in `/public/noise.svg`:
```svg
<feTurbulence baseFrequency='4' /> <!-- Lower = larger grain -->
<feColorMatrix type='saturate' values='0'/>
<rect opacity='0.05'/> <!-- Lower = less visible -->
```

## Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

Falls back gracefully to solid black if gradients unsupported.
