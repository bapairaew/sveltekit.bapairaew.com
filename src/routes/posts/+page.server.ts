import { getPosts } from '$lib/data/cache';

export const load = async () => {
	const posts = await getPosts();
	return { posts };
};
