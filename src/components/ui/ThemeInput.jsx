import React from 'react';
import { fontStack } from '../../utils/fontStack';

export const ThemeInput = ({ theme, type = 'text', placeholder, icon: Icon, ...props }) => {
  return (
    <div className="relative w-full h-full">
      {Icon && (
        <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.textMuted} z-10`}>
          <Icon size={18} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full h-12 outline-none transition-all ${theme.corners} ${theme.inputStyle} ${
          Icon ? 'pl-10 pr-4' : 'px-4'
        }`}
        style={{
          ...fontStack(theme.fontType),
          ...(theme.effects.sketch
            ? { borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }
            : {}),
        }}
        {...props}
      />
    </div>
  );
};
