import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"

interface Props {
  type: "circle" | "linear"
  progress?: number
}

const Circle: React.FC<Props> = (props) => {
  const { progress = 50 } = props
  const [offset, setOffset] = useState(0)
  const circleRef = useRef(null)
  const size = 24
  const strokeWidth = 2
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
  }, [setOffset, circumference, progress, offset])

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
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
        fill={"none"}
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
        fill={"none"}
      />
    </svg>
  )
}

const Linear = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FF00FF"
        d="M19.47,10.54A6,6,0,0,0,14,7a5.82,5.82,0,0,0-1.39.18,5,5,0,0,0-9,2A3,3,0,0,0,4.5,15h1a4,4,0,0,0,0,.5A3.5,3.5,0,0,0,9,19h9.17a4.33,4.33,0,0,0,1.3-8.46ZM4.5,13a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,3-3,3,3,0,0,1,2.22,1,6,6,0,0,0-2.66,4.13,3.49,3.49,0,0,0-1.5.87Zm13.67,4H9a1.5,1.5,0,0,1,0-3,1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67A2.33,2.33,0,0,1,18.17,17Z"
      />
    </svg>
  )
}

const Tabs: React.FC<Props> = (props) => {
  const { type } = props

  return <>{type === "circle" ? <Circle {...props} /> : <Linear />}</>
}

export default Tabs
