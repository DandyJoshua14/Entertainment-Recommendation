<script lang="js">
	import Home from '../../component/Home.svelte';
	import Pagination from '../../component/Pagination.svelte';
	export let data;
	let page = parseInt(data.numOfPage);
	let value = data.respond.results;
	let filtered = value;
	let searchTerm = '';
	async function search() {}
</script>

<main>
	<Home values={filtered} />
	<Pagination pagenum={page} />
</main>

<style>
	main {
		background-color: #444654;
		font-family: 'Muli', sans-serif;
		background-repeat: no-repeat;
		color: whitesmoke;
		scroll-behavior: smooth;
	}
</style>
