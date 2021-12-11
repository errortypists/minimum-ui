import React from "react"
import { QuickTable, Table } from "ui-kit"

const TabsPage: React.FC = () => {
  return (
    <div>
      <h3>직접 - 비율 30, 70, 0</h3>
      <Table.Root ratio={[30, 70, 0]}>
        <Table.Head>
          <Table.Row>
            <Table.Cell>head1</Table.Cell>
            <Table.Cell>head2</Table.Cell>
            <Table.Cell>head3</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{"cell1"}</Table.Cell>
            <Table.Cell>{"cell2"}</Table.Cell>
            <Table.Cell>{"cell3"}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <h3>비율 10, 10, 80</h3>
      <QuickTable
        ratio={[10, 10, 80]}
        header={["헤더1", "헤더2", "헤더3"]}
        data={[
          { name: "김XX", phone: "010-0000-0000", address: "서울1" },
          { name: "이XX", phone: "010-1111-1111", address: "서울2" },
          { name: "박XX", phone: "010-2222-2222", address: "서울3" },
        ]}
        createRow={(item: { name: string; phone: string; address: string }) => {
          return [
            <div style={{ color: "red" }}>{item.name}</div>,
            <div style={{ color: "green" }}>{item.phone}</div>,
            <div style={{ color: "blue" }}>{item.address}</div>,
          ]
        }}
      />
      <h3>비율 80, 10, 10</h3>
      <QuickTable
        ratio={[80, 10, 10]}
        header={["헤더1", "헤더2", "헤더3"]}
        data={[
          { name: "김XX", phone: "010-0000-0000", address: "서울1" },
          { name: "이XX", phone: "010-1111-1111", address: "서울2" },
          { name: "박XX", phone: "010-2222-2222", address: "서울3" },
        ]}
        createRow={(item: { name: string; phone: string; address: string }) => {
          return [
            <div style={{ color: "red" }}>{item.name}</div>,
            <div style={{ color: "green" }}>{item.phone}</div>,
            <div style={{ color: "blue" }}>{item.address}</div>,
          ]
        }}
      />
      <h3>비율 0, 10, 10</h3>
      <QuickTable
        ratio={[0, 10, 10]}
        header={["헤더1", "헤더2", "헤더3"]}
        data={[
          { name: "김XX", phone: "010-0000-0000", address: "서울1" },
          { name: "이XX", phone: "010-1111-1111", address: "서울2" },
          { name: "박XX", phone: "010-2222-2222", address: "서울3" },
        ]}
        createRow={(item: { name: string; phone: string; address: string }) => {
          return [
            <div style={{ color: "red" }}>{item.name}</div>,
            <div style={{ color: "green" }}>{item.phone}</div>,
            <div style={{ color: "blue" }}>{item.address}</div>,
          ]
        }}
      />
    </div>
  )
}

export default TabsPage
