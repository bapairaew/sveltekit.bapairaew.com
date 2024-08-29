<script>
	import '../app.css';
	import RootNavigation from '$lib/components/navigations/RootNavigation.svelte';
</script>

<RootNavigation />
<slot />
<footer class="flex text-neutral-500 justify-end container mx-auto p-4">
	© {new Date().getFullYear()} Narudom Techaval
</footer>
