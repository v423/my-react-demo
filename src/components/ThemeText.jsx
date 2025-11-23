import { useTheme } from '../contexts/ThemeContext';
import { fontStack } from '../constants/themes';

const ThemeText = ({ children, className = '', muted = false, align = 'left' }) => {
  const { theme } = useTheme();
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
