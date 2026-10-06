import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'UI/Free/Footer',
  component: Footer,
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    brand: 'DashFlowX',
    columns: [
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
    ],
    onNavigate: () => undefined,
  },
};
