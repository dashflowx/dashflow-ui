import type { ReactNode } from 'react';
import { cn } from '../lib/utils';
import { handleNavClick, type NavItem } from './nav';

export type FooterColumn = {
  heading: string;
  items: NavItem[];
};

export type FooterVariant = 'default' | 'minimal' | 'light' | 'bordered' | 'muted';
export type FooterSize = 'sm' | 'md' | 'lg';
export type FooterAlign = 'left' | 'center';

export type FooterProps = {
  brand?: ReactNode;
  columns?: FooterColumn[];
  copyright?: string;
  onNavigate?: (href: string) => void;
  variant?: FooterVariant;
  size?: FooterSize;
  align?: FooterAlign;
  showBrand?: boolean;
  showCopyright?: boolean;
  className?: string;
};

const VARIANT_CLASSES: Record<FooterVariant, string> = {
  default: 'border-t border-slate-200 bg-slate-900 text-slate-300',
  minimal: 'border-t border-slate-800 bg-slate-950 text-slate-400',
  light: 'border-t border-slate-200 bg-white text-slate-600',
  bordered: 'border border-slate-200 bg-white text-slate-600 rounded-lg',
  muted: 'border-t border-transparent bg-slate-100 text-slate-600',
};

const VARIANT_BRAND: Record<FooterVariant, string> = {
  default: 'text-white',
  minimal: 'text-slate-200',
  light: 'text-slate-900',
  bordered: 'text-slate-900',
  muted: 'text-slate-800',
};

const VARIANT_LINK: Record<FooterVariant, string> = {
  default: 'hover:text-white',
  minimal: 'hover:text-slate-100',
  light: 'hover:text-slate-900',
  bordered: 'hover:text-slate-900',
  muted: 'hover:text-slate-900',
};

const VARIANT_COPYRIGHT: Record<FooterVariant, string> = {
  default: 'border-slate-800 text-slate-400',
  minimal: 'border-slate-900 text-slate-500',
  light: 'border-slate-200 text-slate-500',
  bordered: 'border-slate-200 text-slate-500',
  muted: 'border-slate-200 text-slate-500',
};

const SIZE_CLASSES: Record<FooterSize, string> = {
  sm: 'px-3 py-5',
  md: 'px-4 py-8',
  lg: 'px-6 py-12',
};

const ALIGN_CLASSES: Record<FooterAlign, string> = {
  left: 'text-left',
  center: 'text-center md:text-left',
};

export function Footer({
  brand = 'DashFlowX',
  columns = [],
  copyright = '© DashFlowX. All rights reserved.',
  onNavigate,
  variant = 'default',
  size = 'md',
  align = 'left',
  showBrand = true,
  showCopyright = true,
  className = '',
}: FooterProps) {
  const links = columns.flatMap((column) => column.items);
  return (
    <footer
      className={cn(
        'w-full border-t border-gray-200 bg-white shadow md:flex md:items-center md:justify-between dark:border-gray-600 dark:bg-gray-800',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        ALIGN_CLASSES[align],
        className,
      )}
      data-testid="footer"
    >
      <div>
        {showBrand ? (
          <div className={cn('text-base font-semibold', VARIANT_BRAND[variant])}>{brand}</div>
        ) : null}
        {showCopyright ? (
          <p className={cn('text-sm', VARIANT_COPYRIGHT[variant])}>{copyright}</p>
        ) : null}
      </div>
      {links.length > 0 ? (
        <ul className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium sm:mt-0">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={VARIANT_LINK[variant]}
                onClick={(event) => handleNavClick(item.href, onNavigate, event)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </footer>
  );
}
