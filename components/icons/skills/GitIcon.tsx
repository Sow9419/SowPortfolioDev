import React from 'react';

const GitIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    color="#f1502f"
  >
    <path d="M22 12l-3-3-3 3M2 12l3 3 3-3" />
    <path d="M19 9V7a2 2 0 00-2-2H7a2 2 0 00-2 2v2M5 15v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default GitIcon;
