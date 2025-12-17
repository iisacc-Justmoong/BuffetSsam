<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { site } from '$lib/seo/site.js';

	export let data;

	$: seo = data?.seo ?? {};
	$: title = seo.title ? `${seo.title} | ${site.name}` : site.name;
	$: description = seo.description ?? site.description;
	$: canonical = site.url && seo.path ? `${site.url}${seo.path}` : site.url;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content={site.themeColor} />
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if canonical}
		<meta property="og:url" content={canonical} />
	{/if}
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={site.locale} />
</svelte:head>

<main class="page" id="top">
	<header class="topbar">
		<a class="brand" href="/">
			<span class="brand__mark">E</span>
			<span class="brand__text">
				<span class="brand__name">버핏쌤의 에듀컨설팅</span>
				<span class="brand__meta">Education Consulting</span>
			</span>
		</a>
		<nav class="nav">
			<a href="/solutions">솔루션</a>
			<a href="/programs">프로그램</a>
			<a href="/process">프로세스</a>
			<a href="/outcomes">성과</a>
		</nav>
		<Button variant="outline" href="/contact">상담 예약</Button>
	</header>

	<slot />

	<footer class="footer">
		<span>ⓒ 2025 에듀브릿지 컨설팅. All rights reserved.</span>
		<span>사업자등록번호 000-00-00000</span>
		<a href="#top">맨 위로</a>
	</footer>
</main>
