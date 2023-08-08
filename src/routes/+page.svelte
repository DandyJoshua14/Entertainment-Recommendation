<script lang="ts">
	import { Button } from 'sveltestrap';
	import Home from './component/Home.svelte';
	import Pagination from './component/Pagination.svelte';
	import { onMount } from 'svelte';

	let screenWidth: any;
	export let data;
	let value = data.movies.results;
	onMount(() => {
		console.log(value);
	});
	let filtered = value;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Movie Recommendation Site From E-Hub" />
</svelte:head>
<svelte:window bind:innerWidth={screenWidth} />
<html lang="en">
	<Home values={filtered} />
	<Pagination pagenum={1} />
</html>

<style>
	html {
		background-color: #444654;
		font-family: 'Muli', sans-serif;
		background-repeat: no-repeat;
		color: whitesmoke;
		scroll-behavior: smooth;
	}
</style>
