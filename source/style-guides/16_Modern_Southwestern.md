# Style Guide: Modern Southwestern

## 1. Overview

**Modern Southwestern** (or Desert Modern) blends the rustic warmth of the American Southwest with clean, modern minimalism. It features earthy tones, geometric patterns inspired by Navajo textiles, and organic textures like clay and plaster.

**Core Philosophy:**

- **Warmth:** A sun-baked color palette is essential.
- **Geometry:** Strong use of arches, steps, and diamonds.
- **Organic:** Textures that feel like adobe, terracotta, or sand.

## 2. Color Palette

The palette is derived from the desert landscape: sunsets, cacti, and red rocks.

| Role           | Color Tone      | Hex Example           | Description                                    |
| -------------- | --------------- | --------------------- | ---------------------------------------------- |
| **Background** | Sand / Plaster  | `#F3EFE0` / `#EFEBE9` | Warm, off-white neutrals.                      |
| **Primary**    | Terracotta      | `#C06C54`             | The iconic rusty orange/red.                   |
| **Secondary**  | Sage Green      | `#8A9A5B`             | Muted cactus green.                            |
| **Accent**     | Turquoise       | `#40E0D0`             | A bright pop, often used for jewelry or water. |
| **Dark**       | Iron / Charcoal | `#3E3C38`             | Soft blacks for text.                          |

## 3. Typography

Typography is sturdy and grounded.

- **Headlines:** Slab Serifs (Rockwell, Courier Prime) or Characterful Serifs.
- **Body:** Geometric Sans-serif (Montserrat, DM Sans).
- **Style:** Uppercase headers with wide tracking are common.

## 4. Spacing System

- **Generous:** Wide margins to mimic the vastness of the desert.
- **Structured:** Grid-based layouts that feel architectural.

## 5. Component Styles: Shapes & Patterns

- **Arches:** The most defining shape. Used for images, buttons, or containers.
- **Steps:** Ziggurat or stair-step shapes used in dividers.
- **Sunbursts:** Stylized sun rays.

## 6. Animations & Transitions

- **Slow:** Transitions should feel slow and relaxed, like a hot afternoon.
- **Slide:** Elements sliding in from the bottom (rising sun).

## 7. Border Radius

- **Varied:** Mixing sharp corners with full rounded arches (`rounded-t-full`).
- **Soft:** `rounded-md` for a handmade clay feel.

## 8. Opacity & Transparency

- **Solid:** Generally opaque colors.
- **Texture:** Noise overlays to simulate grain/sand.

## 9. Common Tailwind CSS Usage

- **Colors:** `bg-orange-100`, `text-stone-800`.
- **Shapes:** `rounded-t-full`, `rounded-b-none`.
- **Spacing:** `tracking-widest`.

## 10. Example Component Reference

### React Component (Desert Retreat Card)

```jsx
import React from 'react';

const SouthwesternCard = () => {
  return (
    <div className="min-h-screen bg-[#F3EFE0] flex items-center justify-center p-8 font-sans text-[#3E3C38]">
      {/* Card Container */}
      <div className="max-w-sm w-full bg-[#EFEBE9] shadow-xl shadow-[#C06C54]/10 overflow-hidden relative group">
        {/* Top Arch Image */}
        <div className="h-64 bg-[#C06C54] relative overflow-hidden rounded-t-[10rem] mx-4 mt-4">
          {/* Abstract Sun */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#E2725B] rounded-full opacity-80"></div>
          <div className="absolute bottom-0 w-full h-1/2 bg-[#8A9A5B] opacity-90 transform skew-y-6 origin-bottom-left"></div>

          {/* Label */}
          <div className="absolute top-4 right-4 bg-[#F3EFE0] px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full">
            New
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Decorative Divider (Steps) */}
          <div className="flex justify-center gap-1 mb-6">
            <div className="w-2 h-2 bg-[#C06C54]"></div>
            <div className="w-2 h-4 bg-[#C06C54]"></div>
            <div className="w-2 h-6 bg-[#C06C54]"></div>
            <div className="w-2 h-4 bg-[#C06C54]"></div>
            <div className="w-2 h-2 bg-[#C06C54]"></div>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-2 text-[#C06C54]">CASA SOLARA</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A9A5B] mb-6">Joshua Tree, CA</p>

          <p className="text-sm leading-relaxed mb-8 opacity-80">
            Escape to the high desert. Minimalist adobe architecture meets modern luxury under the
            stars.
          </p>

          {/* Button */}
          <button className="w-full py-3 border-2 border-[#3E3C38] hover:bg-[#3E3C38] hover:text-[#F3EFE0] transition-colors duration-300 uppercase text-xs font-bold tracking-widest">
            Book Stay
          </button>
        </div>

        {/* Corner Accents */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-[#C06C54] border-t-[20px] border-t-transparent"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-[#C06C54] border-t-[20px] border-t-transparent"></div>
      </div>
    </div>
  );
};

export default SouthwesternCard;
```

### Key Implementation Details:

1.  **Arch Shape:** `rounded-t-[10rem]` creates the distinct arch window look.
2.  **Step Pattern:** The divider is made of simple `div`s with varying heights (`h-2`, `h-4`, `h-6`) to mimic a ziggurat or step pattern.
3.  **Colors:** The combination of Terracotta (`#C06C54`) and Sage (`#8A9A5B`) against a Sand (`#F3EFE0`) background is definitive.
4.  **Typography:** Uppercase sans-serif with `tracking-[0.2em]` gives that spacious, modern feel.
