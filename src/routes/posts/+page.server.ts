import { getPosts } from '$lib/data/posts';

export const load = async () => {
	return { posts: getPosts() };
};
