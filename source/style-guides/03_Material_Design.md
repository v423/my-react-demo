# Style Guide: Material Design (M2 & M3)

## 1. Overview

**Material Design** is a comprehensive design system developed by Google. It is based on the metaphor of "Quantum Paper"—a fictional material that behaves like paper (can be stacked, cast shadows) but has magical properties (can expand, reform, and split).

**Material 3 (Material You)** is the latest iteration, focusing on personalization, adaptability, and accessibility. It moves away from the rigid, clinical look of M2 towards a more organic, playful, and user-centric aesthetic.

**Core Philosophy:**

- **Material is the Metaphor:** Surfaces and edges provide visual cues that are grounded in reality.
- **Bold, Graphic, Intentional:** Typography, grids, space, scale, color, and use of imagery guide visuals.
- **Motion Provides Meaning:** Motion focuses attention and maintains continuity.

## 2. Color Palette

Material Design 3 introduces a dynamic color system generated from a source color (often the user's wallpaper).

| Role                  | Color Tone        | Hex Example (M3 Default) | Description                                            |
| --------------------- | ----------------- | ------------------------ | ------------------------------------------------------ |
| **Primary**           | Violet / Purple   | `#6750A4`                | High-emphasis fills, texts, and icons against surface. |
| **On Primary**        | White             | `#FFFFFF`                | Text/Icons on top of Primary.                          |
| **Primary Container** | Light Lavender    | `#EADDFF`                | Lower emphasis fills (e.g., active tab background).    |
| **Surface**           | Off-White / Cream | `#FFFBFE`                | The background of the app.                             |
| **Surface Variant**   | Light Grey        | `#E7E0EC`                | Used for cards or contained areas.                     |
| **Outline**           | Grey              | `#79747E`                | Borders and dividers.                                  |

## 3. Typography

Material Design relies on a strict type scale to create hierarchy.

- **Primary Font:** Roboto (Standard), Open Sans, or Product Sans (Google proprietary).
- **Scale (M3):**
  - **Display Large:** 57px / 64px line-height.
  - **Headline Medium:** 28px / 36px line-height.
  - **Body Large:** 16px / 24px line-height.
  - **Label Large:** 14px / 20px line-height (Buttons).

## 4. Spacing System

Material Design uses a strict **8dp grid** for layout and a **4dp grid** for spacing within components.

- **Margins:** 16dp or 24dp on mobile.
- **Gutters:** 24dp between columns.
- **Touch Targets:** Minimum 48x48dp.

## 5. Component Styles: Shadows & Elevation

Elevation is the relative distance between two surfaces along the z-axis.

- **Level 0:** 0dp (Background).
- **Level 1:** 1dp (Cards, Buttons). `shadow-sm`
- **Level 2:** 3dp (Dialogs, FABs). `shadow-md`
- **Level 3:** 6dp (Navigation Drawers). `shadow-lg`
- **Level 4:** 8dp (Modals). `shadow-xl`
- **Level 5:** 12dp (Toast/Snackbar). `shadow-2xl`

_Note: M3 uses a combination of shadow and surface color overlay (tonal elevation) to indicate depth._

## 6. Animations & Transitions

Motion is essential. It explains "where things come from."

- **Ripple:** The signature interaction. A radial reaction from the touch point.
- **Container Transform:** A card expands to fill the screen.
- **Easing:** Standard Curve (Ease-in-out) for on-screen movement.
- **Duration:** `200ms` - `400ms`.

## 7. Border Radius

M3 is significantly rounder than M2.

- **Cards:** `12px` (`rounded-xl`) to `16px` (`rounded-2xl`).
- **Buttons:** `20px` (Fully rounded pills).
- **Dialogs:** `28px` (`rounded-[28px]`).

## 8. Opacity & Transparency

Material uses opacity for text hierarchy ("On Surface" colors).

- **High Emphasis:** 87% or 100% opacity (Primary text).
- **Medium Emphasis:** 60% opacity (Secondary text).
- **Disabled:** 38% opacity.

## 9. Common Tailwind CSS Usage

Tailwind's default palette works, but you often need custom colors for the M3 tonal palettes.

- **Elevation:** `shadow-md`, `shadow-lg`.
- **Rounding:** `rounded-xl`, `rounded-full`.
- **Colors:** `bg-purple-600`, `text-purple-100`.

## 10. Example Component Reference

### React Component (Material 3 Card with Ripple)

```jsx
import React, { useState, useRef } from 'react';

const MaterialCard = () => {
  // Simple Ripple Implementation
  const createRipple = event => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <div className="min-h-screen bg-[#FFFBFE] flex items-center justify-center p-4 font-roboto">
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 600ms linear;
          background-color: rgba(255, 255, 255, 0.3);
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>

      {/* M3 Card */}
      <div className="w-80 bg-[#F3EDF7] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Media Area */}
        <div className="h-48 bg-[#EADDFF] flex items-center justify-center text-[#21005D]">
          <span className="material-icons text-6xl">image</span>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <h2 className="text-[#1D1B20] text-[22px] leading-[28px] font-normal mb-2">
            Glass Souls
          </h2>
          <p className="text-[#49454F] text-[14px] leading-[20px] tracking-[0.25px] mb-6">
            From your recent playlist. Material Design 3 uses dynamic color to adapt to your
            wallpaper.
          </p>

          {/* Actions */}
          <div className="flex justify-end gap-2">
            <button
              className="relative overflow-hidden px-6 py-2.5 rounded-full text-[#6750A4] text-sm font-medium hover:bg-[#E8DEF8] transition-colors focus:outline-none"
              onClick={createRipple}
            >
              Read
            </button>
            <button
              className="relative overflow-hidden px-6 py-2.5 rounded-full bg-[#6750A4] text-white text-sm font-medium shadow-sm hover:shadow-md transition-all focus:outline-none"
              onClick={createRipple}
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
```

### Key Implementation Details:

1.  **Tonal Palette:** The background is `#F3EDF7` (Surface Variant), not white. The primary action is `#6750A4` (Primary).
2.  **Typography:** The headline uses `font-normal` (400 weight), not bold. M3 often uses lighter weights for headlines.
3.  **Rounded Corners:** The card uses `rounded-[16px]` and buttons use `rounded-full`.
4.  **Ripple:** The CSS animation simulates the ink ripple effect, which is crucial for the "Material" feel.
