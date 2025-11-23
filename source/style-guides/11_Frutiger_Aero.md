# Style Guide: Frutiger Aero (Web 2.0 Gloss)

## 1. Overview

**Frutiger Aero** (approx. 2004–2013) is the aesthetic of Windows Vista, early iOS, and the Wii. It represents a "corporate utopia" where technology and nature coexist in harmony. It is characterized by glossy textures, skeuomorphic glass, auroras, and high-definition imagery of grass, water, and clouds.

**Core Philosophy:**

- **Gloss & Shine:** Everything is made of glass or polished plastic.
- **Eco-Futurism:** Technology is clean, green, and helpful.
- **Humanism:** Friendly, approachable typography and shapes.

## 2. Color Palette

The palette is fresh, aquatic, and optimistic.

| Role       | Color Tone            | Hex Example                | Description                                     |
| ---------- | --------------------- | -------------------------- | ----------------------------------------------- |
| **Sky**    | Azure Blue            | `#00BFFF`                  | The dominant color. Clear skies.                |
| **Grass**  | Lime / Leaf Green     | `#7CFC00`                  | Vibrant vegetation.                             |
| **Glass**  | Transparent White     | `rgba(255, 255, 255, 0.5)` | The "Aero" material.                            |
| **Aurora** | Cyan / Green Gradient | N/A                        | Background gradients mimicking northern lights. |
| **Text**   | Dark Grey / Blue      | `#333333`                  | Soft black.                                     |

## 3. Typography

Typography is humanist and legible, avoiding the coldness of geometric sans.

- **Primary Font:** Frutiger, Myriad Pro, Segoe UI, or Corbel.
- **Style:**
  - **Headlines:** Regular or Italic, sometimes with a subtle drop shadow or gradient fill.
  - **Body:** Clean and readable.

## 4. Spacing System

- **Open:** Large, airy layouts.
- **Reflections:** Elements need vertical space below them for "wet floor" reflections.

## 5. Component Styles: Shadows & Elevation

- **Glossy Highlight:** The top half of a button is lighter than the bottom half (linear gradient).
- **Inner Glow:** Elements glow from within.
- **Drop Shadow:** Soft, diffuse shadows (`shadow-lg`).

## 6. Animations & Transitions

- **Pulse:** Buttons slowly pulse with light.
- **Flow:** Backgrounds (clouds, auroras) move slowly.
- **Ripple:** Water ripple effects on hover.

## 7. Border Radius

- **Rounded:** `rounded-lg` or `rounded-xl`.
- **Pill:** Glossy pill buttons are iconic.

## 8. Opacity & Transparency

- **Aero Glass:** Windows have a blurred, semi-transparent border, but the content area is usually opaque white.
- **Gradients:** Linear gradients from opaque to transparent are used for reflections.

## 9. Common Tailwind CSS Usage

- **Gradients:** `bg-gradient-to-b from-white/50 to-transparent`.
- **Borders:** `border-t border-white/80` (Highlight).
- **Shadows:** `shadow-[0_10px_20px_rgba(0,0,0,0.2)]`.

## 10. Example Component Reference

### React Component (Frutiger Aero Button & Card)

```jsx
import React from 'react';

const FrutigerAero = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background: Aurora & Nature */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00BFFF] to-[#87CEFA]"></div>
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#7CFC00] to-transparent opacity-60"></div>

      {/* Aurora Lights */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)',
        }}
      ></div>

      {/* Aero Glass Window */}
      <div className="relative w-96 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 shadow-2xl overflow-hidden">
        {/* Window Header (Glossy) */}
        <div className="h-10 bg-gradient-to-b from-white/80 to-white/20 border-b border-white/40 flex items-center px-4 justify-between">
          <span className="text-gray-700 font-semibold text-sm drop-shadow-sm">Welcome</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 shadow-inner border border-red-600/30"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-inner border border-yellow-600/30"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 shadow-inner border border-green-600/30"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-gradient-to-b from-white/90 to-white/70">
          <h2 className="text-3xl font-bold text-[#0055A4] mb-2 drop-shadow-sm">Frutiger Aero</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience the future we were promised. Glossy textures, vibrant nature, and
            human-centric design.
          </p>

          {/* Glossy Button */}
          <button className="w-full relative group overflow-hidden rounded-full bg-gradient-to-b from-[#4facfe] to-[#00f2fe] border border-[#00BFFF] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
            {/* Top Gloss Highlight */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/80 to-transparent opacity-80"></div>

            {/* Button Text */}
            <div className="relative py-3 text-white font-bold text-lg text-shadow-sm z-10">
              Get Started
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0055A4]/20 to-transparent"></div>
          </button>
        </div>

        {/* Reflection (Wet Floor Effect) */}
        <div className="absolute -bottom-10 left-0 w-full h-10 bg-gradient-to-b from-white/30 to-transparent transform scale-y-[-1] opacity-30 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default FrutigerAero;
```

### Key Implementation Details:

1.  **Gloss Gradients:** The button uses `bg-gradient-to-b from-[#4facfe] to-[#00f2fe]` as a base, but the real magic is the overlay div `bg-gradient-to-b from-white/80 to-transparent` which creates the "plastic bubble" look.
2.  **Aero Glass:** The window header uses `bg-white/40` with `backdrop-blur-md` to simulate the Windows Vista title bar.
3.  **Vibrant Colors:** The background combines Sky Blue (`#00BFFF`) and Lime Green (`#7CFC00`) to evoke the classic "Bliss" wallpaper feel.
4.  **Soft Shadows:** Text often has a subtle `drop-shadow-sm` to stand out against the glossy backgrounds.
