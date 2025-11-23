import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  Key,
  MapPin,
  Layers,
  ArrowRight,
  Star,
  Menu,
  X,
  Search,
  Heart,
  Info,
  Phone,
  Mail,
  Calendar,
  Upload,
  CheckCircle,
  Sliders,
  PenTool,
  Layout,
  ChevronDown,
  User,
  Quote,
  ArrowLeft,
  Monitor,
  Grid,
  List,
  Filter,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn, buttonVariants } from './src/utils/cn.js';

/**
 * ==============================================================================
 * 1. DESIGN SYSTEM ENGINE (终极设计引擎)
 * ==============================================================================
 */

// 字体栈配置
const fontStack = type => {
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

// 基础主题生成器
const createTheme = (base, overrides = {}) => ({ ...base, ...overrides });

const BASE_THEME = {
  id: 'default',
  fontType: 'sans',
  density: 'normal',
  layout: 'default',
  corners: 'rounded-lg',
  bgApp: 'bg-slate-50',
  bgPanel: 'bg-white',
  textMain: 'text-slate-900',
  textMuted: 'text-slate-500',
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
  border: 'border border-slate-200',
  shadow: 'shadow-sm',
  inputStyle: 'bg-white border-slate-300 focus:ring-2 focus:ring-blue-500',
  effects: {},
};

// --- 全量风格数据库 (60+ Styles) ---
const THEMES = {
  // 1. 核心数字风格
  default: BASE_THEME,
  skeuomorphism: createTheme(BASE_THEME, {
    bgApp: 'bg-[#d0d0d0]',
    bgPanel: 'bg-[#eeeeee] border-t border-white',
    textMain: 'text-gray-800',
    primary:
      'bg-gradient-to-b from-blue-400 to-blue-600 text-white border border-blue-700 shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] active:translate-y-[1px]',
    border: 'border border-gray-400',
    shadow: 'shadow-[0_4px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.8)]',
    inputStyle: 'bg-[#f0f0f0] border-gray-400 shadow-[inset_0_2px_5px_rgba(0,0,0,0.1)]',
    effects: { texture: true },
  }),
  'flat-design': createTheme(BASE_THEME, {
    bgApp: 'bg-[#ecf0f1]',
    bgPanel: 'bg-white',
    textMain: 'text-[#2c3e50]',
    primary: 'bg-[#e74c3c] hover:bg-[#c0392b] text-white',
    border: 'border-0',
    corners: 'rounded-none',
    shadow: 'shadow-none',
    inputStyle: 'bg-[#bdc3c7] text-[#2c3e50] border-0 placeholder-gray-600',
    effects: { flat: true },
  }),
  'material-design': createTheme(BASE_THEME, {
    bgApp: 'bg-gray-100',
    primary:
      'bg-[#6200ee] text-white shadow-md hover:shadow-lg transition-all uppercase tracking-wider font-medium',
    border: 'border-0',
    corners: 'rounded',
    shadow: 'shadow-md',
    inputStyle: 'bg-gray-50 border-b-2 border-gray-300 focus:border-[#6200ee] rounded-t',
    effects: { ripple: true },
  }),
  minimalism: createTheme(BASE_THEME, {
    density: 'spacious',
    layout: 'centered',
    bgApp: 'bg-white',
    primary: 'bg-black text-white rounded-full px-8 border border-transparent hover:bg-gray-800',
    border: 'border border-gray-100',
    corners: 'rounded-none',
    shadow: 'shadow-none',
    inputStyle: 'bg-transparent border-b border-gray-200 px-0',
    effects: { clean: true },
  }),

  // 2. 现代 UI 趋势
  neumorphism: createTheme(BASE_THEME, {
    bgApp: 'bg-[#e0e5ec]',
    bgPanel: 'bg-[#e0e5ec]',
    textMain: 'text-[#4a5568]', // 修正对比度
    textMuted: 'text-[#718096]',
    primary:
      'bg-[#e0e5ec] text-[#4a5568] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]',
    border: 'border-0',
    corners: 'rounded-[20px]',
    shadow: 'shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]',
    inputStyle:
      'bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#b8b9be,inset_-5px_-5px_10px_#ffffff] border-none text-[#4a5568]',
    effects: { soft: true },
  }),
  glassmorphism: createTheme(BASE_THEME, {
    bgApp: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    bgPanel: 'bg-white/20 backdrop-blur-xl border border-white/30',
    textMain: 'text-white drop-shadow-md',
    textMuted: 'text-white/80',
    primary:
      'bg-white/30 hover:bg-white/40 border border-white/50 text-white shadow-lg backdrop-blur-md',
    border: 'border border-white/20',
    corners: 'rounded-2xl',
    shadow: 'shadow-2xl',
    inputStyle: 'bg-black/20 border border-white/10 text-white placeholder-white/50',
    effects: { glass: true },
  }),
  brutalism: createTheme(BASE_THEME, {
    fontType: 'mono',
    density: 'compact',
    bgApp: 'bg-[#ff9900]',
    bgPanel: 'bg-white border-4 border-black',
    textMain: 'text-black font-black uppercase tracking-tighter',
    primary:
      'bg-black text-white hover:bg-white hover:text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]',
    border: 'border-4 border-black',
    corners: 'rounded-none',
    shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
    inputStyle: 'bg-white border-4 border-black text-black font-bold focus:bg-[#ffff00]',
    effects: { raw: true },
  }),
  'neo-brutalism': createTheme(BASE_THEME, {
    bgApp: 'bg-[#E0F7FA]',
    bgPanel: 'bg-white border-2 border-black',
    textMain: 'text-black font-bold',
    primary:
      'bg-[#FFEB3B] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    border: 'border-2 border-black',
    corners: 'rounded-lg',
    shadow: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
    inputStyle: 'bg-white border-2 border-black text-black',
    effects: { raw: true },
  }),
  aurora: createTheme(BASE_THEME, {
    bgApp: 'bg-gradient-to-tr from-[#a18cd1] to-[#fbc2eb]',
    bgPanel: 'bg-white/60 backdrop-blur-lg border border-white/40',
    primary:
      'bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] text-white border border-white/50 shadow-lg',
    border: 'border border-white/30',
    corners: 'rounded-3xl',
    shadow: 'shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]',
    inputStyle: 'bg-white/50 border border-white/40',
    effects: { glass: true },
  }),
  ethereal: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#fdfbf7]',
    bgPanel: 'bg-white/80',
    textMain: 'text-[#4a4a4a]',
    primary: 'bg-[#e6e2dd] text-[#4a4a4a] hover:bg-[#d4cfc9]',
    corners: 'rounded-sm',
    effects: { clean: true },
  }),

  // 3. 复古与怀旧
  y2k: createTheme(BASE_THEME, {
    density: 'compact',
    bgApp: 'bg-gradient-to-r from-[#ff00cc] to-[#333399]',
    bgPanel: 'bg-white/90 border-2 border-pink-500',
    textMain: 'text-blue-900',
    primary:
      'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-2 border-white ring-2 ring-pink-500 rounded-full italic font-bold shadow-[0_0_10px_#ff00ff]',
    border: 'border-2 border-pink-400',
    corners: 'rounded-none',
    shadow: 'shadow-[5px_5px_0px_rgba(0,255,255,0.5)]',
    inputStyle: 'bg-white border-2 border-blue-400 text-blue-800 placeholder-pink-300',
    effects: { bling: true },
  }),
  'frutiger-aero': createTheme(BASE_THEME, {
    bgApp: 'bg-gradient-to-b from-[#87CEFA] via-[#F0F8FF] to-[#98FB98]',
    bgPanel: 'bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg',
    textMain: 'text-[#006994]',
    textMuted: 'text-[#4682B4]',
    primary:
      'bg-gradient-to-b from-[#00BFFF] to-[#1E90FF] text-white shadow-lg border-t border-white/50 hover:brightness-110',
    corners: 'rounded-xl',
    shadow: 'shadow-lg',
    inputStyle: 'bg-white/70 border border-[#87CEFA] shadow-inner',
    effects: { glass: true },
  }),
  '90s-web': createTheme(BASE_THEME, {
    fontType: 'retro',
    bgApp: 'bg-[url("https://www.transparenttextures.com/patterns/stardust.png")] bg-[#000080]',
    bgPanel: 'bg-[#c0c0c0] border-2 border-white border-r-gray-600 border-b-gray-600',
    textMain: 'text-black',
    primary:
      'bg-[#c0c0c0] text-black border-2 border-white border-r-black border-b-black active:border-gray-600',
    corners: 'rounded-none',
    shadow: 'shadow-none',
    inputStyle:
      'bg-white border-2 border-gray-600 border-r-white border-b-white shadow-[inset_1px_1px_0_0_#000]',
    effects: { retro: true },
  }),
  vaporwave: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-gradient-to-b from-[#ff71ce] via-[#01cdfe] to-[#05ffa1]',
    bgPanel: 'bg-white/80',
    textMain: 'text-[#2b1d52] italic',
    primary:
      'bg-gradient-to-r from-[#ff71ce] to-[#01cdfe] text-white italic shadow-[4px_4px_0_#2b1d52]',
    border: 'border border-pink-300',
    corners: 'rounded-none',
    shadow: 'shadow-lg',
    inputStyle: 'bg-white/90 border-2 border-pink-300 text-purple-900',
    effects: { aesthetic: true },
  }),
  synthwave: createTheme(BASE_THEME, {
    bgApp: 'bg-[#120428]',
    bgPanel: 'bg-[#240b4c] border border-pink-500',
    textMain: 'text-cyan-300', // 修正对比度
    textMuted: 'text-pink-400',
    primary: 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white border border-white/20',
    border: 'border border-pink-500/50',
    corners: 'rounded-none',
    shadow: 'shadow-[0_0_15px_rgba(255,0,255,0.4)]',
    inputStyle: 'bg-[#1a0736] border border-cyan-500 text-cyan-300',
    effects: { glow: true },
  }),
  steampunk: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#2b2118]',
    bgPanel: 'bg-[#d8cba8] border-4 border-[#8b4513]',
    textMain: 'text-[#3e2723]',
    primary: 'bg-[#8b4513] text-[#d8cba8] border-2 border-[#cd853f] hover:bg-[#a0522d]',
    border: 'border-2 border-[#8b4513]',
    corners: 'rounded-xl',
    shadow: 'shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]',
    inputStyle: 'bg-[#f5deb3] border-2 border-[#8b4513] text-[#3e2723]',
    effects: { antique: true },
  }),
  'pixel-art': createTheme(BASE_THEME, {
    fontType: 'pixel',
    bgApp: 'bg-[#2d2d2d]',
    bgPanel: 'bg-white border-4 border-black',
    textMain: 'text-black',
    primary:
      'bg-red-500 text-white border-b-4 border-r-4 border-red-800 active:border-0 active:translate-y-1',
    border: 'border-4 border-black',
    corners: 'rounded-none',
    shadow: 'shadow-none',
    inputStyle: 'bg-gray-100 border-2 border-black',
    effects: { pixel: true },
  }),
  cybercore: createTheme(BASE_THEME, {
    fontType: 'mono',
    bgApp: 'bg-black',
    bgPanel: 'bg-black border border-[#00ff00]',
    textMain: 'text-[#00ff00]',
    textMuted: 'text-[#008f11]',
    primary:
      'bg-black border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black shadow-[0_0_10px_#00ff00]',
    border: 'border border-[#00ff00]',
    corners: 'rounded-none',
    shadow: 'shadow-[0_0_15px_rgba(0,255,0,0.3)]',
    inputStyle: 'bg-[#050505] border border-[#00ff00] text-[#00ff00]',
    effects: { glitch: true },
  }),

  // 4. 艺术与历史
  'art-deco': createTheme(BASE_THEME, {
    fontType: 'sans',
    bgApp: 'bg-[#1a1a1a]',
    bgPanel: 'bg-[#111] border border-[#d4af37]',
    textMain: 'text-[#d4af37]',
    primary: 'bg-[#d4af37] text-black hover:bg-[#f1c40f] font-bold tracking-widest uppercase',
    border: 'border border-[#d4af37]',
    corners: 'rounded-none',
    shadow: 'shadow-[0_0_15px_rgba(212,175,55,0.2)]',
    inputStyle: 'bg-black border border-[#d4af37] text-[#d4af37]',
    effects: { geometric: true },
  }),
  bauhaus: createTheme(BASE_THEME, {
    layout: 'grid',
    bgApp: 'bg-[#f4f4f4]',
    bgPanel: 'bg-white border-b-8 border-[#f0c300]',
    primary: 'bg-[#d22730] text-white rounded-none hover:bg-[#111]',
    border: 'border-l-4 border-[#1e58a3]',
    corners: 'rounded-full',
    shadow: 'shadow-[10px_10px_0_rgba(0,0,0,0.1)]',
    inputStyle: 'bg-gray-100 border-b-2 border-black focus:border-[#d22730] rounded-none',
    effects: { geometric: true },
  }),
  'pop-art': createTheme(BASE_THEME, {
    bgApp: 'bg-[#fff200]',
    bgPanel: 'bg-white border-4 border-black',
    textMain: 'text-black font-extrabold',
    primary: 'bg-[#ed1c24] text-white border-4 border-black shadow-[4px_4px_0_black]',
    border: 'border-4 border-black',
    corners: 'rounded-full',
    shadow: 'shadow-[8px_8px_0_rgba(0,0,0,1)]',
    inputStyle: 'bg-white border-4 border-black text-black',
    effects: { halftone: true },
  }),
  'swiss-punk': createTheme(BASE_THEME, {
    layout: 'chaotic',
    bgApp: 'bg-[#f0f0f0]',
    bgPanel: 'bg-white rotate-1 border border-black',
    textMain: 'text-black font-black italic',
    primary: 'bg-black text-white hover:bg-red-600 -rotate-2',
    border: 'border-2 border-black',
    corners: 'rounded-none',
    shadow: 'shadow-lg',
    inputStyle: 'bg-gray-100 border-2 border-black -rotate-1',
    effects: { chaos: true },
  }),
  neoclassicism: createTheme(BASE_THEME, {
    fontType: 'serif',
    layout: 'centered',
    density: 'spacious',
    bgApp: 'bg-[#f5f5f5]',
    bgPanel: 'bg-white border-y-4 border-[#2c3e50]',
    textMain: 'text-[#2c3e50]',
    primary: 'bg-[#2c3e50] text-white uppercase tracking-widest hover:bg-[#34495e]',
    border: 'border border-gray-300',
    corners: 'rounded-sm',
    shadow: 'shadow-xl',
    inputStyle: 'bg-white border border-gray-400 text-gray-800',
    effects: { clean: true },
  }),
  'dark-academia': createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#1a1716]',
    bgPanel: 'bg-[#2b2624] border border-[#4a403a]',
    textMain: 'text-[#d6cfc7]', // 修正对比度
    textMuted: 'text-[#8f847a]',
    primary:
      'bg-[#5c4d44] text-[#e8e4e1] border border-[#8f847a] hover:bg-[#736257] uppercase tracking-widest text-xs',
    border: 'border border-[#423833]',
    corners: 'rounded-sm',
    shadow: 'shadow-xl',
    inputStyle: 'bg-[#1f1b1a] border border-[#5c4d44] text-[#d6cfc7]',
    effects: { vintage: true },
  }),

  // 5. 美学与主题
  'light-academia': createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#f5f5dc]',
    bgPanel: 'bg-[#fffaf0]',
    textMain: 'text-[#5d4037]',
    primary: 'bg-[#d7ccc8] text-[#5d4037]',
    corners: 'rounded-sm',
    effects: { vintage: true },
  }),
  'wabi-sabi': createTheme(BASE_THEME, {
    density: 'spacious',
    bgApp: 'bg-[#dcd5c9]',
    bgPanel: 'bg-[#ebe5ce]',
    textMain: 'text-[#5d5b54]',
    primary: 'bg-[#8c8a85] text-[#ebe5ce] rounded-full px-6',
    border: 'border border-[#b8b4ab]',
    corners: 'rounded-xl rounded-tr-sm rounded-bl-sm',
    shadow: 'shadow-sm',
    inputStyle: 'bg-[#f0ece2] border-0 text-[#5d5b54]',
    effects: { organic: true },
  }),
  japandi: createTheme(BASE_THEME, {
    bgApp: 'bg-[#f4f1ea]',
    bgPanel: 'bg-white',
    textMain: 'text-[#2b2b2b]',
    primary: 'bg-[#2b2b2b] text-white hover:bg-[#444]',
    border: 'border border-[#e0e0e0]',
    corners: 'rounded-lg',
    shadow: 'shadow-sm',
    inputStyle: 'bg-[#f9f9f9] border border-[#eee] text-[#333]',
    effects: { clean: true },
  }),
  'receipt-style': createTheme(BASE_THEME, {
    fontType: 'mono',
    density: 'compact',
    bgApp: 'bg-[#eee]',
    bgPanel: 'bg-white border-dashed border-2 border-gray-400',
    textMain: 'text-black',
    primary: 'border-2 border-black text-black hover:bg-black hover:text-white uppercase',
    border: 'border-b border-dashed border-gray-400',
    corners: 'rounded-none',
    shadow: 'shadow-none',
    inputStyle: 'bg-transparent border-b border-black',
    effects: { receipt: true },
  }),
  'luxury-typography': createTheme(BASE_THEME, {
    fontType: 'serif',
    density: 'spacious',
    bgApp: 'bg-[#0a0a0a]',
    bgPanel: 'bg-[#111]',
    textMain: 'text-white tracking-[0.2em] font-light',
    primary:
      'border border-white text-white hover:bg-white hover:text-black transition-colors uppercase text-xs tracking-[0.3em] py-3',
    border: 'border-t border-gray-800',
    corners: 'rounded-none',
    shadow: 'shadow-none',
    inputStyle: 'bg-transparent border-b border-white/30 text-white text-center',
    effects: { clean: true },
  }),
  'concept-sketch': createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#fffdf5]',
    bgPanel: 'bg-white border-2 border-dashed border-gray-400',
    textMain: 'text-gray-800',
    primary: 'border-2 border-gray-800 text-gray-800 hover:bg-gray-100',
    border: 'border-b-2 border-gray-300',
    corners: 'rounded-md',
    inputStyle: 'bg-transparent border-b-2 border-gray-400',
    effects: { sketch: true },
  }),

  // 补全剩余风格
  'narrative-neo-brutalism': createTheme(BASE_THEME, {
    fontType: 'mono',
    bgApp: 'bg-[#222]',
    bgPanel: 'bg-[#333] border border-red-500',
    textMain: 'text-white',
    primary: 'bg-red-600 text-black font-bold',
    corners: 'rounded-none',
    effects: { glitch: true },
  }),
  'pop-neo-brutalism': createTheme(BASE_THEME, {
    bgApp: 'bg-[#FFD1DC]',
    bgPanel: 'bg-white border-2 border-black',
    textMain: 'text-black font-black',
    primary: 'bg-[#A0E7E5] text-black border-2 border-black shadow-[4px_4px_0_black]',
    corners: 'rounded-xl',
    effects: { doodle: true },
  }),
  'tactile-maximalism': createTheme(BASE_THEME, {
    bgApp: 'bg-[#f4f1ea]',
    bgPanel: 'bg-white shadow-xl',
    textMain: 'text-gray-900',
    primary: 'bg-black text-white shadow-[4px_4px_10px_rgba(0,0,0,0.3)]',
    corners: 'rounded-sm',
    effects: { texture: true },
  }),
  'trinket-design': createTheme(BASE_THEME, {
    bgApp: 'bg-[#fffaf0]',
    bgPanel: 'bg-white border-2 border-[#ffdab9]',
    textMain: 'text-[#fa8072]',
    primary: 'bg-[#ffdab9] text-[#fa8072] border-2 border-[#fa8072]',
    corners: 'rounded-3xl',
    effects: { doodle: true },
  }),
  'semantic-game': createTheme(BASE_THEME, {
    fontType: 'mono',
    bgApp: 'bg-black',
    bgPanel: 'bg-black border border-green-500',
    textMain: 'text-green-500',
    primary: 'bg-green-900 text-green-100 border border-green-500',
    corners: 'rounded-none',
    effects: { terminal: true },
  }),
  'bento-box': createTheme(BASE_THEME, {
    bgApp: 'bg-[#f2f2f7]',
    bgPanel: 'bg-white',
    textMain: 'text-black',
    primary: 'bg-blue-500 text-white',
    corners: 'rounded-2xl',
    effects: { clean: true },
  }),
  museumcore: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#2C0A0A]',
    bgPanel: 'bg-[#1A0505] border-4 border-[#FFD700]',
    textMain: 'text-[#F5F5DC]',
    primary: 'bg-[#FFD700] text-[#2C0A0A] border border-[#B8860B]',
    corners: 'rounded-sm',
    effects: { ornate: true },
  }),
  'nature-distilled': createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#E8E6E1]',
    bgPanel: 'bg-[#F5F5F0]',
    textMain: 'text-[#4A4036]',
    primary: 'bg-[#556B2F] text-white',
    corners: 'rounded-2xl',
    effects: { organic: true },
  }),
  'neo-futurism': createTheme(BASE_THEME, {
    bgApp: 'bg-[#0f172a]',
    bgPanel: 'bg-[#1e293b] border border-blue-500/30',
    textMain: 'text-blue-100',
    primary: 'bg-blue-600 text-white',
    corners: 'rounded-tr-2xl rounded-bl-2xl',
    effects: { glow: true },
  }),
  'real-objects': createTheme(BASE_THEME, {
    bgApp: 'bg-[#f0f0f0]',
    bgPanel: 'bg-white shadow-2xl',
    textMain: 'text-gray-800',
    primary: 'bg-gray-900 text-white',
    corners: 'rounded-xl',
    effects: { depth: true },
  }),
  witchy: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#0F0E17]',
    bgPanel: 'bg-[#1A1A2E] border border-[#FFD700]',
    textMain: 'text-[#E0E0E0]',
    primary: 'bg-[#483D8B] text-[#FFD700]',
    corners: 'rounded-t-full rounded-b-none',
    effects: { stars: true },
  }),
  coquette: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#fff0f5]',
    bgPanel: 'bg-white border border-[#ffc0cb]',
    textMain: 'text-[#d8bfd8]',
    primary: 'bg-[#ffb6c1] text-white',
    corners: 'rounded-xl',
    effects: { soft: true },
  }),
  'modern-southwestern': createTheme(BASE_THEME, {
    bgApp: 'bg-[#CC7A00]',
    bgPanel: 'bg-[#F5DEB3] border-2 border-[#8B4513]',
    textMain: 'text-[#5C4033]',
    primary: 'bg-[#40E0D0] text-white',
    corners: 'rounded-none',
    effects: { geometric: true },
  }),
  cottagecore: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#E8F5E9]',
    bgPanel: 'bg-[#FFFDE7]',
    textMain: 'text-[#33691E]',
    primary: 'bg-[#81C784] text-white',
    corners: 'rounded-2xl',
    effects: { soft: true },
  }),
  'art-nouveau': createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#f4f1ea]',
    bgPanel: 'bg-[#e8e4d9] border border-[#a4b494]',
    textMain: 'text-[#4a5d23]',
    primary: 'bg-[#a4b494] text-white',
    corners: 'rounded-2xl',
    effects: { organic: true },
  }),
  gothic: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#0a0a0a]',
    bgPanel: 'bg-[#1a1a1a] border border-[#444]',
    textMain: 'text-[#ccc]',
    primary: 'bg-[#333] text-white border border-white/20',
    corners: 'rounded-none',
    effects: { dark: true },
  }),
  memphis: createTheme(BASE_THEME, {
    bgApp: 'bg-[#ffd1dc]',
    bgPanel: 'bg-white border-4 border-black',
    textMain: 'text-black',
    primary: 'bg-[#ffeb3b] text-black border-2 border-black',
    corners: 'rounded-none',
    effects: { geometric: true },
  }),
  bohemian: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#f7e7ce]',
    bgPanel: 'bg-[#fff8e7]',
    textMain: 'text-[#8b4513]',
    primary: 'bg-[#cd853f] text-white',
    corners: 'rounded-2xl',
    effects: { organic: true },
  }),
  'shabby-chic': createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#fff0f5]',
    bgPanel: 'bg-white border border-[#ffb6c1]',
    textMain: 'text-[#708090]',
    primary: 'bg-[#ffb6c1] text-white',
    corners: 'rounded-lg',
    effects: { vintage: true },
  }),
  farmhouse: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#f5f5f5]',
    bgPanel: 'bg-white border border-[#d3d3d3]',
    textMain: 'text-[#2f4f4f]',
    primary: 'bg-[#2f4f4f] text-white',
    corners: 'rounded-sm',
    effects: { clean: true },
  }),
  southwest: createTheme(BASE_THEME, {
    bgApp: 'bg-[#d2691e]',
    bgPanel: 'bg-[#fff5ee] border-2 border-[#8b4513]',
    textMain: 'text-[#8b4513]',
    primary: 'bg-[#40e0d0] text-white',
    corners: 'rounded-none',
    effects: { geometric: true },
  }),
  nautical: createTheme(BASE_THEME, {
    bgApp: 'bg-[#f0f8ff]',
    bgPanel: 'bg-white border-2 border-[#000080]',
    textMain: 'text-[#000080]',
    primary: 'bg-[#dc143c] text-white',
    corners: 'rounded-md',
    effects: { clean: true },
  }),
  'mystic-western': createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#1a0f0f]',
    bgPanel: 'bg-[#2a1a1a] border border-[#c19a6b]',
    textMain: 'text-[#c19a6b]',
    primary: 'bg-[#c19a6b] text-[#1a0f0f]',
    corners: 'rounded-sm',
    effects: { vintage: true },
  }),
  kitsch: createTheme(BASE_THEME, {
    bgApp: 'bg-[#ff00ff]',
    bgPanel: 'bg-[#00ffff] border-4 border-yellow-400',
    textMain: 'text-blue-700',
    primary: 'bg-yellow-400 text-red-600 border-2 border-white',
    corners: 'rounded-full',
    effects: { chaos: true },
  }),
  kawaii: createTheme(BASE_THEME, {
    bgApp: 'bg-[#ffe4e1]',
    bgPanel: 'bg-white border-2 border-[#ffb6c1]',
    textMain: 'text-[#ff69b4]',
    primary: 'bg-[#ff69b4] text-white',
    corners: 'rounded-3xl',
    effects: { soft: true },
  }),
  utilitarian: createTheme(BASE_THEME, {
    bgApp: 'bg-[#d3d3d3]',
    bgPanel: 'bg-[#e0e0e0] border border-black',
    textMain: 'text-black',
    primary: 'bg-gray-800 text-white',
    corners: 'rounded-none',
    effects: { clean: true },
  }),
  'modular-typography': createTheme(BASE_THEME, {
    bgApp: 'bg-[#f0f0f0]',
    bgPanel: 'bg-white grid grid-cols-6 gap-2',
    textMain: 'text-black',
    primary: 'bg-black text-white col-span-2',
    corners: 'rounded-none',
    effects: { grid: true },
  }),
  '3x3-grid': createTheme(BASE_THEME, {
    bgApp: 'bg-gray-5',
    bgPanel: 'bg-white',
    textMain: 'text-black',
    primary: 'bg-black text-white',
    corners: 'rounded-none',
    effects: { grid: true },
  }),
  'semantic-play': createTheme(BASE_THEME, {
    bgApp: 'bg-white',
    bgPanel: 'bg-white border-4 border-black',
    textMain: 'text-black',
    primary: 'bg-black text-white hover:scale-110',
    corners: 'rounded-full',
    effects: { chaos: true },
  }),
  filigree: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#fcfcfc]',
    bgPanel: 'bg-white border double border-4 border-gray-300',
    textMain: 'text-gray-700',
    primary: 'border border-gray-400 text-gray-600',
    corners: 'rounded-sm',
    effects: { ornate: true },
  }),
  acanthus: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#e6e6fa]',
    bgPanel: 'bg-white border border-[#9370db]',
    textMain: 'text-[#4b0082]',
    primary: 'bg-[#9370db] text-white',
    corners: 'rounded-lg',
    effects: { ornate: true },
  }),
  anthropomorphism: createTheme(BASE_THEME, {
    bgApp: 'bg-[#e0ffff]',
    bgPanel: 'bg-white border-2 border-[#00bfff]',
    textMain: 'text-[#0000cd]',
    primary: 'bg-[#00bfff] text-white',
    corners: 'rounded-2xl',
    effects: { soft: true },
  }),
  doodle: createTheme(BASE_THEME, {
    bgApp: 'bg-white',
    bgPanel: 'bg-white border-4 border-black rounded-[2rem]',
    textMain: 'text-black',
    primary: 'bg-black text-white rounded-full',
    corners: 'rounded-xl',
    effects: { doodle: true },
  }),
  'mixed-media': createTheme(BASE_THEME, {
    bgApp: 'bg-[#d8d8d8]',
    bgPanel: 'bg-white shadow-xl rotate-1',
    textMain: 'text-black',
    primary: 'bg-black text-white hover:bg-red-600 -rotate-1',
    corners: 'rounded-none',
    effects: { collage: true },
  }),
  baroque: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#2c0e0e]',
    bgPanel: 'bg-[#3d0c02] border-2 border-[#d4af37]',
    textMain: 'text-[#ffd700]',
    primary: 'bg-[#7a1b0c] text-[#ffd700] border border-[#ffd700]',
    corners: 'rounded-lg',
    effects: { ornate: true },
  }),
  victorian: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-[#2f1b25]',
    bgPanel: 'bg-[#4a2c3a] border-4 border-double border-[#a89f91]',
    textMain: 'text-[#eaddcf]',
    primary: 'bg-[#5c1a2f] text-[#eaddcf] border border-[#a89f91]',
    corners: 'rounded-sm',
    effects: { ornate: true },
  }),
  'mid-century': createTheme(BASE_THEME, {
    bgApp: 'bg-[#e3dcd2]',
    bgPanel: 'bg-[#f4f1ea] border-l-8 border-[#d2691e]',
    textMain: 'text-[#4b3621]',
    primary: 'bg-[#556b2f] text-white rounded-tr-3xl rounded-bl-3xl',
    corners: 'rounded-md',
    effects: { vintage: true },
  }),
  tenebrism: createTheme(BASE_THEME, {
    fontType: 'serif',
    bgApp: 'bg-black',
    bgPanel: 'bg-[#050505]',
    textMain: 'text-white',
    primary: 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.5)]',
    border: 'border border-gray-900',
    corners: 'rounded-sm',
    effects: { spotlight: true },
  }),
  surrealism: createTheme(BASE_THEME, {
    bgApp: 'bg-[#ffe4e1]',
    bgPanel: 'bg-[#e0ffff] border-2 border-[#ff69b4]',
    textMain: 'text-[#ff4500]',
    primary: 'bg-[#ff69b4] text-white rounded-[50%_20%_60%_30%]',
    corners: 'rounded-[30px]',
    effects: { dream: true },
  }),
  pointillism: createTheme(BASE_THEME, {
    bgApp: 'bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[length:4px_4px] bg-white',
    bgPanel: 'bg-white border-2 border-black',
    textMain: 'text-black',
    primary: 'bg-black text-white',
    corners: 'rounded-lg',
    effects: { dots: true },
  }),
};

