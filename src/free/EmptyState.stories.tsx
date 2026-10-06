import { Button } from '@dashflowx/core';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'UI/Free/EmptyState',
  component: EmptyState,
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No products yet',
    description: 'Create the first SKU to populate this list.',
    action: <Button variant="primary">Create product</Button>,
  },
};
