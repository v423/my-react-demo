import React from 'react';
import { Menu, X, Home, List, User } from 'lucide-react';
import { ThemeButton } from '../ui/ThemeButton';
import { fontStack } from '../../utils/fontStack';

export const Nav = ({ theme, currentView, setCurrentView, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'listings', label: 'Listings', icon: List },
    { id: 'form', label: 'Join', icon: User },
  ];

  return (
    <nav className={`sticky top-0 z-50 ${theme.bgPanel} ${theme.border} border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className={`font-bold text-xl cursor-pointer ${theme.textMain}`}
            onClick={() => setCurrentView('landing')}
            style={fontStack(theme.fontType)}
          >
            DreamHome
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === item.id
                    ? `${theme.primary} text-white`
                    : `${theme.textMuted} hover:${theme.textMain}`
                }`}
                style={fontStack(theme.fontType)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${theme.textMain} hover:bg-gray-100`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className={`md:hidden ${theme.bgPanel} border-t ${theme.border}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === item.id
                    ? `${theme.primary} text-white`
                    : `${theme.textMuted} hover:${theme.textMain}`
                }`}
                style={fontStack(theme.fontType)}
              >
                <div className="flex items-center gap-2">
                  <item.icon size={18} />
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
