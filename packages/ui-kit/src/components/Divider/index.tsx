import React from "react"
import styled from "styled-components"

// NOTE height 값의 기본 높이 정해야 함

interface Props {
  size?: number
  type?: "box" | "line"
  color?: string
  style?: React.CSSProperties
}

const Divider: React.FC<Props> = ({ size, type = "box", color, style }) => {
  return (
    <Wrapper
      size={size}
      data-type={type}
      style={{ backgroundColor: color, ...style }}
    />
  )
}

const Wrapper = styled.div<any>`
  width: 100%;
  height: ${(props) => props.size || 8}px;
  background-color: #e9ecef;

  &[data-type="line"] {
    height: 1px;
  }
`

export default React.memo(Divider)
