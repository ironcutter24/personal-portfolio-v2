import type { MDXInstance } from 'astro';

import type { IFrontmatter } from '@/IFrontmatter';

export const sortByDate = (posts: MDXInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

export const excludeDrafts = (posts: MDXInstance<IFrontmatter>[]) => {
  return posts.filter((item) => item.frontmatter.draft !== true);
};

export const getShowcase = (posts: MDXInstance<IFrontmatter>[]) => {
  return posts.filter((item) => item.frontmatter.showcase === true);
};

// Type guard to check if a value is a string
export const isString = (value: any): value is string =>
  typeof value === 'string';

export const isNotEmpty = (value: any): value is string => value !== '';
