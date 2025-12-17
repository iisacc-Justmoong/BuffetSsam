<script>
	export let title = '';
	export let text = '';
	export let items = [];
	export let accent = false;

	let className = '';
	export { className as class };

	$: classes = ['panel', accent ? 'panel--accent' : '', className].filter(Boolean).join(' ');
</script>

<div class={classes} {...$$restProps}>
	<h3 class="panel__title">{title}</h3>
	<p class="panel__text">{text}</p>
	{#if items.length}
		<ul class="list">
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>
	{/if}
</div>