const getTheme = id => THEMES[id] || THEMES.default;

// --- 分类与百科数据 ---
const STYLE_CATEGORIES = [
  {
    title_zh: '核心数字风格',
    title_en: 'Core Digital',
    items: ['default', 'skeuomorphism', 'flat-design', 'material-design', 'minimalism'],
  },
  {
    title_zh: '反叛与粗野',
    title_en: 'Rebellion',
    items: ['brutalism', 'neo-brutalism', 'narrative-neo-brutalism', 'pop-neo-brutalism'],
  },
  {
    title_zh: '数字物质性',
    title_en: 'Digital Materiality',
    items: [
      'neumorphism',
      'glassmorphism',
      'receipt-style',
      'trinket-design',
      'tactile-maximalism',
    ],
  },
  {
    title_zh: '怀旧循环',
    title_en: 'Nostalgia',
    items: [
      'y2k',
      'frutiger-aero',
      '90s-web',
      'vaporwave',
      'synthwave',
      'steampunk',
      'pixel-art',
      'modern-nostalgia',
      'cybercore',
    ],
  },
  {
    title_zh: '氛围与亚文化',
    title_en: 'Atmosphere',
    items: [
      'dark-academia',
      'light-academia',
      'witchy',
      'coquette',
      'modern-southwestern',
      'cottagecore',
    ],
  },
  {
    title_zh: '艺术与历史',
    title_en: 'Art & History',
    items: [
      'art-deco',
      'art-nouveau',
      'bauhaus',
      'pop-art',
      'swiss-punk',
      'neoclassicism',
      'baroque',
      'victorian',
      'gothic',
      'mid-century',
      'tenebrism',
      'surrealism',
      'pointillism',
    ],
  },
  {
    title_zh: '前沿与实验',
    title_en: 'Experimental',
    items: [
      'semantic-game',
      'bento-box',
      'museumcore',
      'nature-distilled',
      'neo-futurism',
      'semantic-play',
      'real-objects',
      'filigree',
      'acanthus',
      'anthropomorphism',
      'concept-sketch',
      'doodle',
      'mixed-media',
    ],
  },
  {
    title_zh: '其他风格',
    title_en: 'Others',
    items: [
      'wabi-sabi',
      'japandi',
      'memphis',
      'bohemian',
      'shabby-chic',
      'farmhouse',
      'southwest',
      'nautical',
      'mystic-western',
      'kitsch',
      'kawaii',
      'utilitarian',
      'modular-typography',
      'luxury-typography',
      '3x3-grid',
    ],
  },
];

