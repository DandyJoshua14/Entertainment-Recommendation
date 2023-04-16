<script>
	import { Button, Container, Icon } from 'sveltestrap';
	import { Modal, ModalHeader, ModalBody, ModalFooter } from 'sveltestrap';
	import { fly, fade } from 'svelte/transition';
	import Nav from './Nav.svelte';
	let isOpen = false;
	const trailerUrl = ``;
	function toggleModal() {
		isOpen = !isOpen;
	}
	/**
	 * @type {any}
	 */
	export let values;
	/**
	 * @type {number}
	 */
	let screenWidth;
	let mode = '';
	let maxLength = 10;
	let active = false;
	let numbers = 1;
	function enabledm() {
		if (mode === 'dark') {
			mode = '';
		} else {
			mode = 'dark';
		}
	}
</script>

<html lang="en">
	<main class="bg container m-auto overflow-auto">
		<Container>
			<Nav />
			<div
				class="h-fit items-center overflow-hidden py-[50px] text-center"
				in:fly={{ y: 200, duration: 2000 }}
				out:fade
			>
				<h1 class="text-center text-4xl font-bold">Movies</h1>
				<br />
				<div
					class="mx-auto grid grid-cols-1 items-center gap-x-64 overflow-hidden px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pr-32 xl:grid-cols-4"
				>
					{#each values as value}
						<a href={`/details/${value.id}`} target="about:_blank">
							<div
								class="grids my-8 mr-11 w-fit cursor-pointer items-center justify-items-center bg-transparent p-[20px] text-center text-white transition duration-500 ease-in-out hover:scale-105"
							>
								{#if value.poster_path}
									<img
										src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`}
										class="mx-auto h-full w-fit items-center rounded-3xl p-4"
										alt="Movie Poster"
									/>
								{:else}
									<img
										src="/default_poster.png"
										class="mx-auto h-fit w-[500px] items-center rounded-3xl p-4"
										alt="Movie Poster"
									/>
								{/if}
								{#if value.title || value.original_title || value.name}
									<h3 class="w-64 break-words font-bold">
										{value.title || value.original_title || value.name}
									</h3>
								{:else}
									<h3 class="w-64 break-words font-bold">Movie Title</h3>
								{/if}
							</div>
						</a>
					{/each}
				</div>
				<br />
				<br />
			</div>
		</Container>
	</main>
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
