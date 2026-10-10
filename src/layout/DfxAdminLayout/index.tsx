import type { ReactNode } from 'react';
import type { AdminLayoutProps, SidebarVariant } from '../../lib/types';
import { LayoutComp } from './variants/Basic';
import { LayoutFour } from './variants/LayoutFour';
import { LayoutOne } from './variants/LayoutOne';
import { LayoutThree } from './variants/LayoutThree';
import { LayoutTwo } from './variants/LayoutTwo';

const views = {
  basic: LayoutComp,
  one: LayoutOne,
  two: LayoutTwo,
  three: LayoutThree,
  four: LayoutFour,
} as unknown as Record<SidebarVariant, (props: AdminLayoutProps) => ReactNode>;

export function DfxAdminLayout({ variant = 'basic', libraryType = 'react', ...props }: AdminLayoutProps) {
  const View = views[variant] ?? views.basic;
  return View({ ...props, variant, libraryType });
}

export type { AdminLayoutProps };
