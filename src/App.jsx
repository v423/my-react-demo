import React, { useState, useEffect } from 'react';
import { Nav } from './components/layout/Nav';
import { LandingPage } from './pages/LandingPage';
import { ListingsPage } from './pages/ListingsPage';
import { PropertyPage } from './pages/PropertyPage';
import { BookingPage } from './pages/BookingPage';
import { THEMES, getTheme, STYLE_CATEGORIES } from './constants/themes';
import { fontStack } from './utils/fontStack';
import { Palette, ChevronDown, Check } from 'lucide-react';

const App = () => {
  const [currentThemeId, setCurrentThemeId] = useState('default');
  const [currentView, setCurrentView] = useState('landing'); // landing, listings, property, form
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const theme = getTheme(currentThemeId);

  // Theme Switcher Component (Internal to App for now to keep state simple)
  const ThemeSwitcher = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setShowThemeMenu(!showThemeMenu)}
          className="flex items-center gap-2 px-4 py-3 bg-white text-black rounded-full shadow-2xl border border-gray-200 hover:scale-105 transition-transform font-bold"
        >
          <Palette size={20} />
          <span className="hidden md:inline">Style Lab</span>
          <ChevronDown size={16} />
        </button>

        {showThemeMenu && (
          <div className="absolute bottom-full right-0 mb-4 w-80 max-h-[600px] overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-200 p-4 animate-fadeIn">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-2 border-b border-gray-100">
              <h3 className="font-bold text-lg">Select Aesthetic</h3>
              <span className="text-xs text-gray-500">{Object.keys(THEMES).length} styles</span>
            </div>
            
            <div className="space-y-6">
              {STYLE_CATEGORIES.map((cat, i) => (
                <div key={i}>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    {cat.title_en}
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {cat.items.map(id => (
                      <button
                        key={id}
                        onClick={() => {
                          setCurrentThemeId(id);
                          setShowThemeMenu(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                          currentThemeId === id
                            ? 'bg-black text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <span>{id}</span>
                        {currentThemeId === id && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage theme={theme} navigate={setCurrentView} />;
      case 'listings':
        return <ListingsPage theme={theme} navigate={setCurrentView} />;
      case 'property':
        return <PropertyPage theme={theme} navigate={setCurrentView} />;
      case 'form':
        return <BookingPage theme={theme} navigate={setCurrentView} />;
      default:
        return <LandingPage theme={theme} navigate={setCurrentView} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme.bgApp} ${theme.textMain}`} style={fontStack(theme.fontType)}>
      <Nav 
        theme={theme} 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="w-full">
        {renderView()}
      </main>

      <ThemeSwitcher />
    </div>
  );
};

export default App;
