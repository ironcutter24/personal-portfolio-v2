import type { MDXInstance } from 'astro';
import { format } from 'date-fns';

import type { IFrontmatter } from '@/IFrontmatter';
import { isString } from '@/utils/Posts';

import { BlogCardField } from './BlogCardField';
import { Shield } from './Shield';

type IBlogCardProps = {
  instance: MDXInstance<IFrontmatter>;
};

const BlogCard = (props: IBlogCardProps) => (
  <a
    className="transition delay-75 ease-in-out hover:translate-y-1"
    href={props.instance.url}
  >
    <div className="overflow-hidden rounded-md bg-slate-800">
      <div className="aspect-h-9 aspect-w-16 relative">
        <img
          className="h-full w-full object-cover object-center"
          src={props.instance.frontmatter.imgSrc}
          alt={props.instance.frontmatter.imgAlt}
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end px-2">
          {props.instance.frontmatter.shields.map((shieldUrl, _index) =>
            isString(shieldUrl) ? (
              <Shield
                key={_index}
                url={shieldUrl.replace(/-(?![^?]*\?[^-]*-).*?-/, '-')}
              />
            ) : null
          )}
        </div>
      </div>
      <div className="px-3 pb-6 pt-4 text-left">
        <h2 className="text-xl font-semibold">
          {props.instance.frontmatter.title}
        </h2>
        <div className="mt-1 text-xs text-gray-400">
          {format(new Date(props.instance.frontmatter.pubDate), 'LLL yyyy')} -{' '}
          <u>Read more</u>
        </div>
        <div className="mt-2 text-sm">
          <BlogCardField
            title="What I did"
            body={props.instance.frontmatter.contributions}
            join=" "
          />

          <BlogCardField
            title="Studio"
            body={props.instance.frontmatter.studio}
          />

          <BlogCardField
            title="Team size"
            body={props.instance.frontmatter.teamSize}
          />

          <BlogCardField
            title="Platforms"
            body={props.instance.frontmatter.platforms}
            join=" - "
          />

          <BlogCardField
            title="Duration"
            body={props.instance.frontmatter.duration}
          />

          <BlogCardField
            title="Tools"
            body={props.instance.frontmatter.tools}
          />
        </div>
      </div>
    </div>
  </a>
);

export { BlogCard };
