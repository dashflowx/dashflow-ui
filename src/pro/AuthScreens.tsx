import type { ReactNode } from 'react';
import { Typography } from '@dashflowx/core';

export type AuthScreenVariant = 'default' | 'bordered' | 'muted' | 'soft' | 'flush';
export type AuthScreenSize = 'sm' | 'md' | 'lg';
export type AuthScreenAlign = 'left' | 'center';

export type AuthScreenFrameProps = {
  title: string;
  children: ReactNode;
  description?: ReactNode;
  /** Helper line above the title. Pass `false` to hide. */
  hint?: ReactNode | false;
  showHint?: boolean;
  variant?: AuthScreenVariant;
  size?: AuthScreenSize;
  align?: AuthScreenAlign;
  className?: string;
};

const VARIANT_CLASSES: Record<AuthScreenVariant, string> = {
  default: 'border border-slate-200 bg-white',
  bordered: 'border-2 border-slate-300 bg-white shadow-sm',
  muted: 'border border-slate-200 bg-slate-50',
  soft: 'border border-transparent bg-slate-100',
  flush: 'border border-transparent bg-transparent',
};

const SIZE_CLASSES: Record<AuthScreenSize, string> = {
  sm: 'max-w-sm p-4',
  md: 'max-w-md p-6',
  lg: 'max-w-lg p-8',
};

const ALIGN_CLASSES: Record<AuthScreenAlign, string> = {
  left: 'text-left',
  center: 'text-center',
};

const DEFAULT_HINT = 'Compose @dashflowx/auth. Do not copy adapters here.';

/**
 * Layout only. Pass SignIn / SignUp from `@dashflowx/auth` as children.
 * This package must not import Firebase (EXT-FIREBASE is a separate yes).
 */
export function AuthScreenFrame({
  title,
  children,
  description,
  hint = DEFAULT_HINT,
  showHint = true,
  variant = 'default',
  size = 'md',
  align = 'left',
  className = '',
}: AuthScreenFrameProps) {
  const resolvedHint = showHint && hint !== false ? hint : null;

  return (
    <div
      className={`mx-auto rounded-lg ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${ALIGN_CLASSES[align]} ${className}`.trim()}
      data-testid="auth-screen-frame"
    >
      {resolvedHint ? <p className="mb-3 text-xs text-slate-500">{resolvedHint}</p> : null}
      <Typography variant="two" size={size === 'sm' ? 'lg' : size === 'lg' ? '2xl' : 'xl'} weight="semibold">
        {title}
      </Typography>
      {description ? <p className="mt-1 text-sm text-slate-600">{description}</p> : null}
      <div className="mt-4">{children}</div>
    </div>
  );
}
