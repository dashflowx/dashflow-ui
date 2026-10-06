import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@dashflowx/core';
import { PageHeader } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'UI/Free/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'muted', 'flush', 'stacked'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    align: {
      control: 'select',
      options: ['left', 'center'],
    },
    tone: {
      control: 'select',
      options: ['default', 'muted', 'subtle'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'Products',
    description: 'Manage the catalog shown on the storefront.',
    action: <Button variant="primary">Add product</Button>,
    variant: 'default',
    size: 'md',
    align: 'left',
    tone: 'default',
  },
};

export const Bordered: Story = {
  args: {
    title: 'Orders',
    description: 'Track fulfillment status.',
    variant: 'bordered',
    action: <Button variant="outline">Export</Button>,
  },
};

export const Muted: Story = {
  args: {
    title: 'Customers',
    description: 'Soft surface behind the header.',
    variant: 'muted',
  },
};

export const Stacked: Story = {
  args: {
    title: 'Analytics',
    description: 'Centered stacked layout with an action below.',
    variant: 'stacked',
    action: <Button variant="primary">Open report</Button>,
  },
};

export const Large: Story = {
  args: {
    title: 'Projects',
    description: 'Larger title scale.',
    size: 'lg',
  },
};
