# Design System - Color Scheme Variants v1.2.0

## New Features

### Color Variant System
- ✅ Created 40 color schemes (10 themes × 4 variants)
- ✅ Each variant has unique colors, shadows, gradients, and borders
- ✅ Smooth transitions between color schemes

### Supported Themes (with 4 variants each)
1. **default** - 经典蓝, 翡翠绿, 高对比, 暗夜橙
2. **glassmorphism** - 紫粉渐变, 青蓝海洋, 日落金橙, 森林翠绿
3. **brutalism** - 经典橙黑, 电光粉, 红白冲击, 霓虹绿
4. **minimalism** - 纯白简约, 米色温暖, 极简黑白, 暗黑极简
5. **material-design** - 经典紫, 活力橙, 深海蓝, 暗色主题
6. **neumorphism** - 经典灰, 粉色柔和, 蓝色清新, 暗色新拟态
7. **y2k** - 经典Y2K, 绿色矩阵, 橙色爆炸, 紫色梦幻
8. **synthwave** - 经典合成波, 蓝紫电光, 绿色矩阵, 橙红日落
9. **vaporwave** - 经典蒸汽波, 日落橙紫, 薄荷绿松, 暗黑蒸汽
10. **dark-academia** - 经典学院, 深绿图书馆, 深蓝书房, 浅色学院

### New Components
- `src/constants/colorVariants.js` - Color variant definitions
- `src/components/ColorSchemeSelector.jsx` - Color scheme selector UI

### UI Enhancements
- Color scheme selector in top-right header
- Visual color previews for each variant
- Hover tooltips showing variant names
- Smooth color transitions

## Usage
1. Select any of the 10 supported themes from sidebar
2. Use the color scheme selector in the header to switch between 4 variants
3. Each variant provides a completely different color experience

## Technical Details
- `applyColorVariant()` function merges base theme with color variant
- Variants override: bgApp, bgPanel, textMain, textMuted, primary, border, shadow, inputStyle
- Graceful fallback for themes without variants
