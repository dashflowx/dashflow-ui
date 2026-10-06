import type { ReactNode } from 'react';
import { Footer } from '../free/Footer';
import { Navbar } from '../free/Navbar';
import { Sidebar } from '../free/Sidebar';
import type { NavItem } from '../free/nav';

export type AppShellVariant = 'default' | 'compact' | 'bordered' | 'muted' | 'flush';
export type AppShellSize = 'sm' | 'md' | 'lg';

export type AppShellProps = {
  brand?: ReactNode;
  navItems: NavItem[];
  sideItems: NavItem[];
  children: ReactNode;
  onNavigate?: (href: string) => void;
  showNavbar?: boolean;
  showSidebar?: boolean;
  showFooter?: boolean;
  variant?: AppShellVariant;
  size?: AppShellSize;
  className?: string;
};

const VARIANT_CLASSES: Record<AppShellVariant, string> = {
  default: 'bg-white',
  compact: 'bg-white',
  bordered: 'bg-white border border-slate-200 rounded-lg overflow-hidden',
  muted: 'bg-slate-50',
  flush: 'bg-transparent',
};

const SIZE_SHELL: Record<AppShellSize, string> = {
  sm: 'min-h-[360px] text-sm',
  md: 'min-h-[480px]',
  lg: 'min-h-[560px] text-base',
};

const SIZE_MAIN: Record<AppShellSize, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/** Commercial app chrome. Uses free Navbar/Sidebar/Footer. No router required. */
export function AppShell({
  brand = 'DashFlowX',
  navItems,
  sideItems,
  children,
  onNavigate,
  showNavbar = true,
  showSidebar = true,
  showFooter = true,
  variant = 'default',
  size = 'md',
  className = '',
}: AppShellProps) {
  return (
    <div
      className={`flex flex-col ${SIZE_SHELL[size]} ${VARIANT_CLASSES[variant]} ${
        variant === 'compact' ? 'text-sm' : ''
      } ${className}`.trim()}
      data-testid="app-shell"
    >
      {showNavbar ? <Navbar brand={brand} items={navItems} onNavigate={onNavigate} /> : null}
      <div className="flex flex-1">
        {showSidebar ? <Sidebar items={sideItems} onNavigate={onNavigate} /> : null}
        <main className={`flex-1 ${SIZE_MAIN[size]}`}>{children}</main>
      </div>
      {showFooter ? <Footer brand={brand} onNavigate={onNavigate} /> : null}
    </div>
  );
}
