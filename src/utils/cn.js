import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

/**
 * 合并和条件化Tailwind CSS类名
 * @param {...any} inputs - 类名参数
 * @returns {string} 合并后的类名字符串
 */
export function cn (...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * 创建按钮变体 - 使用cva (class-variance-authority)
 */
export const buttonVariants = cva(
  "flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white shadow-lg shadow-blue-900/50 hover:bg-blue-700",
        secondary: "text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700",
        emerald: "bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 hover:bg-emerald-700",
        ghost: "text-gray-400 hover:text-white bg-transparent hover:bg-gray-800/50",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-6 py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * 获取按钮类名 (兼容旧代码)
 * @param {string} variant - 按钮变体
 * @param {string} baseClasses - 基础类名
 * @returns {string} 完整的类名
 */
export function getButtonClasses (variant = 'default', baseClasses = '') {
  return cn(buttonVariants({ variant }), baseClasses);
}