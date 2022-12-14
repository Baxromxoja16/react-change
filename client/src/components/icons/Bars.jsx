import React from "react";

const Bars = ({ setMenuActive }) => {
  return (
    <svg
      onClick={() => setMenuActive(true)}
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="2" fill="white" />
      <rect y="9" width="30" height="2" fill="white" />
      <rect y="18" width="30" height="2" fill="white" />
    </svg>
  );
};

export default Bars;
