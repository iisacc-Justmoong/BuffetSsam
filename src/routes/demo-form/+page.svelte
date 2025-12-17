<script>
	let field1 = '';
	let field2 = '';
	let field3 = '';
	let field4 = '';
</script>

<svelte:head>
	<title>Form Demo</title>
</svelte:head>

<main class="form-page">
	<h1>Form Demo</h1>
	<form class="form" on:submit|preventDefault>
		<label class="field">
			<span>Field 1</span>
			<input name="field1" type="text" bind:value={field1} required />
		</label>
		<label class="field">
			<span>Field 2</span>
			<input name="field2" type="text" bind:value={field2} required />
		</label>
		<label class="field">
			<span>Field 3</span>
			<input name="field3" type="text" bind:value={field3} required />
		</label>
		<label class="field">
			<span>Field 4</span>
			<input name="field4" type="text" bind:value={field4} required />
		</label>
		<button type="submit">Submit</button>
	</form>
</main>

<style>
	.form-page {
		display: grid;
		gap: 1.5rem;
		max-width: 560px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
	}

	.form {
		display: grid;
		gap: 1rem;
	}

	.field {
		display: grid;
		gap: 0.5rem;
	}

	input {
		padding: 0.75rem 0.9rem;
		border: 1px solid #cfcfcf;
		border-radius: 8px;
		font: inherit;
	}

	button {
		align-self: start;
		padding: 0.75rem 1.5rem;
		border-radius: 999px;
		border: 1px solid #121212;
		background: #121212;
		color: #fff;
		font: inherit;
		cursor: pointer;
	}
</style>
