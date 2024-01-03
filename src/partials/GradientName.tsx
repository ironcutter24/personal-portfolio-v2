import type { ReactNode } from 'react';

type IGradientNameProps = {
  children: ReactNode;
};

const GradientName = (props: IGradientNameProps) => (
  <span className="bg-red-500 bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
    {props.children}
  </span>
);

export { GradientName };
