<script>
	export let value = '';
	export let label = '';

	let className = '';
	export { className as class };
</script>

<div class={`stat ${className}`.trim()} {...$$restProps}>
	<p class="stat__value">{value}</p>
	<p class="stat__label">{label}</p>
</div>
