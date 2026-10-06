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

export const Pricing: Story = {
  render: () => (
    <PricingTable
      plans={[
        { name: 'Free', price: '$0', period: 'mo', features: ['Storybook', 'MIT libs'] },
        { name: 'Pro', price: '$29', period: 'mo', features: ['AppShell', 'SSO via @dashflowx/auth'], highlighted: true, cta: 'Start Pro' },
        { name: 'Enterprise', price: 'Talk', features: ['SAML', 'Dedicated'] },
      ]}
    />
  ),
};

export const AuthScreens: Story = {
  render: () => (
    <AuthScreenFrame title="Sign in">
      <p className="text-sm text-slate-600">Slot for @dashflowx/auth SignIn. Adapters stay in the auth package, not here.</p>
    </AuthScreenFrame>
  ),
};
