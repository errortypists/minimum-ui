import { BaseColor } from "assets/styles/color"
import React from "react"
import styled from "styled-components"

interface Props {
  style?: React.CSSProperties
}

const TableHead: React.FC<Props> = (props) => {
  const { children, style } = props

  return <Wrapper style={style}>{children}</Wrapper>
}

const Wrapper = styled.div<any>`
  display: table-header-group;
  border-bottom: 2px solid ${BaseColor.border};

  & div {
    font-weight: 700;
    font-size: 1rem;
    height: 50px;
  }
`

export default TableHead
