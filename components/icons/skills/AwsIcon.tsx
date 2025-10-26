import React from 'react';

const AwsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    color="#ff9900"
  >
    <path d="M12.31,15.35c-1.12.33-2.31.33-3.43,0L4,16.51A10.42,10.42,0,0,0,12,20.45a10.42,10.42,0,0,0,8-3.94l-4.85-1.16" />
    <path d="M12,3.55a10.27,10.27,0,0,0-7,3.11L12,14.73,19,6.66A10.27,10.27,0,0,0,12,3.55Z" />
  </svg>
);

export default AwsIcon;
