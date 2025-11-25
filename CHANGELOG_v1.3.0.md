# Design System - Theme-Appropriate Animations v1.3.0

## New Features

### Animation System
- ✅ Created three animation levels: minimal, moderate, expressive
- ✅ Theme-specific special effects (brutalism shadows, glassmorphism glow, etc.)
- ✅ Applied animations to property cards in ViewListings

### Animation Levels

**Minimal (Subtle):**
- Themes: minimalism, ethereal, wabi-sabi, japandi, luxury-typography, neoclassicism
- Effects: Gentle hover lifts, subtle fades, smooth transitions
- Duration: 300ms

**Moderate (Standard):**
- Themes: default, material-design, glassmorphism, neumorphism, flat-design
- Effects: Standard hover effects, micro-interactions
- Duration: 200ms

**Expressive (Bold):**
- Themes: brutalism, neo-brutalism, y2k, vaporwave, synthwave, pop-art, kitsch
- Effects: Bounces, rotations, scale effects, glitch effects, neon pulses
- Duration: 150ms

### Special Effects by Theme
- **Brutalism**: Hard shadow offsets on hover
- **Glassmorphism**: Backdrop blur and glow effects
- **Synthwave**: Neon glow with magenta shadows
- **Vaporwave**: Colored shadow offsets
- **Y2K**: Ring effects and pink glows
- **Pixel Art**: Pixelated rendering and jump effects

### Components Updated
- `src/views/ViewListings.jsx` - Property cards with theme-appropriate animations

### New Files
- `src/constants/animations.js` - Animation system and utilities

## Usage
Animations are automatically applied based on the active theme. More expressive themes (like brutalism, y2k) get bold animations, while minimal themes (like minimalism) get subtle effects.

## Technical Details
- `getAnimationLevel(themeId)` - Returns animation level for a theme
- `getCardAnimation(themeId)` - Returns card animation classes
- `getSpecialEffects(themeId)` - Returns theme-specific effect classes
