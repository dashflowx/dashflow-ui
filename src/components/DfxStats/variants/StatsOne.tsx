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

export const StatsOne = ({
  items,
  className,
  itemContainerClassName,
  itemClassName,
}: iStatsComp) => {
  return (
    <div className={cn('px-4 py-16 md:px-24 lg:px-8 lg:py-20', className)}>
      <div
        className={cn(
          'grid gap-3 bg-white shadow-md',
          items.length === 2 && 'grid-cols-1 md:grid-cols-2',
          items.length === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          items.length >= 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
          itemContainerClassName
        )}
      >
        {items.map((item, index) => {
          return (
            <div className={cn('text-center', itemClassName)} key={index}>
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
