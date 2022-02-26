import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { SVGUniqueID } from "react-svg-unique-id"

interface Props {
  type: "circle" | "linear" | "circular"
  color?: string
  bgColor?: string
  progress?: number
  speed?: number
}

const Circle: React.FC<Props> = (props) => {
  const { progress = 100, color, bgColor } = props
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
        stroke={bgColor}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        style={{ transition: "stroke-dashoffset 850ms ease-in-out" }}
        ref={circleRef}
        stroke={color}
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
  const { progress = 85, color, bgColor, speed = 2000 } = props
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
        stroke={bgColor}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <RotationCircle animationSpeed={speed}>
        <circle
          ref={circleRef}
          stroke={color}
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

const RotationCircle = styled.g<any>`
  transform-box: fill-box;
  transform-origin: center;
  animation-name: rotation;
  animation-duration: ${(props) => `${props.animationSpeed}ms`};
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
  const { progress = 0, color, bgColor } = props
  console.log(progress)
  return (
    <SVGUniqueID>
      <svg
        width="100%"
        height="10px"
        // viewBox="0 0 100 50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="prefix__bga">
            <stop offset="0" stopColor={color}>
              <animate
                dur="0.1s"
                attributeName="offset"
                fill="freeze"
                from="0"
                to={`${progress / 100}`}
              />
            </stop>
            <stop offset="0" stopColor={bgColor}>
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
        <rect x="0" y="0" width="100%" height="10" fill="url(#prefix__bga)" />
      </svg>
    </SVGUniqueID>
  )
}

const Progress: React.FC<Props> = (props) => {
  const { type } = props
  const defaultProps = {
    color: "#00ff00",
    bgColor: "#dbdbdb",
    ...props,
  }
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

  return <Component {...defaultProps} />
}

export default Progress
