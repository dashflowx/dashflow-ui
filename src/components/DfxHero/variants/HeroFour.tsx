import { cn } from '../../../lib/utils';

interface iDHeroOneProps {
  heroImage?: JSX.Element;
  actions?: JSX.Element;
  heading: JSX.Element;
  caption: JSX.Element;
  subElement?: JSX.Element;
  gridClassName?: string;
  textSecClassName?: string;
  className?: string;
}

export const HeroFour = ({
  className,
  actions,
  heading,
  caption,
  gridClassName,
  textSecClassName,
}: iDHeroOneProps) => {
  return (
    <div className={cn('px-4 sm:px-6 lg:px-8', className)}>
      <div className={cn('pt-10', gridClassName)}>
        <div className={cn(textSecClassName)}>
          {heading}
          {caption}
          {actions && actions}
        </div>
      </div>
    </div>
  );
};
