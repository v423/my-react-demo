import { useTheme } from '../contexts/ThemeContext';
import { fontStack } from '../constants/themes';

const ThemeButton = ({
  variant = 'primary',
  children,
  className = '',
  onClick,
  ...props
}) => {
  const { theme: contextTheme } = useTheme();
  const theme = props.theme || contextTheme;
  const baseStyle =
    'px-6 h-12 font-bold transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer select-none whitespace-nowrap';
  const style =
    variant === 'primary'
      ? theme.primary
      : `${theme.bgPanel} ${theme.border} ${theme.textMain} hover:opacity-80`;
  const customStyle = theme.effects.sketch
    ? {
        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
        ...fontStack(theme.fontType),
      }
    : fontStack(theme.fontType);
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${theme.corners} ${style} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
