import React from 'react';

const MongodbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    color="#4db33d"
  >
    <path d="M12,2A10,10,0,0,0,4.4,18.35a9.89,9.89,0,0,0,14.21,0A10,10,0,0,0,12,2Zm3.12,14.65a2.53,2.53,0,0,1-1.46-.46.52.52,0,0,1-.21-.4V9.82a.52.52,0,0,1,.21-.4,2.2,2.2,0,0,1,3,1.67V15A3,3,0,0,1,15.12,16.65ZM12,17.9a6.83,6.83,0,0,1-4.13-1.42.5.5,0,0,1-.26-.43V8.12a.51.51,0,0,1,.26-.43,7.1,7.1,0,0,1,8.26,0,.51.51,0,0,1,.26.43v7.92a.5.5,0,0,1-.26.43A6.83,6.83,0,0,1,12,17.9Z" />
  </svg>
);

export default MongodbIcon;
