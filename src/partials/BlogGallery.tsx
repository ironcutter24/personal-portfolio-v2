import type { MDXInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';

import { BlogCard } from '@/partials/BlogCard';

type IBlogGalleryProps = {
  postList: MDXInstance<IFrontmatter>[];
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard instance={elt} key={elt.url} />
    ))}
  </div>
);

export { BlogGallery };
