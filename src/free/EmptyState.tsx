import type { ReactNode } from 'react';
import { Typography } from '@dashflowx/core';

export type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({ title, description, action, className = '' }: EmptyStateProps) {
  return (
    <div className={`rounded-lg border border-dashed border-slate-300 px-6 py-12 text-center ${className}`} data-testid="empty-state">
      <Typography variant="three" size="lg" weight="medium">
        {title}
      </Typography>
      {description ? <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
