import type { ReactNode } from 'react';
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
  return (
    <nav
      className={`flex items-center ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${
        sticky ? 'sticky top-0 z-40' : ''
      } ${className}`.trim()}
      data-testid="navbar"
    >
      {showBrand ? (
        <div className={`text-base font-semibold ${VARIANT_BRAND[variant]}`}>{brand}</div>
      ) : null}
      <ul className="flex flex-1 flex-wrap items-center gap-4">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={`text-sm ${
                item.current ? VARIANT_CURRENT[variant] : VARIANT_LINK[variant]
              }`}
              onClick={(event) => handleNavClick(item.href, onNavigate, event)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {trailing}
    </nav>
  );
}
