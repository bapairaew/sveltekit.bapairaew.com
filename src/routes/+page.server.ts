import { getPhotos } from '$lib/data/photos';
import { getPosts } from '$lib/data/posts';
import { getProjects } from '$lib/data/projects';

export const load = async () => {
	const [projects, posts, photos] = await Promise.all([
		getProjects().then((projects) => projects.slice(0, 8)),
		getPosts().then((posts) => posts.slice(0, 6)),
		getPhotos().then((photos) => photos.slice(0, 8))
	]);
	return { projects, posts, photos };
};
