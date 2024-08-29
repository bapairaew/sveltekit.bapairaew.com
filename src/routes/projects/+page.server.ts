import { getProjects } from '$lib/data/cache';

export const load = async () => {
	const projects = await getProjects();
	return { projects };
};
