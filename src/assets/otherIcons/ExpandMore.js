import React from "react";
import { useState } from "react"

function Icon({ isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <svg
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        style={{
            cursor:'pointer',
            transform: !isActive ? "rotate(180deg)" : "rotate(0deg)",
            opacity: hovered ? 0.7 : 1,
        }}
    >
      <path
        stroke="#33363F"
        strokeWidth="2"
        d="M12 18l6-6-6-6M6 18l6-6-6-6"
      ></path>
    </svg>
  );
}

export default Icon;
