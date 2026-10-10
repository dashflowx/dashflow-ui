import { Tabs } from '@dashflowx/core';
import type { TabsLayoutProps } from '../../lib/types';
import { cn } from '../../lib/utils';

export function DfxTabsLayout({
  description,
  className,
  tabsArray,
  heading,
  caption,
  defaultActive = 0,
  buttonClassName,
  tabsClassName,
}: TabsLayoutProps) {
  return (
    <section className={cn('px-4 py-8 text-center', className)}>
      {caption ? <div className="text-sm text-gray-500">{caption}</div> : null}
      {heading ? <div className="mt-2">{heading}</div> : null}
      {description ? <div className="mx-auto mt-3 max-w-2xl text-gray-600">{description}</div> : null}
      <Tabs
        tabsArray={tabsArray}
        defaultActive={defaultActive}
        buttonClassName={buttonClassName}
        className={cn('mt-6 text-left', tabsClassName)}
      />
    </section>
  );
}

export type { TabsLayoutProps, TabsLayoutItem } from '../../lib/types';
