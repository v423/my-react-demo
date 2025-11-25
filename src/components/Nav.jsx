import React from 'react';
import { Home, List, FileText, Layers, Info } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { fontStack } from '../constants/themes';

const Nav = ({ activeView, navigate }) => {
  const { theme } = useTheme();
  
  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'listings', label: 'Listings', icon: List },
    { id: 'property', label: 'Property', icon: FileText },
    { id: 'form', label: 'Book', icon: Layers },
    { id: 'description', label: 'Info', icon: Info },
  ];

  return (
    <nav
      className={`flex items-center gap-1 p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.shadow}`}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeView === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`
              flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all
              ${theme.corners}
              ${isActive 
                ? `${theme.primary}` 
                : `${theme.textMuted} hover:${theme.textMain} hover:bg-black/5`
              }
            `}
            style={fontStack(theme.fontType)}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Nav;
