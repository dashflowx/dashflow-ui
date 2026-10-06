import type { ReactNode } from 'react';
import { Typography } from '@dashflowx/core';

export type PageHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function PageHeader({ title, description, action, className = '' }: PageHeaderProps) {
  return (
    <header className={`mb-6 flex flex-wrap items-start justify-between gap-4 ${className}`} data-testid="page-header">
      <div>
        <Typography variant="two" size="2xl" weight="semibold">
          {title}
        </Typography>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
