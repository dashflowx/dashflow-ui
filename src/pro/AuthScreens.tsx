import type { ReactNode } from 'react';
import { Typography } from '@dashflowx/core';

export type AuthScreenFrameProps = {
  title: string;
  children: ReactNode;
};

/**
 * Layout only. Pass SignIn / SignUp from `@dashflowx/auth` as children.
 * This package must not import Firebase (EXT-FIREBASE is a separate yes).
 */
export function AuthScreenFrame({ title, children }: AuthScreenFrameProps) {
  return (
    <div className="mx-auto max-w-md rounded-lg border border-slate-200 p-6" data-testid="auth-screen-frame">
      <p className="mb-3 text-xs text-slate-500">Compose @dashflowx/auth. Do not copy adapters here.</p>
      <Typography variant="two" size="xl" weight="semibold">
        {title}
      </Typography>
      <div className="mt-4">{children}</div>
    </div>
  );
}