const STYLE_INFO = {
  default: {
    title_zh: '现代通用',
    desc: '一种平衡、干净、用户友好的现代 Web 风格，注重内容的可读性和清晰的层级。',
    chars: ['清晰的层级', '适度的留白', '柔和的圆角', '微妙的阴影'],
  },
  skeuomorphism: {
    title_zh: '拟物化',
    desc: '模仿现实世界的纹理和光影，让数字界面感觉熟悉和可触摸。',
    chars: ['模仿现实材质', '丰富的阴影', '高光反射', '亲切感'],
  },
  'flat-design': {
    title_zh: '扁平化设计',
    desc: '去除了所有 3D 效果，强调极简、色彩和排版，追求极致的数字原生效能。',
    chars: ['无阴影', '大色块', '简洁图标', '强调排版'],
  },
  'material-design': {
    title_zh: '材料设计',
    desc: 'Google推出的设计语言，使用“纸张”和“墨水”的隐喻，通过阴影和层级表现物理特性。',
    chars: ['纸张层级', '波纹效果', '悬浮按钮', '网格布局'],
  },
  minimalism: {
    title_zh: '极简主义',
    desc: '主张少即是多，通过剔除多余元素来强化核心内容，对负空间有极高驾驭。',
    chars: ['大量留白', '核心内容', '黑白灰', '功能至上'],
  },
  brutalism: {
    title_zh: '粗野主义',
    desc: '故意显得“原始”和“粗糙”，暴露代码的原始面貌，拒绝常规美学修饰。',
    chars: ['默认样式', '混乱布局', '高饱和背景', '反直觉'],
  },
  'neo-brutalism': {
    title_zh: '新粗野主义',
    desc: '粗野主义的商业化版本，保留粗糙感但通过设计使其时尚，常用于科技产品。',
    chars: ['粗黑描边', '硬阴影', '高对比色', '怪诞排版'],
  },
  'narrative-neo-brutalism': {
    title_zh: '叙事性新粗野主义',
    desc: '将新粗野主义应用于叙事，结合反乌托邦、科幻或工业题材。',
    chars: ['档案美学', '工业纹理', '系统警告', '叙事滚动'],
  },
  'pop-neo-brutalism': {
    title_zh: '波普新粗野主义',
    desc: '新粗野主义与波普艺术的结合，更加轻快、商业化。',
    chars: ['糖果色', '贴纸图标', '巨大排版', '俏皮'],
  },
  neumorphism: {
    title_zh: '新拟态',
    desc: '利用同色系背景和双重阴影，创造出元素从背景中“挤出”或“压入”的浮雕效果。',
    chars: ['低对比度', '软阴影', '浮雕感', '同色系'],
  },
  glassmorphism: {
    title_zh: '玻璃拟态',
    desc: '通过背景模糊、透明度和精细边框，模拟磨砂玻璃悬浮在背景之上的效果。',
    chars: ['背景模糊', '半透明', '鲜艳背景', '白色边框'],
  },
  'receipt-style': {
    title_zh: '票据风格',
    desc: '模仿热敏纸收据、发票或清单的独特美学。',
    chars: ['锯齿边缘', '等宽字体', '虚线分割', '条形码'],
  },
  'trinket-design': {
    title_zh: '小饰品风格',
    desc: '数字囤积风格，模仿在包包上挂满挂饰、在架子上摆满手办的行为。',
    chars: ['高密度装饰', '悬浮布局', '个性化', '情感'],
  },
  'tactile-maximalism': {
    title_zh: '触感极繁主义',
    desc: '对扁平化的极端反叛，不仅视觉丰富，还强调“触感”。',
    chars: ['拼贴艺术', '高精度材质', '怀旧', '手工感'],
  },
  y2k: {
    title_zh: 'Y2K美学',
    desc: '源自90年代末至2000年代初的科技乐观主义，充满金属质感、粉色和未来感。',
    chars: ['液态金属', '全息镭射', '霓虹粉', '部落图腾'],
  },
  'frutiger-aero': {
    title_zh: 'Frutiger Aero',
    desc: '代表了Windows Vista和早期iOS时代，象征企业乌托邦和生态未来主义。',
    chars: ['光泽', '自然意象', '人本主义', '清新透亮'],
  },
  '90s-web': {
    title_zh: '90年代复古',
    desc: '模仿早期万维网（Web 1.0）的粗糙感。',
    chars: ['框架集', '大理石纹理', 'GIF动画', 'WordArt'],
  },
  'dark-academia': {
    title_zh: '暗黑学院风',
    desc: '浪漫化了19世纪的学术生活、哥特建筑和古典文学。',
    chars: ['深咖色', '皮革质感', '古典衬线体', '希腊雕塑'],
  },
  'light-academia': {
    title_zh: '浅色学院风',
    desc: '更轻快、乐观的学院风格，使用米色、奶油色和自然光感。',
    chars: ['浅色调', '自然光', '乐观', '柔和'],
  },
  witchy: {
    title_zh: '巫术风格',
    desc: '结合了哥特、占星术和自然崇拜的风格。',
    chars: ['月相符号', '午夜蓝', '金色线条', '神秘'],
  },
  coquette: {
    title_zh: '娇俏风格',
    desc: '一种超女性化的美学，强调浪漫、少女感和复古的精致。',
    chars: ['蝴蝶结', '蕾丝', '淡粉色', '浪漫草书'],
  },
  'modern-southwestern': {
    title_zh: '现代西南风格',
    desc: '对美国西南部沙漠美学的现代诠释，去除了俗气，保留了色彩与质感。',
    chars: ['陶土色', '灰泥墙', '几何图案', '自然光'],
  },
  'semantic-game': {
    title_zh: '语义游戏',
    desc: '界面根据用户的输入或“意义”进行重组，打破静态导航限制。',
    chars: ['对话式UI', '逻辑节点', '动态生成', '交互谜题'],
  },
  'bento-box': {
    title_zh: '便当盒网格',
    desc: '将内容组织成模块化、圆角的盒子，既整洁又富有信息密度。',
    chars: ['模块化', '独立性', '紧凑感', '统一视觉'],
  },
  museumcore: {
    title_zh: '博物馆核心',
    desc: '极繁主义分支，受文艺复兴启发，利用高分辨率屏幕展示极致细节。',
    chars: ['金色画框', '深红天鹅绒', '古典字体', '精细标签'],
  },
  'nature-distilled': {
    title_zh: '自然萃取',
    desc: '强调泥土、木材、皮肤的自然色调与质感，布局使用有机曲线。',
    chars: ['自然配色', '墨迹效果', '颗粒感', '有机曲线'],
  },
  // Fallback generics
  aurora: {
    title_zh: '极光风格',
    desc: '使用柔和、模糊、多彩的渐变背景，营造出梦幻和空灵的氛围。',
    chars: ['多彩渐变', '柔和模糊', '有机形状', '梦幻感'],
  },
  ethereal: {
    title_zh: '空灵风格',
    desc: '轻盈、通风，使用浅色调、细字体和大量留白。',
    chars: ['浅色调', '细线条', '高雅感', '通风'],
  },
  'modern-nostalgia': {
    title_zh: '现代怀旧',
    desc: '结合了复古的字体、配色和现代的布局。',
    chars: ['复古字体', '暖色调', '现代布局', '胶片质感'],
  },
  synthwave: {
    title_zh: '合成器浪潮',
    desc: '受 80 年代科幻和电子音乐启发，使用霓虹色、网格和深色背景。',
    chars: ['霓虹色', '网格', '深紫背景', '80年代'],
  },
  vaporwave: {
    title_zh: '蒸汽波',
    desc: '90 年代互联网文化的超现实混合，包含粉彩、罗马雕塑。',
    chars: ['粉彩渐变', '雕塑元素', '故障艺术', '怀旧感'],
  },
  steampunk: {
    title_zh: '蒸汽朋克',
    desc: '维多利亚时代的科幻想象，充满黄铜、齿轮、皮革。',
    chars: ['黄铜色', '齿轮元素', '复古机械', '皮革质感'],
  },
  cybercore: {
    title_zh: '赛博核',
    desc: '高科技低生活，黑客界面、霓虹绿、故障效果和黑暗背景。',
    chars: ['黑客绿', '故障效果', '高科技', '黑暗背景'],
  },
  'art-deco': {
    title_zh: '装饰艺术',
    desc: '20 年代的奢华风格，强调几何形状、对称、金色和强烈的线条。',
    chars: ['几何图案', '金色', '对称', '奢华感'],
  },
  'art-nouveau': {
    title_zh: '新艺术',
    desc: '受自然启发，使用有机的曲线、植物图案和柔和的色彩。',
    chars: ['有机曲线', '植物图案', '柔和色', '自然感'],
  },
  bauhaus: {
    title_zh: '包豪斯',
    desc: '形式追随功能。强调几何形状、非对称布局和红黄蓝原色。',
    chars: ['几何形', '红黄蓝', '功能性', '非对称'],
  },
  'pop-art': {
    title_zh: '波普艺术',
    desc: '使用大众文化意象、鲜艳的色彩、波点和漫画风格。',
    chars: ['鲜艳色彩', '波点', '漫画风', '重复图案'],
  },
  'swiss-punk': {
    title_zh: '瑞士朋克',
    desc: '打破瑞士设计的网格规则，使用倾斜、重叠和混乱的排版。',
    chars: ['打破网格', '倾斜排版', '混乱美', '实验性'],
  },
  neoclassicism: {
    title_zh: '新古典主义',
    desc: '受古希腊罗马艺术启发，强调对称、秩序、简洁和优雅。',
    chars: ['对称', '秩序', '优雅', '古典感'],
  },
  baroque: {
    title_zh: '巴洛克',
    desc: '华丽、戏剧性、复杂的装饰和强烈的明暗对比。',
    chars: ['华丽装饰', '戏剧性', '复杂细节', '深色调'],
  },
  victorian: {
    title_zh: '维多利亚',
    desc: '繁复的装饰、花纹、衬线字体和深沉的色彩。',
    chars: ['繁复装饰', '花纹', '历史感', '深沉色'],
  },
  'mid-century': {
    title_zh: '中世纪现代',
    desc: '50-60 年代的现代主义设计，强调简洁线条、有机形状和功能性。',
    chars: ['简洁线条', '有机形状', '复古色', '功能美'],
  },
  gothic: {
    title_zh: '哥特式',
    desc: '黑暗、神秘、尖锐的线条和中世纪建筑元素。',
    chars: ['黑暗', '尖锐线条', '神秘感', '中世纪'],
  },
  tenebrism: {
    title_zh: '暗色调主义',
    desc: '极端的明暗对比，主体在黑暗中被照亮，营造戏剧性。',
    chars: ['极端对比', '聚光灯', '戏剧性', '深黑背景'],
  },
  surrealism: {
    title_zh: '超现实主义',
    desc: '梦幻、非逻辑的组合、扭曲的形状和奇异的视觉效果。',
    chars: ['梦幻', '非逻辑', '扭曲', '奇异'],
  },
  pointillism: {
    title_zh: '点彩画法',
    desc: '使用细小的点来组成图像或背景，营造出独特的纹理感。',
    chars: ['点状纹理', '半色调', '细腻', '视觉混合'],
  },
  'wabi-sabi': {
    title_zh: '侘寂风格',
    desc: '接受不完美，使用自然材质、不对称和质朴的色彩。',
    chars: ['自然材质', '不完美', '质朴', '不对称'],
  },
  japandi: {
    title_zh: '日式北欧风',
    desc: '结合了日式的极简和北欧的功能性，温暖、舒适且干净。',
    chars: ['温暖极简', '功能性', '自然色', '舒适'],
  },
  memphis: {
    title_zh: '孟菲斯',
    desc: '80 年代反叛风格，使用鲜艳的色彩、无序的几何图案和塑料质感。',
    chars: ['无序几何', '鲜艳色', '趣味性', '反叛'],
  },
  bohemian: {
    title_zh: '波西米亚',
    desc: '自由奔放，混合了多种文化元素、图案和色彩，营造出艺术氛围。',
    chars: ['多文化', '丰富图案', '自由', '艺术感'],
  },
  'shabby-chic': {
    title_zh: '破旧别致',
    desc: '模仿做旧的家具和装饰，使用粉彩、花卉和复古元素。',
    chars: ['做旧感', '粉彩色', '花卉', '女性化'],
  },
  farmhouse: {
    title_zh: '农舍风格',
    desc: '质朴、实用、舒适，使用木材、白色和简单的线条。',
    chars: ['质朴', '木材', '白色', '舒适'],
  },
  southwest: {
    title_zh: '西南设计',
    desc: '受美国西南部沙漠和原住民文化影响，使用大地色和几何图案。',
    chars: ['大地色', '几何图', '沙漠风', '粗犷'],
  },
  nautical: {
    title_zh: '航海风',
    desc: '受海洋启发，使用蓝色、白色、条纹和航海元素。',
    chars: ['蓝白色', '条纹', '海洋元素', '清新'],
  },
  'mystic-western': {
    title_zh: '神秘西部',
    desc: '结合了西部牛仔元素和神秘主义符号，营造出独特的氛围。',
    chars: ['西部风', '神秘符号', '复古', '荒野'],
  },
  kitsch: {
    title_zh: '媚俗',
    desc: '故意使用俗气、夸张、色彩艳丽的元素，具有讽刺意味或怀旧感。',
    chars: ['夸张', '艳丽', '俗气', '讽刺'],
  },
  kawaii: {
    title_zh: '卡哇伊',
    desc: '受日本可爱文化影响，使用粉彩、圆润形状和可爱的插图。',
    chars: ['可爱', '粉彩', '圆润', '童趣'],
  },
  utilitarian: {
    title_zh: '实用主义',
    desc: '强调功能和效率，去除装饰，展示结构和材料。',
    chars: ['无装饰', '结构感', '高效', '工业风'],
  },
  'modular-typography': {
    title_zh: '模块化排版',
    desc: '将文字作为模块进行排版，强调网格和结构感。',
    chars: ['模块化', '网格', '结构感', '文字为主'],
  },
  'luxury-typography': {
    title_zh: '奢华排版',
    desc: '极简、大量留白、精致的衬线体，传达高端和优雅。',
    chars: ['精致衬线', '大量留白', '高端', '优雅'],
  },
  '3x3-grid': {
    title_zh: '3x3 网格',
    desc: '严格的网格布局，通常用于展示图片或产品，整齐划一。',
    chars: ['严格网格', '整齐', '图片展示', '平衡'],
  },
  'neo-futurism': {
    title_zh: '新未来主义',
    desc: '强调流线型、科技感和未来的可能性，使用发光和动态元素。',
    chars: ['流线型', '科技感', '发光', '未来感'],
  },
  'semantic-play': {
    title_zh: '语意游戏',
    desc: '文字与图像的互动，通过排版表达文字的含义。',
    chars: ['图文互动', '趣味排版', '创意', '表达'],
  },
  'real-objects': {
    title_zh: '实物风格',
    desc: '在界面中加入真实的物体图片（如文具、植物），增加真实感。',
    chars: ['真实物体', '立体感', '生活化', '趣味'],
  },
  filigree: {
    title_zh: '金银丝细工',
    desc: '极其复杂的线条装饰，模仿金银丝工艺，古典而华丽。',
    chars: ['复杂线条', '古典', '华丽', '细节'],
  },
  acanthus: {
    title_zh: '莨苕叶装饰',
    desc: '使用经典的莨苕叶图案进行装饰，常见于古典建筑和证书设计。',
    chars: ['植物图案', '古典', '庄重', '装饰性'],
  },
  anthropomorphism: {
    title_zh: '拟人化',
    desc: '赋予界面元素人的特征或情感，使其更具亲和力。',
    chars: ['人性化', '情感', '亲和力', '互动'],
  },
  'pixel-art': {
    title_zh: '像素艺术',
    desc: '8 位/16 位游戏风格，低分辨率块状图形，怀旧而独特。',
    chars: ['像素点', '怀旧', '游戏风', '块状'],
  },
  'concept-sketch': {
    title_zh: '概念草图',
    desc: '模仿手绘草图的线条和不完美感，传达创意过程。',
    chars: ['手绘线条', '草图感', '创意', '不完美'],
  },
  doodle: {
    title_zh: '涂鸦',
    desc: '随意的、手绘的涂鸦风格，轻松、有趣且个性化。',
    chars: ['涂鸦', '随意', '个性', '有趣'],
  },
  'mixed-media': {
    title_zh: '混合媒介',
    desc: '结合摄影、插画、文字等多种媒介，创造丰富的视觉层次。',
    chars: ['多媒介', '拼贴', '丰富', '层次'],
  },
  cottagecore: {
    title_zh: '田园风格',
    desc: '使用花卉图案、柔和的粉彩和手绘插图来唤起乡村的简约感。',
    chars: ['花卉', '粉彩', '手绘', '自然'],
  },
};

