# Style Guide: Receipt / Brutalist Commerce

## 1. Overview

**Receipt Style** (a subset of Brutalism) mimics the aesthetic of physical thermal paper receipts, invoices, and packing slips. It treats the web interface as a utilitarian document, prioritizing raw data, lists, and monospaced typography over decoration.

**Core Philosophy:**

- **Utilitarian:** Form follows function. The design looks like a printed output.
- **Disposable:** The aesthetic feels temporary and transactional.
- **Raw:** No gradients, no shadows (except for the paper itself), no smoothing.

## 2. Color Palette

The palette is extremely limited, mimicking thermal printers.

| Role           | Color Tone     | Hex Example           | Description                       |
| -------------- | -------------- | --------------------- | --------------------------------- |
| **Background** | Paper White    | `#F5F5F5` / `#FFFFFF` | Slightly off-white or pure white. |
| **Ink**        | Carbon Black   | `#000000`             | Pure black for maximum contrast.  |
| **Faded**      | Thermal Grey   | `#888888`             | For "faded" or secondary text.    |
| **Highlight**  | Pen Blue / Red | `#0000FF` / `#FF0000` | Mimics a stamp or pen mark.       |

## 3. Typography

Monospace fonts are non-negotiable.

- **Primary:** Monospace (Courier New, Space Mono, JetBrains Mono).
- **Style:** Uppercase for headers, often bold.
- **Alignment:** Justified text (left and right) is common to mimic printed columns.

## 4. Spacing System

- **Tight:** Lines are often packed closely together.
- **Dashed:** Dashed lines (`border-dashed`) are used for dividers instead of solid lines or whitespace.

## 5. Component Styles: Shapes & Edges

- **Zigzag:** The bottom (and sometimes top) of containers often has a zigzag pattern to mimic torn paper.
- **Barcodes:** 1D or QR codes used as decorative elements.

## 6. Animations & Transitions

- **Print:** Elements appearing row by row, like a printer printing.
- **Glitch:** Occasional flickering or misalignment.

## 7. Border Radius

- **None:** Sharp corners (`rounded-none`) are the default.
- **Torn:** CSS `clip-path` used to create jagged edges.

## 8. Opacity & Transparency

- **Solid:** 100% opacity.
- **Multiply:** "Stamps" might use `mix-blend-mode: multiply` to look like ink on paper.

## 9. Common Tailwind CSS Usage

- **Fonts:** `font-mono`, `uppercase`.
- **Borders:** `border-b-2`, `border-dashed`, `border-black`.
- **Layout:** `flex justify-between` (for line items).

## 10. Example Component Reference

### React Component (Digital Receipt)

```jsx
import React from 'react';

const ReceiptCard = () => {
  return (
    <div className="min-h-screen bg-[#E5E5E5] flex items-center justify-center p-4 font-mono text-black">
      {/* Receipt Container */}
      <div className="w-80 bg-white shadow-2xl relative filter drop-shadow-lg">
        {/* Top Zigzag (CSS Gradient) */}
        <div
          className="absolute top-0 left-0 w-full h-4 bg-white"
          style={{
            background:
              'linear-gradient(135deg, transparent 75%, white 75%) 0 0, linear-gradient(-135deg, transparent 75%, white 75%) 0 0',
            backgroundSize: '20px 20px',
            transform: 'translateY(-100%)',
          }}
        ></div>

        <div className="p-6 pb-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-1">THE STORE</h2>
            <p className="text-xs text-gray-500">
              1234 BRUTALIST AVE.
              <br />
              NEW YORK, NY 10012
            </p>
            <p className="text-xs mt-2">
              {new Date().toLocaleDateString()} — {new Date().toLocaleTimeString()}
            </p>
          </div>

          {/* Divider */}
          <div className="border-b-2 border-dashed border-black my-4"></div>

          {/* Line Items */}
          <div className="space-y-2 text-sm mb-6">
            <div className="flex justify-between">
              <span>ITEM_01</span>
              <span>$45.00</span>
            </div>
            <div className="flex justify-between">
              <span>ITEM_02 (L)</span>
              <span>$120.00</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>DISCOUNT_CODE</span>
              <span>-$15.00</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b-2 border-dashed border-black my-4"></div>

          {/* Total */}
          <div className="flex justify-between text-xl font-bold mb-8">
            <span>TOTAL</span>
            <span>$150.00</span>
          </div>

          {/* Barcode (Simulated) */}
          <div className="h-12 flex justify-between items-end opacity-80 mb-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-black"
                style={{
                  width: Math.random() > 0.5 ? '4px' : '2px',
                  height: '100%',
                }}
              ></div>
            ))}
          </div>
          <div className="text-center text-xs tracking-[0.5em]">00192837465</div>

          {/* Stamp */}
          <div className="absolute bottom-20 right-4 border-4 border-red-600 text-red-600 px-2 py-1 transform -rotate-12 text-xl font-bold opacity-80 mix-blend-multiply pointer-events-none">
            PAID
          </div>
        </div>

        {/* Bottom Zigzag */}
        <div
          className="absolute bottom-0 left-0 w-full h-4 bg-white"
          style={{
            background:
              'linear-gradient(45deg, transparent 75%, white 75%) 0 0, linear-gradient(-45deg, transparent 75%, white 75%) 0 0',
            backgroundSize: '20px 20px',
            transform: 'translateY(100%) rotate(180deg)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ReceiptCard;
```

### Key Implementation Details:

1.  **Zigzag Edges:** The `background: linear-gradient(...)` trick creates the sawtooth pattern at the top and bottom. This is the most critical visual identifier.
2.  **Typography:** `font-mono` is essential.
3.  **Layout:** `flex justify-between` creates the classic "Item ........ Price" look.
4.  **Dashed Lines:** `border-dashed` separates sections like a real receipt.
5.  **Stamp:** `mix-blend-multiply` makes the "PAID" stamp look like it's physically stamped onto the paper.
