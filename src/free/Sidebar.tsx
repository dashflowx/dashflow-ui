import { handleNavClick, type NavItem } from './nav';

export type SidebarProps = {
  items: NavItem[];
  onNavigate?: (href: string) => void;
  className?: string;
};

export function Sidebar({ items, onNavigate, className = '' }: SidebarProps) {
  return (
    <aside className={`w-56 shrink-0 border-r border-slate-200 bg-slate-50 p-3 ${className}`} data-testid="sidebar">
      <nav>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={`block rounded px-3 py-2 text-sm ${
                  item.current ? 'bg-white font-medium text-slate-900 shadow-sm' : 'text-slate-600 hover:bg-white hover:text-slate-900'
                }`}
                onClick={(event) => handleNavClick(item.href, onNavigate, event)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
