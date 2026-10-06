import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UiScaffold } from './UiScaffold';

describe('@dashflowx/ui scaffold', () => {
  it('is named @dashflowx/ui', () => {
    const pkg = JSON.parse(
      readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../../package.json'), 'utf8')
    );
    expect(pkg.name).toBe('@dashflowx/ui');
    expect(pkg.peerDependencies['@dashflowx/core']).toBe('>=3.0.0');
  });

  it('renders the Storybook placeholder', () => {
    render(<UiScaffold />);
    expect(screen.getByTestId('ui-scaffold')).toHaveTextContent('@dashflowx/ui');
  });
});
