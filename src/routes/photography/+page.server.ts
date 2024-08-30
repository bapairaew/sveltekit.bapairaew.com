import { getPhotos } from '$lib/data/photos';

export const load = async () => {
	const photos = await getPhotos();
	return { photos };
};
