// import React from "react"
// import { QuickTable, Table } from "ui-kit"

// const TabsPage: React.FC = () => {
//   return (
//     <div>
//       <h3>직접 - 비율 30, 70, 0</h3>
//       <Table.Root ratio={[30, 70, 0]}>
//         <Table.Head>
//           <Table.Row>
//             <Table.Cell>head1</Table.Cell>
//             <Table.Cell>head2</Table.Cell>
//             <Table.Cell>head3</Table.Cell>
//           </Table.Row>
//         </Table.Head>
//         <Table.Body>
//           <Table.Row>
//             <Table.Cell>{"cell1"}</Table.Cell>
//             <Table.Cell>{"cell2"}</Table.Cell>
//             <Table.Cell>{"cell3"}</Table.Cell>
//           </Table.Row>
//         </Table.Body>
//       </Table.Root>

//       <h3>비율 10, 10, 80</h3>
//       <QuickTable
//         ratio={[10, 10, 80]}
//         header={["헤더1", "헤더2", "헤더3"]}
//         data={[
//           { name: "김XX", phone: "010-0000-0000", address: "서울1" },
//           { name: "이XX", phone: "010-1111-1111", address: "서울2" },
//           { name: "박XX", phone: "010-2222-2222", address: "서울3" },
//         ]}
//         createRow={(item: { name: string; phone: string; address: string }) => {
//           return [
//             <div style={{ color: "red" }}>{item.name}</div>,
//             <div style={{ color: "green" }}>{item.phone}</div>,
//             <div style={{ color: "blue" }}>{item.address}</div>,
//           ]
//         }}
//       />
//       <h3>비율 80, 10, 10</h3>
//       <QuickTable
//         ratio={[80, 10, 10]}
//         header={["헤더1", "헤더2", "헤더3"]}
//         data={[
//           { name: "김XX", phone: "010-0000-0000", address: "서울1" },
//           { name: "이XX", phone: "010-1111-1111", address: "서울2" },
//           { name: "박XX", phone: "010-2222-2222", address: "서울3" },
//         ]}
//         createRow={(item: { name: string; phone: string; address: string }) => {
//           return [
//             <div style={{ color: "red" }}>{item.name}</div>,
//             <div style={{ color: "green" }}>{item.phone}</div>,
//             <div style={{ color: "blue" }}>{item.address}</div>,
//           ]
//         }}
//       />
//       <h3>비율 0, 10, 10</h3>
//       <QuickTable
//         ratio={[0, 10, 10]}
//         header={["헤더1", "헤더2", "헤더3"]}
//         data={[
//           { name: "김XX", phone: "010-0000-0000", address: "서울1" },
//           { name: "이XX", phone: "010-1111-1111", address: "서울2" },
//           { name: "박XX", phone: "010-2222-2222", address: "서울3" },
//         ]}
//         createRow={(item: { name: string; phone: string; address: string }) => {
//           return [
//             <div style={{ color: "red" }}>{item.name}</div>,
//             <div style={{ color: "green" }}>{item.phone}</div>,
//             <div style={{ color: "blue" }}>{item.address}</div>,
//           ]
//         }}
//       />
//     </div>
//   )
// }

// export default TabsPage

import { Flex, Radio, QuickTable } from "ui-kit"

import useStatus from "../../hooks/useStatus"
import Layout from "../../components/Layout"
import { PropsBox } from "../../components"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
  ComponentDescription,
} = Layout

const QuickTablePage: React.FC = () => {
  const { selectedMenu } = useStatus()

  return (
    <ContentsLayout>
      <Title>QuickTable</Title>
      <Description>
        QuickTable은 테이블을 그려낼때 데이터의 요소로만 쉽게 그릴수 있도록 하는
        컴포넌트입니다. 테이블의 헤더, 데이터, 각 행을 그려내는 방법을 결정하여
        제공하면 이를 기반으로 테이블이 완성됩니다.
      </Description>
      <ComponentTitle>Basic QuickTable</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <QuickTable
            header={["이름", "전화번호", "주소"]}
            data={[
              { name: "김XX", phone: "010-0000-0000", address: "서울1" },
              { name: "이XX", phone: "010-1111-1111", address: "서울2" },
              { name: "박XX", phone: "010-2222-2222", address: "서울3" },
            ]}
            createRow={(item) => [
              <div style={{ color: "red" }}>{item.name}</div>,
              <div style={{ color: "green" }}>{item.phone}</div>,
              <div style={{ color: "blue" }}>{item.address}</div>,
            ]}
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<QuickTable
  header={["이름", "전화번호", "주소"]}
  data={[
    { name: "김XX", phone: "010-0000-0000", address: "서울1" },
    { name: "이XX", phone: "010-1111-1111", address: "서울2" },
    { name: "박XX", phone: "010-2222-2222", address: "서울3" },
  ]}
  createRow={(item) => [
      <div style={{ color: "red" }}>{item.name}</div>,
      <div style={{ color: "green" }}>{item.phone}</div>,
      <div style={{ color: "blue" }}>{item.address}</div>,
  ]}
/>`}
      />
      <ComponentTitle>Ratio</ComponentTitle>
      <ComponentDescription>
        테이블을 구성하는 열의 비율을 조정합니다. 이때 0으로 지정시 해당
        데이터는 존재하지만 해당 영역은 나타나지 않습니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <QuickTable
            ratio={[0, 10, 10]}
            header={["이름", "전화번호", "주소"]}
            data={[
              { name: "김XX", phone: "010-0000-0000", address: "서울1" },
              { name: "이XX", phone: "010-1111-1111", address: "서울2" },
              { name: "박XX", phone: "010-2222-2222", address: "서울3" },
            ]}
            createRow={(item) => [
              <div style={{ color: "red" }}>{item.name}</div>,
              <div style={{ color: "green" }}>{item.phone}</div>,
              <div style={{ color: "blue" }}>{item.address}</div>,
            ]}
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<QuickTable
  ratio={[0, 10, 10]}
  header={["이름", "전화번호", "주소"]}
  data={[
    { name: "김XX", phone: "010-0000-0000", address: "서울1" },
    { name: "이XX", phone: "010-1111-1111", address: "서울2" },
    { name: "박XX", phone: "010-2222-2222", address: "서울3" },
  ]}
  createRow={(item) => [
    <div style={{ color: "red" }}>{item.name}</div>,
    <div style={{ color: "green" }}>{item.phone}</div>,
    <div style={{ color: "blue" }}>{item.address}</div>,
  ]}
/>`}
      />
      <ComponentTitle>Props</ComponentTitle>
      <PropsBox name={selectedMenu?.id || ""} />
    </ContentsLayout>
  )
}

export default QuickTablePage
