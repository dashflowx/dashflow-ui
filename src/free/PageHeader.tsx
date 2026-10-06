import type { ReactNode } from 'react';
import { Typography } from '@dashflowx/core';

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

const SIZE_TITLE: Record<PageHeaderSize, 'xl' | '2xl' | '3xl'> = {
  sm: 'xl',
  md: '2xl',
  lg: '3xl',
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
      className={`flex flex-wrap ${SIZE_MARGIN[size]} ${layout} ${VARIANT_CLASSES[variant]} ${className}`.trim()}
      data-testid="page-header"
    >
      <div className={align === 'center' || variant === 'stacked' ? 'w-full' : ''}>
        <Typography variant="two" size={SIZE_TITLE[size]} weight="semibold">
          {title}
        </Typography>
        {description ? (
          <p
            className={`mt-2 max-w-2xl text-sm ${TONE_DESCRIPTION[tone]} ${
              align === 'center' || variant === 'stacked' ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
