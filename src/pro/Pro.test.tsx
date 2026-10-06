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

  it('AppShell variant, size, and chrome toggles', () => {
    render(
      <AppShell
        variant="bordered"
        size="sm"
        showSidebar={false}
        showFooter={false}
        navItems={[{ href: '/docs', label: 'Docs' }]}
        sideItems={[{ href: '/overview', label: 'Overview' }]}
        onNavigate={() => undefined}
      >
        <p>Chrome</p>
      </AppShell>
    );
    expect(screen.getByTestId('app-shell').className).toContain('rounded-lg');
    expect(screen.getByTestId('app-shell').className).toContain('min-h-[360px]');
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
    expect(screen.queryByTestId('footer')).not.toBeInTheDocument();
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

  it('PricingTable variant, size, columns, and align', () => {
    render(
      <PricingTable
        variant="soft"
        size="lg"
        columns={1}
        align="center"
        plans={[{ name: 'Pro', price: '$29', period: 'mo', features: ['SSO'], cta: 'Start Pro' }]}
      />
    );
    const table = screen.getByTestId('pricing-table');
    expect(table.className).toContain('grid-cols-1');
    expect(table).toHaveTextContent('Start Pro');
    expect(table.firstElementChild?.className).toContain('bg-slate-100');
    expect(table.firstElementChild?.className).toContain('text-center');
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

  it('AuthScreenFrame variant, size, align, and hint toggle', () => {
    render(
      <AuthScreenFrame
        variant="soft"
        size="lg"
        align="center"
        title="Welcome"
        description="Pro layout only."
        showHint={false}
      >
        <span>slot</span>
      </AuthScreenFrame>
    );
    const frame = screen.getByTestId('auth-screen-frame');
    expect(frame.className).toContain('bg-slate-100');
    expect(frame.className).toContain('max-w-lg');
    expect(frame.className).toContain('text-center');
    expect(frame).not.toHaveTextContent('Compose @dashflowx/auth');
    expect(frame).toHaveTextContent('Pro layout only.');
  });
});
