# Style Guide: Bento Grid

## 1. Overview

**Bento Grid** design is inspired by the Japanese bento box—a compartmentalized meal where different items are arranged in a neat, rectangular layout. Popularized by Apple's promotional materials and dashboard UIs, it organizes complex information into bite-sized, modular cards.

**Core Philosophy:**

- **Modularity:** Every piece of content lives in its own box.
- **Hierarchy:** Size indicates importance. Large boxes for heroes, small boxes for details.
- **Visual Interest:** Breaking the monotony of a list or a standard 3-column grid.

## 2. Color Palette

The palette is usually neutral to let the content inside the boxes shine.

| Role           | Color Tone | Hex Example           | Description                           |
| -------------- | ---------- | --------------------- | ------------------------------------- |
| **Background** | Canvas     | `#F5F5F7` / `#000000` | Apple-style light grey or deep black. |
| **Card**       | Surface    | `#FFFFFF` / `#1C1C1E` | Clean white or dark grey.             |
| **Border**     | Separator  | `#E5E5E5` / `#333333` | Subtle borders to define edges.       |

## 3. Typography

Modern, clean, and highly legible.

- **Primary:** Modern Sans-serif (Inter, SF Pro, Roboto).
- **Headlines:** Bold, tight tracking.
- **Labels:** Small, uppercase, low contrast.

## 4. Spacing System

- **Gap:** Consistent gaps between grid items (usually `gap-4` or `gap-6`).
- **Padding:** Generous padding inside cards (`p-6` or `p-8`).

## 5. Component Styles: The Grid

- **Spans:** Using `col-span-2` or `row-span-2` to create visual variety.
- **Fill:** Images often fill the entire card (`object-cover`).

## 6. Animations & Transitions

- **Hover:** Subtle scale up (`hover:scale-[1.02]`) or shadow increase.
- **Reveal:** Staggered fade-in for grid items.

## 7. Border Radius

- **Smooth:** `rounded-2xl` or `rounded-3xl` (super-ellipse feel).
- **Consistent:** All cards must have the exact same radius.

## 8. Opacity & Transparency

- **Glass:** Some bento grids use glassmorphism for the cards.
- **Overlay:** Text over images often uses a gradient overlay.

## 9. Common Tailwind CSS Usage

- **Grid:** `grid grid-cols-3 grid-rows-3 gap-4`.
- **Spans:** `col-span-2`, `row-span-2`.
- **Cards:** `bg-white`, `rounded-3xl`, `overflow-hidden`.

## 10. Example Component Reference

### React Component (Feature Bento Grid)

```jsx
import React from 'react';

const BentoGrid = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-8 font-sans text-[#1D1D1F]">
      {/* Grid Container */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-[800px]">
        {/* Item 1: Large Hero (Top Left) */}
        <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-sm font-semibold text-gray-500 mb-2">ANALYTICS</h3>
          <h2 className="text-3xl font-bold mb-4">Track your growth in real-time.</h2>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-50 to-transparent"></div>
          {/* Mock Chart */}
          <div className="absolute bottom-8 left-8 right-8 h-32 flex items-end gap-2">
            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-blue-500 rounded-t-md transition-all duration-500 group-hover:bg-blue-600"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Item 2: Tall Feature (Top Right) */}
        <div className="md:col-span-1 md:row-span-2 bg-black text-white rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-xl">
              ⚡
            </div>
            <h2 className="text-xl font-bold">Lightning Fast</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Optimized for speed and performance across all devices.
          </p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full blur-[60px] opacity-20"></div>
        </div>

        {/* Item 3: Square (Middle Right) */}
        <div className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="text-4xl mb-2">🔒</div>
          <h2 className="font-bold">Secure</h2>
          <p className="text-xs text-gray-500">End-to-end encryption.</p>
        </div>

        {/* Item 4: Wide (Bottom Left) */}
        <div className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-3xl p-8 shadow-sm flex items-center justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">Pro Plan</h2>
            <p className="text-purple-100">Unlock all features today.</p>
          </div>
          <button className="relative z-10 bg-white text-indigo-600 px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors">
            Upgrade
          </button>
          {/* Decorative Circles */}
          <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Item 5: Square (Bottom Right) */}
        <div className="md:col-span-2 md:row-span-1 bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl">
            📱
          </div>
          <div>
            <h2 className="font-bold text-lg">Mobile First</h2>
            <p className="text-sm text-gray-500">Responsive design that works everywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
```

### Key Implementation Details:

1.  **CSS Grid:** `grid-cols-4` and `grid-rows-3` provide the canvas.
2.  **Spanning:** `col-span-2` and `row-span-2` create the "bento" look where boxes are different sizes but fit perfectly.
3.  **Rounded Corners:** `rounded-3xl` is standard for this style (very round).
4.  **Content:** Each box is a self-contained mini-design with its own hierarchy.
