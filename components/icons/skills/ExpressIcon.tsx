import React from 'react';

const ExpressIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="12"
      fontWeight="bold"
      fill="currentColor"
      className="text-foreground"
    >
      Express
    </text>
  </svg>
);

export default ExpressIcon;
