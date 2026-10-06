import type { ReactNode } from 'react';
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

const VARIANT_HEADING: Record<FooterVariant, string> = {
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
  return (
    <footer
      className={`${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${ALIGN_CLASSES[align]} ${className}`.trim()}
      data-testid="footer"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        {showBrand ? (
          <div className={`text-base font-semibold ${VARIANT_BRAND[variant]}`}>{brand}</div>
        ) : (
          <div />
        )}
        {columns.map((column) => (
          <div key={column.heading}>
            <h4 className={`mb-3 text-sm font-semibold ${VARIANT_HEADING[variant]}`}>
              {column.heading}
            </h4>
            <ul className="space-y-2 text-sm">
              {column.items.map((item) => (
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
          </div>
        ))}
      </div>
      {showCopyright ? (
        <p
          className={`mx-auto mt-8 max-w-6xl border-t pt-4 text-center text-xs ${VARIANT_COPYRIGHT[variant]}`}
        >
          {copyright}
        </p>
      ) : null}
    </footer>
  );
}
