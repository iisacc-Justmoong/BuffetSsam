import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const prerender = false;

const TO_EMAIL = 'andudyun0504@gmail.com';

const buildTransporter = () => {
	const host = env.SMTP_HOST;
	const port = Number(env.SMTP_PORT ?? 587);
	const user = env.SMTP_USER;
	const pass = env.SMTP_PASS;
	const from = env.SMTP_FROM ?? user;

	if (!host || !user || !pass || !from) {
		throw new Error('Missing SMTP configuration');
	}

	return {
		transporter: nodemailer.createTransport({
			host,
			port,
			secure: env.SMTP_SECURE === 'true' || port === 465,
			auth: { user, pass }
		}),
		from
	};
};

export const POST = async ({ request }) => {
	let payload = {};
	try {
		payload = await request.json();
	} catch {
		payload = {};
	}

	const { name = '', company = '', email = '', topic = '', detail = '' } = payload ?? {};

	if (!name || !company || !topic) {
		return json({ ok: false, error: 'Missing required fields' }, { status: 400 });
	}

	const text = [
		'New consultation request',
		'',
		`Name: ${name}`,
		`Education: ${company}`,
		`Phone: ${email || '-'}`,
		`Preferred time: ${topic}`,
		'',
		'Detail:',
		detail || '-'
	].join('\n');

	try {
		const { transporter, from } = buildTransporter();
		await transporter.sendMail({
			to: TO_EMAIL,
			from,
			subject: `Consultation request - ${name}`,
			text
		});

		return json({ ok: true });
	} catch (error) {
		console.error('Email send failed', error);
		return json({ ok: false, error: 'Send failed' }, { status: 500 });
	}
};
