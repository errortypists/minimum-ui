import React from "react"
import Table from "../Table"

interface Props {
  header: string[]
  data: object[]
  customHeader?: (headers: string[]) => any[]
  customRow?: (item: any) => any[]
  ratio?: number[]
}

const QuickTable: React.FC<Props> = (props) => {
  const { header, data, ratio, customHeader, customRow } = props

  const createHeader = customHeader
    ? () => {
        const customHeaders = customHeader(header)
        const headers: JSX.Element[] = []
        customHeaders.map((item, index) => {
          headers.push(
            <Table.Cell style={{ padding: 0 }} key={index}>
              {item}
            </Table.Cell>
          )
        })
        return headers
      }
    : () => {
        return header.map((item, index) => {
          return <Table.Cell key={index}>{item}</Table.Cell>
        })
      }

  const createRow = customRow
    ? customRow
    : (item: any) => {
        const renderItems = []
        for (const key in item) {
          renderItems.push(<div>{item[key]}</div>)
        }
        return renderItems
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
    <Table ratio={ratio}>
      <Table.Head>
        <Table.Row>{createHeader()}</Table.Row>
      </Table.Head>
      <Table.Body>{createBody()}</Table.Body>
    </Table>
  )
}

export default QuickTable
