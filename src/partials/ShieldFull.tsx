import React from 'react';

type IShieldFullProps = {
  url: string;
};

const ShieldFull: React.FC<IShieldFullProps> = ({ url }) => (
  <img
    style={{ float: 'left', margin: '6px 8px 6px 0px' }}
    src={url}
    alt="Shield Image"
  />
);

export { ShieldFull };
