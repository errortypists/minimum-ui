import React from "react"

interface Props {
  fill?: string
}

const RadioOn: React.FC<Props> = ({ fill }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "#495057"}
    >
      <g data-name="Layer 2">
        <g data-name="radio-button-on">
          <rect width="24" height="24" opacity="0" />
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" />
        </g>
      </g>
    </svg>
  )
}

export default RadioOn
