import React from 'react';

const FigmaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#2c2c2c" />
    <path d="M8.25 18a2.25 2.25 0 002.25-2.25v-3H8.25a2.25 2.25 0 000 4.5z" fill="#0acf83" />
    <path d="M8.25 10.5a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5h-3a2.25 2.25 0 01-2.25-2.25z" fill="#a259ff" />
    <path d="M8.25 6A2.25 2.25 0 0110.5 3.75a2.25 2.25 0 012.25 2.25v3a2.25 2.25 0 11-4.5 0v-3z" fill="#f24e1e" />
    <path d="M15.75 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill="#ff7262" />
    <path d="M13.5 6a2.25 2.25 0 002.25-2.25A2.25 2.25 0 0013.5 1.5a2.25 2.25 0 000 4.5z" fill="#1abcfe" />
  </svg>
);

export default FigmaIcon;
