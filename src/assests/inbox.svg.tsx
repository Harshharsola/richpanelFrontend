import React from "react";

function InboxIcon(props: { height?: number; width?: number; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? `${props.width}` : "22"}
      height={props.height ? `${props.height}` : "18"}
      viewBox="0 0 22 18"
      id="inbox"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g
          stroke={props.color ? props.color : "#000"}
          stroke-width="2"
          transform="translate(-1452 -1691)"
        >
          <g transform="translate(1453 1692)">
            <path d="M20 9h-6l-2 3H8L6 9H0"></path>
            <path d="M3.47 1.19L0 9v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9l-3.47-7.81A2 2 0 0 0 14.7 0H5.3a2 2 0 0 0-1.83 1.19z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default InboxIcon;
