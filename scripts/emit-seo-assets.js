import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from '../src/lib/seo/page-meta.js';
import { site } from '../src/lib/seo/site-data.js';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(rootDir, 'dist');

await mkdir(distDir, { recursive: true });

const siteBody = `export const site = ${JSON.stringify(site, null, 2)};\n`;
await writeFile(resolve(distDir, 'site.js'), siteBody, 'utf8');

const pagesBody = `export const pages = ${JSON.stringify(pages, null, 2)};\n`;
await writeFile(resolve(distDir, 'menifest.js'), pagesBody, 'utf8');
