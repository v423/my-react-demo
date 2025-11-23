# Style Guide: Glassmorphism

## 1. Overview

**Glassmorphism** creates the illusion of looking through frosted glass. It relies heavily on background blur (`backdrop-filter`) to create depth and hierarchy. It feels modern, lightweight, and premium.

**Core Philosophy:**

- **Translucency:** Objects are semi-transparent, allowing the background to bleed through.
- **Hierarchy:** Depth is established by how "blurry" or opaque an object is relative to what's behind it.
- **Vivid Backgrounds:** The effect only works if there is something colorful behind the glass to blur.

## 2. Color Palette

The glass itself is usually white or black with low opacity. The personality comes from the background.

| Role              | Color Tone        | Hex Example                | Description                                                               |
| ----------------- | ----------------- | -------------------------- | ------------------------------------------------------------------------- |
| **Glass Surface** | White (Alpha)     | `rgba(255, 255, 255, 0.2)` | The main container background.                                            |
| **Glass Border**  | White (Alpha)     | `rgba(255, 255, 255, 0.3)` | A subtle 1px border simulates the glass edge catching light.              |
| **Background**    | Mesh Gradient     | `#4158D0` -> `#C850C0`     | Bright, shifting gradients work best.                                     |
| **Text**          | White / Dark Blue | `#FFFFFF` / `#1A202C`      | Ensure high contrast. White text on dark glass, dark text on light glass. |

## 3. Typography

Typography should be clean and sharp to contrast with the blurry background.

- **Primary Font:** Modern Sans-serif (Inter, SF Pro).
- **Weight:** Thin weights (Light/Regular) look elegant on glass, but ensure readability.
- **Color:** Often pure white with a slight text-shadow for legibility against complex backgrounds.

## 4. Spacing System

- **Padding:** Generous padding (`p-8`) enhances the feeling of a physical glass pane.
- **Layering:** Elements can overlap. A glass card over another glass card creates a "double blur" effect.

## 5. Component Styles: Shadows & Elevation

- **Backdrop Filter:** The core property. `backdrop-filter: blur(16px) saturate(180%)`.
- **Drop Shadow:** A soft shadow (`shadow-lg`) is needed to separate the glass from the background.
- **Border:** A 1px semi-transparent border is crucial to define the edges.

## 6. Animations & Transitions

- **Parallax:** Moving the background and the glass layers at different speeds creates a 3D depth effect.
- **Shimmer:** A diagonal shine animation across the glass surface.

## 7. Border Radius

Glassmorphism requires rounded corners to look organic and safe.

- **Standard:** `rounded-2xl` (16px) or `rounded-3xl` (24px).
- **Sharp corners** break the illusion of a polished glass slab.

## 8. Opacity & Transparency

- **Surface:** `bg-opacity-20` to `bg-opacity-40`.
- **Border:** `border-opacity-30`.
- **Saturation:** Boosting the saturation of the background (`backdrop-saturate-150`) makes the glass look "richer".

## 9. Common Tailwind CSS Usage

Tailwind's `backdrop-filter` utilities are essential.

- **Blur:** `backdrop-blur-xl`.
- **Color:** `bg-white/30` (using opacity modifier).
- **Border:** `border border-white/20`.

## 10. Example Component Reference

### React Component (Glassmorphism Card)

```jsx
import React from 'react';

const GlassCard = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      {/* Vivid Background (Mesh Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4158D0] via-[#C850C0] to-[#FFCC70]"></div>

      {/* Floating Orbs for Depth */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Glass Card */}
      <div className="relative w-96 p-8 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl bg-white/10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-white/80 font-bold tracking-widest uppercase text-xs">
            Credit Card
          </div>
          <div className="h-8 w-12 bg-white/20 rounded flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-red-500/80 mr-[-6px]"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500/80"></div>
          </div>
        </div>

        {/* Chip */}
        <div className="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md mb-8 opacity-80"></div>

        {/* Number */}
        <div className="text-white text-2xl font-mono tracking-widest mb-6 text-shadow-sm">
          4567 •••• •••• 8901
        </div>

        {/* Footer */}
        <div className="flex justify-between text-white/90">
          <div>
            <div className="text-[10px] uppercase opacity-70">Card Holder</div>
            <div className="font-medium tracking-wide">ALEX MORGAN</div>
          </div>
          <div>
            <div className="text-[10px] uppercase opacity-70">Expires</div>
            <div className="font-medium tracking-wide">12/25</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
```

### Key Implementation Details:

1.  **Backdrop Blur:** `backdrop-blur-xl` is the magic sauce. It blurs everything _behind_ the div.
2.  **Semi-Transparent Background:** `bg-white/10` adds a white tint without blocking the background.
3.  **Border:** `border-white/20` creates the "edge lighting" effect, defining the shape.
4.  **Vivid Background:** The gradient and floating orbs ensure the blur effect is visible and aesthetically pleasing.
