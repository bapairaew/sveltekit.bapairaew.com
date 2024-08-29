import { getPhotos } from '$lib/data/cache';

export const load = async () => {
	const photos = await getPhotos();
	return { photos };
};
