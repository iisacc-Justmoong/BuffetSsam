import { pages } from '$lib/seo/page-meta.js';

export const prerender = true;

export const load = () => ({
	seo: pages.home
});
