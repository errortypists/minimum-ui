import React from "react"
import styled, { css } from "styled-components"

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
`

export default TableRow
