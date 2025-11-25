import React from 'react';
import { Layout, X, ChevronDown, CheckCircle, ChevronsDown, ChevronsUp } from 'lucide-react';
import { STYLE_CATEGORIES, STYLE_INFO } from '../constants/themes';

const ThemeSwitcher = ({ 
  isOpen, 
  onClose, 
  activeThemeId, 
  onThemeChange,
  expandedCategories,
  onCategoryToggle,
  onExpandAll,
  onCollapseAll
}) => {
  return (
    <aside
      className={`${
        isOpen ? 'w-80' : 'w-0'
      } bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col shrink-0 z-50 overflow-hidden`}
    >
      <div className="p-5 border-b border-gray-800 flex items-center justify-between">
        <h1 className="font-bold text-lg flex items-center gap-2 text-white">
          <Layout className="text-blue-500" />
          Style Lab{' '}
          <span className="text-xs bg-blue-900 px-2 py-0.5 rounded text-blue-200">60+</span>
        </h1>
        <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
          <X size={20} />
        </button>
      </div>

      {/* Expand/Collapse All Buttons */}
      <div className="px-4 py-2 border-b border-gray-800 flex gap-2">
        <button
          onClick={onExpandAll}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded transition-colors"
        >
          <ChevronsDown size={14} />
          全部展开
        </button>
        <button
          onClick={onCollapseAll}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded transition-colors"
        >
          <ChevronsUp size={14} />
          全部折叠
        </button>
      </div>

      <div className="p-2 overflow-y-auto flex-1 custom-scrollbar">
        {STYLE_CATEGORIES.map(cat => {
          const isExpanded = expandedCategories.includes(cat.title_zh);
          
          return (
            <div key={cat.title_zh} className="mb-1">
              <button
                onClick={() => onCategoryToggle(cat.title_zh)}
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
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="bg-black/20 pb-2">
                  {cat.items.map(itemId => {
                    const info = STYLE_INFO[itemId];
                    const labelZh = info ? info.title_zh : itemId;
                    const labelEn = itemId.replace(/-/g, ' ');

                    return (
                      <button
                        key={itemId}
                        onClick={() => onThemeChange(itemId)}
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
          );
        })}
      </div>
    </aside>
  );
};

export default ThemeSwitcher;
