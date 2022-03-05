import React from "react"

interface Props {
  fill?: string
}

const Folder: React.FC<Props> = ({ fill }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <g data-name="Layer 2">
        <g data-name="folder">
          <rect width="24" height="24" opacity="0" />
          <path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43z" />
        </g>
      </g>
    </svg>
  )
}

export default Folder
