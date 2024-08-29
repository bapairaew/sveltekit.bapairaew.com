<script lang="ts">
	import PostCard from '$lib/components/contents/posts/PostCard.svelte';
	import type { Post } from '$lib/data/posts';
	export let posts: Post[];
</script>

<h1 class="text-3xl font-black px-4 py-4">Posts</h1>
<ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-3">
	{#each posts as post (post.slug)}
		<li>
			<PostCard {post} />
		</li>
	{/each}
</ul>
