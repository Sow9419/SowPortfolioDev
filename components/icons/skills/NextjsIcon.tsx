import React from 'react';

const NextjsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" className="text-foreground/50"/>
    <path d="M13.2,8.2,9.3,15.8h1.4l1-2.4h3.1l-1,2.4h1.5L18.7,8.2Zm-1.5,5.1,1.4-3.3,1.4,3.3Z" className="text-foreground"/>
  </svg>
);

export default NextjsIcon;
