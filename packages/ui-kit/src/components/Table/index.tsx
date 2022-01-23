import React from "react"
import TableHead from "./TableHead"
import TableBody from "./TableBody"
import TableRow from "./TableRow"
import TableCell from "./TableCell"
import TableContext from "./TableContext"
import styled from "styled-components"

interface Props {
  style?: React.CSSProperties
  ratio?: number[]
}

const TableRoot: React.FC<Props> = (props) => {
  const { children, style, ratio } = props
  const table = React.useMemo(() => ({ ratio }), [ratio])

  return (
    <TableContext.Provider value={table}>
      <Wrapper style={style}>{children}</Wrapper>
    </TableContext.Provider>
  )
}

const Wrapper = styled.div<any>`
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`
//
// 테이블 테마 잡기
//

const Table: {
  Root: typeof TableRoot
  Head: typeof TableHead
  Body: typeof TableBody
  Row: typeof TableRow
  Cell: typeof TableCell
} = {
  Root: TableRoot,
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
}

export default Table
