import { cn } from '../../lib/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iFooterActions {
  id: number;
  label: JSX.Element;
}

interface iFooterProps {
  actions: Array<iFooterActions>;
  copyRight: JSX.Element;
}

export type BoxProps = ComponentPropsWithRef<'div'> & iFooterProps;

export const FooterOne = forwardRef<HTMLDivElement, BoxProps>(
  ({ copyRight, className, actions, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600',
          className
        )}
        {...props}
      >
        {copyRight}
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {actions.map((element) => (
            <li key={element.id}>{element.label}</li>
          ))}
        </ul>
      </div>
    );
  }
);
