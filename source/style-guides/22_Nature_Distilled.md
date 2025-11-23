# Style Guide: Nature Distilled

## 1. Overview

**Nature Distilled** (or Organic Modernism) brings the outdoors in. It moves beyond simple "green branding" to incorporate the textures, flows, and imperfections of the natural world. It feels grounded, sustainable, and calming.

**Core Philosophy:**

- **Organic:** Shapes are fluid and imperfect (blobs, waves).
- **Texture:** Grain, paper, and stone textures add warmth.
- **Calm:** Low contrast and muted tones reduce cognitive load.

## 2. Color Palette

Colors are desaturated and earthy, never neon.

| Role           | Color Tone        | Hex Example           | Description                         |
| -------------- | ----------------- | --------------------- | ----------------------------------- |
| **Background** | Stone / Linen     | `#F2F0E9` / `#E6E2DD` | Warm greys and beiges.              |
| **Primary**    | Moss Green        | `#4A5D23`             | Deep, muted greens.                 |
| **Secondary**  | Clay / Terracotta | `#C18C5D`             | Warm earth tones.                   |
| **Accent**     | Sky / Water       | `#A4BCC2`             | Muted blues.                        |
| **Text**       | Bark              | `#3E3B32`             | Dark brown-grey, softer than black. |

## 3. Typography

Typography should feel human and hand-touched.

- **Headlines:** Humanist Serif (Recco, Souvenir) or Soft Serif.
- **Body:** Humanist Sans (Optima, Gill Sans).
- **Style:** Lowercase headers are common for a friendly vibe.

## 4. Spacing System

- **Flowing:** Layouts feel loose and unconstrained.
- **Overlapping:** Elements might overlap slightly like leaves.

## 5. Component Styles: Shapes

- **Blobs:** CSS `border-radius` with varying values (e.g., `50% 40% 30% 70%`).
- **Waves:** SVG dividers separating sections.

## 6. Animations & Transitions

- **Float:** Gentle vertical movement.
- **Morph:** Shapes changing slightly over time.

## 7. Border Radius

- **Organic:** `rounded-[2rem]` or custom blob shapes.
- **Soft:** No sharp corners.

## 8. Opacity & Transparency

- **Watercolor:** Elements might have multiply blend modes to look like watercolor paint.
- **Frosted:** Soft blur for overlays.

## 9. Common Tailwind CSS Usage

- **Colors:** `bg-stone-100`, `text-stone-800`.
- **Shapes:** `rounded-tr-[50px]`.
- **Effects:** `backdrop-blur-sm`.

## 10. Example Component Reference

### React Component (Wellness Card)

```jsx
import React from 'react';

const NatureCard = () => {
  return (
    <div className="min-h-screen bg-[#F2F0E9] flex items-center justify-center p-8 font-sans text-[#3E3B32]">
      {/* Card Container */}
      <div className="relative w-80">
        {/* Background Blob (CSS) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C18C5D]/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A5D23]/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Main Card */}
        <div className="relative bg-white/60 backdrop-blur-md border border-white/50 rounded-[2rem] p-8 shadow-xl shadow-[#4A5D23]/5 overflow-hidden">
          {/* Image Mask (Organic Shape) */}
          <div
            className="w-full h-48 bg-[#A4BCC2] mb-6 relative overflow-hidden"
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          >
            {/* Placeholder for Nature Image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4A5D23]/20"></div>
            <div className="absolute inset-0 flex items-center justify-center text-4xl text-white opacity-80">
              🌿
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-2xl font-serif text-[#4A5D23] mb-2">Forest Bathing</h2>
            <p className="text-xs uppercase tracking-widest text-[#C18C5D] mb-4">
              Reconnect & Restore
            </p>
            <p className="text-sm leading-relaxed opacity-80 mb-8">
              Immerse yourself in the atmosphere of the forest. Let the sounds of nature heal your
              mind.
            </p>

            {/* Button */}
            <button className="group relative px-8 py-3 bg-[#4A5D23] text-[#F2F0E9] rounded-full overflow-hidden transition-transform hover:scale-105">
              <span className="relative z-10 text-sm font-medium">Begin Journey</span>
              {/* Button Hover Effect */}
              <div className="absolute inset-0 bg-[#5D752C] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </div>
        </div>

        {/* Floating Leaf Accent */}
        <div className="absolute -top-4 -left-4 text-4xl transform -rotate-12 drop-shadow-lg">
          🍃
        </div>
      </div>
    </div>
  );
};

export default NatureCard;
```

### Key Implementation Details:

1.  **Blob Shapes:** The `borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'` creates the organic, non-geometric shape for the image.
2.  **Colors:** Muted greens (`#4A5D23`) and warm stones (`#F2F0E9`) create the "spa" vibe.
3.  **Backdrop Blur:** `backdrop-blur-md` on the card makes it feel like frosted glass sitting on top of the natural background.
4.  **Soft Shadows:** `shadow-[#4A5D23]/5` uses a colored shadow for a more natural feel than harsh black.
