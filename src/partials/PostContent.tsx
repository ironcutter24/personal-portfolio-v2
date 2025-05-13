import type { ReactNode } from 'react';

import type { IFrontmatter } from '@/IFrontmatter';

import { EmbedVideo } from './EmbedVideo';

type IPostContentProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const PostContent = (props: IPostContentProps) => (
  <>
    <div className="mx-auto mt-5 max-w-prose">
      <div className="aspect-h-9 aspect-w-16">
        {props.content.videoUrl ? (
          <EmbedVideo url={props.content.videoUrl} />
        ) : (
          <img
            className="size-full rounded-lg object-cover object-center"
            src={props.content.imgSrc}
            alt={props.content.imgAlt}
            loading="lazy"
          />
        )}
      </div>
      <div className="prose prose-invert mt-8 prose-img:rounded-lg">
        {props.children}
      </div>
    </div>
  </>
);

export { PostContent };
