import React from "react"

interface Props {
  fill?: string
}

const CheckboxOff: React.FC<Props> = ({ fill }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "#495057"}
    >
      <g data-name="Layer 2">
        <g data-name="square">
          <rect width="24" height="24" opacity="0" />
          <path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
        </g>
      </g>
    </svg>
  )
}

export default CheckboxOff
