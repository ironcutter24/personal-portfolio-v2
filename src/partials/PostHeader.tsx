import { format } from 'date-fns';
import { Fragment } from 'react';

import type { IFrontmatter } from '@/IFrontmatter';

type IPostHeaderProps = {
  content: IFrontmatter;
  author: string;
};

const PostHeader = (props: IPostHeaderProps) => (
  <Fragment>
    <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>
    <div className="mt-2 text-center text-sm text-gray-400">
      {`${format(new Date(props.content.pubDate), 'LLL d, yyyy')}`}
    </div>
  </Fragment>
);

export { PostHeader };
