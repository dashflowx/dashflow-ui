import type { ReactNode } from 'react';
import { handleNavClick, type NavItem } from './nav';

export type FooterColumn = {
  heading: string;
  items: NavItem[];
};

export type FooterProps = {
  brand?: ReactNode;
  columns?: FooterColumn[];
  copyright?: string;
  onNavigate?: (href: string) => void;
  className?: string;
};

export function Footer({
  brand = 'DashFlowX',
  columns = [],
  copyright = '© DashFlowX. All rights reserved.',
  onNavigate,
  className = '',
}: FooterProps) {
  return (
    <footer className={`border-t border-slate-200 bg-slate-900 px-4 py-8 text-slate-300 ${className}`} data-testid="footer">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div className="text-base font-semibold text-white">{brand}</div>
        {columns.map((column) => (
          <div key={column.heading}>
            <h4 className="mb-3 text-sm font-semibold text-white">{column.heading}</h4>
            <ul className="space-y-2 text-sm">
              {column.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white"
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
      <p className="mx-auto mt-8 max-w-6xl border-t border-slate-800 pt-4 text-center text-xs text-slate-400">{copyright}</p>
    </footer>
  );
}
