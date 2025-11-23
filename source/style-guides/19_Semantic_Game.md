# Style Guide: Semantic Game / UI-less

## 1. Overview

**Semantic Game** (or Diegetic UI) design treats the web interface as an immersive environment rather than a page. The user interface elements exist _within_ the world of the content. Buttons look like physical switches, navigation looks like a map, and text appears on screens or signs within the scene.

**Core Philosophy:**

- **Immersion:** The user should forget they are on a website.
- **Diegetic:** UI elements are part of the narrative world (e.g., a battery meter on a spacesuit).
- **Discovery:** Users explore to find content rather than using a traditional navbar.

## 2. Color Palette

The palette depends on the "world" (Sci-Fi, Fantasy, Horror), but usually features high contrast for interactive elements.

| Role           | Color Tone        | Hex Example           | Description                                          |
| -------------- | ----------------- | --------------------- | ---------------------------------------------------- |
| **Atmosphere** | Void Black        | `#050505`             | Deep backgrounds to hide the browser edges.          |
| **Light**      | Neon Cyan / Amber | `#00F3FF` / `#FFB300` | Emissive colors for screens and holograms.           |
| **Structure**  | Gunmetal          | `#2A2A2A`             | Metallic or stone textures for the "physical" world. |

## 3. Typography

Typography is often treated as a texture or a physical label.

- **Screens:** Monospace or Dot Matrix fonts.
- **Labels:** Stenciled fonts (military style).
- **Readability:** Often sacrificed slightly for immersion (scanlines, glow).

## 4. Spacing System

- **Spatial:** Elements are positioned based on the 3D logic of the scene, not a 2D grid.
- **Perspective:** CSS transforms (`perspective`, `rotateX`) add depth.

## 5. Component Styles: Diegetic Elements

- **Switches:** Toggles that look like physical rocker switches.
- **Gauges:** Circular progress bars or liquid tubes.
- **Holograms:** Floating elements with opacity and blur.

## 6. Animations & Transitions

- **Mechanical:** Clunky, heavy movements for physical objects.
- **Digital:** Glitches, scanlines, and boot-up sequences for screens.

## 7. Border Radius

- **Chamfered:** Cut corners (`clip-path`) are common in Sci-Fi.
- **Organic:** Rough edges for fantasy.

## 8. Opacity & Transparency

- **Glass:** Dirty or scratched glass effects.
- **Glow:** `box-shadow` used to create light emission.

## 9. Common Tailwind CSS Usage

- **Effects:** `backdrop-blur`, `mix-blend-screen`.
- **Transforms:** `skew-x-12`, `scale-y-0`.
- **Borders:** `border-l-4` (for status bars).

## 10. Example Component Reference

### React Component (Sci-Fi Access Panel)

```jsx
import React, { useState } from 'react';

const SciFiPanel = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-8 font-mono text-[#00F3FF]">
      {/* Panel Container */}
      <div className="relative w-96 bg-[#1a1a1a] border-2 border-[#333] p-1 shadow-[0_0_50px_rgba(0,243,255,0.1)]">
        {/* Screw Heads */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-[#333] rounded-full flex items-center justify-center">
          <div className="w-1 h-px bg-[#111] transform rotate-45"></div>
        </div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-[#333] rounded-full flex items-center justify-center">
          <div className="w-1 h-px bg-[#111] transform rotate-45"></div>
        </div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#333] rounded-full flex items-center justify-center">
          <div className="w-1 h-px bg-[#111] transform rotate-45"></div>
        </div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#333] rounded-full flex items-center justify-center">
          <div className="w-1 h-px bg-[#111] transform rotate-45"></div>
        </div>

        {/* Inner Screen */}
        <div className="bg-black border border-[#333] p-6 relative overflow-hidden group">
          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 243, 255, 0.5) 50%)',
              backgroundSize: '100% 4px',
            }}
          ></div>

          {/* Header */}
          <div className="flex justify-between items-end mb-8 border-b border-[#00F3FF]/30 pb-2">
            <h2 className="text-xl font-bold tracking-widest uppercase drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">
              System_01
            </h2>
            <span className="text-xs animate-pulse">ONLINE</span>
          </div>

          {/* Data Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <div className="text-xs text-[#00F3FF]/50 mb-1">CORE TEMP</div>
              <div className="text-2xl font-bold">450°K</div>
              <div className="w-full h-1 bg-[#333] mt-1">
                <div className="w-3/4 h-full bg-[#00F3FF] shadow-[0_0_10px_#00F3FF]"></div>
              </div>
            </div>
            <div>
              <div className="text-xs text-[#00F3FF]/50 mb-1">PRESSURE</div>
              <div className="text-2xl font-bold">98%</div>
              <div className="w-full h-1 bg-[#333] mt-1">
                <div className="w-[98%] h-full bg-red-500 shadow-[0_0_10px_red]"></div>
              </div>
            </div>
          </div>

          {/* Interactive Button */}
          <button
            onClick={() => setActive(!active)}
            className={`w-full py-4 border border-[#00F3FF] uppercase tracking-[0.2em] font-bold transition-all duration-200 relative overflow-hidden group
              ${
                active
                  ? 'bg-[#00F3FF] text-black shadow-[0_0_20px_#00F3FF]'
                  : 'bg-transparent text-[#00F3FF] hover:bg-[#00F3FF]/10'
              }
            `}
          >
            {active ? 'Access Granted' : 'Initialize Sequence'}

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00F3FF]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00F3FF]"></div>
          </button>
        </div>

        {/* Warning Label */}
        <div className="mt-2 text-center">
          <div className="inline-block bg-yellow-500/20 text-yellow-500 text-[10px] px-2 py-0.5 border border-yellow-500/50 uppercase tracking-widest">
            Authorized Personnel Only
          </div>
        </div>
      </div>
    </div>
  );
};

export default SciFiPanel;
```

### Key Implementation Details:

1.  **Diegetic Details:** The "Screw Heads" and "Warning Label" make the UI feel like a physical object in the world.
2.  **Scanlines:** A simple CSS gradient overlay adds the CRT monitor effect.
3.  **Glow:** `drop-shadow` and `box-shadow` are crucial for the "screen" aesthetic.
4.  **Colors:** High contrast Neon Cyan (`#00F3FF`) against Void Black (`#050505`) is the classic Sci-Fi look.
