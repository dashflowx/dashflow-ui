import type { ReactNode } from 'react';
import type { StatsProps, StatsVariant } from '../../lib/types';
import { StatsComp } from './variants/Basic';
import { StatsOne } from './variants/StatsOne';

const views = {
  basic: StatsComp,
  one: StatsOne,
} as unknown as Record<StatsVariant, (props: Omit<StatsProps, 'variant'>) => ReactNode>;

export function DfxStats({ variant = 'basic', ...props }: StatsProps) {
  const View = views[variant] ?? views.basic;
  return View(props);
}

export type { StatsProps, StatsVariant, StatsItem } from '../../lib/types';
