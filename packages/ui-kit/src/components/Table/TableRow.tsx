import { BaseColor } from "assets/styles/color"
import React from "react"
import styled from "styled-components"

interface Props {
  style?: React.CSSProperties
}

const TableRow: React.FC<Props> = (props) => {
  const { children, style } = props
  const indexedChild = React.Children.map(children, (child: any, index) => {
    return React.cloneElement(child, { index })
  })

  return <Wrapper style={style}>{indexedChild}</Wrapper>
}

const Wrapper = styled.div<any>`
  display: table-row;

  & ~ & {
    border-top: 1px solid ${BaseColor.border};
  }

  &:last-child {
    border-bottom: 1px solid ${BaseColor.border};
  }
`

export default TableRow
