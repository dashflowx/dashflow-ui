import { cn } from '../../../lib/utils';

interface iDHeroOneProps {
  actions?: JSX.Element;
  heading: JSX.Element;
  caption: JSX.Element;
  subElement?: JSX.Element;
  gridClassName?: string;
  textSecClassName?: string;
  className?: string;
}

export const HeroFive = ({
  className,
  actions,
  heading,
  caption,
  subElement,
  gridClassName,
  textSecClassName,
}: iDHeroOneProps) => {
  return (
    <div className={cn('px-4 sm:px-6 lg:px-8', className)}>
      <div
        className={cn(
          'grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 pt-10',
          gridClassName
        )}
      >
        <div className={cn(textSecClassName)}>
          {heading}
          {caption}
          {actions && actions}
        </div>

        <div className="relative ms-4">{subElement}</div>
      </div>
    </div>
  );
};
