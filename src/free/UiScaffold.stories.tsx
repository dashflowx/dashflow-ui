import type { Meta, StoryObj } from '@storybook/react';
import { UiScaffold } from './UiScaffold';

const meta: Meta<typeof UiScaffold> = {
  title: 'UI/Scaffold',
  component: UiScaffold,
};

export default meta;
type Story = StoryObj<typeof UiScaffold>;

export const Placeholder: Story = {};
