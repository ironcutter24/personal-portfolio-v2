import type { MDXInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { Section } from 'astro-boilerplate-components';

import { BlogGallery } from '@/partials/BlogGallery';
import { GradientText } from '@/partials/GradientText';

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
