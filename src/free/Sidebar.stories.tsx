import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Free/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'dark', 'bordered', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    width: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

const DEMO_ITEMS = [
  { href: '/overview', label: 'Overview', current: true },
  { href: '/orders', label: 'Orders' },
  { href: '/settings', label: 'Settings' },
];

export const Default: Story = {
  args: {
    items: DEMO_ITEMS,
    variant: 'default',
    size: 'md',
    width: 'md',
    onNavigate: () => undefined,
  },
};

export const Dark: Story = {
  args: {
    items: DEMO_ITEMS,
    variant: 'dark',
    title: 'Workspace',
  },
};

export const Bordered: Story = {
  args: {
    items: DEMO_ITEMS,
    variant: 'bordered',
    title: 'Navigate',
  },
};

export const Narrow: Story = {
  args: {
    items: DEMO_ITEMS,
    width: 'sm',
    size: 'sm',
  },
};

export const WithTitle: Story = {
  args: {
    items: DEMO_ITEMS,
    title: 'Menu',
  },
};
