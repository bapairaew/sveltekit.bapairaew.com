<script lang="ts">
	import type { Photo } from '$lib/data/photos';
	import PhotoCard from './PhotoCard.svelte';

	export let photos: Photo[];
</script>

<h1 class="text-3xl font-black px-4 py-4">Photography</h1>
<ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
	{#each photos as photo (photo.slug)}
		<li>
			<PhotoCard {photo} />
		</li>
	{/each}
</ul>
