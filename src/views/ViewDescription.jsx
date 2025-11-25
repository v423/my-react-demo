import React from 'react';
import { ArrowLeft, PenTool, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { fontStack, STYLE_CATEGORIES, STYLE_INFO } from '../constants/themes';
import LayoutContainer from '../components/LayoutContainer';
import ThemeHeading from '../components/ThemeHeading';
import ThemeText from '../components/ThemeText';
import ThemeButton from '../components/ThemeButton';

const ViewDescription = ({ styleId, navigate }) => {
  const { theme } = useTheme();

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
    <LayoutContainer className="animate-fadeIn">
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
        <ThemeHeading level={1}>
          {info.title_zh}
        </ThemeHeading>
        <ThemeText className="text-xl leading-relaxed mb-8 opacity-90">
          {info.desc}
        </ThemeText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} bg-opacity-50 border ${theme.border}`}
          >
            <ThemeHeading level={3} className="text-lg">
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
            <ThemeText muted className="mb-4">
              当前界面的组件样式即是
              <br />
              该风格的实时演示
            </ThemeText>
            <ThemeButton>交互示例按钮</ThemeButton>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default ViewDescription;
