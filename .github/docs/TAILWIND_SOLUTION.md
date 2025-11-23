# React Tailwind CSS 动态类名解决方案

## 问题描述

在使用 Tailwind CSS 时，动态拼接的类名字符串（如通过 JavaScript 条件表达式生成的类名）可能不会被 Tailwind 的 PurgeCSS 正确识别，导致样式不生效。

## 解决方案

React 生态提供了几个优秀的工具来解决这个问题：

### 1. clsx - 条件类名拼接

```javascript
import { clsx } from 'clsx';

// 基础用法
const className = clsx('base-class', condition && 'conditional-class', {
  'active-class': isActive,
  'disabled-class': isDisabled,
});
```

### 2. tailwind-merge - 合并 Tailwind 类名

```javascript
import { twMerge } from 'tailwind-merge';

// 合并类名，避免冲突
const className = twMerge('px-4 py-2 bg-blue-500', 'bg-red-500'); // 结果: 'px-4 py-2 bg-red-500'
```

### 3. 组合使用 (推荐)

```javascript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// 使用
const buttonClass = cn(
  'base-classes',
  isActive && 'active-classes',
  variant === 'primary' && 'primary-classes'
);
```

### 4. class-variance-authority (CVA) - 组件变体

```javascript
import { cva } from 'class-variance-authority';

const buttonVariants = cva('base-classes', {
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-gray-900',
    },
    size: {
      sm: 'px-2 py-1',
      md: 'px-4 py-2',
      lg: 'px-6 py-3',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

// 使用
const className = buttonVariants({ variant: 'secondary', size: 'lg' });
```

## 项目中的使用

### 安装依赖

```bash
pnpm add clsx tailwind-merge class-variance-authority
```

### 工具函数 (`src/utils/cn.js`)

```javascript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const buttonVariants = cva(
  'flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 hover:bg-blue-700',
        secondary: 'text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700',
        emerald: 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 hover:bg-emerald-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
```

### 在组件中使用

```jsx
import { cn, buttonVariants } from './src/utils/cn.js';

// 简单条件类名
<div className={cn('base-class', isActive && 'text-blue-500')} />

// 按钮变体
<button className={buttonVariants({ variant: 'secondary' })}>
  Click me
</button>

// 复杂条件
<button
  className={cn(
    buttonVariants({ variant: activeView === 'description' ? 'emerald' : 'secondary' })
  )}
>
  风格百科
</button>
```

## 优势

1. **类型安全**: 使用 CVA 可以获得更好的 TypeScript 支持
2. **可维护性**: 集中管理样式变体
3. **性能**: 避免运行时字符串拼接
4. **一致性**: 确保 Tailwind 类名正确合并
5. **开发体验**: 更好的 IDE 支持和自动补全

## 其他解决方案

### ESLint 插件

```bash
pnpm add -D eslint-plugin-tailwindcss
```

在`.eslintrc.js`中配置：

```javascript
module.exports = {
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/classnames-order': 'warn',
  },
};
```

### 显式包含类名

在 CSS 中显式定义动态类名：

```css
.text-gray-400 {
  color: rgb(156 163 175);
}
.hover\:text-white:hover {
  color: rgb(255 255 255);
}
```

## 总结

通过使用`clsx`、`tailwind-merge`和`class-variance-authority`的组合，我们可以优雅地解决 Tailwind CSS 动态类名的问题，提供更好的开发体验和更可靠的样式保证。
