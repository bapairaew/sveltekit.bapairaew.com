<script lang="ts">
	import type { Post } from '$lib/data/posts';
	import PostCard from '$lib/components/contents/posts/PostCard.svelte';

	export let posts: Post[];
</script>

<section class="container mx-auto px-2 py-8">
	<h2 class="font-black text-2xl pb-8">Posts</h2>
	<ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post (post.slug)}
			<li>
				<PostCard {post} />
			</li>
		{/each}
	</ul>
	<a class="w-full text-center block p-4 mt-4" href="/posts">All posts →</a>
</section>