/**
 * ==============================================================================
 * 2. COMPONENTS
 * ==============================================================================
 */

const LayoutContainer = ({ theme, children, className = '' }) => {
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

const ThemeHeading = ({ theme, level = 1, children, className = '', align = 'left' }) => {
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

const ThemeText = ({ theme, children, className = '', muted = false, align = 'left' }) => {
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

const ThemeButton = ({
  theme,
  variant = 'primary',
  children,
  className = '',
  onClick,
  ...props
}) => {
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

const ThemeInput = ({ theme, type = 'text', placeholder, icon: Icon, ...props }) => {
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

/**
 * ==============================================================================
 * 3. PAGE VIEWS
 * ==============================================================================
 */

const ViewLanding = ({ theme, navigate }) => {
  return (
    <div className="animate-fadeIn">
      <div
        className={`relative overflow-hidden min-h-[600px] flex flex-col justify-center ${theme.corners} ${theme.shadow} ${theme.border} mb-12`}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover z-0 ${
            theme.effects.pixel ? 'pixelate' : ''
          }`}
          style={theme.effects.pixel ? { imageRendering: 'pixelated' } : {}}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-0`}
        ></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center md:text-left">
          <div
            className={`inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-white border border-white/30 backdrop-blur-sm ${theme.corners}`}
          >
            DreamHome Real Estate
          </div>
          <ThemeHeading
            theme={{
              ...theme,
              textMain: 'text-white',
              layout: theme.layout === 'centered' ? 'centered' : 'left',
            }}
            level={1}
          >
            Discover Your <br />
            <span
              className={
                theme.effects.bling
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500'
                  : ''
              }
            >
              Perfect Sanctuary
            </span>
          </ThemeHeading>

          <ThemeText
            theme={{
              ...theme,
              textMain: 'text-gray-200',
              layout: theme.layout === 'centered' ? 'centered' : 'left',
            }}
            className="text-xl mb-10 max-w-2xl font-medium drop-shadow-md"
          >
            Explore thousands of premium listings across 500+ cities. From modern apartments to
            seaside villas.
          </ThemeText>

          <div
            className={`mx-auto max-w-4xl p-4 md:p-6 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-grow w-full md:w-auto h-12">
                <ThemeInput theme={theme} icon={MapPin} placeholder="Where do you want to live?" />
              </div>
              <div className="w-full md:w-48 h-12">
                <select
                  className={`w-full h-full px-4 outline-none ${theme.corners} ${theme.inputStyle} appearance-none cursor-pointer`}
                  style={fontStack(theme.fontType)}
                >
                  <option>All Types</option>
                  <option>Villas</option>
                  <option>Apartments</option>
                </select>
              </div>
              <div className="w-full md:w-48 h-12">
                <ThemeButton
                  theme={theme}
                  className="w-full h-full"
                  onClick={() => navigate('listings')}
                >
                  <Search size={20} /> Search
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LayoutContainer theme={theme}>
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center ${theme.border} ${
            theme.corners
          } p-8 ${theme.bgApp !== 'bg-white' ? 'bg-black/5' : 'bg-gray-50'}`}
        >
          {[
            { num: '12k+', label: 'Premium Listings' },
            { num: '98%', label: 'Satisfaction' },
            { num: '24/7', label: 'Support' },
            { num: '150+', label: 'Cities Covered' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`text-3xl md:text-4xl font-black ${theme.textMain} mb-2`}
                style={fontStack(theme.fontType)}
              >
                {stat.num}
              </div>
              <div
                className={`text-sm uppercase tracking-wider ${theme.textMuted}`}
                style={fontStack(theme.fontType)}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <ThemeHeading theme={theme} level={2}>
              Featured Homes
            </ThemeHeading>
            <button
              onClick={() => navigate('listings')}
              className={`flex items-center gap-2 font-bold ${theme.textMain} hover:opacity-70 mb-4`}
              style={fontStack(theme.fontType)}
            >
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'Seaside Villa',
                price: '$4.5M',
                location: 'Malibu, CA',
                img: '1600596542815-2a4d9f6facb8',
              },
              {
                id: 2,
                title: 'Skyline Penthouse',
                price: '$2.8M',
                location: 'New York, NY',
                img: '1600607687939-ce8a6c25118c',
              },
              {
                id: 3,
                title: 'Modern Studio',
                price: '$850k',
                location: 'Berlin, DE',
                img: '1600210492486-724fe5c67fb0',
              },
            ].map(item => (
              <div
                key={item.id}
                className={`group cursor-pointer ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} overflow-hidden`}
                onClick={() => navigate('property')}
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=800&q=80`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent text-white`}
                  >
                    <div className="font-bold text-lg" style={fontStack(theme.fontType)}>
                      {item.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ThemeHeading theme={theme} level={3} className="text-xl mb-2">
                    {item.title}
                  </ThemeHeading>
                  <ThemeText theme={theme} muted className="flex items-center gap-2 text-sm">
                    <MapPin size={14} /> {item.location}
                  </ThemeText>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
          <div
            className={`p-8 md:p-12 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}
          >
            <Quote size={40} className={`${theme.textMuted} mb-6 opacity-50`} />
            <ThemeText theme={theme} className="text-lg md:text-xl leading-relaxed mb-6 italic">
              "DreamHome helped us find our dream beach house in record time. The interface is so
              intuitive and the filtering is precise."
            </ThemeText>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gray-300 ${theme.border}`}></div>
              <div>
                <div className={`font-bold ${theme.textMain}`} style={fontStack(theme.fontType)}>
                  Emily & James
                </div>
                <div className={`text-sm ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Homeowners, SF
                </div>
              </div>
            </div>
          </div>

          <div className={`text-${theme.layout === 'centered' ? 'center' : 'left'}`}>
            <ThemeHeading theme={theme} level={2}>
              Ready to move in?
            </ThemeHeading>
            <ThemeText theme={theme} muted className="text-lg mb-8">
              Join thousands of happy homeowners. Sign up today to get alerts on new listings
              matching your criteria.
            </ThemeText>
            <div className="flex flex-col sm:flex-row gap-4">
              <ThemeButton theme={theme} onClick={() => navigate('form')}>
                <User size={18} /> Create Account
              </ThemeButton>
              <ThemeButton theme={theme} variant="secondary" onClick={() => navigate('listings')}>
                Browse First
              </ThemeButton>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

const ViewListings = ({ theme, navigate }) => {
  return (
    <LayoutContainer theme={theme} className="animate-fadeIn">
      <div className="mb-8">
        <button
          onClick={() => navigate('landing')}
          className={`flex items-center gap-2 text-sm font-bold mb-4 ${theme.textMuted} hover:${theme.textMain}`}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <ThemeHeading theme={theme} level={1}>
              Properties
            </ThemeHeading>
            <ThemeText theme={theme} muted>
              Showing 1-8 of 128 results
            </ThemeText>
          </div>
          <div className="flex gap-2">
            <button
              className={`p-3 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMain}`}
            >
              <Layout size={20} />
            </button>
            <button
              className={`p-3 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMain}`}
            >
              <Grid size={20} />
            </button>
            <div
              className={`flex items-center gap-2 px-4 py-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMain}`}
              style={fontStack(theme.fontType)}
            >
              <Filter size={18} />
              <span className="text-sm font-bold">Filter</span>
              <ChevronDown size={14} className="ml-2" />
            </div>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}>
        {[
          {
            img: '1600585154340-be6161a56a0c',
            title: 'Sunny Coast Villa',
            price: '$2.5M',
            type: 'SALE',
          },
          {
            img: '1600607687939-ce8a6c25118c',
            title: 'Downtown Duplex',
            price: '$4,200/mo',
            type: 'RENT',
          },
          {
            img: '1600566753195-f3831ac137c9',
            title: 'Forest Retreat',
            price: '$850k',
            type: 'SALE',
          },
          {
            img: '1600210492486-724fe5c67fb0',
            title: 'Minimal Studio',
            price: '$1,800/mo',
            type: 'RENT',
          },
          {
            img: '1600585154526-998d781f5a42',
            title: 'Victorian Manor',
            price: '$5.8M',
            type: 'SALE',
          },
          {
            img: '1600047509807-c25cd61e6818',
            title: 'Industrial Loft',
            price: '$3,500/mo',
            type: 'RENT',
          },
          {
            img: '1600566753086-00f18fb6b3ea',
            title: 'Lakeside Glass',
            price: '$1.2M',
            type: 'SALE',
          },
          {
            img: '1600585154340-be6161a56a0c',
            title: 'Art District Apt',
            price: '$950k',
            type: 'SALE',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate('property')}
            className={`group cursor-pointer ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="h-56 relative overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=600&q=80`}
                alt="Property"
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  theme.effects.raw ? 'contrast-125 grayscale' : ''
                }`}
                style={theme.effects.pixel ? { imageRendering: 'pixelated' } : {}}
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`px-2 py-1 text-xs font-bold bg-white/90 text-black backdrop-blur-sm ${theme.corners} border border-black/10`}
                  style={fontStack(theme.fontType)}
                >
                  {item.type}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <ThemeHeading theme={theme} level={3} className="text-lg mb-1 truncate">
                {item.title}
              </ThemeHeading>
              <ThemeText theme={theme} muted className="text-xs mb-4 flex items-center gap-1">
                <MapPin size={12} /> Beverly Hills, CA
              </ThemeText>
              <div className="mt-auto pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
                <span
                  className={`font-bold text-xl ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  {item.price}
                </span>
                <Heart size={20} className={`${theme.textMuted} hover:text-red-500`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button
          className={`p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMuted} hover:${theme.textMain}`}
        >
          <ChevronLeft size={20} />
        </button>
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            className={`w-10 h-10 flex items-center justify-center font-bold ${theme.corners} ${
              page === 1
                ? theme.primary
                : `${theme.bgPanel} ${theme.border} ${theme.textMain} hover:bg-gray-100`
            }`}
          >
            {page}
          </button>
        ))}
        <button
          className={`p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMuted} hover:bg-gray-100`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </LayoutContainer>
  );
};

const ViewProperty = ({ theme, navigate }) => {
  return (
    <LayoutContainer theme={theme} className="animate-fadeIn">
      <button
        onClick={() => navigate('listings')}
        className={`flex items-center gap-2 text-sm font-bold mb-6 ${theme.textMuted} hover:${theme.textMain}`}
      >
        <ArrowLeft size={16} /> Back to Listings
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div
            className={`w-full h-[450px] ${theme.corners} ${theme.shadow} overflow-hidden relative ${theme.border}`}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4">
              <span className={`px-3 py-1 bg-black/70 text-white text-sm ${theme.corners}`}>
                1/24
              </span>
            </div>
          </div>

          <div className={`p-8 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <ThemeHeading theme={theme} level={1} className="text-3xl mb-2">
                  Beverly Hills Manor
                </ThemeHeading>
                <ThemeText theme={theme} muted className="flex items-center gap-2">
                  <MapPin size={16} /> 1234 Luxury Lane, CA
                </ThemeText>
              </div>
              <div
                className={`text-3xl font-bold ${theme.textMain} hidden md:block`}
                style={fontStack(theme.fontType)}
              >
                $4,200<span className="text-base font-normal text-gray-400">/mo</span>
              </div>
            </div>

            <ThemeHeading theme={theme} level={3} className="text-xl mb-4">
              Description
            </ThemeHeading>
            <ThemeText theme={theme} muted className="leading-relaxed mb-8">
              Situated on the prestigious Bird Streets, this stunning modern masterpiece boasts
              unparalleled city views. The open floor plan blends indoor and outdoor living, with
              floor-to-ceiling glass walls flooding every corner with natural light.
            </ThemeText>

            <ThemeHeading theme={theme} level={3} className="text-xl mb-4">
              Amenities
            </ThemeHeading>
            <div className="flex flex-wrap gap-2">
              {['Pool', 'Gym', 'Cinema', 'Wine Cellar', 'Smart Home', 'Security'].map(tag => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-sm ${theme.bgApp} ${theme.textMain} ${theme.corners} border ${theme.border}`}
                  style={fontStack(theme.fontType)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`p-6 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} sticky top-6`}
          >
            <div className={`text-3xl font-bold mb-6 md:hidden ${theme.textMain}`}>
              $4,200<span className="text-base font-normal text-gray-500">/mo</span>
            </div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dashed border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                className={`w-14 h-14 rounded-full object-cover ${theme.border}`}
              />
              <div>
                <div className={`font-bold ${theme.textMain}`} style={fontStack(theme.fontType)}>
                  Sarah Johnson
                </div>
                <div className={`text-xs ${theme.textMuted}`}>Senior Agent</div>
              </div>
            </div>

            <div className="space-y-3">
              <ThemeButton theme={theme} className="w-full" onClick={() => navigate('form')}>
                <Calendar size={18} /> Book Viewing
              </ThemeButton>
              <ThemeButton theme={theme} variant="secondary" className="w-full">
                <Phone size={18} /> Contact Agent
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

const ViewForm = ({ theme, navigate }) => {
  return (
    <LayoutContainer theme={theme} className="animate-fadeIn max-w-2xl">
      <button
        onClick={() => navigate('property')}
        className={`flex items-center gap-2 text-sm font-bold mb-6 ${theme.textMuted} hover:${theme.textMain}`}
      >
        <ArrowLeft size={16} /> Back to Details
      </button>

      <div
        className={`p-8 md:p-12 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}
      >
        <div className="text-center mb-10">
          <ThemeHeading theme={{ ...theme, layout: 'centered' }} level={2}>
            Book a Viewing
          </ThemeHeading>
          <ThemeText theme={{ ...theme, layout: 'centered' }} muted>
            Fill in the form below to request a tour.
          </ThemeText>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            alert('Request Submitted!');
            navigate('landing');
          }}
          className="space-y-6"
        >
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading theme={theme} level={3} className="text-lg flex items-center gap-2">
              <User size={18} /> Personal Info
            </ThemeHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <ThemeInput theme={theme} label="Full Name" placeholder="John Doe" required />
              </div>
              <div className="w-full">
                <ThemeInput
                  theme={theme}
                  type="email"
                  label="Email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <ThemeInput theme={theme} type="tel" label="Phone" placeholder="+1 555 0000" />
              </div>
              <div className="w-full">
                <ThemeInput theme={theme} type="number" label="Guests" min="1" max="5" />
              </div>
            </div>
          </div>

          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading theme={theme} level={3} className="text-lg flex items-center gap-2">
              <Sliders size={18} /> Preferences
            </ThemeHeading>

            <div>
              <label
                className={`block text-sm font-bold mb-2 ${theme.textMuted}`}
                style={fontStack(theme.fontType)}
              >
                Budget Range
              </label>
              <input
                type="range"
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMuted}`}
                  style={fontStack(theme.fontType)}
                >
                  Date
                </label>
                <input
                  type="date"
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle}`}
                  style={fontStack(theme.fontType)}
                />
              </div>
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMuted}`}
                  style={fontStack(theme.fontType)}
                >
                  Color
                </label>
                <input
                  type="color"
                  className="w-full h-12 cursor-pointer bg-transparent border-0"
                  defaultValue="#3b82f6"
                />
              </div>
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMuted}`}
                  style={fontStack(theme.fontType)}
                >
                  File
                </label>
                <div
                  className={`relative w-full h-12 border border-dashed border-gray-400 ${theme.corners} flex items-center justify-center bg-white`}
                >
                  <Upload size={14} className={theme.textMuted} />
                  <input type="file" className="opacity-0 absolute inset-0 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" defaultChecked className="w-4 h-4" />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  Buy
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" className="w-4 h-4" />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  Rent
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  Urgent
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <ThemeButton theme={theme} type="submit" className="flex-1">
              Submit Request
            </ThemeButton>
            <ThemeButton
              theme={theme}
              variant="secondary"
              type="button"
              onClick={() => navigate('property')}
            >
              Cancel
            </ThemeButton>
          </div>
        </form>
      </div>
    </LayoutContainer>
  );
};

const ViewDescription = ({ theme, styleId, navigate }) => {
  const info = STYLE_INFO[styleId] || {
    title_zh: styleId,
    desc: '暂无详细描述。该风格可能为极少数小众风格，主要体现在视觉纹理和特定颜色的组合上。',
    chars: ['视觉独特', '特定配色'],
  };

  let categoryTitle = '风格档案';
  STYLE_CATEGORIES.forEach(cat => {
    if (cat.items.includes(styleId)) {
      categoryTitle = cat.title_zh;
    }
  });

  return (
    <LayoutContainer theme={theme} className="animate-fadeIn">
      <button
        onClick={() => navigate('landing')}
        className={`flex items-center gap-2 text-sm font-bold mb-6 ${theme.textMuted} hover:${theme.textMain}`}
      >
        <ArrowLeft size={16} /> Back to Demo
      </button>

      <div
        className={`p-8 md:p-12 mb-8 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <PenTool size={32} className={theme.textMain} />
          <span className={`text-sm font-bold uppercase tracking-wider ${theme.textMuted}`}>
            风格档案 / {categoryTitle}
          </span>
        </div>
        <ThemeHeading theme={theme} level={1}>
          {info.title_zh}
        </ThemeHeading>
        <ThemeText theme={theme} className="text-xl leading-relaxed mb-8 opacity-90">
          {info.desc}
        </ThemeText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} bg-opacity-50 border ${theme.border}`}
          >
            <ThemeHeading theme={theme} level={3} className="text-lg">
              视觉特征
            </ThemeHeading>
            <ul className="space-y-3 mt-4">
              {info.chars.map((char, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  <CheckCircle size={18} className={theme.textMuted} />
                  {char}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`p-6 flex flex-col justify-center items-center text-center ${theme.border} ${theme.corners} border-dashed`}
          >
            <ThemeText theme={theme} muted className="mb-4">
              当前界面的组件样式即是
              <br />
              该风格的实时演示
            </ThemeText>
            <ThemeButton theme={theme}>交互示例按钮</ThemeButton>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

/**
 * ==============================================================================
 * 4. MAIN APP
 * ==============================================================================
 */
export default function FinalWebStyleLab() {
  const [activeThemeId, setActiveThemeId] = useState('default');
  const [activeView, setActiveView] = useState('landing');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState('核心数字风格');

  const theme = getTheme(activeThemeId);

  let currentStyleZh = '默认';
  let currentStyleEn = 'Default';

  for (const cat of STYLE_CATEGORIES) {
    if (cat.items.includes(activeThemeId)) {
      if (STYLE_INFO[activeThemeId]) {
        currentStyleZh = STYLE_INFO[activeThemeId].title_zh;
      } else {
        currentStyleZh = activeThemeId;
      }
      currentStyleEn = activeThemeId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      break;
    }
  }

  useEffect(() => {
    const viewport = document.getElementById('demo-viewport');
    if (viewport) viewport.scrollTop = 0;
  }, [activeThemeId, activeView]);

  const navigate = view => setActiveView(view);

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden font-sans select-none">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-80' : 'w-0'
        } bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col shrink-0 z-20`}
      >
        <div className="p-5 border-b border-gray-800 flex items-center justify-between">
          <h1 className="font-bold text-lg flex items-center gap-2 text-white">
            <Layout className="text-blue-500" />
            Style Lab{' '}
            <span className="text-xs bg-blue-900 px-2 py-0.5 rounded text-blue-200">Final</span>
          </h1>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400">
            <X size={20} />
          </button>
        </div>

        <div className="p-2 overflow-y-auto flex-1 custom-scrollbar">
          {STYLE_CATEGORIES.map(cat => (
            <div key={cat.title_zh} className="mb-1">
              <button
                onClick={() =>
                  setExpandedCategory(expandedCategory === cat.title_zh ? '' : cat.title_zh)
                }
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-gray-300 hover:bg-gray-800 transition-colors border-l-4 border-transparent hover:border-blue-500"
              >
                <div className="flex flex-col items-start text-left">
                  <span>{cat.title_zh}</span>
                  <span className="text-[10px] text-gray-500 font-normal uppercase tracking-wider">
                    {cat.title_en}
                  </span>
                </div>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    expandedCategory === cat.title_zh ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedCategory === cat.title_zh && (
                <div className="bg-black/20 pb-2">
                  {cat.items.map(itemId => {
                    const info = STYLE_INFO[itemId];
                    const labelZh = info ? info.title_zh : itemId;
                    const labelEn = itemId.replace(/-/g, ' ');

                    return (
                      <button
                        key={itemId}
                        onClick={() => setActiveThemeId(itemId)}
                        className={`w-full text-left px-4 py-2 pl-6 text-sm transition-all flex items-center justify-between group ${
                          activeThemeId === itemId
                            ? 'text-blue-400 bg-blue-900/20 border-r-2 border-blue-500'
                            : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                        }`}
                      >
                        <div>
                          <div className="font-medium">{labelZh}</div>
                          <div className="text-[10px] opacity-60 capitalize">{labelEn}</div>
                        </div>
                        {activeThemeId === itemId && <CheckCircle size={14} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-gray-950">
        {/* Header */}
        <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-4 md:px-6 shrink-0 z-10">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-800 rounded-md text-white"
              >
                <Menu size={20} />
              </button>
            )}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                Current Style
              </span>
              <div className="text-lg font-bold text-white leading-none flex items-baseline gap-2">
                {currentStyleZh}{' '}
                <span className="text-sm font-normal text-gray-500 hidden sm:inline">
                  / {currentStyleEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('landing')}
              className={cn(
                buttonVariants({ variant: activeView !== 'description' ? 'default' : 'secondary' })
              )}
            >
              <Monitor size={14} /> Live Demo
            </button>
            <button
              onClick={() => setActiveView('description')}
              className={cn(
                buttonVariants({ variant: activeView === 'description' ? 'emerald' : 'secondary' })
              )}
            >
              <Info size={14} /> 风格百科
            </button>
          </div>
        </header>

        {/* Viewport */}
        <div className="flex-1 p-2 md:p-6 overflow-hidden flex flex-col relative bg-gray-950">
          <div
            className={`flex-1 rounded-xl overflow-hidden shadow-2xl relative flex flex-col transition-all duration-500 border-4 border-gray-800 ${theme.bgApp}`}
            style={fontStack(theme.fontType)}
          >
            {/* Browser Bar */}
            <div
              className={`h-12 flex items-center px-4 border-b shrink-0 z-30 transition-colors duration-300 ${theme.bgPanel} ${theme.border}`}
            >
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div
                className={`flex-1 h-8 rounded px-3 flex items-center text-xs ${theme.bgApp} bg-opacity-50 mx-4 max-w-xl truncate border border-transparent hover:border-gray-300 transition-colors`}
              >
                <span className={`${theme.textMuted} opacity-70`}>
                  https://dreamhome.lab/{activeThemeId}/{activeView}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div id="demo-viewport" className="flex-1 overflow-y-auto custom-scrollbar relative">
              <div className="p-4 md:p-8 min-h-full">
                {activeView === 'landing' && <ViewLanding theme={theme} navigate={navigate} />}
                {activeView === 'listings' && <ViewListings theme={theme} navigate={navigate} />}
                {activeView === 'property' && <ViewProperty theme={theme} navigate={navigate} />}
                {activeView === 'form' && <ViewForm theme={theme} navigate={navigate} />}
                {activeView === 'description' && (
                  <ViewDescription theme={theme} styleId={activeThemeId} navigate={navigate} />
                )}
              </div>

              {activeView !== 'description' && (
                <div className={`p-8 border-t mt-auto ${theme.bgPanel} ${theme.border}`}>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <ThemeText theme={theme} muted className="text-sm">
                      © 2024 DreamHome Real Estate Inc.
                    </ThemeText>
                    <div className="flex gap-4">
                      <Phone size={16} className={theme.textMuted} />
                      <Mail size={16} className={theme.textMuted} />
                      <MapPin size={16} className={theme.textMuted} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
        .custom-scrollbar-hide::-webkit-scrollbar { display: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .pixelate { image-rendering: pixelated; }
      `}</style>
    </div>
  );
}
