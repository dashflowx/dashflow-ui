import { useState, type ReactNode } from 'react';
import { EmptyState } from './EmptyState';
import { Footer, type FooterColumn } from './Footer';
import { Navbar } from './Navbar';
import { PageHeader } from './PageHeader';
import { Sidebar } from './Sidebar';
import type { NavItem } from './nav';

export type ComposeVariant = 'default' | 'compact' | 'bordered' | 'muted' | 'flush';
export type ComposeSize = 'sm' | 'md' | 'lg';

export type ComposeProps = {
  brand?: ReactNode;
  navItems?: NavItem[];
  sideItems?: NavItem[];
  footerColumns?: FooterColumn[];
  /** Controlled current path. Marks matching nav/side items as `current`. */
  path?: string;
  /** Uncontrolled initial path when `path` is omitted. */
  defaultPath?: string;
  onNavigate?: (href: string) => void;
  title?: string;
  description?: string;
  emptyTitle?: string;
  emptyDescription?: string;
  /** When set, replaces the default PageHeader + EmptyState main body. */
  children?: ReactNode;
  showNavbar?: boolean;
  showSidebar?: boolean;
  showFooter?: boolean;
  showPageHeader?: boolean;
  showEmptyState?: boolean;
  variant?: ComposeVariant;
  size?: ComposeSize;
  className?: string;
};

const DEFAULT_NAV: NavItem[] = [
  { href: '/docs', label: 'Docs' },
  { href: '/pricing', label: 'Pricing' },
];

const DEFAULT_SIDE: NavItem[] = [
  { href: '/overview', label: 'Overview' },
  { href: '/orders', label: 'Orders' },
  { href: '/settings', label: 'Settings' },
];

const VARIANT_CLASSES: Record<ComposeVariant, string> = {
  default: 'bg-white',
  compact: 'bg-white',
  bordered: 'bg-white border border-slate-200 rounded-lg overflow-hidden',
  muted: 'bg-slate-50',
  flush: 'bg-transparent',
};

const SIZE_SHELL: Record<ComposeSize, string> = {
  sm: 'min-h-[360px] text-sm',
  md: 'min-h-[480px]',
  lg: 'min-h-[560px] text-base',
};

const SIZE_MAIN: Record<ComposeSize, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const SIZE_BODY: Record<ComposeSize, string> = {
  sm: 'min-h-[240px]',
  md: 'min-h-[320px]',
  lg: 'min-h-[400px]',
};

function withCurrent(items: NavItem[], path: string): NavItem[] {
  return items.map((item) => ({ ...item, current: item.href === path }));
}

function titleFromPath(path: string): string {
  const segment = path.replace(/^\//, '');
  return segment || 'home';
}

/** Free layout compose: Navbar + Sidebar + main + Footer. No router required. */
export function Compose({
  brand = 'DashFlowX',
  navItems = DEFAULT_NAV,
  sideItems = DEFAULT_SIDE,
  footerColumns,
  path: pathProp,
  defaultPath = '/overview',
  onNavigate,
  title,
  description = 'Navbar and Sidebar share onNavigate. No router.',
  emptyTitle,
  emptyDescription = 'Clicks stay inside the shell.',
  children,
  showNavbar = true,
  showSidebar = true,
  showFooter = true,
  showPageHeader = true,
  showEmptyState = true,
  variant = 'default',
  size = 'md',
  className = '',
}: ComposeProps) {
  const [uncontrolledPath, setUncontrolledPath] = useState(defaultPath);
  const path = pathProp ?? uncontrolledPath;

  function navigate(href: string) {
    if (pathProp === undefined) setUncontrolledPath(href);
    onNavigate?.(href);
  }

  const columns =
    footerColumns ??
    (navItems.length > 0 ? [{ heading: 'Product', items: navItems }] : []);

  const resolvedTitle = title ?? titleFromPath(path);
  const resolvedEmptyTitle = emptyTitle ?? `Route ${path}`;

  return (
    <div
      className={`${SIZE_SHELL[size]} ${VARIANT_CLASSES[variant]} ${variant === 'compact' ? 'text-sm' : ''} ${className}`.trim()}
      data-testid="ui-compose"
    >
      {showNavbar ? (
        <Navbar brand={brand} items={withCurrent(navItems, path)} onNavigate={navigate} />
      ) : null}
      <div className={`flex ${SIZE_BODY[size]}`}>
        {showSidebar ? (
          <Sidebar items={withCurrent(sideItems, path)} onNavigate={navigate} />
        ) : null}
        <main className={`flex-1 ${SIZE_MAIN[size]}`}>
          {children ?? (
            <>
              {showPageHeader ? (
                <PageHeader title={resolvedTitle} description={description} />
              ) : null}
              {showEmptyState ? (
                <EmptyState title={resolvedEmptyTitle} description={emptyDescription} />
              ) : null}
            </>
          )}
        </main>
      </div>
      {showFooter ? (
        <Footer brand={brand} onNavigate={navigate} columns={columns} />
      ) : null}
    </div>
  );
}
