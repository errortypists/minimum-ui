import React from "react"
import Table from "../Table"

interface Props {
  header: string[]
  data: any[]
  createRow: (data: any) => any[]
  ratio?: number[]
}

const QuickTable: React.FC<Props> = (props) => {
  const { header, data, ratio, createRow } = props
  const createHeader = () => {
    return header.map((item, index) => {
      return <Table.Cell key={index}>{item}</Table.Cell>
    })
  }

  const createBody = () => {
    return data.map((item, index) => {
      const createdRow: any[] = createRow(item)
      const resultRow = createdRow.map((cell, _index) => {
        return <Table.Cell key={_index}>{cell}</Table.Cell>
      })
      return <Table.Row key={index}>{...resultRow}</Table.Row>
    })
  }

  return (
    <Table.Root ratio={ratio}>
      <Table.Head>
        <Table.Row>{createHeader()}</Table.Row>
      </Table.Head>
      <Table.Body>{createBody()}</Table.Body>
    </Table.Root>
  )
}

export default QuickTable
