import { getPosts } from '$lib/data/posts';

export const load = async () => {
	const posts = await getPosts();
	return { posts };
};
