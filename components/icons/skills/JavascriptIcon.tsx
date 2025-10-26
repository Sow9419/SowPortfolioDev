import React from 'react';

const JavascriptIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path fill="#f7df1e" d="M0 0h24v24H0z" />
    <path d="M9.4 16.5l2.6-1.4c.1-.1.2-.2.2-.4s-.1-.3-.2-.4l-2.6-1.4c-.2-.1-.4 0-.5.2-.1.2 0 .4.2.5l1.8.9-1.8.9c-.2.1-.3.3-.2.5.1.2.3.3.5.2zm5.4-5.3c.1-.1.2-.2.2-.4s-.1-.3-.2-.4l-2.6-1.4c-.2-.1-.4 0-.5.2-.1.2 0 .4.2.5l1.8.9-1.8.9c-.2.1-.3.3-.2.5.1.2.3.3.5.2l2.6-1.4z" />
    <path d="M11.5 14.2c0 .5-.4 1-1 1H9c-.5 0-1-.4-1-1v-4c0-.5.4-1 1-1h1.5c.5 0 1 .4 1 1V14.2zM16.5 14.2c0 .5-.4 1-1 1h-1.5c-.5 0-1-.4-1-1v-4c0-.5.4-1 1-1H15.5c.5 0 1 .4 1 1V14.2z" />
  </svg>
);

export default JavascriptIcon;
