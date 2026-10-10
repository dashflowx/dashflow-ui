import type { ReactNode } from 'react';
import { cn } from './utils';

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type MenuItem = {
  id: string;
  title: ReactNode;
  path: string;
  active?: boolean;
  menuIcon?: ReactNode;
};

export function MenuList({
  menuArrays = [],
  className,
  showText = true,
  linkClassName,
  variant,
}: {
  menuArrays?: MenuItem[];
  className?: string;
  showText?: boolean;
  showIcon?: boolean;
  linkClassName?: string;
  navClassName?: string;
  tooltipClassName?: string;
  variant?: string;
  library?: 'react' | 'next';
  type?: unknown;
}) {
  const row = variant === 'one';
  return (
    <ul className={cn(row ? 'flex flex-wrap items-center gap-6' : 'flex w-full flex-col gap-1', className)}>
      {menuArrays.map((menu) => (
        <li key={menu.id} className={row ? undefined : 'w-full'}>
          <a
            href={menu.path}
            aria-current={menu.active ? 'page' : undefined}
            className={cn(
              'flex items-center rounded-lg px-3 py-2 text-sm transition-colors',
              menu.active
                ? 'font-medium text-gray-900'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
              linkClassName,
            )}
          >
            {menu.menuIcon}
            {showText ? <span className={menu.menuIcon ? 'ml-2 font-medium' : 'font-medium'}>{menu.title}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TypographyComp({
  className,
  children,
  as,
  to,
  href,
}: {
  className?: string;
  children?: ReactNode;
  as?: unknown;
  to?: string;
  href?: string;
}) {
  const destination = href || to;
  const Tag = typeof as === 'string' ? as : destination ? 'a' : 'div';
  if (Tag === 'a' || destination) {
    return (
      <a href={destination || '#'} className={className}>
        {children}
      </a>
    );
  }
  const Element = Tag as 'div';
  return <Element className={className}>{children}</Element>;
}
