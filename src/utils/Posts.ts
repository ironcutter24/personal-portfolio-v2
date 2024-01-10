import type { MDXInstance } from 'astro';

import type { IMarkdownMeta } from '@/IMarkdownMeta';

export const sortByDate = (posts: MDXInstance<IMarkdownMeta>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

export const excludeDrafts = (posts: MDXInstance<IMarkdownMeta>[]) => {
  return posts.filter((item) => item.frontmatter.draft !== true);
};

export const getShowcase = (posts: MDXInstance<IMarkdownMeta>[]) => {
  return posts.filter((item) => item.frontmatter.showcase === true);
};

// Type guard to check if a value is a string
export const isString = (value: any): value is string =>
  typeof value === 'string';

export const isNotEmpty = (value: any): value is string => value !== '';
