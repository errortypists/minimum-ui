import React from "react"
import styled, { css } from "styled-components"

interface Props {
  style?: React.CSSProperties
}

const TableBody: React.FC<Props> = (props) => {
  const { children, style } = props

  return <Wrapper style={style}>{children}</Wrapper>
}

const Wrapper = styled.div<any>`
  display: table-row-group;
`

export default TableBody
