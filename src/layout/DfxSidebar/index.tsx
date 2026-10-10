import type { ReactNode } from 'react';
import type { SidebarProps, SidebarVariant } from '../../lib/types';
import { SidebarComp } from './variants/Basic';
import { SidebarFour } from './variants/SidebarFour';
import { SidebarOne } from './variants/SidebarOne';
import { SidebarThree } from './variants/SidebarThree';
import { SidebarTwo } from './variants/SidebarTwo';

const views = {
  basic: SidebarComp,
  one: SidebarOne,
  two: SidebarTwo,
  three: SidebarThree,
  four: SidebarFour,
} as unknown as Record<SidebarVariant, (props: SidebarProps) => ReactNode>;

export function DfxSidebar({ variant = 'basic', libraryType = 'react', ...props }: SidebarProps) {
  const View = views[variant] ?? views.basic;
  return View({ ...props, variant, libraryType });
}

export type { SidebarProps, SidebarVariant };
