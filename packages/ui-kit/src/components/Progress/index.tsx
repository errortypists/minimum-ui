import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"

interface Props {
  type: "circle" | "linear" | "circular"
  progress?: number
}

const Circle: React.FC<Props> = (props) => {
  const { progress = 100 } = props
  const circleRef = useRef(null)
  const size = 24
  const strokeWidth = 5
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const [offset, setOffset] = useState(((100 - progress) / 100) * circumference)

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
  }, [setOffset, circumference, progress, offset])

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle
        // stroke={"transparent"}
        stroke={"#dbdbdb"}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        style={{ transition: "stroke-dashoffset 850ms ease-in-out" }}
        ref={circleRef}
        stroke={"#00ff00"}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  )
}

const Circular: React.FC<Props> = (props) => {
  const { progress = 85 } = props
  const circleRef = useRef(null)
  const size = 24
  const strokeWidth = 5
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const offset = ((100 - progress) / 100) * circumference

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle
        stroke={"#dbdbdb"}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <RotationCircle>
        <circle
          ref={circleRef}
          stroke={"#00ff00"}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </RotationCircle>
    </svg>
  )
}

const RotationCircle = styled.g`
  transform-box: fill-box;
  transform-origin: center;
  animation-name: rotation;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

const Linear: React.FC<Props> = (props) => {
  const { progress = 0 } = props
  return (
    <svg
      width="100%"
      height="10px"
      // viewBox="0 0 100 50"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="left-to-right">
          <stop offset="0" stopColor="#00ff00">
            <animate
              dur="0.1s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to={`${progress / 100}`}
            />
          </stop>
          <stop offset="0" stopColor="#D8D8D8">
            <animate
              dur="0.1s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to={`${progress / 100}`}
            />
          </stop>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="10" fill="url(#left-to-right)" />
    </svg>
  )
}

const Tabs: React.FC<Props> = (props) => {
  const { type } = props
  let Component = undefined
  switch (type) {
    case "circular":
      Component = Circular
      break
    case "linear":
      Component = Linear
      break
    default:
      Component = Circle
  }

  return <Component {...props} />
}

export default Tabs
