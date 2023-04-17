<script>
	import { Container } from 'sveltestrap';
	import Nav from '../../component/Nav.svelte';
	export let data;
	let infos = data.respond;
	let videos = data.videos.results;
</script>

<svelte:head>
	<title>Details - {infos.original_title}</title>
</svelte:head>
<html lang="en" class="h-fit">
	<main class="bg container m-auto overflow-auto">
		<Container>
			<Nav />
			<div class="flex text-center">
				<div>
					{#if infos.poster_path}
						<img
							src={`https://image.tmdb.org/t/p/w500/${infos.poster_path}`}
							class="mx-auto h-fit w-fit items-center rounded-3xl p-4"
							alt="Movie Poster"
						/>
					{:else}
						<img
							src="/default_poster.png"
							class="mx-auto h-fit w-[500px] items-center rounded-3xl p-4"
							alt="Movie Poster"
						/>
					{/if}
				</div>
				<div class="h-fit w-fit text-center">
					<h3 class="p-12 text-center text-2xl font-extrabold underline">{infos.title}</h3>
					<p class="text-center font-comforta text-lg">{infos.overview}</p>
					<div class="mt-7 flex text-center font-bold">
						<p class="p-2">Genres:&nbsp;</p>
						{#each infos.genres as genre}
							<a href={`https://www.google.com/search?q=${genre.name}`} target="about:_blank"
								><p class="h-fit w-fit rounded-lg border p-2">
									{genre.name}
								</p></a
							>
							&nbsp;{/each}
					</div>
					<i class="mt-7 flex p-2 text-left">Popularity: {infos.popularity}</i>
					<i class="mt-7 flex p-2 text-left"
						>Original Language: {infos.original_language === 'en'
							? 'English'
							: infos.original_language}</i
					>
					{#if infos.first_air_date}
						<i class="mt-7 flex p-2 text-left">First Air Date: {infos.first_air_date}</i>
					{/if}
					{#if infos.release_date}
						<i class="mt-7 flex p-2 text-left">Release Date: {infos.release_date}</i>
					{/if}
					{#if infos.production_companies}
						<div class="mt-7 flex gap-9 p-2">
							{#each infos.production_companies as pdc}
								{#if pdc.logo_path}
									<img
										src={`https://image.tmdb.org/t/p/w500/${pdc.logo_path}`}
										alt=""
										class="flex h-[100px] w-[100px]"
									/>
								{:else}
									{pdc.name}
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			</div>
			{#if videos != '' || null || undefined || []}
				<h3 class="p-12 text-center text-2xl font-extrabold underline">
					Official Trailer and related videos
				</h3>
				<div class="ml-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each videos as video}
						<iframe
							width="500"
							height="315"
							src={`https://www.youtube.com/embed/${video.key}`}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						/>
					{/each}
				</div>
			{/if}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
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
