import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

export type PageHeaderVariant = 'default' | 'bordered' | 'muted' | 'flush' | 'stacked';
export type PageHeaderSize = 'sm' | 'md' | 'lg';
export type PageHeaderAlign = 'left' | 'center';
export type PageHeaderTone = 'default' | 'muted' | 'subtle';

export type PageHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  variant?: PageHeaderVariant;
  size?: PageHeaderSize;
  align?: PageHeaderAlign;
  tone?: PageHeaderTone;
  className?: string;
};

const VARIANT_CLASSES: Record<PageHeaderVariant, string> = {
  default: '',
  bordered: 'rounded-lg border border-slate-200 bg-white px-4 py-4',
  muted: 'rounded-lg bg-slate-50 px-4 py-4',
  flush: 'mb-0',
  stacked: '',
};

const SIZE_MARGIN: Record<PageHeaderSize, string> = {
  sm: 'mb-4 gap-3',
  md: 'mb-6 gap-4',
  lg: 'mb-8 gap-5',
};

const ALIGN_CLASSES: Record<PageHeaderAlign, string> = {
  left: 'items-start justify-between text-left',
  center: 'flex-col items-center justify-center text-center',
};

const TONE_DESCRIPTION: Record<PageHeaderTone, string> = {
  default: 'text-slate-600',
  muted: 'text-slate-500',
  subtle: 'text-slate-400',
};

export function PageHeader({
  title,
  description,
  action,
  variant = 'default',
  size = 'md',
  align = 'left',
  tone = 'default',
  className = '',
}: PageHeaderProps) {
  const layout =
    variant === 'stacked' || align === 'center'
      ? 'flex-col items-center justify-center text-center'
      : ALIGN_CLASSES[align];

  return (
    <header
      className={cn(
        'lg:flex lg:items-center lg:justify-between',
        SIZE_MARGIN[size],
        layout,
        VARIANT_CLASSES[variant],
        className,
      )}
      data-testid="page-header"
    >
      <div className={cn('min-w-0 flex-1', align === 'center' || variant === 'stacked' ? 'w-full' : '')}>
        <h2
          className={cn(
            'font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight',
            size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl',
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              'mt-3 text-lg text-gray-800 dark:text-gray-400',
              TONE_DESCRIPTION[tone],
              align === 'center' || variant === 'stacked' ? 'mx-auto max-w-2xl' : '',
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="mt-5 flex shrink-0 lg:ml-4 lg:mt-0">{action}</div> : null}
    </header>
  );
}
