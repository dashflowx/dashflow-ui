import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'UI/Free/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'dark', 'bordered', 'muted'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    sticky: { control: 'boolean' },
    showBrand: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Navbar>;

const DEMO_ITEMS = [
  { href: '/docs', label: 'Docs', current: true },
  { href: '/pricing', label: 'Pricing' },
];

export const Default: Story = {
  args: {
    brand: 'DashFlowX',
    items: DEMO_ITEMS,
    variant: 'default',
    size: 'md',
    onNavigate: () => undefined,
  },
};

export const Dark: Story = {
  args: {
    brand: 'DashFlowX',
    items: DEMO_ITEMS,
    variant: 'dark',
  },
};

export const Minimal: Story = {
  args: {
    brand: 'DashFlowX',
    items: DEMO_ITEMS,
    variant: 'minimal',
    size: 'sm',
  },
};

export const Bordered: Story = {
  args: {
    brand: 'DashFlowX',
    items: DEMO_ITEMS,
    variant: 'bordered',
  },
};

export const Sticky: Story = {
  args: {
    brand: 'DashFlowX',
    items: DEMO_ITEMS,
    sticky: true,
  },
};

export const WithTrailing: Story = {
  args: {
    brand: 'DashFlowX',
    items: DEMO_ITEMS,
    trailing: <button type="button" className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white">Sign in</button>,
  },
};
