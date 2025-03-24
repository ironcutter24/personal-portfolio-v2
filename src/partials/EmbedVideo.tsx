import React from 'react';

type IEmbedVideoProps = {
  url: string;
};

const EmbedVideo: React.FC<IEmbedVideoProps> = (props: IEmbedVideoProps) => (
  <div
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
        frameBorder="0"
        allowFullScreen
        src={props.url}
      ></iframe>
    </div>
  </div>
);

export { EmbedVideo };
