import type { MouseEvent } from 'react';

export type NavItem = {
  href: string;
  label: string;
  current?: boolean;
};

/** Apps pass onNavigate (Next Link, react-router, etc.). Stories pass a no-op so href never leaves Storybook. */
export function handleNavClick(
  href: string,
  onNavigate: ((href: string) => void) | undefined,
  event: MouseEvent<HTMLAnchorElement>
) {
  if (!onNavigate) return;
  event.preventDefault();
  onNavigate(href);
}
