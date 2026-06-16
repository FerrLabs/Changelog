import { readdirSync, readFileSync } from 'node:fs';
import { join, basename } from 'node:path';

const ENTRIES_DIR = 'entries';
const PRODUCTS = ['ferrflow', 'ferrvault', 'ferrtrack', 'ferrgrowth', 'ferrfleet', 'ferrlens', 'ferrlabs'];
const TYPES = ['new', 'fix', 'perf', 'breaking', 'deprecation', 'security'];
const REQUIRED = ['title', 'summary', 'date', 'product', 'type'];
const OPTIONAL = ['prLink', 'docsLink', 'draft'];
const FILENAME_RE = /^(\d{4}-\d{2}-\d{2})-[a-z0-9][a-z0-9-]*\.md$/;

function unquote(value) {
  const v = value.trim();
  if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) {
    return v.slice(1, -1);
  }
  return v;
}

function parseFrontmatter(text, errors) {
  if (!text.startsWith('---')) {
    errors.push('missing frontmatter block (file must start with ---)');
    return null;
  }
  const end = text.indexOf('\n---', 3);
  if (end === -1) {
    errors.push('frontmatter block is not closed with ---');
    return null;
  }
  const block = text.slice(3, end).trim();
  const data = {};
  for (const rawLine of block.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const colon = line.indexOf(':');
    if (colon === -1) {
      errors.push(`malformed frontmatter line (no colon): "${line}"`);
      continue;
    }
    const key = line.slice(0, colon).trim();
    const value = unquote(line.slice(colon + 1).replace(/\s+#.*$/, ''));
    data[key] = value;
  }
  return data;
}

function validateEntry(file) {
  const errors = [];
  const text = readFileSync(join(ENTRIES_DIR, file), 'utf8');
  const fm = parseFrontmatter(text, errors);

  const name = basename(file);
  const fnMatch = FILENAME_RE.exec(name);
  if (!fnMatch) {
    errors.push(`filename must match YYYY-MM-DD-slug.md`);
  }

  if (fm) {
    for (const key of REQUIRED) {
      if (!(key in fm) || fm[key] === '') errors.push(`missing required field: ${key}`);
    }
    for (const key of Object.keys(fm)) {
      if (!REQUIRED.includes(key) && !OPTIONAL.includes(key)) {
        errors.push(`unknown frontmatter field: ${key}`);
      }
    }
    if (fm.product && !PRODUCTS.includes(fm.product)) {
      errors.push(`invalid product "${fm.product}" (allowed: ${PRODUCTS.join(', ')})`);
    }
    if (fm.type && !TYPES.includes(fm.type)) {
      errors.push(`invalid type "${fm.type}" (allowed: ${TYPES.join(', ')})`);
    }
    if (fm.date) {
      const d = new Date(fm.date);
      if (Number.isNaN(d.getTime())) {
        errors.push(`date "${fm.date}" is not a valid ISO-8601 date`);
      } else if (fnMatch && !fm.date.startsWith(fnMatch[1])) {
        errors.push(`filename date ${fnMatch[1]} does not match frontmatter date ${fm.date}`);
      }
    }
  }

  return errors;
}

const files = readdirSync(ENTRIES_DIR).filter((f) => f.endsWith('.md'));
let failed = 0;
for (const file of files.sort()) {
  const errors = validateEntry(file);
  if (errors.length) {
    failed += 1;
    console.error(`✗ entries/${file}`);
    for (const e of errors) console.error(`    - ${e}`);
  }
}

if (failed) {
  console.error(`\n${failed} of ${files.length} changelog ${failed === 1 ? 'entry is' : 'entries are'} invalid.`);
  process.exit(1);
}
console.log(`✓ all ${files.length} changelog entries valid.`);
