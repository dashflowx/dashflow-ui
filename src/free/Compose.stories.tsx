import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { PageHeader } from './PageHeader';
import { Sidebar } from './Sidebar';
import type { NavItem } from './nav';

const NAV: NavItem[] = [
  { href: '/docs', label: 'Docs' },
  { href: '/pricing', label: 'Pricing' },
];

const SIDE: NavItem[] = [
  { href: '/overview', label: 'Overview' },
  { href: '/orders', label: 'Orders' },
  { href: '/settings', label: 'Settings' },
];

function Shell() {
  const [path, setPath] = useState('/overview');
  return (
    <div className="min-h-[480px] bg-white" data-testid="ui-compose">
      <Navbar
        brand="DashFlowX"
        items={NAV.map((item) => ({ ...item, current: item.href === path }))}
        onNavigate={setPath}
      />
      <div className="flex min-h-[320px]">
        <Sidebar items={SIDE.map((item) => ({ ...item, current: item.href === path }))} onNavigate={setPath} />
        <main className="flex-1 p-6">
          <PageHeader title={path.replace('/', '') || 'home'} description="Navbar and Sidebar share onNavigate. No router." />
          <EmptyState title={`Route ${path}`} description="Clicks stay inside Storybook." />
        </main>
      </div>
      <Footer onNavigate={setPath} columns={[{ heading: 'Product', items: NAV }]} />
    </div>
  );
}

const meta: Meta<typeof Shell> = {
  title: 'UI/Free/Compose',
  component: Shell,
};
export default meta;
type Story = StoryObj<typeof Shell>;

export const NavbarAndSidebar: Story = {};
