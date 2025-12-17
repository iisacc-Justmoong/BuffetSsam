<script>
	export let href = '#';
	export let variant = 'solid';

	let className = '';
	export { className as class };

	$: variantClass =
		variant === 'outline' ? 'button--outline' : variant === 'ghost' ? 'button--ghost' : '';
	$: classes = ['button', variantClass, className].filter(Boolean).join(' ');
</script>

<a class={classes} href={href} {...$$restProps}>
	<slot />
</a>
