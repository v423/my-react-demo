# Style Guide: Skeuomorphism & Neo-Skeuomorphism

## 1. Overview

**Skeuomorphism** acts as a bridge between the physical and digital worlds. While classic skeuomorphism relied on heavy textures like leather and wood to lower the learning curve for early digital adopters, **Neo-Skeuomorphism** (often overlapping with Neumorphism or Soft UI in some contexts, but distinct in its use of more realistic materials like frosted glass, ceramic, and metal) focuses on **tactility, depth, and physics**.

It creates an interface that feels "premium" and "crafted," stripping away the kitsch of the 2000s while retaining the human connection to physical objects.

**Core Philosophy:**

- **Tactility:** Elements look like they can be touched, pressed, or toggled.
- **Depth:** The Z-axis is crucial. Elements are not just layers; they have volume.
- **Lighting:** A consistent light source (usually top-left) defines the form of every object.

## 2. Color Palette

Neo-Skeuomorphism often uses subtle, monochromatic or analogous color schemes to let the light and shadow do the heavy lifting. High contrast is reserved for content, not structure.

| Role             | Color Tone               | Hex Example | Description                                                                            |
| ---------------- | ------------------------ | ----------- | -------------------------------------------------------------------------------------- |
| **Surface Base** | Off-White / Light Grey   | `#F0F2F5`   | The main canvas. Pure white is rarely used as a base because it can't show highlights. |
| **Surface Dark** | Dark Grey / Gunmetal     | `#2A2D32`   | For dark mode implementations.                                                         |
| **Highlight**    | Pure White               | `#FFFFFF`   | Used for the top-left light reflection.                                                |
| **Shadow**       | Cool Grey / Blue Grey    | `#A3B1C6`   | Used for the bottom-right cast shadow.                                                 |
| **Accent**       | Soft Blue / Vivid Orange | `#3B82F6`   | Used for active states (toggles, primary buttons).                                     |
| **Material**     | Metallic / Glass         | N/A         | Gradients are used to simulate materials (Silver, Gold, Frosted Glass).                |

## 3. Typography

Since the UI elements themselves are visually heavy, typography should be clean and legible to maintain balance.

- **Primary Font:** Sans-serif (e.g., Inter, SF Pro Display, Roboto).
- **Weights:**
  - **Bold (700):** For headings, often with a slight letterpress effect (inner shadow) or drop shadow to make it "sit" on the surface.
  - **Regular (400/500):** For body text, high contrast against the background.
- **Usage:**
  - Avoid very thin weights as they get lost against textured or complex backgrounds.
  - Numbers often look good in monospaced fonts if simulating a digital display or instrument.

## 4. Spacing System

Spacing must be generous. "Physical" objects need room to cast shadows and occupy space without feeling cluttered.

- **Grid:** 8pt grid system.
- **Padding:** Containers usually have larger padding (e.g., `p-6` or `p-8`) to accommodate the visual "thickness" of the borders and shadows.
- **Gap:** Elements should not touch. A gap of `16px` to `32px` is standard to allow shadows to breathe.

## 5. Component Styles: Shadows & Elevation

This is the defining characteristic. You rarely use a single shadow.

### 5.1 The "Floating" Object (Convex)

Used for cards, buttons, and popovers.

- **Light Source:** Top-Left.
- **Shadow 1 (Drop):** Darker shadow at bottom-right.
- **Shadow 2 (Highlight):** Lighter (often white) shadow/glow at top-left.

### 5.2 The "Pressed" Object (Concave)

Used for input fields, pressed buttons, or wells.

- **Shadow 1 (Inner):** Dark inner shadow at top-left.
- **Shadow 2 (Inner Highlight):** Light inner shadow at bottom-right.

### 5.3 Materials

- **Frosted Glass:** `backdrop-filter: blur()` with a semi-transparent white background and a subtle white border.
- **Metal:** Linear gradients (e.g., 135deg) shifting from light grey to dark grey and back.

## 6. Animations & Transitions

Animations should follow physics.

- **Button Press:**
  - **Duration:** `150ms` - `200ms`.
  - **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Ease-in-out).
  - **Effect:** Scale down slightly (`0.98`), shadow changes from "Floating" to "Pressed" (or reduces distance).
- **Toggle Switch:**
  - **Movement:** Smooth sliding with a feeling of friction or magnetic snap.

## 7. Border Radius

Sharp corners feel dangerous and digital. Neo-Skeuomorphism prefers organic, safe shapes.

- **Standard:** `12px` to `20px` (Rounded).
- **Fully Rounded:** `9999px` (Pill shapes) for buttons and inputs.
- **Squircle:** If possible (Apple-style super-ellipse) for a more premium feel.

## 8. Opacity & Transparency

- **Glassmorphism Integration:** Neo-Skeuomorphism often incorporates glass elements.
- **Shadows:** Never use opaque black shadows. Use `rgba(0,0,0,0.1)` to `rgba(0,0,0,0.2)` mixed with blue or the background hue for realism.

## 9. Common Tailwind CSS Usage

You will often need to extend the `tailwind.config.js` to support complex shadows.

```javascript
// tailwind.config.js extension example
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'neo-flat': '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff',
        'neo-pressed': 'inset 6px 6px 12px #b8b9be, inset -6px -6px 12px #ffffff',
        'neo-float': '10px 10px 20px #b8b9be, -10px -10px 20px #ffffff',
      },
      colors: {
        'neo-base': '#e0e5ec',
      },
    },
  },
};
```

## 10. Example Component Reference

### React Component (Neo-Skeuomorphic Card & Button)

```jsx
import React, { useState } from 'react';

const NeoCard = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center p-10 font-sans">
      {/* Card Container */}
      <div
        className="w-80 rounded-[30px] bg-[#e0e5ec] p-8 relative
        shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
      >
        {/* Icon / Image Placeholder */}
        <div
          className="w-20 h-20 mx-auto rounded-full bg-[#e0e5ec] mb-6 flex items-center justify-center
          shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          <span className="text-2xl text-gray-500">📷</span>
        </div>

        <h2 className="text-2xl font-bold text-gray-700 text-center mb-2">Neo-Skeuo</h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Soft UI with realistic lighting and touchable surfaces.
        </p>

        {/* Interactive Button */}
        <button
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          className={`w-full py-4 rounded-xl font-semibold text-gray-600 transition-all duration-200 ease-in-out
            ${
              isPressed
                ? 'shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] scale-[0.98]'
                : 'shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[7px_7px_14px_#bebebe,-7px_-7px_14px_#ffffff] scale-100'
            }
          `}
        >
          Press Me
        </button>
      </div>
    </div>
  );
};

export default NeoCard;
```

### Key Implementation Details:

1.  **Background Color:** The background `#e0e5ec` is crucial. It's not white, allowing the white highlight shadow (`-20px -20px 60px #ffffff`) to be visible.
2.  **Double Shadows:** Notice the `shadow-[...]` syntax using arbitrary values to create two shadows: one dark (`#bebebe`) and one light (`#ffffff`).
3.  **Inset Shadows:** The "Icon Placeholder" and the "Pressed" state of the button use `inset` shadows to create the concave/pressed effect.
