import React from "react";

function PagesIcon(props: { width: number; height: number; color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? `${props.width}` : "16.763"}
      height={props.height ? `${props.height}` : "21.408"}
      id="pages"
    >
      <path
        fill={props.color ? props.color : "#231f20"}
        fill-rule="evenodd"
        d="M16.763 0H6.764L2.558 3.576V17.59h14.205V0zm-8.4 1.257h6.909v15.076H4.048V4.945h4.315V1.257z"
        clip-rule="evenodd"
      ></path>
      <path
        fill={props.color ? props.color : "#231f20"}
        fill-rule="evenodd"
        stroke="#231f20"
        stroke-miterlimit="2.613"
        stroke-width=".147"
        d="M2.558 5.208.073 7.32v14.014h14.205V17.59h-1.49v2.487H1.563V8.69h.995z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

export default PagesIcon;
