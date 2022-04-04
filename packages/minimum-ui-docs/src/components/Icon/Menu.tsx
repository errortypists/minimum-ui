import React from "react"

interface Props {
  fill?: string
}

const Menu: React.FC<Props> = ({ fill }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="menu">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" />
          <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" />
          <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" />
        </g>
      </g>
    </svg>
  )
}

export default Menu
