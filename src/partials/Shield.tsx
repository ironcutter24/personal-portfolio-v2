import React from 'react';

type IShieldProps = {
  url: string;
};

const Shield: React.FC<IShieldProps> = ({ url }) => (
  <img
    style={{ float: 'left', margin: '6px 8px 6px 0px' }}
    src={`https://img.shields.io/badge/${url}`}
    alt="Shield Image"
  />
);

export { Shield };
