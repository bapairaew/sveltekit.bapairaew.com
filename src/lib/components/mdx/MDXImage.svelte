<script lang="ts">
	import FilledImage from '$lib/components/images/FilledImage.svelte';

	export let src: string;
	export let alt: string;
	export let title: string;
</script>

<figure>
	<FilledImage {src} {alt} placeholder={title} />
	<figcaption class="text-center">{alt}</figcaption>
</figure>
