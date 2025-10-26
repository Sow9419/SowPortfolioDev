import React from 'react';

const PostgresqlIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    color="#336791"
  >
    <path d="M12 13V21M12 13C15.3137 13 18 10.3137 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 10.3137 8.68629 13 12 13Z" />
    <path d="M6 8.5C6 8.5 6.5 10 8 11C9.5 12 12 12 12 12" />
    <path d="M13.5 4C13.5 4 15 4.5 16 6C17 7.5 17 9 17 9" />
  </svg>
);

export default PostgresqlIcon;
