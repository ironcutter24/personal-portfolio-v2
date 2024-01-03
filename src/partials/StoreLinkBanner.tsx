import React from 'react';

import { StoreLink } from './StoreLink';

type IStoreLinkBannerProps = {
  gitHubUrl: string;
  playStoreUrl: string;
  itchUrl: string;
};

// Type guard to check if a value is a string
const isString = (value: any): value is string => typeof value === 'string';

const StoreLinkBanner: React.FC<IStoreLinkBannerProps> = ({
  gitHubUrl,
  playStoreUrl,
  itchUrl,
}) => (
  <div style={{ width: '100%', textAlign: 'center' }}>
    {isString(gitHubUrl) ? (
      <StoreLink
        src="/assets/images/icons/github-mark-white.png"
        url={gitHubUrl}
      />
    ) : null}
    {isString(playStoreUrl) ? (
      <StoreLink
        src="/assets/images/icons/google-play-badge.svg"
        url={playStoreUrl}
      />
    ) : null}
    {isString(itchUrl) ? (
      <StoreLink
        src="/assets/images/icons/itch-badge-color.svg"
        url={itchUrl}
      />
    ) : null}
  </div>
);

export { StoreLinkBanner };
