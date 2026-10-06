import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		outDir: 'build/kit',
		adapter: adapter()
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
