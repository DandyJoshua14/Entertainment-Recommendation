<script>
	import { Button } from 'sveltestrap';
	/**
	 * @type {number}
	 */
	export let pagenum;
	async function next() {
		location.href = `/movies/${pagenum + 1}`;
	}
	async function prev() {
		location.href = `/movies/${pagenum - 1}`;
	}
</script>

<main>
	{#if pagenum >= 2}
		<div class="flex justify-between p-12 text-center font-extrabold">
			<Button on:click={prev} class="rounded-lg bg-red-600 p-3" color="primary">Previous</Button>
			<Button on:click={next} class="w-[100px] rounded-lg bg-green-600 p-3" color="primary"
				>Next</Button
			>
		</div>
	{:else}
		<div class="min-w-fit text-center font-extrabold">
			<Button on:click={next} color="success" class="w-[100px] rounded-lg bg-green-600 p-3"
				>Next</Button
			>
		</div>
	{/if}
	<div class="p-12 text-center text-lg font-extrabold text-black">Page {pagenum}</div>
</main>
