import type { ReactNode } from 'react';
import type { HeroProps, HeroVariant } from '../../lib/types';
import { HeroComp } from './variants/Basic';
import { HeroFive } from './variants/HeroFive';
import { HeroFour } from './variants/HeroFour';
import { HeroOne } from './variants/HeroOne';
import { HeroSix } from './variants/HeroSix';
import { HeroThree } from './variants/HeroThree';
import { HeroTwo } from './variants/HeroTwo';

const views = {
  basic: HeroComp,
  one: HeroOne,
  two: HeroTwo,
  three: HeroThree,
  four: HeroFour,
  five: HeroFive,
  six: HeroSix,
} as unknown as Record<HeroVariant, (props: HeroProps) => ReactNode>;

export function DfxHero({ variant = 'basic', ...props }: HeroProps) {
  const View = views[variant] ?? views.basic;
  return View(props);
}

export type { HeroProps, HeroVariant };
