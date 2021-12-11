import React from "react"
import Table from "../Table"
import styled, { css } from "styled-components"

interface Props {
  header: string[]
  data: any[]
  createRow: (data: any) => any[]
  ratio?: number[]
}

const QuickTable: React.FC<Props> = (props) => {
  const { header, data, ratio, createRow } = props
  const createHeader = () => {
    return header.map((item) => {
      return <Table.Cell>{item}</Table.Cell>
    })
  }

  const createBody = () => {
    return data.map((item) => {
      const createdRow: any[] = createRow(item)
      const resultRow = createdRow.map((cell) => {
        return <Table.Cell>{cell}</Table.Cell>
      })
      return (
        <Table.Row style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
          {...resultRow}
        </Table.Row>
      )
    })
  }

  return (
    <Table.Root ratio={ratio}>
      <Table.Head style={{ borderBottom: "2px solid rgba(224, 224, 224, 1)" }}>
        <Table.Row>{createHeader()}</Table.Row>
      </Table.Head>
      <Table.Body>{createBody()}</Table.Body>
    </Table.Root>
  )
}

export default QuickTable
