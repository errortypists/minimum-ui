import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"

interface Props {
  type: "circle" | "linear"
  progress?: number
}

const Circle: React.FC<Props> = (props) => {
  const { progress = 0 } = props
  const circleRef = useRef(null)
  const size = 24
  const strokeWidth = 2
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const [offset, setOffset] = useState(((100 - progress) / 100) * circumference)

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
    console.log(progressOffset)
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
        stroke={"#ffffff"}
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

  return (
    <>{type === "circle" ? <Circle {...props} /> : <Linear {...props} />}</>
  )
}

export default Tabs
