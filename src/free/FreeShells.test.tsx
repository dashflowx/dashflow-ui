import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { EmptyState } from './EmptyState';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { PageHeader } from './PageHeader';
import { Sidebar } from './Sidebar';

afterEach(() => cleanup());

describe('U02 free shells', () => {
  it('renders PageHeader and EmptyState copy', () => {
    render(
      <>
        <PageHeader title="Products" description="Catalog" />
        <EmptyState title="No products yet" />
      </>
    );
    expect(screen.getByTestId('page-header')).toHaveTextContent('Products');
    expect(screen.getByTestId('empty-state')).toHaveTextContent('No products yet');
  });

  it('Navbar and Sidebar compose and onNavigate swallows href (no router)', () => {
    const onNavigate = vi.fn();
    render(
      <div>
        <Navbar brand="DashFlowX" items={[{ href: '/docs', label: 'Docs' }]} onNavigate={onNavigate} />
        <Sidebar items={[{ href: '/orders', label: 'Orders' }]} onNavigate={onNavigate} />
        <Footer columns={[{ heading: 'Product', items: [{ href: '/pricing', label: 'Pricing' }] }]} onNavigate={onNavigate} />
      </div>
    );
    fireEvent.click(screen.getByRole('link', { name: 'Docs' }));
    fireEvent.click(screen.getByRole('link', { name: 'Orders' }));
    fireEvent.click(screen.getByRole('link', { name: 'Pricing' }));
    expect(onNavigate).toHaveBeenCalledTimes(3);
    expect(onNavigate).toHaveBeenCalledWith('/docs');
    expect(onNavigate).toHaveBeenCalledWith('/orders');
    expect(onNavigate).toHaveBeenCalledWith('/pricing');
  });
});
