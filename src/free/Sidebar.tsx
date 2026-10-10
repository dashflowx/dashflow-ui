import { useState, type ReactNode } from 'react';
import { ArrowRight } from '../lib/kit';
import { cn } from '../lib/utils';
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
  sm: 'w-56',
  md: 'w-72',
  lg: 'w-96',
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
  const [expanded, setExpanded] = useState(true);
  return (
    <aside
      className={cn(
        'relative flex shrink-0 flex-col overflow-y-auto border-r bg-white dark:border-gray-700 dark:bg-gray-900',
        expanded ? WIDTH_CLASSES[width] : 'w-20',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
      data-testid="sidebar"
    >
      {title ? (
        <p className={cn('mb-2 px-3 text-xs font-semibold uppercase tracking-wide', VARIANT_TITLE[variant], expanded ? '' : 'sr-only')}>
          {title}
        </p>
      ) : null}
      <nav className="flex-1">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={cn(
                  'flex items-center rounded-lg',
                  SIZE_ITEM[size],
                  item.current ? VARIANT_CURRENT[variant] : VARIANT_LINK[variant],
                )}
                onClick={(event) => handleNavClick(item.href, onNavigate, event)}
              >
                {expanded ? item.label : <span className="sr-only">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center px-4 py-3 text-gray-600 hover:bg-gray-100"
        aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
        onClick={() => setExpanded((open) => !open)}
      >
        <ArrowRight className={cn('h-6 w-6', expanded ? 'rotate-180' : '')} />
      </button>
    </aside>
  );
}
