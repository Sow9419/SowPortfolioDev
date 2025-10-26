import React from 'react';

const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <path
      d="M12 11.237v-1.12c0-1.884-.23-3.612-2.096-4.27C7.653 4.962 6 6.113 6 8.324v2.913"
      stroke="#3776ab"
    />
    <path
      d="M12 12.763v1.12c0 1.884.23 3.612 2.096 4.27 2.347.885 3.904-.266 3.904-2.478v-2.913"
      stroke="#ffde57"
    />
    <path d="M9.043 8.35a.5.5 0 11-1 0 .5.5 0 011 0z" fill="#3776ab" stroke="none" />
    <path d="M15.043 15.65a.5.5 0 11-1 0 .5.5 0 011 0z" fill="#ffde57" stroke="none" />
  </svg>
);

export default PythonIcon;
