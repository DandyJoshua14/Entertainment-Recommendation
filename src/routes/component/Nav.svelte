<script>
	let searchTerm = '';
	async function search() {
		window.location.href = `../movie/${searchTerm}`;
	}
</script>

<nav class="flex items-center justify-between bg-transparent p-4">
	<div class="mr-1 items-center text-white sm:mr-1 md:mr-2">
		<a href="/">
			<img
				class="width-[50px] h-[50px] rounded-[100%] md:mr-[200px] lg:mr-[500px]"
				src="/logo.jpeg"
				alt="Logo"
			/>
		</a>
	</div>
	<div class="text-sm lg:flex-grow">
		<form on:submit={search}>
			<input
				class="searchQery block w-8/12 appearance-none rounded-full border border-solid bg-transparent py-2 px-4 leading-normal focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 "
				type="text"
				id="search"
				name="search"
				bind:value={searchTerm}
				placeholder="Search"
			/>
		</form>
	</div>
	<div class="relative">
		<button
			class="relative z-10 block rounded-md border border-solid bg-transparent p-2 focus:border-solid focus:outline-none focus:ring-2 focus:ring-blue-600"
		>
			Genres
		</button>
	</div>
</nav>
