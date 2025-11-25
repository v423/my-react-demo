import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Info,
  Phone,
  Mail,
  CheckCircle,
  Layout,
  ChevronDown,
  Monitor,
  MapPin,
} from 'lucide-react';
import { cn, buttonVariants } from './src/utils/cn.js';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { fontStack, getTheme, STYLE_CATEGORIES, STYLE_INFO } from './src/constants/themes';

// Import Views
import ViewLanding from './src/views/ViewLanding';
import ViewListings from './src/views/ViewListings';
import ViewProperty from './src/views/ViewProperty';
import ViewForm from './src/views/ViewForm';
import ViewDescription from './src/views/ViewDescription';

// Import Components
import Nav from './src/components/Nav';
import ThemeText from './src/components/ThemeText';

/**
 * Main App Content - Uses theme context
 */
function AppContent() {
  const { theme, setThemeId } = useTheme();
  const [activeThemeId, setActiveThemeId] = useState('default');
  const [activeView, setActiveView] = useState('landing');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState('核心数字风格');

  // Update theme context when activeThemeId changes
  useEffect(() => {
    setThemeId(activeThemeId);
  }, [activeThemeId, setThemeId]);

  const currentTheme = getTheme(activeThemeId);

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
        } bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col shrink-0 z-20 overflow-hidden`}
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
            className={`flex-1 rounded-xl overflow-hidden shadow-2xl relative flex flex-col transition-all duration-500 border-4 border-gray-800 ${currentTheme.bgApp}`}
            style={fontStack(currentTheme.fontType)}
          >
            {/* Nav Component - shown within the demo area */}
            {activeView !== 'description' && (
              <div className="p-4 pb-0">
                <Nav activeView={activeView} navigate={navigate} />
              </div>
            )}

            {/* Content Area */}
            <div id="demo-viewport" className="flex-1 overflow-y-auto custom-scrollbar relative">
              <div className="p-4 md:p-8 min-h-full">
                {activeView === 'landing' && <ViewLanding navigate={navigate} />}
                {activeView === 'listings' && <ViewListings navigate={navigate} />}
                {activeView === 'property' && <ViewProperty navigate={navigate} />}
                {activeView === 'form' && <ViewForm navigate={navigate} />}
                {activeView === 'description' && (
                  <ViewDescription styleId={activeThemeId} navigate={navigate} />
                )}
              </div>

              {activeView !== 'description' && (
                <div className={`p-8 border-t mt-auto ${currentTheme.bgPanel} ${currentTheme.border}`}>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <ThemeText muted className="text-sm">
                      © 2024 DreamHome Real Estate Inc.
                    </ThemeText>
                    <div className="flex gap-4">
                      <Phone size={16} className={currentTheme.textMuted} />
                      <Mail size={16} className={currentTheme.textMuted} />
                      <MapPin size={16} className={currentTheme.textMuted} />
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

/**
 * Main App with Theme Provider
 */
export default function FinalWebStyleLab() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
