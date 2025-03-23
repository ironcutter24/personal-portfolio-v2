import React from 'react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible = ({ title, children }: CollapsibleProps) => (
  <details
    style={{
      borderLeft: '4px solid #ccc',
      paddingLeft: '10px',
      margin: '6px 0 6px 0',
    }}
  >
    <summary
      className="select-none rounded-md"
      style={{
        cursor: 'pointer',
        backgroundColor: '#1E293B',
        color: '#fff',
        padding: '0.5rem',
      }}
    >
      {title}
    </summary>
    {children}
  </details>
);

export { Collapsible };
