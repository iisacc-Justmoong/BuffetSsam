import { pages } from '$lib/seo/page-meta.js';

export const prerender = true;

export function GET() {
	const body = `export const pages = ${JSON.stringify(pages, null, 2)};\n`;

	return new Response(body, {
		headers: {
			'content-type': 'application/javascript; charset=utf-8'
		}
	});
}
