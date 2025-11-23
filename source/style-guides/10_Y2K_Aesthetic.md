# Style Guide: Y2K Aesthetic (Cybercore)

## 1. Overview

**Y2K Aesthetic** captures the techno-optimism of the late 1990s and early 2000s. It blends futuristic concepts with pop culture, featuring liquid metal, holographic textures, and blobby "alien" shapes. It's retro-futurism from the perspective of the turn of the millennium.

**Core Philosophy:**

- **Chrome & Liquid:** Surfaces are shiny, reflective, and fluid.
- **Digital Optimism:** Technology is cool, fun, and colorful (think iMac G3).
- **Space Age:** Aliens, stars, and planetary rings are common motifs.

## 2. Color Palette

The palette is "Acidic" and "Holographic."

| Role           | Color Tone        | Hex Example | Description                                              |
| -------------- | ----------------- | ----------- | -------------------------------------------------------- |
| **Chrome**     | Silver / Metallic | `#C0C0C0`   | Often simulated with gradients (White -> Grey -> Black). |
| **Acid Green** | Lime              | `#CCFF00`   | Cyberpunk energy.                                        |
| **Hot Pink**   | Magenta           | `#FF00FF`   | Pop diva energy.                                         |
| **Cyber Blue** | Cyan              | `#00FFFF`   | Digital interface glow.                                  |
| **Black**      | Deep Space        | `#000000`   | High contrast background.                                |

## 3. Typography

Typography is either extremely wide or pixelated.

- **Primary Font:** Extended Sans-serif (Microgramma, Eurostile).
- **Secondary Font:** Pixel Fonts (VCR OSD Mono).
- **Style:** Outlined text (`-webkit-text-stroke`), italicized for speed.

## 4. Spacing System

- **Chaotic:** Elements often float without a strict grid.
- **Dense:** Information is packed, mimicking complex HUDs (Heads-Up Displays).

## 5. Component Styles: Shadows & Elevation

- **Glows:** Instead of black shadows, use colored glows.
  - `box-shadow: 0 0 10px #00FFFF;`
- **Bevels:** Hard, plastic bevels (CSS borders with different colors) to simulate 3D buttons.

## 6. Animations & Transitions

- **Spin:** 3D objects (stars, globes) rotating endlessly.
- **Marquee:** Scrolling text is essential.
- **Blink:** Elements flashing on and off.

## 7. Border Radius

- **Pill:** `rounded-full` for "capsule" buttons.
- **Blob:** Irregular border radius (e.g., `rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%]`).
- **Sharp:** For pixel art elements.

## 8. Opacity & Transparency

- **Holographic:** Semi-transparent gradients that shift colors.
- **Wireframe:** Transparent backgrounds with visible borders.

## 9. Common Tailwind CSS Usage

- **Gradients:** `bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500`.
- **Filters:** `hue-rotate-90`, `invert`.
- **Animation:** `animate-spin-slow`.

## 10. Example Component Reference

### React Component (Y2K Chrome Card)

```jsx
import React from 'react';

const Y2KCard = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 font-sans overflow-hidden relative">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#00FF00 1px, transparent 1px), linear-gradient(90deg, #00FF00 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Floating 3D Star (CSS Shape) */}
      <div className="absolute top-20 right-20 text-6xl animate-spin-slow text-[#CCFF00]">✦</div>

      {/* Chrome Card */}
      <div className="relative w-80 bg-gray-300 rounded-2xl p-1 border-2 border-white/50 shadow-[0_0_20px_#FF00FF]">
        {/* Chrome Gradient Background */}
        <div className="h-full w-full bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Holographic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-50 pointer-events-none"></div>

          {/* Header */}
          <div className="font-mono text-xs text-black mb-4 border border-black px-2 py-0.5 bg-white uppercase tracking-widest">
            System_Ready
          </div>

          {/* Title */}
          <h2
            className="text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-2"
            style={{ WebkitTextStroke: '1px black' }}
          >
            CYBER
            <br />
            ZONE
          </h2>

          {/* Image / Visual */}
          <div className="w-24 h-24 bg-black rounded-full border-4 border-gray-300 shadow-inner flex items-center justify-center mb-6 relative group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            <span className="text-3xl z-10">👽</span>
          </div>

          {/* Pill Button */}
          <button className="w-full py-2 rounded-full bg-gradient-to-r from-[#CCFF00] to-[#00FF00] border-2 border-white shadow-[0_0_10px_#00FF00] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Enter
          </button>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-10 w-full overflow-hidden bg-[#FF00FF] text-black font-mono text-sm py-1 border-y-2 border-white">
        <div className="whitespace-nowrap animate-marquee">
          LOADING... LOADING... LOADING... WELCOME TO THE FUTURE...
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Y2KCard;
```

### Key Implementation Details:

1.  **Chrome Effect:** The `bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600` simulates a metallic reflection.
2.  **Glows:** `shadow-[0_0_20px_#FF00FF]` adds the neon light effect.
3.  **Typography:** The title uses `italic` and `WebkitTextStroke` to mimic the aggressive, speedy typography of the era.
4.  **Grid Background:** A simple CSS gradient grid sets the "cyberspace" context.
