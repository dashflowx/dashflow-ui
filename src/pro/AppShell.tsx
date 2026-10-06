import type { ReactNode } from 'react';
import { Footer } from '../free/Footer';
import { Navbar } from '../free/Navbar';
import { Sidebar } from '../free/Sidebar';
import type { NavItem } from '../free/nav';

export type AppShellProps = {
  brand?: ReactNode;
  navItems: NavItem[];
  sideItems: NavItem[];
  children: ReactNode;
  onNavigate?: (href: string) => void;
};

/** Commercial app chrome. Uses free Navbar/Sidebar/Footer. No router required. */
export function AppShell({ brand = 'DashFlowX', navItems, sideItems, children, onNavigate }: AppShellProps) {
  return (
    <div className="flex min-h-[480px] flex-col bg-white" data-testid="app-shell">
      <Navbar brand={brand} items={navItems} onNavigate={onNavigate} />
      <div className="flex flex-1">
        <Sidebar items={sideItems} onNavigate={onNavigate} />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Footer brand={brand} onNavigate={onNavigate} />
    </div>
  );
}
