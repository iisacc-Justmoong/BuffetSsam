import { site } from '$lib/seo/site-data.js';

export const prerender = true;

export function GET() {
	const body = `export const site = ${JSON.stringify(site, null, 2)};\n`;

	return new Response(body, {
		headers: {
			'content-type': 'application/javascript; charset=utf-8'
		}
	});
}
