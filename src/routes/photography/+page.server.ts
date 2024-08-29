import { getPhotos } from '$lib/data/photos';
import { getPosts } from '$lib/data/posts';

export const load = async () => {
	const photos = await getPhotos();
	return { photos };
};
