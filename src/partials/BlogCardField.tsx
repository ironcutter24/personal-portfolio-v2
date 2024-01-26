import React from 'react';

interface IBlogCardFieldProps {
  title: string;
  body: string | string[];
  join?: string;
}

const BlogCardField: React.FC<IBlogCardFieldProps> = (props) =>
  props.body && (
    <p className="pt-1">
      <b>{props.title}:</b>{' '}
      {Array.isArray(props.body)
        ? props.body.join(props.join || '')
        : props.body}
    </p>
  );

export { BlogCardField };
