import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { UI_REGISTRY, assertUniqueRegistryIds, editorPalette, isProEntry } from '../registry';

const coreRegistryPath = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../../dashflowx-core/src/registry.ts'
);

describe('UI_REGISTRY', () => {
  it('has unique ids', () => {
    expect(() => assertUniqueRegistryIds(UI_REGISTRY)).not.toThrow();
    const ids = UI_REGISTRY.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('prefixes ids with ui.', () => {
    expect(UI_REGISTRY.every((e) => e.id.startsWith('ui.'))).toBe(true);
  });

  it('does not collide with CORE_REGISTRY ids', () => {
    expect(existsSync(coreRegistryPath)).toBe(true);
    const coreSrc = readFileSync(coreRegistryPath, 'utf8');
    const coreIds = new Set([...coreSrc.matchAll(/id: '(core\.[^']+)'/g)].map((m) => m[1]));
    expect(coreIds.size).toBeGreaterThan(0);
    for (const entry of UI_REGISTRY) {
      expect(coreIds.has(entry.id)).toBe(false);
    }
  });

  it('splits free vs pro for the editor palette', () => {
    const palette = editorPalette(UI_REGISTRY);
    expect(palette.length).toBe(UI_REGISTRY.length);
    expect(palette.filter(isProEntry).every((e) => e.tier === 'pro')).toBe(true);
    expect(UI_REGISTRY.filter((e) => e.tier === 'free').map((e) => e.id)).toEqual([
      'ui.page-header',
      'ui.empty-state',
      'ui.navbar',
      'ui.footer',
      'ui.sidebar',
    ]);
  });
});
