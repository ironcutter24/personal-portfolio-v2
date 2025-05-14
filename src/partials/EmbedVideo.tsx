import React from 'react';

type IEmbedVideoProps = {
  url: string;
};

const EmbedVideo: React.FC<IEmbedVideoProps> = (props: IEmbedVideoProps) => (
  <div
    className="overflow-hidden rounded-lg"
    style={{
      maxWidth: '560px',
      margin: '0px auto',
    }}
  >
    <div
      style={{
        position: 'relative',
        paddingBottom: '56%',
        height: '0px',
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          transform: 'scale(1.01)',
          transformOrigin: 'center center',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
        }}
        allow="autoplay; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        src={`${props.url}${
          props.url.includes('player.vimeo.com')
            ? '?autoplay=1&background=0&transparent=0&title=0&byline=0&portrait=0&muted=1'
            : ''
        }`}
      ></iframe>
    </div>
  </div>
);

export { EmbedVideo };
