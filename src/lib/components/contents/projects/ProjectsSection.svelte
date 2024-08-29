<script lang="ts">
	import ProjectCard from '$lib/components/contents/projects/ProjectCard.svelte';
	import type { Project } from '$lib/data/projects';
	export let projects: Project[];
</script>

<section class="container mx-auto px-2 py-8">
	<h2 class="font-black text-2xl pb-8">Projects</h2>
	<ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
		{#each projects as project (project.slug)}
			<li>
				<ProjectCard {project} />
			</li>
		{/each}
	</ul>
	<a class="w-full text-center block p-4 mt-4" href="/projects"> All projects → </a>
</section>
