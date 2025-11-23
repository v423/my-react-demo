# Style Guide: 90s Web (Dial-Up / Web 1.0)

## 1. Overview

**90s Web** (or Brutalist Web) mimics the early days of the internet. It celebrates the limitations of HTML 3.2/4.0: default browser styles, tiled backgrounds, and table-based layouts. It's raw, nostalgic, and unpretentious.

**Core Philosophy:**

- **Default is King:** If you don't style it, the browser style is the aesthetic.
- **Low Fidelity:** Pixelated icons, dithering, and limited color palettes.
- **Structure:** Visible frames, borders, and table cells.

## 2. Color Palette

Strict adherence to the **Web Safe Color Palette** (216 colors) is recommended for authenticity.

| Role            | Color Tone   | Hex Example | Description                                         |
| --------------- | ------------ | ----------- | --------------------------------------------------- |
| **Background**  | Grey / Tiled | `#C0C0C0`   | Windows 95 grey or a tiled texture (stars, marble). |
| **Link**        | Blue         | `#0000FF`   | Standard unvisited link.                            |
| **Visited**     | Purple       | `#800080`   | Standard visited link.                              |
| **Active**      | Red          | `#FF0000`   | Active link.                                        |
| **Text**        | Black        | `#000000`   | Times New Roman black.                              |
| **Bevel Light** | White        | `#FFFFFF`   | Top/Left border of a button.                        |
| **Bevel Dark**  | Dark Grey    | `#808080`   | Bottom/Right border of a button.                    |

## 3. Typography

Fonts are limited to what was available on standard OS installs in 1998.

- **Primary Font:** Times New Roman (Serif).
- **Monospace:** Courier New (for code or "terminal" text).
- **Fun:** Comic Sans MS (use sparingly or ironically).
- **Headlines:** Often rendered as images (WordArt) or just `<h1>` with default bolding.

## 4. Spacing System

- **Tables:** Layouts are built with `<table>`, so spacing is defined by `cellpadding` and `cellspacing`.
- **Centering:** `<center>` tag behavior (centering everything).
- **Width:** Fixed widths (e.g., 600px or 800px) to fit 640x480 or 800x600 monitors.

## 5. Component Styles: Shadows & Elevation

Shadows are not "soft". Depth is created using **CSS Borders** to simulate 3D bevels.

- **Button (Outset):**
  - Top/Left Border: White (`#FFFFFF`)
  - Bottom/Right Border: Black (`#000000`) or Dark Grey (`#808080`)
  - Background: Grey (`#C0C0C0`)
- **Input (Inset):**
  - Top/Left Border: Dark Grey
  - Bottom/Right Border: White

## 6. Animations & Transitions

- **Marquee:** Text scrolling horizontally.
- **Blink:** Text flashing on and off (1s interval).
- **GIFs:** Rotating skulls, "Under Construction" workers, flaming lines.

## 7. Border Radius

- **None:** `rounded-none` (0px). Everything is a rectangle.

## 8. Opacity & Transparency

- **None:** Elements are solid.
- **GIF Transparency:** 1-bit transparency (jagged edges) is authentic.

## 9. Common Tailwind CSS Usage

You need to manually construct the 3D borders.

- **Button:** `bg-gray-300 border-t-4 border-l-4 border-white border-b-4 border-r-4 border-gray-600`.
- **Container:** `border-2 border-blue-800` (simulating a frame).

## 10. Example Component Reference

### React Component (90s Guestbook)

```jsx
import React from 'react';

const DialUpPage = () => {
  return (
    <div
      className="min-h-screen bg-[#C0C0C0] font-serif p-2"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Main Container (Table Simulation) */}
      <div className="max-w-2xl mx-auto bg-white border-2 border-gray-500 shadow-none">
        {/* Header (WordArt Style) */}
        <div className="bg-[#000080] text-white p-2 text-center">
          <h1 className="text-4xl font-bold tracking-widest animate-pulse">
            WELCOME TO MY HOMEPAGE
          </h1>
        </div>

        {/* Marquee */}
        <div className="bg-black text-[#00FF00] font-mono p-1 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            *** UNDER CONSTRUCTION *** SIGN THE GUESTBOOK *** BEST VIEWED IN NETSCAPE NAVIGATOR 4.0
            ***
          </div>
        </div>

        <div className="p-6 flex gap-4">
          {/* Sidebar (Frameset style) */}
          <div className="w-32 bg-[#C0C0C0] border-2 border-white border-r-gray-600 border-b-gray-600 p-2 flex flex-col gap-2 text-center h-fit">
            <a href="#" className="text-blue-800 underline hover:text-red-600 text-sm font-bold">
              Home
            </a>
            <a href="#" className="text-blue-800 underline hover:text-red-600 text-sm font-bold">
              Links
            </a>
            <a href="#" className="text-blue-800 underline hover:text-red-600 text-sm font-bold">
              Photos
            </a>
            <a href="#" className="text-blue-800 underline hover:text-red-600 text-sm font-bold">
              Email Me
            </a>

            <div className="mt-4 border-t border-gray-500 pt-2">
              <div className="text-xs">Visitors:</div>
              <div className="bg-black text-red-600 font-mono text-sm border border-gray-400 px-1">
                01337
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🚧</span> Updates
            </h2>

            <p className="mb-4">
              <span className="font-bold">Nov 23, 1999:</span> Added new photos of my cat!{' '}
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW54eW54eW54eW54eW54eW54eW54eW54eW54eW54eW54eW54eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Lq0h93756wI/giphy.gif"
                alt="new"
                className="inline h-4"
              />
            </p>

            <p className="mb-6">
              Hi everyone! This is my personal space on the world wide web. I like HTML, pizza, and
              video games.
            </p>

            <hr className="border-t-2 border-t-gray-400 border-b-2 border-b-white mb-6" />

            {/* 3D Button */}
            <button className="bg-[#C0C0C0] text-black px-6 py-1 font-bold active:border-t-gray-600 active:border-l-gray-600 active:border-b-white active:border-r-white border-t-4 border-l-4 border-t-white border-l-white border-b-4 border-r-4 border-b-gray-600 border-r-gray-600 outline-none">
              Sign Guestbook
            </button>
          </div>
        </div>
      </div>

      <style>{`
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

export default DialUpPage;
```

### Key Implementation Details:

1.  **3D Bevels:** The button uses `border-t-4 border-l-4 border-white` (light source top-left) and `border-b-4 border-r-4 border-gray-600` (shadow bottom-right) to create the classic Windows 95 button look.
2.  **Web Safe Colors:** `#C0C0C0` (Silver), `#000080` (Navy), `#00FF00` (Lime) are all standard web-safe colors.
3.  **Fonts:** Explicitly setting `font-serif` (Times New Roman) and `font-mono` (Courier) is crucial for the vibe.
4.  **Layout:** The sidebar and content area mimic a `frameset` or table layout using flexbox for modern convenience but keeping the visual rigidity.
