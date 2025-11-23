# Style Guide: Tactile Maximalism (Digital Scrapbook)

## 1. Overview

**Tactile Maximalism** rejects the clean, sterile look of modern tech. It embraces the "messy" human touch, simulating physical media like scrapbooks, zines, and collages. It feels handmade, personal, and nostalgic.

**Core Philosophy:**

- **Texture:** Everything has a surface (paper, tape, plastic).
- **Layering:** Elements overlap chaotically, like a desk covered in photos.
- **Imperfection:** Tilted elements, torn edges, and scribbles are features, not bugs.

## 2. Color Palette

The palette is eclectic, mixing natural material tones with artificial "highlighter" colors.

| Role           | Color Tone              | Hex Example                | Description               |
| -------------- | ----------------------- | -------------------------- | ------------------------- |
| **Background** | Kraft Paper / Cardboard | `#E3D6C5`                  | The base canvas.          |
| **Paper**      | Off-White / Cream       | `#F9F7F1`                  | For notes and photos.     |
| **Tape**       | Semi-transparent Yellow | `rgba(255, 240, 100, 0.6)` | Masking tape look.        |
| **Ink**        | Ballpoint Blue          | `#000080`                  | Hand-drawn elements.      |
| **Marker**     | Neon Pink               | `#FF0099`                  | Highlights and scribbles. |

## 3. Typography

Typography is expressive and mixed.

- **Primary Font:** Typewriter (Courier Prime) or Serif (Times New Roman).
- **Handwritten:** Marker fonts (Permanent Marker) for notes.
- **Display:** Cut-out letters (ransom note style).
- **Usage:** Mix different fonts in the same block to simulate a collage.

## 4. Spacing System

"Anti-spacing." Elements are thrown together.

- **Overlap:** Negative margins (`-ml-4`, `-mt-8`) are common.
- **Rotation:** Almost nothing is straight (`rotate-2`, `-rotate-3`).
- **Cluster:** Group elements tightly in piles.

## 5. Component Styles: Shadows & Elevation

Shadows are crucial to sell the illusion of physical objects sitting on a surface.

- **Photos/Paper:** Sharp, dark shadow close to the object.
  - `box-shadow: 2px 4px 8px rgba(0,0,0,0.3);`
- **Tape:** No shadow (it's flat on the paper).
- **Objects:** Deeper shadow for keys, coins, etc.

## 6. Animations & Transitions

- **Stop Motion:** Low frame rate animations (12fps).
- **Jitter:** Elements wiggle slightly on hover.
- **Drag:** Elements should feel draggable.

## 7. Border Radius

- **Photos:** White borders (`p-2 bg-white`) with slight rounded corners.
- **Torn Edges:** Use `clip-path` or SVG masks to create jagged edges.
- **Tape:** Jagged ends.

## 8. Opacity & Transparency

- **Tape:** 60-80% opacity to show the texture underneath.
- **Plastic:** 90% opacity with high gloss.

## 9. Common Tailwind CSS Usage

- **Transform:** `rotate-6`, `scale-105`, `-translate-y-2`.
- **Filters:** `sepia`, `grayscale`, `contrast-125`.
- **Borders:** `border-8`, `border-white`.

## 10. Example Component Reference

### React Component (Scrapbook Collage)

```jsx
import React from 'react';

const ScrapbookCollage = () => {
  return (
    <div className="min-h-screen bg-[#E3D6C5] flex items-center justify-center p-10 overflow-hidden font-serif">
      {/* Background Texture (CSS Pattern) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="relative w-full max-w-2xl h-96">
        {/* 1. The Polaroid Photo */}
        <div className="absolute top-0 left-10 w-64 bg-white p-4 pb-12 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-10">
          <div className="w-full h-48 bg-gray-800 grayscale contrast-125 flex items-center justify-center overflow-hidden">
            <span className="text-4xl">📸</span>
          </div>
          <div
            className="font-handwriting text-xl text-center mt-4 text-gray-700"
            style={{ fontFamily: '"Comic Sans MS", cursive' }}
          >
            Summer '24
          </div>
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-200/80 transform -rotate-2 shadow-sm"></div>
        </div>

        {/* 2. The Note */}
        <div className="absolute top-20 right-10 w-56 bg-[#F9F7F1] p-6 shadow-lg transform rotate-3 z-20">
          <p className="font-mono text-sm leading-relaxed text-blue-900">
            REMINDER:
            <br />
            Buy more film.
            <br />
            Call Sarah.
            <br />
            <span className="bg-pink-300 px-1">Don't forget!</span>
          </p>
          {/* Paper Clip (CSS Shape) */}
          <div className="absolute -top-4 right-4 w-4 h-12 border-2 border-gray-400 rounded-full z-30"></div>
        </div>

        {/* 3. The Sticker */}
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-black text-xs uppercase tracking-widest transform rotate-12 shadow-md border-4 border-white z-30 hover:scale-110 transition-transform">
          New!
        </div>

        {/* 4. Torn Paper Title */}
        <div
          className="absolute -bottom-10 right-20 bg-black text-white p-4 transform -rotate-2 z-40"
          style={{ clipPath: 'polygon(0% 0%, 100% 2%, 98% 100%, 2% 98%)' }}
        >
          <h1 className="text-4xl font-bold uppercase tracking-tighter">MEMORIES</h1>
        </div>
      </div>
    </div>
  );
};

export default ScrapbookCollage;
```

### Key Implementation Details:

1.  **Rotation:** Every element has a slight rotation (`-rotate-6`, `rotate-3`) to avoid looking "digital".
2.  **Tape Effect:** A semi-transparent yellow div (`bg-yellow-200/80`) placed over the photo simulates masking tape.
3.  **Polaroid Style:** A white container with extra bottom padding (`pb-12`) mimics the classic instant film look.
4.  **Mixed Fonts:** Combining `font-serif`, `font-mono`, and handwriting styles creates the eclectic vibe.
