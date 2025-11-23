# Style Guide: Witchy / Mystical

## 1. Overview

**Witchy / Mystical** design draws inspiration from astrology, tarot, alchemy, and nature worship. It combines celestial imagery with fine lines and deep, moody colors to create a sense of magic and intuition.

**Core Philosophy:**

- **Celestial:** Stars, moons, and suns are the primary visual motifs.
- **Delicate:** Lines are thin (hairline), elegant, and often gold or silver.
- **Symmetry:** Layouts often mirror the balance of sacred geometry.

## 2. Color Palette

The palette mimics the night sky and precious metals.

| Role           | Color Tone           | Hex Example           | Description                            |
| -------------- | -------------------- | --------------------- | -------------------------------------- |
| **Background** | Midnight Blue / Void | `#0B0F19` / `#1A1025` | Deep, rich darks. Never pure black.    |
| **Primary**    | Gold / Bronze        | `#D4AF37`             | Used for borders, icons, and key text. |
| **Secondary**  | Moon Silver          | `#E0E0E0`             | For body text and secondary lines.     |
| **Accent**     | Amethyst / Indigo    | `#4B0082`             | Mystical energy.                       |
| **Texture**    | Stardust             | N/A                   | Noise or grain overlays are common.    |

## 3. Typography

Typography pairs the ancient with the personal.

- **Headlines:** Elegant Serif (Cinzel, Cormorant Garamond) or Display (decorative caps).
- **Body:** Clean Serif or Sans-serif with wide tracking.
- **Handwriting:** Script fonts for "spells" or personal notes.

## 4. Spacing System

- **Airy:** Elements float in the void.
- **Centered:** Text and images are often centered to create a altar-like focus.

## 5. Component Styles: Shadows & Elevation

- **Glow:** Instead of shadows, elements emit a faint outer glow (`drop-shadow`).
- **Flat:** Many elements are flat vector illustrations (tarot style) without 3D depth.

## 6. Animations & Transitions

- **Twinkle:** Stars fading in and out.
- **Float:** Elements hovering slowly up and down.
- **Rotate:** Mandalas or zodiac wheels spinning slowly.

## 7. Border Radius

- **Arch:** Arch-shaped images (rounded top, flat bottom) are very common.
- **Diamond:** Rotated squares.
- **Circle:** For moon phases and planets.

## 8. Opacity & Transparency

- **Ghostly:** Low opacity for background symbols (zodiac signs).
- **Overlay:** Gradients fading from color to transparent.

## 9. Common Tailwind CSS Usage

- **Borders:** `border border-yellow-600`.
- **Shapes:** `rounded-t-full` (Arch).
- **Effects:** `animate-pulse` (slowed down).

## 10. Example Component Reference

### React Component (Tarot Card Reveal)

```jsx
import React from 'react';

const WitchyCard = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-8 font-serif relative overflow-hidden text-[#D4AF37]">
      {/* Background Stars (CSS) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Decorative Border Frame */}
      <div className="relative max-w-md w-full border border-[#D4AF37]/30 p-2 rounded-t-full">
        <div className="border border-[#D4AF37] p-8 rounded-t-full bg-[#1A1025]/80 backdrop-blur-sm text-center relative">
          {/* Top Icon */}
          <div className="mb-6 text-4xl animate-pulse">✨</div>

          {/* Arch Image */}
          <div className="mx-auto w-48 h-64 bg-gray-800 rounded-t-full mb-8 relative overflow-hidden border-2 border-[#D4AF37] group cursor-pointer">
            {/* Placeholder for Tarot Art */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-black opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform duration-700">
                🌙
              </span>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-light tracking-[0.2em] uppercase mb-2">
            The High Priestess
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-4 opacity-50">
            <div className="h-px w-12 bg-[#D4AF37]"></div>
            <div className="text-xs">♦</div>
            <div className="h-px w-12 bg-[#D4AF37]"></div>
          </div>

          {/* Description */}
          <p className="text-[#E0E0E0] font-light leading-relaxed text-sm italic">
            "Trust your intuition. The veil between worlds is thin. Secrets are revealed in the
            silence of the moon."
          </p>

          {/* Button */}
          <button className="mt-8 px-8 py-2 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0B0F19] transition-colors duration-300">
            Read Meaning
          </button>
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#D4AF37]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]"></div>
      </div>
    </div>
  );
};

export default WitchyCard;
```

### Key Implementation Details:

1.  **Arch Shape:** `rounded-t-full` creates the cathedral window / tarot card shape that is iconic to this style.
2.  **Fine Lines:** 1px borders (`border`) in gold (`#D4AF37`) define the structure without being heavy.
3.  **Typography:** Wide tracking (`tracking-[0.2em]`) on uppercase serif fonts creates an ethereal, expansive feel.
4.  **Color:** The combination of Midnight Blue (`#0B0F19`) and Gold is the standard "magic" palette.
