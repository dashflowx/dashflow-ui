import type { ReactNode } from 'react';
import { handleNavClick, type NavItem } from './nav';

export type SidebarVariant = 'default' | 'minimal' | 'dark' | 'bordered' | 'ghost';
export type SidebarSize = 'sm' | 'md' | 'lg';
export type SidebarWidth = 'sm' | 'md' | 'lg';

export type SidebarProps = {
  items: NavItem[];
  title?: ReactNode;
  onNavigate?: (href: string) => void;
  variant?: SidebarVariant;
  size?: SidebarSize;
  width?: SidebarWidth;
  className?: string;
};

const VARIANT_CLASSES: Record<SidebarVariant, string> = {
  default: 'border-r border-slate-200 bg-slate-50',
  minimal: 'border-r border-transparent bg-transparent',
  dark: 'border-r border-slate-800 bg-slate-900',
  bordered: 'border border-slate-200 bg-white rounded-lg',
  ghost: 'border-r border-transparent bg-white',
};

const VARIANT_TITLE: Record<SidebarVariant, string> = {
  default: 'text-slate-500',
  minimal: 'text-slate-500',
  dark: 'text-slate-400',
  bordered: 'text-slate-500',
  ghost: 'text-slate-500',
};

const VARIANT_LINK: Record<SidebarVariant, string> = {
  default: 'text-slate-600 hover:bg-white hover:text-slate-900',
  minimal: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  dark: 'text-slate-300 hover:bg-slate-800 hover:text-white',
  bordered: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
  ghost: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
};

const VARIANT_CURRENT: Record<SidebarVariant, string> = {
  default: 'bg-white font-medium text-slate-900 shadow-sm',
  minimal: 'bg-slate-100 font-medium text-slate-900',
  dark: 'bg-slate-800 font-medium text-white',
  bordered: 'bg-slate-100 font-medium text-slate-900',
  ghost: 'bg-slate-100 font-medium text-slate-900',
};

const SIZE_CLASSES: Record<SidebarSize, string> = {
  sm: 'p-2 text-xs',
  md: 'p-3 text-sm',
  lg: 'p-4 text-sm',
};

const SIZE_ITEM: Record<SidebarSize, string> = {
  sm: 'px-2 py-1.5',
  md: 'px-3 py-2',
  lg: 'px-3 py-2.5',
};

const WIDTH_CLASSES: Record<SidebarWidth, string> = {
  sm: 'w-44',
  md: 'w-56',
  lg: 'w-64',
};

export function Sidebar({
  items,
  title,
  onNavigate,
  variant = 'default',
  size = 'md',
  width = 'md',
  className = '',
}: SidebarProps) {
  return (
    <aside
      className={`${WIDTH_CLASSES[width]} shrink-0 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim()}
      data-testid="sidebar"
    >
      {title ? (
        <p className={`mb-2 px-3 text-xs font-semibold uppercase tracking-wide ${VARIANT_TITLE[variant]}`}>
          {title}
        </p>
      ) : null}
      <nav>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={`block rounded ${SIZE_ITEM[size]} ${
                  item.current ? VARIANT_CURRENT[variant] : VARIANT_LINK[variant]
                }`}
                onClick={(event) => handleNavClick(item.href, onNavigate, event)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
