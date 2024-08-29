import photos from '../../../.cache/photos.json';
import posts from '../../../.cache/posts.json';
import projects from '../../../.cache/projects.json';

export const getPhotos = async (slug?: string) =>
	slug ? photos.filter((p) => p.slug === slug) : photos;
export const getPosts = async (slug?: string) =>
	slug ? posts.filter((p) => p.slug === slug) : posts;
export const getProjects = async (slug?: string) =>
	slug ? projects.filter((p) => p.slug === slug) : projects;
