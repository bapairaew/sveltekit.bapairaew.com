import { getPhotos, getPosts, getProjects } from '$lib/data/cache';

export const load = async () => {
	return {
		projects: getProjects().then((projects) => projects.slice(0, 8)),
		posts: getPosts().then((posts) => posts.slice(0, 6)),
		photos: getPhotos().then((photos) => photos.slice(0, 8))
	};
};
