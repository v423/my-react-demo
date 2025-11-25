import React from 'react';
import { Home, List, FileText, Info } from 'lucide-react';
import { fontStack } from '../constants/themes';

const Nav = ({ theme, activeView, navigate }) => {
  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'listings', label: 'Properties', icon: List },
    { id: 'form', label: 'Book', icon: FileText },
    { id: 'description', label: 'About', icon: Info },
  ];

  return (
    <nav
      className={`${theme.bgPanel} ${theme.border} border-b sticky top-0 z-50 backdrop-blur-sm bg-opacity-95`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Home className={theme.textMain} size={24} />
            <span
              className={`text-xl font-bold ${theme.textMain}`}
              style={fontStack(theme.fontType)}
            >
              DreamHome
            </span>
          </div>

          <div className="flex items-center gap-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 ${theme.corners} transition-all ${
                    isActive
                      ? theme.primary
                      : `${theme.textMuted} hover:${theme.textMain} hover:bg-black/5`
                  }`}
                  style={fontStack(theme.fontType)}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
