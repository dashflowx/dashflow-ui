import type { Meta, StoryObj } from '@storybook/react';
import { AppShell } from './AppShell';
import { AuthScreenFrame } from './AuthScreens';
import { PricingTable } from './PricingTable';

const NAV = [
  { href: '/docs', label: 'Docs' },
  { href: '/pricing', label: 'Pricing', current: true },
];
const SIDE = [
  { href: '/overview', label: 'Overview', current: true },
  { href: '/billing', label: 'Billing' },
];

const meta: Meta = { title: 'UI/Pro' };
export default meta;
type Story = StoryObj;

export const AppShellStory: Story = {
  name: 'AppShell',
  render: () => (
    <AppShell navItems={NAV} sideItems={SIDE} onNavigate={() => undefined}>
      <p>Pro chrome around free shells.</p>
    </AppShell>
  ),
};

export const AppShellBordered: Story = {
  name: 'AppShell bordered',
  render: () => (
    <AppShell variant="bordered" size="sm" navItems={NAV} sideItems={SIDE} onNavigate={() => undefined}>
      <p>Bordered compact shell.</p>
    </AppShell>
  ),
};

export const AppShellNoSidebar: Story = {
  name: 'AppShell no sidebar',
  render: () => (
    <AppShell showSidebar={false} navItems={NAV} sideItems={SIDE} onNavigate={() => undefined}>
      <p>Navbar + main + Footer only.</p>
    </AppShell>
  ),
};

export const Pricing: Story = {
  render: () => (
    <PricingTable
      plans={[
        { name: 'Free', price: '$0', period: 'mo', features: ['Storybook', 'MIT libs'] },
        {
          name: 'Pro',
          price: '$29',
          period: 'mo',
          features: ['AppShell', 'SSO via @dashflowx/auth'],
          highlighted: true,
          cta: 'Start Pro',
        },
        { name: 'Enterprise', price: 'Talk', features: ['SAML', 'Dedicated'] },
      ]}
    />
  ),
};

export const PricingMuted: Story = {
  name: 'Pricing muted',
  render: () => (
    <PricingTable
      variant="muted"
      size="sm"
      columns={2}
      align="center"
      plans={[
        { name: 'Free', price: '$0', period: 'mo', features: ['Storybook'] },
        { name: 'Pro', price: '$29', period: 'mo', features: ['AppShell'], highlighted: true, cta: 'Start Pro' },
      ]}
    />
  ),
};

export const AuthScreens: Story = {
  render: () => (
    <AuthScreenFrame title="Sign in">
      <p className="text-sm text-slate-600">
        Slot for @dashflowx/auth SignIn. Adapters stay in the auth package, not here.
      </p>
    </AuthScreenFrame>
  ),
};

export const AuthScreenMuted: Story = {
  name: 'AuthScreen muted',
  render: () => (
    <AuthScreenFrame
      variant="muted"
      size="sm"
      align="center"
      title="Sign in"
      description="Centered compact frame."
      showHint={false}
    >
      <p className="text-sm text-slate-600">auth-slot</p>
    </AuthScreenFrame>
  ),
};
