import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AppShell } from './AppShell';
import { AuthScreenFrame } from './AuthScreens';
import { PricingTable } from './PricingTable';

afterEach(() => cleanup());

describe('U03 pro shells', () => {
  it('AppShell composes free navbar/sidebar', () => {
    render(
      <AppShell
        navItems={[{ href: '/docs', label: 'Docs' }]}
        sideItems={[{ href: '/overview', label: 'Overview' }]}
        onNavigate={() => undefined}
      >
        <p>Body</p>
      </AppShell>
    );
    expect(screen.getByTestId('app-shell')).toHaveTextContent('Body');
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('PricingTable selects a plan', () => {
    const onSelect = vi.fn();
    render(
      <PricingTable
        plans={[{ name: 'Pro', price: '$29', features: ['SSO'], highlighted: true }]}
        onSelect={onSelect}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Choose' }));
    expect(onSelect).toHaveBeenCalledWith('Pro');
  });

  it('AuthScreenFrame is a slot, not Firebase', () => {
    render(
      <AuthScreenFrame title="Sign in">
        <span>auth-slot</span>
      </AuthScreenFrame>
    );
    expect(screen.getByTestId('auth-screen-frame')).toHaveTextContent('auth-slot');
    expect(screen.getByTestId('auth-screen-frame')).toHaveTextContent('@dashflowx/auth');
  });
});
