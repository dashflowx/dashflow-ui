#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function walk(dir) {
  const out = [];
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx)$/.test(ent.name)) out.push(p);
  }
  return out;
}

for (const file of walk(join(root, 'src'))) {
  const src = readFileSync(file, 'utf8');
  if (/from ['"]firebase/.test(src) || /require\(['"]firebase/.test(src)) {
    throw new Error(`@dashflowx/ui must not import Firebase: ${file}`);
  }
}
console.log('U03 ok: no Firebase import in dashflow-ui src');
