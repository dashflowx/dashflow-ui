import type { PageHeadProps } from '../../lib/types';
import { cn } from '../../lib/utils';

export function DfxPageHead({
  title,
  description,
  actions,
  className,
  containerClassName,
  titleClassName,
  descriptionClassName,
  actionClassName,
}: PageHeadProps) {
  return (
    <div className={cn('lg:flex lg:items-center lg:justify-between', className)}>
      <div className={cn('min-w-0 flex-1', containerClassName)}>
        <h2 className={cn('text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight', titleClassName)}>
          {title}
        </h2>
        {description ? (
          <p className={cn('mt-3 text-lg text-gray-800 dark:text-gray-400', descriptionClassName)}>{description}</p>
        ) : null}
      </div>
      {actions ? <div className={cn('mt-5 flex lg:ml-4 lg:mt-0', actionClassName)}>{actions}</div> : null}
    </div>
  );
}

export type { PageHeadProps };
