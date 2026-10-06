#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'src/registry.ts'), 'utf8');
const ids = [...src.matchAll(/id: '(ui\.[^']+)'/g)].map((m) => m[1]);
const unique = new Set(ids);
if (unique.size !== ids.length) {
  throw new Error(`Duplicate ui registry ids: ${ids.length} vs ${unique.size}`);
}
if (ids.length < 8) {
  throw new Error('UI_REGISTRY must list free + pro rows');
}
if (ids.some((id) => !id.startsWith('ui.'))) {
  throw new Error('UI ids must start with ui.');
}

function otherIds(rel, prefix) {
  const file = join(root, rel);
  if (!existsSync(file)) return [];
  const other = readFileSync(file, 'utf8');
  return [...other.matchAll(new RegExp(`id: '(${prefix}\\.[^']+)'`, 'g'))].map((m) => m[1]);
}

for (const [rel, prefix] of [
  ['../dashflowx-core/src/registry.ts', 'core'],
  ['../dashflow-forms/src/registry.ts', 'forms'],
  ['../dashflow-datagrid/src/registry.ts', 'datagrid'],
  ['../dashflowx-auth/src/registry.ts', 'auth'],
]) {
  const overlap = ids.filter((id) => new Set(otherIds(rel, prefix)).has(id));
  if (overlap.length) {
    throw new Error(`Registry id overlap with ${prefix}: ${overlap.join(', ')}`);
  }
}

console.log(`U04 ok: ${ids.length} ui registry rows, unique vs core/forms/datagrid/auth`);
