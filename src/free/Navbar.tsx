import type { ReactNode } from 'react';
import { handleNavClick, type NavItem } from './nav';

export type NavbarProps = {
  brand: ReactNode;
  items: NavItem[];
  trailing?: ReactNode;
  onNavigate?: (href: string) => void;
  className?: string;
};

export function Navbar({ brand, items, trailing, onNavigate, className = '' }: NavbarProps) {
  return (
    <nav className={`flex items-center gap-6 border-b border-slate-200 bg-white px-4 py-3 ${className}`} data-testid="navbar">
      <div className="text-base font-semibold text-slate-900">{brand}</div>
      <ul className="flex flex-1 flex-wrap items-center gap-4">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={item.current ? 'text-sm font-medium text-slate-900' : 'text-sm text-slate-600 hover:text-slate-900'}
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
