import React from 'react';
import { renderToString } from 'react-dom/server';

interface InlineBadgeProps {
  src: string;
  alt: string;
  link?: string;
  children: React.ReactNode;
}

const getSplitTextArray = (children: React.ReactNode): string[] => {
  const str = renderToString(children) as string;
  return str.replace(/<[^>]+>/g, '').split('[[badge]]');
};

const InlineBadge = (props: InlineBadgeProps) => {
  const textArray: string[] = getSplitTextArray(props.children);

  return (
    <span>
      {textArray[0] ? `${textArray[0]} ` : ''}
      <a
        href={props.link}
        style={{
          textDecoration: 'none',
          pointerEvents: props.link ? 'auto' : 'none',
          cursor: props.link ? 'pointer' : 'default',
        }}
      >
        <img
          src={props.src}
          style={{
            display: 'inline-block',
            height: '1.3em',
            margin: '0',
          }}
        />
      </a>
      {textArray[1] ? `${textArray[1]} ` : ' '}
    </span>
  );
};

export { InlineBadge };
