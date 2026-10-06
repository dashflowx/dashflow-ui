import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'UI/Free/Navbar',
  component: Navbar,
};
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brand: 'DashFlowX',
    items: [
      { href: '/docs', label: 'Docs', current: true },
      { href: '/pricing', label: 'Pricing' },
    ],
    onNavigate: () => undefined,
  },
};
