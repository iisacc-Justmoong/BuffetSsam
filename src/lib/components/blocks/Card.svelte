<script>
	export let tag = '';
	export let title = '';
	export let meta = '';
	export let items = [];

	let className = '';
	export { className as class };
</script>

<article class={`card ${className}`.trim()} {...$$restProps}>
	<span class="tag">{tag}</span>
	<h3 class="card__title">{title}</h3>
	<p class="card__meta">{meta}</p>
	{#if items.length}
		<ul class="card__list">
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>
	{/if}
</article>
