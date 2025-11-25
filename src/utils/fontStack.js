export const fontStack = (type) => {
  switch (type) {
    case 'sans':
      return { fontFamily: 'Inter, system-ui, sans-serif' };
    case 'serif':
      return { fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' };
    case 'mono':
      return { fontFamily: '"Space Mono", "Courier New", monospace' };
    case 'retro':
      return {
        fontFamily: '"Courier New", Courier, monospace',
        fontWeight: 'bold',
        letterSpacing: '-1px',
      };
    case 'pixel':
      return {
        fontFamily: '"Courier New", monospace',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      };
    default:
      return { fontFamily: 'Inter, sans-serif' };
  }
};
