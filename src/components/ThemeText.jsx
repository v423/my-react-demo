import { useTheme } from '../contexts/ThemeContext';
import { fontStack } from '../constants/themes';

const ThemeText = ({ theme: propTheme, children, className = '', muted = false, align = 'left' }) => {
  const { theme: contextTheme } = useTheme();
  const theme = propTheme || contextTheme;
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

export default ThemeText;
