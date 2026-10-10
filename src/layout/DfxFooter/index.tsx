import { forwardRef, type ReactNode } from 'react';
import type { FooterVariant } from '../../lib/types';
import { FooterOne } from './FooterComp';

export type DfxFooterAction = { id: number; label: ReactNode };

export type DfxFooterProps = {
  copyRight: ReactNode;
  actions?: DfxFooterAction[];
  variant?: FooterVariant;
  className?: string;
};

export const DfxFooter = forwardRef<HTMLElement, DfxFooterProps>(function DfxFooter(
  { copyRight, className, actions = [], variant = 'one' },
  ref,
) {
  return (
    <footer ref={ref}>
      {variant === 'one' ? (
        <FooterOne className={className} copyRight={copyRight as never} actions={actions as never} />
      ) : null}
    </footer>
  );
});

export { FooterOne };
