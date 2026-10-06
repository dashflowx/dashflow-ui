import { Typography } from '@dashflowx/core';

/** Minimal layout shell so Storybook boots (U01). Real shells are U02. */
export function UiScaffold() {
  return (
    <div className="p-6" data-testid="ui-scaffold">
      <Typography variant="one" size="xl" weight="semibold">
        @dashflowx/ui
      </Typography>
      <p className="mt-2 text-sm text-slate-600">
        Layouts, not primitives. Peer @dashflowx/core. Storybook :6010.
      </p>
    </div>
  );
}
