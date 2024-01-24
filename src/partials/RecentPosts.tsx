import type { MDXInstance } from 'astro';
import { Section } from 'astro-boilerplate-components';

import type { IFrontmatter } from '@/IFrontmatter';

import { BlogGallery } from './BlogGallery';
import { GradientText } from './GradientText';

type IRecentPostsProps = {
  postList: MDXInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Top <GradientText>Projects</GradientText>
          {/* Recent <GradientText>Posts</GradientText> */}
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Projects →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
