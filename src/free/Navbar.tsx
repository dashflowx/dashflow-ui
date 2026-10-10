import { useState, type ReactNode } from 'react';
import { cn } from '../lib/utils';
import { handleNavClick, type NavItem } from './nav';

export type NavbarVariant = 'default' | 'minimal' | 'dark' | 'bordered' | 'muted';
export type NavbarSize = 'sm' | 'md' | 'lg';

export type NavbarProps = {
  brand: ReactNode;
  items: NavItem[];
  trailing?: ReactNode;
  onNavigate?: (href: string) => void;
  variant?: NavbarVariant;
  size?: NavbarSize;
  sticky?: boolean;
  showBrand?: boolean;
  className?: string;
};

const VARIANT_CLASSES: Record<NavbarVariant, string> = {
  default: 'border-b border-slate-200 bg-white',
  minimal: 'border-b border-transparent bg-transparent',
  dark: 'border-b border-slate-800 bg-slate-900',
  bordered: 'border border-slate-200 bg-white rounded-lg',
  muted: 'border-b border-transparent bg-slate-50',
};

const VARIANT_BRAND: Record<NavbarVariant, string> = {
  default: 'text-slate-900',
  minimal: 'text-slate-900',
  dark: 'text-white',
  bordered: 'text-slate-900',
  muted: 'text-slate-800',
};

const VARIANT_LINK: Record<NavbarVariant, string> = {
  default: 'text-slate-600 hover:text-slate-900',
  minimal: 'text-slate-600 hover:text-slate-900',
  dark: 'text-slate-300 hover:text-white',
  bordered: 'text-slate-600 hover:text-slate-900',
  muted: 'text-slate-600 hover:text-slate-900',
};

const VARIANT_CURRENT: Record<NavbarVariant, string> = {
  default: 'font-medium text-slate-900',
  minimal: 'font-medium text-slate-900',
  dark: 'font-medium text-white',
  bordered: 'font-medium text-slate-900',
  muted: 'font-medium text-slate-900',
};

const SIZE_CLASSES: Record<NavbarSize, string> = {
  sm: 'gap-4 px-3 py-2',
  md: 'gap-6 px-4 py-3',
  lg: 'gap-8 px-6 py-4',
};

export function Navbar({
  brand,
  items,
  trailing,
  onNavigate,
  variant = 'default',
  size = 'md',
  sticky = false,
  showBrand = true,
  className = '',
}: NavbarProps) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav
      className={cn(
        VARIANT_CLASSES[variant],
        sticky ? 'sticky top-0 z-40' : '',
        className,
      )}
      data-testid="navbar"
    >
      <div className={cn('mx-auto flex w-full flex-wrap items-center justify-between', SIZE_CLASSES[size])}>
        <div className="flex items-center justify-center">
          {showBrand ? (
            <div className={cn('mr-6 text-base font-semibold', VARIANT_BRAND[variant])}>{brand}</div>
          ) : null}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 md:hidden"
            aria-label="Open main menu"
            aria-expanded={openMenu}
            onClick={() => setOpenMenu((open) => !open)}
          >
            <svg className="h-5 w-5" viewBox="0 0 17 14" fill="none" aria-hidden="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <ul className={cn(openMenu ? 'flex' : 'hidden md:flex', 'w-full flex-wrap items-center gap-4 md:w-auto')}>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={cn(
                    'text-sm font-medium',
                    item.current ? VARIANT_CURRENT[variant] : VARIANT_LINK[variant],
                  )}
                  onClick={(event) => handleNavClick(item.href, onNavigate, event)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {trailing ? <div className="flex items-center justify-end">{trailing}</div> : null}
      </div>
    </nav>
  );
}
