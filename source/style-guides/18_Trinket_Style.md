# Style Guide: Trinket / Digital Hoarding

## 1. Overview

**Trinket Style** (or Digital Hoarding / Goblin Core) embraces the chaos of a cluttered bedroom or a desktop covered in files. It treats digital objects as physical "trinkets"—stickers, charms, photos, and icons—scattered across the screen. It is deeply personal, nostalgic, and anti-minimalist.

**Core Philosophy:**

- **Collection:** The interface is a place to display collected digital artifacts.
- **Chaos:** Overlapping elements and lack of a grid are intentional.
- **Nostalgia:** References to early internet culture, pixel art, and childhood toys.

## 2. Color Palette

There is no strict palette; the colors come from the "trinkets" themselves.

| Role           | Color Tone        | Hex Example | Description                                                  |
| -------------- | ----------------- | ----------- | ------------------------------------------------------------ |
| **Background** | Patterned / Noise | N/A         | Often a tiled image (stars, clouds) or a solid bright color. |
| **Accents**    | Neon / Pastel     | Mixed       | Clashing colors are welcome.                                 |

## 3. Typography

Typography is eclectic and often illegible.

- **Mix & Match:** Combining Pixel fonts, Comic Sans, and Gothic fonts in one view.
- **Style:** Text is often treated as an image (stickers with text).

## 4. Spacing System

- **None:** Elements overlap (`-ml-4`, `absolute`).
- **Draggable:** The ideal interaction is that the user can move things around.

## 5. Component Styles: Objects

- **Stickers:** Images with white borders (`border-white border-2`).
- **Charms:** Dangling elements.
- **Windows:** Retro OS window frames.

## 6. Animations & Transitions

- **Bounce:** Elements bouncing on hover.
- **Spin:** Slow rotation for 3D objects.
- **Marquee:** Scrolling text.

## 7. Border Radius

- **Mixed:** Some elements are circles, some are squares, some are custom shapes.

## 8. Opacity & Transparency

- **Glass:** Some windows might be semi-transparent.
- **Solid:** Stickers are usually fully opaque.

## 9. Common Tailwind CSS Usage

- **Positioning:** `absolute`, `top-10`, `left-20`, `rotate-12`.
- **Interactivity:** `cursor-move`, `hover:scale-110`.
- **Borders:** `border-4`, `border-white`, `shadow-lg`.

## 10. Example Component Reference

### React Component (Digital Shrine)

```jsx
import React from 'react';

const TrinketShrine = () => {
  return (
    <div className="min-h-screen bg-purple-200 relative overflow-hidden font-mono p-8">
      {/* Background Pattern (CSS) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#4B0082 2px, transparent 2px)',
          backgroundSize: '20px 20px',
        }}
      ></div>

      {/* Main Content Container (A messy pile) */}
      <div className="relative w-full max-w-2xl mx-auto h-[600px] border-4 border-white bg-white/30 backdrop-blur-sm rounded-3xl shadow-[0_0_0_10px_rgba(255,255,255,0.5)]">
        {/* Sticker 1: Photo */}
        <div className="absolute top-10 left-10 transform -rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer z-10">
          <div className="bg-white p-2 shadow-lg pb-8">
            <div className="w-32 h-32 bg-blue-400 flex items-center justify-center text-4xl">
              🌊
            </div>
            <p className="text-center font-handwriting mt-2 text-xs text-gray-500">
              summer_2004.jpg
            </p>
          </div>
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200 opacity-80 transform -rotate-2"></div>
        </div>

        {/* Sticker 2: Music Player */}
        <div className="absolute bottom-20 right-20 w-64 bg-gray-100 border-2 border-gray-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
          <div className="bg-blue-800 text-white px-2 py-1 text-xs flex justify-between items-center">
            <span>WinAmp.exe</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-gray-300 border border-gray-500"></div>
              <div className="w-3 h-3 bg-gray-300 border border-gray-500"></div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-black text-green-400 font-mono text-xs p-2 mb-2">
              Now Playing: <br />
              Toxic - Britney Spears
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-300 border border-gray-500 px-2 text-xs">Prev</button>
              <button className="bg-gray-300 border border-gray-500 px-2 text-xs">Play</button>
              <button className="bg-gray-300 border border-gray-500 px-2 text-xs">Next</button>
            </div>
          </div>
        </div>

        {/* Sticker 3: Tamagotchi */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-pink-400 rounded-[50px] border-4 border-pink-600 shadow-xl flex flex-col items-center justify-center z-30 hover:scale-105 transition-transform">
          <div className="w-20 h-20 bg-[#9EAFA2] border-4 border-gray-700 mb-2 flex items-center justify-center shadow-inner">
            <span className="animate-bounce text-2xl">👾</span>
          </div>
          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-yellow-300 border border-black"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-300 border border-black"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-300 border border-black"></div>
          </div>
        </div>

        {/* Sticker 4: Random Text */}
        <div className="absolute bottom-10 left-20 bg-yellow-100 p-4 shadow-md transform rotate-3 font-serif text-red-600 border border-yellow-300 z-10">
          <p className="text-lg">"Don't forget to drink water!"</p>
        </div>

        {/* Floating Charms */}
        <div className="absolute top-4 right-4 text-4xl animate-pulse">✨</div>
        <div className="absolute bottom-40 left-10 text-3xl animate-bounce">🍄</div>
      </div>
    </div>
  );
};

export default TrinketShrine;
```

### Key Implementation Details:

1.  **Absolute Positioning:** Almost everything is `absolute` with random `top`, `left`, and `rotate` values to simulate a messy desk.
2.  **Skeuomorphism Mix:** It mixes flat stickers with skeuomorphic elements (WinAmp player, Tamagotchi) for that nostalgic feel.
3.  **Tape Effect:** A simple semi-transparent `div` (`bg-yellow-200 opacity-80`) looks like scotch tape holding a photo.
4.  **Shadows:** Hard shadows (`shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`) for the retro software look vs soft shadows for the stickers.
