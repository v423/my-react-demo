import { useTheme } from '../contexts/ThemeContext';

const LayoutContainer = ({ children, className = '' }) => {
  const { theme } = useTheme();
  let padding = 'p-6 md:p-8';
  let width = 'max-w-6xl';
  if (theme.density === 'spacious') {
    padding = 'p-12 md:p-24';
    width = 'max-w-4xl';
  } else if (theme.density === 'compact') {
    padding = 'p-2 md:p-4';
    width = 'max-w-full';
  }
  return <div className={`mx-auto ${width} ${padding} ${className}`}>{children}</div>;
};

export default LayoutContainer;
