import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@dashflowx/core';
import { PageHeader } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'UI/Free/PageHeader',
  component: PageHeader,
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'Products',
    description: 'Manage the catalog shown on the storefront.',
    action: <Button variant="primary">Add product</Button>,
  },
};
