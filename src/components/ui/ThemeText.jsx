import React from 'react';
import { fontStack } from '../../utils/fontStack';

export const ThemeText = ({ theme, children, className = '', muted = false, align = 'left' }) => {
  const alignment = theme.layout === 'centered' ? 'text-center' : `text-${align}`;
  return (
    <p
      className={`${muted ? theme.textMuted : theme.textMain} ${alignment} ${className}`}
      style={fontStack(theme.fontType)}
    >
      {children}
    </p>
  );
};
