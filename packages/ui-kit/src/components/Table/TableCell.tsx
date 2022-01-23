import { BaseColor } from "assets/styles/color"
import React from "react"
import styled, { css } from "styled-components"
import TableContext from "../Table/TableContext"

interface Props {
  index?: number
  style?: React.CSSProperties
}

const TableCell: React.FC<Props> = (props) => {
  const { children, style, index = -1 } = props
  const tableContext = React.useContext(TableContext)
  const ratioArr = tableContext && tableContext.ratio
  const totalRatio = ratioArr
    ? ratioArr.reduce((prev, curr) => {
        return prev + curr
      }, 0)
    : 0
  const cellRatio = ratioArr && ratioArr[index]
  let width = undefined
  if (totalRatio !== 0) {
    if (cellRatio === undefined) width = 0
    else {
      width =
        totalRatio && cellRatio !== undefined
          ? ((cellRatio / totalRatio) * 100).toFixed()
          : undefined
    }
  }

  return (
    <Wrapper style={style} width={width}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0.01071em;
  display: table-cell;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  vertical-align: middle;
  word-break: break-word;
  color: ${BaseColor.font};

  ${(props) => {
    if (Number(props.width) === 0) {
      return css`
        display: none;
      `
    }
    if (props.width > 0) {
      return `width: ${props.width}%`
    }
  }};
`

export default TableCell
