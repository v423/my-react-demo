# Style Guide: Coquette / Dollette

## 1. Overview

**Coquette** (also known as Dollette) is a hyper-feminine aesthetic that embraces vintage romance, softness, and delicate details. It reclaims traditional symbols of girlhood—bows, lace, pearls, and hearts—blending them with a slightly flirtatious or "coquette" attitude.

**Core Philosophy:**

- **Hyper-Feminine:** Unapologetically girly, embracing pinks and pastels.
- **Vintage Romance:** Inspired by 1950s/60s fashion, Nabokov's Lolita (visually, not thematically), and balletcore.
- **Softness:** Everything feels gentle, plush, and fragile.

## 2. Color Palette

The palette is dominated by soft pastels with punches of romantic red.

| Role           | Color Tone         | Hex Example           | Description                                       |
| -------------- | ------------------ | --------------------- | ------------------------------------------------- |
| **Background** | Cream / Milk       | `#FFFDD0` / `#FAFAFA` | Warm whites, never sterile cold white.            |
| **Primary**    | Baby Pink          | `#FBCFE8`             | The defining color. Soft and powdery.             |
| **Secondary**  | Rose Quartz        | `#F472B6`             | A slightly deeper pink for depth.                 |
| **Accent**     | Cherry Red         | `#DC2626`             | Used sparingly for hearts, cherries, or lips.     |
| **Text**       | Cocoa / Soft Black | `#4A4A4A` / `#5D4037` | Harsh black is avoided; use dark browns or greys. |

## 3. Typography

Typography is romantic and often mimics handwriting or vintage book covers.

- **Headlines:** Romantic Serif (Playfair Display, Bodoni) or Calligraphic Script.
- **Body:** Clean, legible Serif (Merriweather) or rounded Sans.
- **Decorative:** Script fonts for emphasis (e.g., "Love", "XOXO").

## 4. Spacing System

- **Intimate:** Elements are grouped closely, like a collection of trinkets.
- **Centered:** Layouts are almost always centered to frame the content like a portrait.

## 5. Component Styles: Decoration

- **Bows:** The #1 motif. Used as dividers, icons, or decorative headers.
- **Lace:** Scalloped borders or repeated patterns.
- **Pearls:** Dotted borders (`border-dotted`) mimicking pearl necklaces.

## 6. Animations & Transitions

- **Flutter:** Subtle movements like a butterfly or blinking eyes.
- **Sway:** Gentle rotation for hanging elements (charms).

## 7. Border Radius

- **Soft:** `rounded-xl` or `rounded-2xl`.
- **Scalloped:** CSS masks or SVGs used to create lace edges.
- **Oval:** Cameo-style portraits.

## 8. Opacity & Transparency

- **Sheer:** Elements often look like sheer fabric or silk (low opacity white backgrounds).

## 9. Common Tailwind CSS Usage

- **Colors:** `bg-pink-50`, `text-rose-400`.
- **Borders:** `border-dotted`, `border-pink-200`.
- **Fonts:** `font-serif`, `italic`.

## 10. Example Component Reference

### React Component (Coquette Profile Card)

```jsx
import React from 'react';

const CoquetteCard = () => {
  return (
    <div className="min-h-screen bg-[#FFFDD0] flex items-center justify-center p-4 font-serif text-[#5D4037]">
      {/* Card Container */}
      <div className="relative w-80 bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(251,207,232,0.5)] border border-pink-100 p-6 text-center overflow-visible">
        {/* Top Bow Decoration (CSS Shape) */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 z-10">
          <span className="text-4xl filter drop-shadow-sm">🎀</span>
        </div>

        {/* Lace/Pearl Border Effect */}
        <div className="absolute inset-2 border-2 border-dotted border-pink-200 rounded-2xl pointer-events-none"></div>

        {/* Profile Image */}
        <div className="mx-auto w-24 h-24 rounded-full border-4 border-pink-50 overflow-hidden mb-4 relative shadow-inner">
          <div className="w-full h-full bg-pink-100 flex items-center justify-center text-3xl">
            🦢
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-rose-400 italic mb-1">Lana Del Ray</h2>
        <p className="text-xs uppercase tracking-widest text-pink-300 mb-4">Poet & Dreamer</p>

        {/* Divider */}
        <div className="flex justify-center items-center gap-2 mb-4 opacity-60">
          <span className="text-pink-300">♥</span>
          <div className="h-px w-12 bg-pink-200"></div>
          <span className="text-pink-300">♥</span>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed mb-6 text-[#5D4037]/80">
          "Kiss me hard before you go, summertime sadness." <br />
          Collecting vintage pearls and writing love letters to the moon.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3">
          <button className="px-4 py-1.5 bg-pink-50 text-pink-400 rounded-full text-sm hover:bg-pink-100 transition-colors border border-pink-100">
            Message
          </button>
          <button className="px-4 py-1.5 bg-rose-400 text-white rounded-full text-sm hover:bg-rose-500 transition-colors shadow-sm">
            Follow
          </button>
        </div>

        {/* Cherry Accent */}
        <div className="absolute -bottom-2 -right-2 transform rotate-12 text-2xl">🍒</div>
      </div>
    </div>
  );
};

export default CoquetteCard;
```

### Key Implementation Details:

1.  **Motifs:** The use of emojis (🎀, 🦢, 🍒, ♥) is a quick way to establish the aesthetic without custom SVGs.
2.  **Colors:** `bg-[#FFFDD0]` (Cream) provides a vintage base, while `text-rose-400` adds the signature pink.
3.  **Borders:** `border-dotted` mimics a pearl necklace or stitching.
4.  **Typography:** `italic` serif fonts are essential for the "handwritten love letter" vibe.
