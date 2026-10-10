import type { CSSProperties, ReactNode } from 'react';

export type MenuItem = {
  id: string;
  title: string;
  path: string;
  active: boolean;
  menuIcon?: ReactNode;
};

export type LibraryType = 'react' | 'next';

export type NavVariant = 'basic' | 'one' | 'two';
export type SidebarVariant = 'basic' | 'one' | 'two' | 'three' | 'four';
export type HeroVariant = 'basic' | 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
export type StatsVariant = 'basic' | 'one';
export type FooterVariant = 'one';

export type NavBarProps = {
  logo?: ReactNode;
  menuArrays?: MenuItem[];
  actions?: ReactNode;
  menuIcon?: ReactNode;
  navClassName?: string;
  navItemClassName?: string;
  variant?: NavVariant;
  libraryType?: LibraryType;
  style?: CSSProperties;
  menuType?: string;
};

export type SidebarProps = {
  expanded: boolean;
  menuArrays: MenuItem[];
  toggleExpand: () => void;
  logo: ReactNode;
  variant?: SidebarVariant;
  menuType?: string;
  profileImage?: ReactNode;
  profileName?: string;
  profileDescription?: string;
  profilePath?: string;
  libraryType?: LibraryType;
  sidebarFooter?: ReactNode;
};

export type AdminLayoutProps = SidebarProps & {
  children: ReactNode;
  NavActions?: ReactNode;
  libraryType?: LibraryType;
  prefixNavBar?: ReactNode;
};

export type HeroProps = {
  heroImage?: ReactNode;
  actions?: ReactNode;
  heading: ReactNode;
  caption: ReactNode;
  variant?: HeroVariant;
  subElement?: ReactNode;
  textSecClassName?: string;
  className?: string;
};

export type StatsItem = { content: ReactNode };

export type StatsProps = {
  items: StatsItem[];
  variant?: StatsVariant;
  className?: string;
  itemContainerClassName?: string;
  itemClassName?: string;
};

export type FaqItem = {
  value: string;
  title: ReactNode;
  description: ReactNode;
  disabled?: boolean;
};

export type FaqProps = {
  title: string;
  description: string;
  accordionItems: FaqItem[];
  className?: string;
  accordionvariant?: 'basic' | 'one';
  titleClassName?: string;
  descriptionClassName?: string;
  accordionContainerClassName?: string;
  textContainerClassName?: string;
  variant?: 'basic';
};

export type PageHeadProps = {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  variant?: 'basic';
  titleClassName?: string;
  descriptionClassName?: string;
  actionClassName?: string;
  className?: string;
  containerClassName?: string;
};

export type CardGridItem = {
  id: number;
  element: ReactNode;
  className?: string;
  contentClassName?: string;
};

export type CardGridProps = {
  title?: string;
  description?: ReactNode;
  cardsArray: CardGridItem[];
  titleClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  className?: string;
};

export type TabsLayoutItem = {
  id: string | number;
  title: string;
  content: ReactNode;
};

export type TabsLayoutProps = {
  description?: ReactNode;
  tabsArray: TabsLayoutItem[];
  heading?: ReactNode;
  caption?: ReactNode;
  tabsClassName?: string;
  defaultActive?: number;
  buttonClassName?: string;
  className?: string;
};
