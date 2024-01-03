import React from 'react';

type IStoreLinkProps = {
  src: string;
  url: string;
};

const StoreLink: React.FC<IStoreLinkProps> = ({ src, url }) => (
  <a href={url} target="_blank">
    <img
      style={{
        display: 'inline-block',
        height: '36px',
        width: 'auto',
        margin: '0 4px 6px',
      }}
      src={src}
      alt="Store Link"
    />
  </a>
);

export { StoreLink };
