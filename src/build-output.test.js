import { describe, it, expect } from 'vitest';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import config from '../svelte.config.js';
import { compile } from 'svelte/compiler';

describe('build output', () => {
	it('keeps generated framework and SEO assets under build', async () => {
		expect(config.kit.outDir).toBe('build/kit');
		execFileSync(process.execPath, ['scripts/emit-seo-assets.js']);
		expect(await readFile('build/seo/site.js', 'utf8')).toContain('export const site');
		expect(await readFile('build/seo/menifest.js', 'utf8')).toContain('export const pages');
	});
});

describe('portable navigation', () => {
	it('resolves every primary route using SvelteKit paths', async () => {
		const source = await readFile('src/routes/+layout.svelte', 'utf8');
		for (const path of ['/', '/solutions', '/programs', '/process', '/outcomes', '/contact']) {
			expect(source).toContain(`href={resolve('${path}')}`);
		}
		expect(compile(source, { generate: 'server', filename: '+layout.svelte' }).js.code).toContain(
			'resolve'
		);
	});
});
