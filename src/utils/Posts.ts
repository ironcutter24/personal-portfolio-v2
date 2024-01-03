import type { MDXInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';

export const sortByDate = (posts: MDXInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

// Type guard to check if a value is a string
export const isString = (value: any): value is string =>
  typeof value === 'string';

export const isNotEmpty = (value: any): value is string => value !== '';
