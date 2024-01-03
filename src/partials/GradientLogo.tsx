import type { ReactNode } from 'react';

type IGradientLogoProps = {
  icon: ReactNode;
  name: string;
};

const GradientLogo = (props: IGradientLogoProps) => (
  <div className="flex items-center bg-cyan-400 bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
    {props.icon}
    {props.name}
  </div>
);

export { GradientLogo };
