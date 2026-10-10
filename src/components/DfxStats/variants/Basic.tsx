import { cn } from '../../../lib/utils';

interface iStatsCompItem {
  content: string | JSX.Element;
}

interface iStatsComp {
  items: Array<iStatsCompItem>;
  className?: string;
  itemContainerClassName?: string;
  itemClassName?: string;
}

export const StatsComp = ({
  items,
  className,
  itemContainerClassName,
  itemClassName,
}: iStatsComp) => {
  return (
    <div className={cn('flex items-center justify-center p-10', className)}>
      <div
        className={cn(
          'grid gap-3',
          items.length === 2 && 'grid-cols-1 md:grid-cols-2',
          items.length === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          items.length >= 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
          itemContainerClassName
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex items-center p-4 bg-white shadow-sm rounded',
              itemClassName
            )}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};
