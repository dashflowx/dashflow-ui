/**
 * UI registry (U04). Shape matches docs/projects/registry.ts (F04).
 * Ids must stay unique vs CORE_REGISTRY (`core.*`), forms.*, datagrid.*, auth.*.
 */

export type RegistryTier = 'free' | 'pro';

export type RegistryEntry = {
  id: string;
  title: string;
  tier: RegistryTier;
  editor: boolean;
};

export type ComponentRegistry = readonly RegistryEntry[];

export const UI_REGISTRY = [
  { id: 'ui.page-header', title: 'Page header', tier: 'free', editor: true },
  { id: 'ui.empty-state', title: 'Empty state', tier: 'free', editor: true },
  { id: 'ui.navbar', title: 'Navbar', tier: 'free', editor: true },
  { id: 'ui.footer', title: 'Footer', tier: 'free', editor: true },
  { id: 'ui.sidebar', title: 'Sidebar', tier: 'free', editor: true },
  { id: 'ui.app-shell', title: 'App shell', tier: 'pro', editor: true },
  { id: 'ui.pricing-table', title: 'Pricing table', tier: 'pro', editor: true },
  { id: 'ui.auth-screens', title: 'Auth screen frame', tier: 'pro', editor: true },
] as const satisfies ComponentRegistry;

export function isProEntry(entry: RegistryEntry): boolean {
  return entry.tier === 'pro';
}

export function editorPalette(registry: ComponentRegistry = UI_REGISTRY): RegistryEntry[] {
  return registry.filter((entry) => entry.editor);
}

export function assertUniqueRegistryIds(registry: ComponentRegistry = UI_REGISTRY): void {
  const seen = new Set<string>();
  for (const entry of registry) {
    if (seen.has(entry.id)) {
      throw new Error(`Duplicate registry id: ${entry.id}`);
    }
    seen.add(entry.id);
  }
}

export default UI_REGISTRY;
