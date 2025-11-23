# Style Guide: Bauhaus & Swiss Style (International Typographic Style)

## 1. Overview

**Bauhaus** (1919-1933) and **Swiss Style** (1950s) are the foundations of modern graphic design. They emphasize objectivity, readability, and geometric harmony.

**Core Philosophy:**

- **Form Follows Function:** Decoration is redundant.
- **The Grid:** A mathematical structure organizes information.
- **Asymmetry:** Dynamic balance is preferred over static symmetry.
- **Typography as Image:** Text is not just for reading; it is a visual element.

## 2. Color Palette

The palette is strictly limited to primary colors and neutrals to maintain objectivity and impact.

| Role               | Color Tone | Hex Example | Description                                         |
| ------------------ | ---------- | ----------- | --------------------------------------------------- |
| **Primary Red**    | Vermilion  | `#E30613`   | High impact, often used for emphasis or shapes.     |
| **Primary Blue**   | Cobalt     | `#0055A4`   | Cool, structural.                                   |
| **Primary Yellow** | Lemon      | `#FFD700`   | Bright, energetic.                                  |
| **Black**          | Jet Black  | `#000000`   | For text and structural lines.                      |
| **White**          | Pure White | `#FFFFFF`   | The canvas (negative space).                        |
| **Cream**          | Off-White  | `#F4F4F0`   | Sometimes used in Bauhaus for an "aged paper" feel. |

## 3. Typography

Typography is the protagonist. It must be sans-serif, objective, and often massive.

- **Primary Font:** Helvetica, Akzidenz-Grotesk, Arial, or Inter (Tight tracking).
- **Style:**
  - **Headlines:** Massive, often rotated 90 degrees or broken across lines.
  - **Body:** Small, legible, strictly aligned to the grid.
  - **Alignment:** Flush left, ragged right (never justified).

## 4. Spacing System

The Grid is God.

- **Grid:** Modular grids (e.g., 12-column or complex Swiss grids).
- **Gutters:** Consistent and visible.
- **Alignment:** Elements align strictly to vertical and horizontal axes.

## 5. Component Styles: Shadows & Elevation

- **Shadows:** Generally avoided. Depth is created through:
  - **Overlapping:** Shapes covering each other.
  - **Scale:** Large vs. Small.
  - **Color:** Warm advances, cool recedes.
- **Borders:** Thick, black structural lines (2px - 4px) are common in Bauhaus.

## 6. Animations & Transitions

Animations should be geometric and mechanical.

- **Transformations:** Rotation, Scaling, Translation.
- **Sliding:** Panels sliding in from the sides (like a printing press).
- **Easing:** Linear or strong Ease-out.

## 7. Border Radius

- **Geometric Primitives:**
  - **Square:** `rounded-none` (0px).
  - **Circle:** `rounded-full` (50%).
  - **No intermediate:** Avoid "soft" rounded corners (e.g., 4px). It's either a box or a ball.

## 8. Opacity & Transparency

- **Multiply:** Using `mix-blend-mode: multiply` to simulate overprinting (ink layering).
- **Solid:** Otherwise, colors are opaque and bold.

## 9. Common Tailwind CSS Usage

- **Layout:** `grid`, `grid-cols-12`, `col-span-4`.
- **Typography:** `text-9xl`, `font-bold`, `tracking-tighter`, `-rotate-90`.
- **Effects:** `mix-blend-multiply`.

## 10. Example Component Reference

### React Component (Swiss Style Poster Layout)

```jsx
import React from 'react';

const SwissPoster = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F0] flex items-center justify-center p-8 font-sans">
      {/* Main Grid Container */}
      <div className="w-full max-w-4xl aspect-[3/4] bg-white shadow-2xl grid grid-cols-12 grid-rows-12 overflow-hidden relative border-4 border-black">
        {/* 1. Large Circle (Geometric Primitive) */}
        <div className="col-span-6 row-span-6 bg-[#E30613] rounded-full mix-blend-multiply opacity-90 translate-x-1/4 translate-y-1/4"></div>

        {/* 2. Large Square (Geometric Primitive) */}
        <div className="col-span-6 row-span-6 col-start-6 row-start-4 bg-[#0055A4] mix-blend-multiply opacity-90 -rotate-12"></div>

        {/* 3. Typography Layer */}
        <div className="col-span-12 row-span-12 z-10 p-12 flex flex-col justify-between pointer-events-none">
          {/* Header */}
          <div className="flex justify-between items-start">
            <h1 className="text-8xl font-black tracking-tighter leading-[0.8] text-black">
              BAU
              <br />
              HAUS
              <br />
              1919
            </h1>
            <div className="w-24 h-24 bg-[#FFD700] rounded-full"></div>
          </div>

          {/* Grid Information */}
          <div className="grid grid-cols-4 gap-4 text-sm font-bold text-black">
            <div className="col-span-1 border-t-4 border-black pt-2">FIG. 01</div>
            <div className="col-span-1 border-t-4 border-black pt-2">WEIMAR</div>
            <div className="col-span-2 border-t-4 border-black pt-2 text-right">
              FORM FOLLOWS FUNCTION
            </div>
          </div>
        </div>

        {/* 4. Vertical Text Decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] -rotate-90 origin-center whitespace-nowrap">
          <span
            className="text-9xl font-black text-transparent stroke-black opacity-10"
            style={{ WebkitTextStroke: '2px black' }}
          >
            INTERNATIONAL STYLE
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwissPoster;
```

### Key Implementation Details:

1.  **Grid Layout:** The container uses `grid-cols-12` to establish a strict mathematical structure.
2.  **Blend Modes:** `mix-blend-multiply` on the red circle and blue square simulates the effect of overprinting inks, a hallmark of Swiss print design.
3.  **Typography:** The title uses `leading-[0.8]` and `tracking-tighter` to create a dense, block-like text structure.
4.  **Geometric Primitives:** The design is built entirely from circles (`rounded-full`) and squares (`rounded-none`), adhering to the fundamental shapes.
