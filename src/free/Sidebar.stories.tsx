import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Free/Sidebar',
  component: Sidebar,
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    items: [
      { href: '/overview', label: 'Overview', current: true },
      { href: '/orders', label: 'Orders' },
      { href: '/settings', label: 'Settings' },
    ],
    onNavigate: () => undefined,
  },
};
