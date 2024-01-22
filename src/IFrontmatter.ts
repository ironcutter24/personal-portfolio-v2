export interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  showcase: boolean;
  draft: boolean;
  shields: string[];
}
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type Page<T> = import('astro').Page<T>;
export type MDXInstance<T extends Record<string, any>> =
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  import('astro').MDXInstance<T>;
export type FrontmatterPage = Page<MDXInstance<IFrontmatter>>;
