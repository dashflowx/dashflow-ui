import { useState, type ReactNode } from 'react';
import type { NavBarProps, NavVariant } from '../../lib/types';
import NavbarComp from './variants/Basic';
import { NavbarOne } from './variants/NavbarOne';
import NavbarTwo from './variants/NavbarTwo';

type OpenNavProps = NavBarProps & {
  hideMenuIcon?: boolean;
  handleMenutoggle?: () => void;
  openMenu?: boolean;
};

const views = {
  basic: NavbarComp,
  one: NavbarOne,
  two: NavbarTwo,
} as unknown as Record<NavVariant, (props: OpenNavProps) => ReactNode>;

export function DfxNavBar({
  menuArrays,
  actions,
  logo,
  menuIcon,
  navClassName,
  navItemClassName,
  variant = 'basic',
  style,
  libraryType = 'react',
  menuType,
}: NavBarProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const View = views[variant] ?? views.basic;
  return View({
    menuArrays,
    actions,
    logo,
    menuIcon,
    navClassName,
    navItemClassName,
    libraryType,
    style,
    menuType,
    hideMenuIcon: !menuArrays?.length,
    handleMenutoggle: () => setOpenMenu((open) => !open),
    openMenu,
  });
}

export type { NavBarProps, NavVariant };
