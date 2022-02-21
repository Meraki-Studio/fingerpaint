import React from 'react';

const New = ({ classname }) => {
  // const tall = window.innerHeight;
  // const wide = window.innerWidth;
  // let size = 105;

  // if (wide > tall) size = 50;

  return (
    <svg
      className={classname}
      width="105"
      height="105"
      viewBox="0 0 105 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="105" height="105" fill="#E5E5E5" /> */}
      <rect
        width="105"
        height="105"
        // transform="translate(-127.179 -511.002)"
        fill="white"
      />
      <rect
        x="0.820557"
        y="0.997864"
        width="104"
        height="104"
        rx="24"
        fill="#F99D1F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.5741 34.4979C60.5741 30.3557 57.2162 26.9979 53.0741 26.9979C48.932 26.9979 45.5741 30.3557 45.5741 34.4979V45.2714H34.3206C30.1784 45.2714 26.8206 48.6292 26.8206 52.7714C26.8206 56.9135 30.1784 60.2714 34.3206 60.2714H45.5741V71.4979C45.5741 75.64 48.932 78.9979 53.0741 78.9979C57.2162 78.9979 60.5741 75.64 60.5741 71.4979V60.2714H71.3206C75.4627 60.2714 78.8206 56.9135 78.8206 52.7714C78.8206 48.6292 75.4627 45.2714 71.3206 45.2714H60.5741V34.4979Z"
        fill="white"
      />
    </svg>
  );
};

export default New;
