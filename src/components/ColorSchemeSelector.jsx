import React from 'react';
import { Palette } from 'lucide-react';
import { COLOR_VARIANTS } from '../constants/colorVariants';

const ColorSchemeSelector = ({ themeId, activeVariant, onVariantChange }) => {
  const variants = COLOR_VARIANTS[themeId];
  
  // If theme doesn't have variants, don't show selector
  if (!variants) {
    return null;
  }

  const variantKeys = ['variantA', 'variantB', 'variantC', 'variantD'];

  return (
    <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700">
      <Palette size={16} className="text-gray-400" />
      <div className="flex gap-1.5">
        {variantKeys.map((key) => {
          const variant = variants[key];
          const isActive = activeVariant === key;
          
          // Extract color from bgApp or primary for preview
          let previewColor = '#6b7280'; // default gray
          if (variant.primary) {
            // Try to extract color from gradient or solid color
            if (variant.primary.includes('from-')) {
              const match = variant.primary.match(/from-\[([^\]]+)\]/);
              if (match) previewColor = match[1];
            } else if (variant.primary.includes('bg-')) {
              const colorMatch = variant.primary.match(/bg-(\w+-\d+)/);
              if (colorMatch) {
                // Map Tailwind colors to hex (simplified)
                const colorMap = {
                  'blue-600': '#2563eb',
                  'emerald-600': '#059669',
                  'black': '#000000',
                  'orange-600': '#ea580c',
                  'cyan-400': '#22d3ee',
                  'purple-600': '#9333ea',
                  'pink-500': '#ec4899',
                  'green-500': '#22c55e',
                };
                previewColor = colorMap[colorMatch[1]] || previewColor;
              }
            }
          }

          return (
            <button
              key={key}
              onClick={() => onVariantChange(key)}
              className={`group relative w-8 h-8 rounded-md transition-all ${
                isActive
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800 scale-110'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              title={variant.name}
            >
              {/* Color preview circle */}
              <div
                className="w-full h-full rounded-md overflow-hidden"
                style={{
                  background: variant.bgApp?.includes('gradient')
                    ? variant.bgApp.replace(/bg-/, '').replace(/\[([^\]]+)\]/g, '$1')
                    : previewColor,
                }}
              >
                {/* Add a subtle pattern for better visibility */}
                <div className="w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {variant.name}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSchemeSelector;
