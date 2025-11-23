# Style Guide: Neo-Brutalism

## 1. Overview

**Neo-Brutalism** (or Neubrutalism) is a reaction against the standardized, polished look of modern web design (like Material Design). It embraces "ugliness," raw structures, and high contrast. It merges the architectural philosophy of Brutalism (raw concrete) with a commercial, pop-art aesthetic.

**Core Philosophy:**

- **Honesty:** Don't hide the structure. Borders are thick and visible.
- **High Contrast:** Colors clash intentionally.
- **Anti-Design:** Breaking conventional rules of spacing and hierarchy to create memorable experiences.

## 2. Color Palette

The palette combines a muted, vintage base with hyper-saturated accents.

| Role           | Color Tone    | Hex Example           | Description                                                     |
| -------------- | ------------- | --------------------- | --------------------------------------------------------------- |
| **Background** | Cream / Beige | `#FDF6E3` / `#FFFDF5` | Soft, paper-like background to contrast with harsh black lines. |
| **Stroke**     | Pure Black    | `#000000`             | The most important color. Used for all borders and text.        |
| **Accent 1**   | Neon Green    | `#CCFF00`             | Acidic, eye-catching.                                           |
| **Accent 2**   | Hot Pink      | `#FF00FF`             | Digital, aggressive.                                            |
| **Accent 3**   | Cyan          | `#00FFFF`             | Standard RGB cyan.                                              |
| **Secondary**  | Lavender      | `#E6E6FA`             | Soft pastel to balance the neon.                                |

## 3. Typography

Typography is treated as a graphical element. It's often weird, stretched, or monospaced.

- **Primary Font:** Grotesque Sans (Archivo Black) or Monospace (Space Mono, JetBrains Mono).
- **Style:**
  - **Headlines:** Massive, uppercase, sometimes with "Ink Traps" (e.g., Syne).
  - **Body:** Readable but often bold or monospaced.
- **Decoration:** Underlines are thick and distant from the text.

## 4. Spacing System

Spacing is either rigid (visible grids) or intentionally chaotic.

- **Borders:** Every container has a border.
- **Padding:** Tight or uneven.
- **Grid:** Visible grid lines are a common motif.

## 5. Component Styles: Shadows & Elevation

The signature trait of Neo-Brutalism is the **Hard Shadow**.

- **Hard Shadow:** No blur (`0px`). Solid offset.
  - CSS: `box-shadow: 4px 4px 0px 0px #000000;`
- **Direction:** Usually bottom-right (positive X, positive Y).
- **Borders:** Thick (2px - 4px) solid black borders on everything.

## 6. Animations & Transitions

Animations are jerky or non-existent to emphasize the "raw" feel.

- **Hover:** Instant displacement. The button moves down to cover its shadow.
  - `transition: none` or very fast linear.
- **Marquee:** Infinite scrolling text.
- **Glitch:** Occasional CSS glitch effects.

## 7. Border Radius

- **Sharp:** `rounded-none` is standard.
- **Slightly Rounded:** `rounded-md` (6px) is allowed but must have a thick border.
- **Inconsistent:** Mixing sharp and rounded corners in the same interface.

## 8. Opacity & Transparency

- **Solid:** 100% opacity. No glassmorphism.
- **Halftone:** Using dots or patterns instead of transparency for shading.

## 9. Common Tailwind CSS Usage

You will use arbitrary values heavily for the hard shadows.

- **Borders:** `border-2`, `border-black`.
- **Shadows:** `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`.
- **Hover:** `hover:translate-x-[2px]`, `hover:translate-y-[2px]`, `hover:shadow-none`.

## 10. Example Component Reference

### React Component (Neo-Brutalist Card)

```jsx
import React from 'react';

const NeoBrutalistCard = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center p-8 font-mono">
      {/* Card Container */}
      <div className="w-80 bg-[#A388EE] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 cursor-pointer group">
        {/* Image / Header Area */}
        <div className="h-40 bg-[#CCFF00] border-b-4 border-black flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
              backgroundSize: '10px 10px',
            }}
          ></div>
          <span className="text-6xl">👁️</span>

          {/* Badge */}
          <div className="absolute top-2 right-2 bg-white border-2 border-black px-2 py-1 text-xs font-bold transform rotate-3">
            NEW
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <h2 className="text-2xl font-black uppercase mb-2 leading-none">
            Raw
            <br />
            Power
          </h2>

          <p className="text-sm font-bold mb-6 leading-tight">
            Neo-brutalism abandons the "softness" of modern UI for high contrast and hard edges.
          </p>

          {/* Button */}
          <button className="w-full bg-[#FF00FF] border-2 border-black py-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
            CLICK ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeoBrutalistCard;
```

### Key Implementation Details:

1.  **Hard Shadows:** The `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]` creates the distinct "pop-out" effect without any blur.
2.  **Thick Borders:** `border-4 border-black` defines the structure clearly.
3.  **Clashing Colors:** Purple (`#A388EE`), Green (`#CCFF00`), and Pink (`#FF00FF`) are used together aggressively.
4.  **Interaction:** The `hover:shadow-none` combined with `translate` simulates the card being physically pressed down flat against the surface.
