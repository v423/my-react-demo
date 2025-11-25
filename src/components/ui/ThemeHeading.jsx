import React from 'react';
import { fontStack } from '../../utils/fontStack';

export const ThemeHeading = ({ theme, level = 1, children, className = '', align = 'left' }) => {
  const Tag = `h${level}`;
  const size =
    level === 1
      ? theme.density === 'compact'
        ? 'text-6xl'
        : 'text-4xl md:text-5xl'
      : level === 2
      ? 'text-3xl'
      : 'text-xl';
  const alignment = theme.layout === 'centered' ? 'text-center' : `text-${align}`;
  const customStyle = theme.effects.sketch
    ? {
        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
        borderBottom: '2px solid currentColor',
      }
    : {};
  return (
    <Tag
      className={`${size} font-bold mb-4 ${theme.textMain} ${alignment} ${className}`}
      style={{ ...fontStack(theme.fontType), ...customStyle }}
    >
      {children}
    </Tag>
  );
};
