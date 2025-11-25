import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import { getTheme, STYLE_CATEGORIES } from './constants/themes';
import { applyColorVariant } from './constants/colorVariants';
import Nav from './components/Nav';
import ThemeSwitcher from './components/ThemeSwitcher';
import ColorSchemeSelector from './components/ColorSchemeSelector';
import ViewLanding from './views/ViewLanding';
import ViewListings from './views/ViewListings';
import ViewProperty from './views/ViewProperty';
import ViewForm from './views/ViewForm';
import ViewDescription from './views/ViewDescription';

function App() {
  const [activeThemeId, setActiveThemeId] = useState('default');
  const [activeView, setActiveView] = useState('landing');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeColorVariant, setActiveColorVariant] = useState('variantA');
  // Initialize with all categories expanded
  const [expandedCategories, setExpandedCategories] = useState(
    STYLE_CATEGORIES.map(cat => cat.title_zh)
  );

  const baseTheme = getTheme(activeThemeId);
  const theme = applyColorVariant(baseTheme, activeColorVariant);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  const navigate = view => {
    if (view === 'description') {
      setActiveView('description');
    } else {
      setActiveView(view);
    }
  };

  const handleCategoryToggle = (categoryTitle) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle)
        ? prev.filter(cat => cat !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const handleExpandAll = () => {
    setExpandedCategories(STYLE_CATEGORIES.map(cat => cat.title_zh));
  };

  const handleCollapseAll = () => {
    setExpandedCategories([]);
  };

  const renderView = () => {
    switch (activeView) {
      case 'landing':
        return <ViewLanding theme={theme} navigate={navigate} />;
      case 'listings':
        return <ViewListings theme={theme} navigate={navigate} />;
      case 'property':
        return <ViewProperty theme={theme} navigate={navigate} />;
      case 'form':
        return <ViewForm theme={theme} navigate={navigate} />;
      case 'description':
        return <ViewDescription theme={theme} styleId={activeThemeId} navigate={navigate} />;
      default:
        return <ViewLanding theme={theme} navigate={navigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
        <ThemeSwitcher
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeThemeId={activeThemeId}
          onThemeChange={setActiveThemeId}
          expandedCategories={expandedCategories}
          onCategoryToggle={handleCategoryToggle}
          onExpandAll={handleExpandAll}
          onCollapseAll={handleCollapseAll}
        />

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className={`min-h-screen ${theme.bgApp} transition-colors duration-300 overflow-y-auto`}>
            {/* Header with theme toggle */}
            <div className="sticky top-0 z-40 flex items-center gap-3 bg-gray-900 border-b border-gray-800 px-4 h-14">
              {!isSidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Menu size={20} />
                </button>
              )}
              <div className="flex-1 flex items-center justify-between gap-4">
                <div className="text-sm text-gray-400">
                  当前风格: <span className="text-blue-400 font-medium">{activeThemeId}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* Color Scheme Selector */}
                  <ColorSchemeSelector
                    themeId={activeThemeId}
                    activeVariant={activeColorVariant}
                    onVariantChange={setActiveColorVariant}
                  />
                  
                  <button
                    onClick={() => navigate('description')}
                    className="text-xs px-3 py-1.5 bg-blue-900/50 text-blue-300 hover:bg-blue-900 rounded transition-colors whitespace-nowrap"
                  >
                    查看风格介绍
                  </button>
                </div>
              </div>
            </div>

            <Nav theme={theme} activeView={activeView} navigate={navigate} />
            <main>{renderView()}</main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
