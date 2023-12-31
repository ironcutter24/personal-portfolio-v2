import React from 'react';

type IStoreLinkProps = {
  src: string;
  url: string;
};

const StoreLink: React.FC<IStoreLinkProps> = ({ src, url }) => (
  <a href={url} target="_blank">
    <img
      src={src}
      alt="Store Link"
      style={{
        float: 'right',
        height: '36px',
        width: 'auto',
        margin: '0 4px 6px',
      }}
    />
  </a>
);

export { StoreLink };
