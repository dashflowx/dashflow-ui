import type { ReactNode } from 'react';
import { Typography } from '@dashflowx/core';

export type EmptyStateVariant = 'default' | 'dashed' | 'solid' | 'muted' | 'soft';
export type EmptyStateSize = 'sm' | 'md' | 'lg';
export type EmptyStateAlign = 'center' | 'left';
export type EmptyStateTone = 'default' | 'muted' | 'warning' | 'error';

export type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  variant?: EmptyStateVariant;
  size?: EmptyStateSize;
  align?: EmptyStateAlign;
  tone?: EmptyStateTone;
  className?: string;
};

const VARIANT_CLASSES: Record<EmptyStateVariant, string> = {
  default: 'border border-dashed border-slate-300 bg-transparent',
  dashed: 'border border-dashed border-slate-300 bg-transparent',
  solid: 'border border-solid border-slate-200 bg-white',
  muted: 'border border-transparent bg-slate-50',
  soft: 'border border-slate-100 bg-slate-50/80',
};

const SIZE_CLASSES: Record<EmptyStateSize, string> = {
  sm: 'px-4 py-8',
  md: 'px-6 py-12',
  lg: 'px-8 py-16',
};

const ALIGN_CLASSES: Record<EmptyStateAlign, string> = {
  center: 'text-center',
  left: 'text-left',
};

const TONE_TITLE: Record<EmptyStateTone, string> = {
  default: '',
  muted: 'text-slate-500',
  warning: 'text-amber-700',
  error: 'text-red-700',
};

const TONE_DESCRIPTION: Record<EmptyStateTone, string> = {
  default: 'text-slate-500',
  muted: 'text-slate-400',
  warning: 'text-amber-600',
  error: 'text-red-600',
};

const SIZE_TITLE: Record<EmptyStateSize, 'base' | 'lg' | 'xl'> = {
  sm: 'base',
  md: 'lg',
  lg: 'xl',
};

export function EmptyState({
  title,
  description,
  action,
  variant = 'default',
  size = 'md',
  align = 'center',
  tone = 'default',
  className = '',
}: EmptyStateProps) {
  const descriptionAlign = align === 'left' ? 'mx-0' : 'mx-auto';

  return (
    <div
      className={`rounded-lg ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${ALIGN_CLASSES[align]} ${className}`.trim()}
      data-testid="empty-state"
    >
      <Typography
        variant="three"
        size={SIZE_TITLE[size]}
        weight="medium"
        className={TONE_TITLE[tone] || undefined}
      >
        {title}
      </Typography>
      {description ? (
        <p className={`${descriptionAlign} mt-2 max-w-md text-sm ${TONE_DESCRIPTION[tone]}`}>
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
