import React from "react"
import styled from "styled-components"
interface Props {
  size?: number
  color?: string
  style?: React.CSSProperties
}

const Divider: React.FC<Props> = ({ size, color, style }) => {
  return <Wrapper size={size} style={{ backgroundColor: color, ...style }} />
}

const Wrapper = styled.div<any>`
  width: 100%;
  height: ${(props) => props.size || 8}px;
  background-color: #e9ecef;
`

export default React.memo(Divider)
