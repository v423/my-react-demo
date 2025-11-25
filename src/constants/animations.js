// Animation presets for different theme styles
// Themes are categorized by their animation intensity: minimal, moderate, expressive

export const ANIMATION_LEVELS = {
  minimal: {
    // Subtle, professional animations for minimalist themes
    hover: {
      scale: 'hover:scale-[1.02]',
      translate: 'hover:-translate-y-0.5',
      opacity: 'hover:opacity-90',
    },
    transition: 'transition-all duration-300 ease-out',
    cardHover: 'hover:-translate-y-1 hover:shadow-lg',
    buttonHover: 'hover:opacity-90',
    fadeIn: 'animate-[fadeIn_0.5s_ease-out]',
  },

  moderate: {
    // Standard animations for most themes
    hover: {
      scale: 'hover:scale-105',
      translate: 'hover:-translate-y-1',
      opacity: 'hover:opacity-80',
    },
    transition: 'transition-all duration-200 ease-in-out',
    cardHover: 'hover:-translate-y-2 hover:shadow-xl',
    buttonHover: 'hover:scale-105 active:scale-95',
    fadeIn: 'animate-[fadeIn_0.4s_ease-in-out]',
  },

  expressive: {
    // Bold, eye-catching animations for expressive themes
    hover: {
      scale: 'hover:scale-110',
      translate: 'hover:-translate-y-2',
      opacity: 'hover:opacity-100',
      rotate: 'hover:rotate-2',
    },
    transition: 'transition-all duration-150 ease-in-out',
    cardHover: 'hover:-translate-y-3 hover:shadow-2xl hover:rotate-1',
    buttonHover: 'hover:scale-110 active:scale-90 hover:rotate-1',
    fadeIn: 'animate-[fadeIn_0.3s_ease-in-out]',
    bounce: 'hover:animate-bounce',
    pulse: 'animate-pulse',
  },
};

// Map themes to animation levels
export const THEME_ANIMATION_MAP = {
  // Minimal animations
  minimalism: 'minimal',
  ethereal: 'minimal',
  'wabi-sabi': 'minimal',
  japandi: 'minimal',
  'luxury-typography': 'minimal',
  neoclassicism: 'minimal',

  // Moderate animations
  default: 'moderate',
  'material-design': 'moderate',
  glassmorphism: 'moderate',
  neumorphism: 'moderate',
  'flat-design': 'moderate',
  skeuomorphism: 'moderate',
  aurora: 'moderate',
  'light-academia': 'moderate',
  'dark-academia': 'moderate',
  'bento-box': 'moderate',

  // Expressive animations
  brutalism: 'expressive',
  'neo-brutalism': 'expressive',
  'narrative-neo-brutalism': 'expressive',
  'pop-neo-brutalism': 'expressive',
  y2k: 'expressive',
  vaporwave: 'expressive',
  synthwave: 'expressive',
  'pixel-art': 'expressive',
  cybercore: 'expressive',
  'pop-art': 'expressive',
  memphis: 'expressive',
  kitsch: 'expressive',
  '90s-web': 'expressive',
  'frutiger-aero': 'expressive',
  steampunk: 'expressive',
};

// Get animation level for a theme
export const getAnimationLevel = (themeId) => {
  return THEME_ANIMATION_MAP[themeId] || 'moderate';
};

// Get animation classes for a theme
export const getAnimations = (themeId) => {
  const level = getAnimationLevel(themeId);
  return ANIMATION_LEVELS[level];
};

// Specific animation utilities
export const getCardAnimation = (themeId) => {
  const animations = getAnimations(themeId);
  return `${animations.transition} ${animations.cardHover}`;
};

export const getButtonAnimation = (themeId) => {
  const animations = getAnimations(themeId);
  return `${animations.transition} ${animations.buttonHover}`;
};

export const getFadeInAnimation = (themeId) => {
  const animations = getAnimations(themeId);
  return animations.fadeIn;
};

// Special effects for specific themes
export const THEME_SPECIAL_EFFECTS = {
  brutalism: {
    shadow: 'hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
    transform: 'hover:translate-x-[4px] hover:translate-y-[4px]',
  },
  'neo-brutalism': {
    shadow: 'hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    transform: 'hover:translate-x-[2px] hover:translate-y-[2px]',
  },
  glassmorphism: {
    blur: 'hover:backdrop-blur-2xl',
    glow: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]',
  },
  synthwave: {
    glow: 'hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]',
    neon: 'hover:text-shadow-[0_0_10px_currentColor]',
  },
  vaporwave: {
    shadow: 'hover:shadow-[6px_6px_0_currentColor]',
  },
  y2k: {
    glow: 'hover:shadow-[0_0_15px_#ff00ff]',
    ring: 'hover:ring-4 hover:ring-pink-500',
  },
  'pixel-art': {
    pixelate: 'hover:image-rendering-pixelated',
    jump: 'hover:-translate-y-2',
  },
};

export const getSpecialEffects = (themeId) => {
  return THEME_SPECIAL_EFFECTS[themeId] || {};
};
