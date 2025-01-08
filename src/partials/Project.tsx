import type { ReactNode } from 'react';

type IProjectProps = {
  name: string;
  description: string;
  link: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <a
    className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 transition delay-75 ease-in-out hover:translate-x-1 md:flex-row"
    href={props.link}
    target="_Blank"
  >
    {/*
    <div className="shrink-0">
      <a href={props.link}>
        <img
          className="h-36 w-36 hover:translate-y-1"
          src={props.img.src}
          alt={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>
    */}
    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <div className="text-xl font-semibold">{props.name}</div>
        <div className="ml-3 gap-2">{props.category}</div>
      </div>
      <p className="mt-3 text-gray-400">{props.description}</p>
    </div>
  </a>
);

export { Project };
