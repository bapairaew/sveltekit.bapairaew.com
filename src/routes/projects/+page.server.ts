import { getProjects } from '$lib/data/projects';

export const load = async () => {
	const projects = await getProjects();
	return { projects };
};
