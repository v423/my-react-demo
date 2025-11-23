# Style Guide: Neumorphism (Soft UI)

## 1. Overview

**Neumorphism** (New Skeuomorphism) is a visual style that combines flat design with realistic lighting. Unlike skeuomorphism, which mimics real-world materials (leather, wood), neumorphism mimics **extruded soft plastic** or clay. Elements appear to be pushed out of or pressed into the background.

**Core Philosophy:**

- **Unity:** The element and the background are the same material and color.
- **Softness:** Everything is rounded and smooth.
- **Lighting:** Two light sources (or one light and one shadow) define the shape.

## 2. Color Palette

The palette is extremely limited. You cannot use pure white or pure black as a background because you need to show both highlights and shadows.

| Role          | Color Tone         | Hex Example | Description                               |
| ------------- | ------------------ | ----------- | ----------------------------------------- |
| **Base**      | Light Grey / Cream | `#E0E5EC`   | The most popular Neumorphic base.         |
| **Dark Mode** | Deep Blue / Grey   | `#2A2D32`   | Dark mode requires careful shadow tuning. |
| **Highlight** | White              | `#FFFFFF`   | Top-left shadow.                          |
| **Shadow**    | Darker Grey        | `#A3B1C6`   | Bottom-right shadow.                      |
| **Accent**    | Soft Blue / Purple | `#6D5DFC`   | Used for active states or indicators.     |

## 3. Typography

Typography should not break the softness.

- **Primary Font:** Rounded Sans (Nunito, Quicksand) or clean Geometric Sans (Montserrat).
- **Color:** Never pure black. Use dark grey (`#4A5568`) to reduce contrast and maintain the "soft" feel.
- **Effect:** Sometimes text itself has a subtle neumorphic shadow (embossed).

## 4. Spacing System

Neumorphism takes up a lot of space. Shadows need room to blur without bleeding into neighboring elements.

- **Padding:** Large padding is required.
- **Gap:** Elements must be separated by at least `2x` the blur radius of their shadows.

## 5. Component Styles: Shadows & Elevation

The "Double Shadow" is the signature.

### 5.1 Flat / Convex (Resting)

The element sticks out.

- **CSS:** `box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);`

### 5.2 Pressed / Concave (Active)

The element is pressed in.

- **CSS:** `box-shadow: inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8);`

## 6. Animations & Transitions

Transitions are slow and viscous.

- **Toggle:** A switch doesn't just slide; it "morphs" from a flat surface to a pressed channel.
- **Duration:** `300ms` - `500ms`.
- **Easing:** `ease-in-out`.

## 7. Border Radius

Sharp corners destroy the illusion.

- **Standard:** `rounded-[30px]` or `rounded-[50px]`.
- **Circle:** `rounded-full` is very common for buttons.

## 8. Opacity & Transparency

- **Opacity:** Not used for the elements themselves (they must be solid to hide the background).
- **Shadows:** Opacity is critical for the shadows to blend correctly with the base color.

## 9. Common Tailwind CSS Usage

You must extend the theme.

```javascript
// tailwind.config.js
extend: {
  boxShadow: {
    'neu-flat': '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
    'neu-pressed': 'inset 6px 6px 10px #a3b1c6, inset -6px -6px 10px #ffffff'
  },
  colors: {
    'neu-base': '#E0E5EC'
  }
}
```

## 10. Example Component Reference

### React Component (Neumorphic Music Controls)

```jsx
import React, { useState } from 'react';

const NeumorphicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#E0E5EC] flex items-center justify-center font-sans">
      {/* Main Container */}
      <div className="w-80 p-8 rounded-[40px] bg-[#E0E5EC] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        {/* Album Art Placeholder */}
        <div className="w-48 h-48 mx-auto rounded-full bg-[#E0E5EC] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] flex items-center justify-center mb-10 border-4 border-[#E0E5EC]">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            {/* Gradient Overlay to simulate vinyl or art */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-400">
              🎵
            </div>
          </div>
        </div>

        {/* Song Info */}
        <div className="text-center mb-10">
          <h2 className="text-gray-600 font-bold text-xl mb-2">Soft Waves</h2>
          <p className="text-gray-400 text-sm font-medium">Lo-Fi Beats</p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center px-4">
          {/* Prev Button */}
          <button className="w-12 h-12 rounded-full bg-[#E0E5EC] text-gray-500 shadow-[6px_6px_10px_#bebebe,-6px_-6px_10px_#ffffff] hover:shadow-[inset_6px_6px_10px_#bebebe,inset_-6px_-6px_10px_#ffffff] transition-all duration-300 flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 19V5l-7 7 7 7zm9 0V5l-7 7 7 7z" />
            </svg>
          </button>

          {/* Play/Pause Button (Large) */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-20 h-20 rounded-full bg-[#E0E5EC] text-[#6D5DFC] flex items-center justify-center transition-all duration-300
              ${
                isPlaying
                  ? 'shadow-[inset_6px_6px_10px_#bebebe,inset_-6px_-6px_10px_#ffffff] text-purple-400'
                  : 'shadow-[9px_9px_16px_#bebebe,-9px_-9px_16px_#ffffff]'
              }
            `}
          >
            {isPlaying ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Next Button */}
          <button className="w-12 h-12 rounded-full bg-[#E0E5EC] text-gray-500 shadow-[6px_6px_10px_#bebebe,-6px_-6px_10px_#ffffff] hover:shadow-[inset_6px_6px_10px_#bebebe,inset_-6px_-6px_10px_#ffffff] transition-all duration-300 flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 19h16V5L4 19zm5-7h11l-5.5 5.5L9 12z" />
              <path d="M13 5v14l7-7-7-7zM4 5v14l7-7-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeumorphicPlayer;
```

### Key Implementation Details:

1.  **Color Consistency:** Everything uses `#E0E5EC`.
2.  **Shadow Logic:**
    - **Resting:** `shadow-[9px_9px_16px_#bebebe,-9px_-9px_16px_#ffffff]` (Outer shadow).
    - **Pressed:** `shadow-[inset_6px_6px_10px_#bebebe,inset_-6px_-6px_10px_#ffffff]` (Inner shadow).
3.  **Roundness:** `rounded-full` and `rounded-[40px]` ensure there are no sharp edges to break the light flow.
4.  **Icon Color:** Icons are grey (`text-gray-500`) or a soft accent (`text-[#6D5DFC]`), never pure black.
