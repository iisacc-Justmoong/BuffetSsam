<script>
	let className = '';
	export { className as class };
</script>

<span class={`badge ${className}`.trim()} {...$$restProps}>
	<slot />
</span>
