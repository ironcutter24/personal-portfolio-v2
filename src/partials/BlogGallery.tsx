import type { MDXInstance } from 'astro';

import type { IFrontmatter } from '@/IFrontmatter';

import { BlogCard } from './BlogCard';

type IBlogGalleryProps = {
  postList: MDXInstance<IFrontmatter>[];
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {props.postList.map((elt) => (
      <BlogCard instance={elt} key={elt.url} />
    ))}
  </div>
);

export { BlogGallery };
