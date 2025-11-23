# Style Guide: Dark Academia

## 1. Overview

**Dark Academia** romanticizes the pursuit of knowledge, classical literature, and 19th-century university life. It is moody, intellectual, and steeped in history. The aesthetic revolves around libraries, candlelight, tweed, and ink.

**Core Philosophy:**

- **Intellectualism:** The design should feel like an old book or a private study.
- **Mystery:** Use shadows and low light to create an intimate atmosphere.
- **Texture:** Paper, leather, and wood textures are essential to ground the digital experience in the physical past.

## 2. Color Palette

The palette is deep, warm, and muted. Avoid neon or purely digital colors.

| Role           | Color Tone            | Hex Example           | Description                                        |
| -------------- | --------------------- | --------------------- | -------------------------------------------------- |
| **Background** | Charcoal / Deep Brown | `#1A1A1A` / `#2C241B` | The color of old wood or shadows.                  |
| **Paper**      | Parchment / Beige     | `#E3DCCA`             | Used for text areas or accents.                    |
| **Ink**        | Black / Dark Sepia    | `#0F0F0F`             | Text color on parchment.                           |
| **Accent 1**   | Crimson / Burgundy    | `#800020`             | The color of wax seals or velvet.                  |
| **Accent 2**   | Forest Green          | `#013220`             | Old library lamps.                                 |
| **Gold**       | Antique Gold          | `#C5A059`             | For borders and highlights (metallic, not yellow). |

## 3. Typography

Typography is the most critical element. It must feel classical and authoritative.

- **Primary Font:** Classical Serif (Baskerville, Garamond, Playfair Display).
- **Secondary Font:** Handwriting (for notes) or Typewriter.
- **Style:**
  - **Italics:** Used frequently for emphasis and quotes.
  - **Small Caps:** For headers to give a formal look.
  - **Ligatures:** Enable standard and discretionary ligatures for that "typeset" feel.

## 4. Spacing System

- **Margins:** Wide margins, like a well-printed book.
- **Columns:** Text is often arranged in narrow columns to mimic newspapers or academic journals.

## 5. Component Styles: Shadows & Elevation

- **Candlelight:** Shadows are soft, warm, and deep (`shadow-inner` or diffuse drop shadows).
- **Vignette:** Edges of the screen or containers are often darkened to focus attention on the center.
- **Texture Overlay:** A noise or paper texture overlay is often applied to the whole page.

## 6. Animations & Transitions

- **Slow Fade:** Elements appear slowly, like eyes adjusting to the dark.
- **Page Turn:** Simulating the physical turning of a page.
- **Flicker:** Subtle opacity changes to mimic candlelight.

## 7. Border Radius

- **Slightly Rounded:** `rounded-sm` (2px) to mimic worn corners of a book.
- **Ornate:** Sometimes corners are decorated with SVG flourishes.

## 8. Opacity & Transparency

- **Multiply:** Images are often blended with the background texture using `mix-blend-mode: multiply`.
- **Dust:** Semi-transparent dust particles or scratches overlaying images.

## 9. Common Tailwind CSS Usage

- **Filters:** `sepia`, `brightness-75`, `contrast-125`.
- **Blend Modes:** `mix-blend-multiply`, `mix-blend-overlay`.
- **Typography:** `font-serif`, `italic`, `tracking-wide`.

## 10. Example Component Reference

### React Component (Dark Academia Journal Entry)

```jsx
import React from 'react';

const DarkAcademiaCard = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-8 font-serif relative overflow-hidden">
      {/* Background Texture (Noise/Paper) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")',
        }}
      ></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative max-w-2xl w-full bg-[#E3DCCA] text-[#2C241B] p-12 shadow-2xl rounded-sm border border-[#C5A059]/30">
        {/* Decorative Corner (CSS/SVG) */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#2C241B] opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#2C241B] opacity-50"></div>

        {/* Date / Header */}
        <div className="flex justify-between items-end border-b border-[#2C241B] pb-4 mb-8">
          <div className="font-mono text-sm tracking-widest uppercase opacity-70">Oct 31, 1892</div>
          <div className="text-xs italic opacity-60">The Library of Babel</div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          The <span className="italic text-[#800020]">Secret</span> History
        </h1>

        {/* Drop Cap Content */}
        <div className="prose prose-stone prose-lg max-w-none leading-relaxed text-justify">
          <p>
            <span className="float-left text-7xl font-bold mr-4 mt-[-10px] font-serif text-[#2C241B]">
              I
            </span>
            t was a dark and stormy night when I first discovered the manuscript. The leather binding
            was cracked, smelling faintly of tobacco and old vanilla. As I turned the pages, the ink
            seemed to shimmer in the dying light of my candle.
          </p>
          <p className="mt-4">
            "Beauty is terror," the text read, scrawled in a frantic hand. "Whatever we call
            beautiful, we quiver before it."
          </p>
        </div>

        {/* Image with Blend Mode */}
        <div className="mt-8 relative h-64 w-full overflow-hidden grayscale sepia contrast-125 border-4 border-double border-[#2C241B]/20">
          {/* Placeholder for a classical statue or painting */}
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <span className="text-6xl opacity-50">🏛️</span>
          </div>
          <div className="absolute inset-0 bg-[#800020] mix-blend-overlay opacity-20"></div>
        </div>

        {/* Signature */}
        <div
          className="mt-12 text-right font-handwriting text-2xl opacity-80 transform -rotate-2"
          style={{ fontFamily: 'cursive' }}
        >
          Yours truly, <br />
          A. Blackwood
        </div>
      </div>
    </div>
  );
};

export default DarkAcademiaCard;
```

### Key Implementation Details:

1.  **Atmosphere:** The `radial-gradient` vignette and the background texture are essential for setting the mood.
2.  **Typography:** Using a "Drop Cap" (large first letter) evokes the style of old printed books.
3.  **Color:** The background is dark (`#1A1A1A`), but the content area is parchment (`#E3DCCA`) to ensure readability while maintaining the aesthetic.
4.  **Blend Modes:** `mix-blend-overlay` on the image gives it a vintage, tinted look without needing complex image processing.
