# Style Guide: Museumcore

## 1. Overview

**Museumcore** (or Gallery Style) mimics the aesthetic of high-end art museums and exhibition catalogs. It prioritizes the content (the "art") above all else, using vast amounts of whitespace, restrained typography, and a quiet, intellectual atmosphere.

**Core Philosophy:**

- **Curation:** Every element feels intentionally placed.
- **Silence:** The design is quiet to let the images speak.
- **Authority:** Classic typography conveys institutional weight.

## 2. Color Palette

The palette is stark and neutral, like a gallery wall.

| Role           | Color Tone    | Hex Example           | Description                           |
| -------------- | ------------- | --------------------- | ------------------------------------- |
| **Background** | Gallery White | `#F9F9F9` / `#FFFFFF` | A soft, matte white.                  |
| **Text**       | Caption Grey  | `#4A4A4A`             | Never pure black; softer for reading. |
| **Accent**     | Archive Red   | `#800000`             | Used very sparingly for emphasis.     |
| **Dark**       | Matte Black   | `#1A1A1A`             | For strong headlines.                 |

## 3. Typography

A classic pairing of Serif and Sans-serif.

- **Headlines:** Elegant Serif (Caslon, Garamond, Baskerville).
- **Captions:** Neutral Sans-serif (Helvetica, Neue Haas Grotesk).
- **Sizing:** Headlines are often very large or very small; body text is small and precise.

## 4. Spacing System

- **Vast:** Huge margins (`p-20`) to isolate elements.
- **Asymmetrical:** Images often sit off-center to create tension.

## 5. Component Styles: The Label

- **Wall Text:** Small blocks of text next to large images, mimicking museum labels.
- **Lines:** Thin, hairline dividers (`border-t-[0.5px]`).

## 6. Animations & Transitions

- **Slow Fade:** Images fading in slowly (`duration-1000`).
- **Parallax:** Subtle movement on scroll.

## 7. Border Radius

- **Sharp:** `rounded-none` is preferred for images to look like framed art.
- **Minimal:** `rounded-sm` for buttons.

## 8. Opacity & Transparency

- **Solid:** Generally opaque.
- **Multiply:** Images might use blend modes to sit "on" the paper background.

## 9. Common Tailwind CSS Usage

- **Typography:** `font-serif`, `tracking-wide`, `leading-loose`.
- **Layout:** `flex-row-reverse`, `w-1/3`.
- **Borders:** `border-gray-200`.

## 10. Example Component Reference

### React Component (Exhibition Piece)

```jsx
import React from 'react';

const MuseumPiece = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center p-12 font-sans text-[#1A1A1A]">
      {/* Main Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* Image (The Art) */}
        <div className="w-full md:w-3/5 relative group cursor-none">
          <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden shadow-2xl">
            {/* Placeholder for Art */}
            <div className="absolute inset-0 bg-stone-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20 text-9xl font-serif italic">
              A
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
          </div>

          {/* Caption Number */}
          <div className="absolute -left-8 top-0 text-xs font-serif text-gray-400">FIG. 12</div>
        </div>

        {/* Text (The Label) */}
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          {/* Exhibition Header */}
          <div className="mb-12 border-t border-black pt-4 flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Collection</span>
            <span className="text-[10px] uppercase tracking-[0.2em]">2024</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-serif italic mb-6 leading-tight">
            The Silence of <br />
            <span className="not-italic">Objects</span>
          </h1>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-loose mb-8 text-justify">
            This piece explores the relationship between negative space and perceived weight. By
            isolating the subject in a field of void, the artist challenges the viewer to confront
            the absence of context.
          </p>

          {/* Metadata */}
          <div className="text-xs text-gray-500 space-y-1 font-mono">
            <p>ARTIST: UNKNOWN</p>
            <p>MEDIUM: OIL ON CANVAS</p>
            <p>DIMENSIONS: 120 X 180 CM</p>
          </div>

          {/* Button */}
          <button className="mt-12 self-start text-xs uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-50 transition-opacity">
            View Full Catalog
          </button>
        </div>
      </div>
    </div>
  );
};

export default MuseumPiece;
```

### Key Implementation Details:

1.  **Whitespace:** The `gap-16` and `p-12` create the breathing room essential for this style.
2.  **Typography Contrast:** Mixing a large `font-serif italic` title with small `font-mono` metadata creates a sophisticated hierarchy.
3.  **Lines:** The `border-t border-black` creates a strong horizontal anchor, common in Swiss design and gallery layouts.
4.  **Shadows:** A deep, soft shadow (`shadow-2xl`) makes the artwork feel like it's hanging on a wall.
