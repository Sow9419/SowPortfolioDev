import React from 'react';

const TailwindIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    color="#38b2ac"
  >
    <path d="M12 12c-3.333 3.333-6.667 2.5-10-2.5 3.333 5 6.667 5.833 10 2.5zM12 12c3.333-3.333 6.667-2.5 10 2.5-3.333-5-6.667-5.833-10-2.5zM12 12c3.333 3.333 2.5 6.667-2.5 10 5-3.333 5.833-6.667 2.5-10zM12 12c-3.333-3.333-2.5-6.667 2.5-10-5 3.333-5.833 6.667-2.5 10z"></path>
  </svg>
);

export default TailwindIcon;
