import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'UI/Free/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'light', 'bordered', 'muted'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    align: {
      control: 'select',
      options: ['left', 'center'],
    },
    showBrand: { control: 'boolean' },
    showCopyright: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;

const DEMO_COLUMNS = [
  {
    heading: 'Product',
    items: [
      { href: '/docs', label: 'Docs' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    heading: 'Company',
    items: [{ href: '/about', label: 'About' }],
  },
];

export const Default: Story = {
  args: {
    brand: 'DashFlowX',
    columns: DEMO_COLUMNS,
    variant: 'default',
    size: 'md',
    align: 'left',
    onNavigate: () => undefined,
  },
};

export const Light: Story = {
  args: {
    brand: 'DashFlowX',
    columns: DEMO_COLUMNS,
    variant: 'light',
  },
};

export const Minimal: Story = {
  args: {
    brand: 'DashFlowX',
    columns: DEMO_COLUMNS,
    variant: 'minimal',
    size: 'sm',
  },
};

export const Bordered: Story = {
  args: {
    brand: 'DashFlowX',
    columns: DEMO_COLUMNS,
    variant: 'bordered',
  },
};

export const NoBrand: Story = {
  args: {
    columns: DEMO_COLUMNS,
    showBrand: false,
  },
};
