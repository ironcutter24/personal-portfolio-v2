import React from 'react';

import { isNotEmpty } from '@/utils/Posts';

import { StoreLink } from './StoreLink';

type IStoreLinkBannerProps = {
  gitHubUrl: string;
  playStoreUrl: string;
  itchUrl: string;
};

const StoreLinkBanner: React.FC<IStoreLinkBannerProps> = ({
  gitHubUrl,
  playStoreUrl,
  itchUrl,
}) => (
  <div style={{ width: '100%', textAlign: 'center' }}>
    {isNotEmpty(gitHubUrl) ? (
      <StoreLink
        src="/assets/images/icons/github-mark-white.png"
        url={gitHubUrl}
      />
    ) : null}
    {isNotEmpty(playStoreUrl) ? (
      <StoreLink
        src="/assets/images/icons/google-play-badge.svg"
        url={playStoreUrl}
      />
    ) : null}
    {isNotEmpty(itchUrl) ? (
      <StoreLink
        src="/assets/images/icons/itch-badge-color.svg"
        url={itchUrl}
      />
    ) : null}
  </div>
);

export { StoreLinkBanner };
