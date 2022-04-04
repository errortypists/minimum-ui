import * as React from "react"

interface TableContextProps {
  ratio?: number[]
}

const TableContext = React.createContext<TableContextProps | undefined>({
  ratio: [],
})

export default TableContext
