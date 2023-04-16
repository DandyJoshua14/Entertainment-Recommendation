<script lang="ts">
	import { Button } from 'sveltestrap';
	import Home from './component/Home.svelte';
	import Pagination from './component/Pagination.svelte';
	import { movies } from '../store';
	let screenWidth: any;
	export let data;
	let mode = '';
	let maxLength = 10;
	let active = false;
	let numbers = 1;
	let value = data.movies.results;
	$movies = value;
	let searchTerms = '';
	function handleToggle() {
		if (active === true) {
			active = false;
		} else {
			active = true;
		}
	}
	function enabledm() {
		if (mode === 'dark') {
			mode = '';
		} else {
			mode = 'dark';
		}
	}

	let filtered = value;
</script>

<svelte:head>
	<title>Home</title>
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
