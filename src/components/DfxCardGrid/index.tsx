import type { CardGridProps } from '../../lib/types';
import { cn } from '../../lib/utils';

export function DfxCardGrid({
  cardsArray,
  className,
  title,
  description,
  titleClassName,
  gridClassName,
  cardClassName,
}: CardGridProps) {
  return (
    <section className={className}>
      {title || description ? (
        <div className="mb-6 flex flex-col items-center text-center">
          {title ? <h2 className={cn('text-2xl font-bold text-gray-900', titleClassName)}>{title}</h2> : null}
          {description ? <div className="mt-2 max-w-2xl text-gray-600">{description}</div> : null}
        </div>
      ) : null}
      <div className={cn('grid grid-cols-1 gap-4', cardsArray.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2', gridClassName)}>
        {cardsArray.map((card) => (
          <div key={card.id} className={cn('h-full rounded-lg border border-gray-200 bg-white', card.className, cardClassName)}>
            <div className={cn('p-4', card.contentClassName)}>{card.element}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export type { CardGridProps, CardGridItem } from '../../lib/types';
