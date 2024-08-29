<script lang="ts">
	import type { Photo } from '$lib/data/photos';
	import PhotoCard from './PhotoCard.svelte';

	export let photos: Photo[];
</script>

<section class="container mx-auto px-2 py-8">
	<h2 class="font-black text-2xl pb-8">Photography</h2>
	<ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
		{#each photos as photo (photo.slug)}
			<li>
				<PhotoCard {photo} />
			</li>
		{/each}
	</ul>
	<a class="w-full text-center block p-4 mt-4" href="/photography"> All photography → </a>
</section>
