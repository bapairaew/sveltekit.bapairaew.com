import path from 'path';
import { type GrayMatterFileWithPath, getMarkdownFrontMatter } from './markdown';
import postsCache from '../../../.cache/posts.json';

export type Post = {
	slug: string;
	title: string;
	description: string;
	keywords: string;
	publishedTime: string;
	modifiedTime: string;
	content: string;
};

const parsePost = (post: GrayMatterFileWithPath): Post => {
	return {
		slug: path.parse(post.path).name,
		title: post.data.title,
		description: post.data.description,
		keywords: post.data.keywords,
		publishedTime: post.data.publishedTime,
		modifiedTime: post.data.modifiedTime,
		content: post.content
	};
};

const getPostsPath = (slug = '*') => {
	return path.join(process.cwd(), `static/posts/${slug}.mdx`);
};

export const getPosts = async (slug?: string) => {
	if (postsCache) return postsCache as Post[];
	const pattern = getPostsPath(slug);
	const posts = (await getMarkdownFrontMatter(pattern))
		.map(parsePost)
		.filter((x) => x.publishedTime)
		.reverse();
	return posts as Post[];
};
