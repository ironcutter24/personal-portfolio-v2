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
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
        }}
        allow="autoplay; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        src={props.url}
      ></iframe>
    </div>
  </div>
);

export { EmbedVideo };
