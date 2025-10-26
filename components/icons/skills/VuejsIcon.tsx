import React from 'react';

const VuejsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 1.5l-12 21-12-21h7.5l4.5 9 4.5-9z" fill="#42b883" />
    <path d="M19.5 1.5l-7.5 13-7.5-13h4.5l3 6 3-6z" fill="#35495e" />
  </svg>
);

export default VuejsIcon;
