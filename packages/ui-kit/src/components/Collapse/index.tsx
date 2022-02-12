import React, { useRef, useState, useEffect } from "react"
import styled, { css } from "styled-components"

interface Props {
  style?: React.CSSProperties
  isOpen?: boolean
  speed?: number
  width?: number
}

const Collapse: React.FC<Props> = (props) => {
  const [childHeight, setChildHeight] = useState("auto")
  const { children, isOpen = false, speed = 200, width } = props
  const wrapperWidth = width ? `${width}px` : "100%"
  const childRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setChildHeight(`${childRef.current?.clientHeight || 0}px`)
  }, [])
  return (
    <Wrapper
      isOpen={isOpen}
      childHeight={childHeight}
      speed={speed}
      width={wrapperWidth}
    >
      {React.Children.map(children, (child: any, index) => {
        return React.cloneElement(child, { ref: childRef, key: index })
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`
  ${(props) =>
    props.isOpen
      ? css`
          height: ${props.childHeight};
        `
      : css`
          height: 0px;
        `}
  overflow: hidden;
  transition: height ${(props) => `${props.speed}ms`} ease-out;
  width: ${(props) => `${props.width}`};
`

export default Collapse
