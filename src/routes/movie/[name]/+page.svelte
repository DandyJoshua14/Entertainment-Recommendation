<script>
	import Home from '../../component/Home.svelte';

	export let data;
	// @ts-ignore
	let response = data.respond.results;
	let movies = data.movies.results;
	let results = [...movies, ...response];
	let searchterm = '';
</script>

<svelte:head>
	<title>{response || movies ? 'Search' : '404 - Page Not Found'}</title>
</svelte:head>
<body>
	{#if results}
		<Home values={results} />
	{:else}
		<div class="container">
			<h1>404</h1>
			<p>Oops! The page you're looking for cannot be found.</p>
			<div class="error-code">404</div>
			<a href="/" class="btn">Go Back Home</a>
		</div>
	{/if}
</body>

<style>
	body {
		background-color: #f8f8f8;
		font-family: Arial, sans-serif;
		text-align: center;
	}

	.container {
		margin: 0 auto;
		max-width: 600px;
		padding: 20px;
	}

	h1 {
		font-size: 4rem;
		margin-bottom: 0;
	}

	p {
		font-size: 1.5rem;
		margin-top: 0;
	}

	.error-code {
		font-size: 10rem;
		margin-top: 2rem;
		color: #ff7f50;
		animation: shake 0.5s ease-in-out infinite;
	}

	@keyframes shake {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-20px);
		}
		50% {
			transform: translateX(20px);
		}
		75% {
			transform: translateX(-10px);
		}
		100% {
			transform: translateX(0);
		}
	}

	.btn {
		display: inline-block;
		background-color: #ff7f50;
		color: #fff;
		padding: 10px 20px;
		border-radius: 5px;
		text-decoration: none;
		margin-top: 2rem;
		font-size: 1.5rem;
		transition: background-color 0.3s ease-in-out;
	}

	.btn:hover {
		background-color: #e65c00;
	}
</style>
