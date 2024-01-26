import { Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import type { IFrontmatter } from '@/IFrontmatter';
import { PostHeader } from '@/partials/PostHeader';
import { AppConfig } from '@/utils/AppConfig';

import { PostContent } from './PostContent';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
