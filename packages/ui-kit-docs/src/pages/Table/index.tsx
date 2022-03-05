import { Flex, Table } from "ui-kit"

import Layout from "../../components/Layout"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
  ComponentDescription,
} = Layout

const TablePage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Table</Title>
      <Description>
        Table은 도표형식으로 정형화된 데이터를 표현하는데 사용하는
        컴포넌트입니다. 각 헤더와 행을 이루는 컴포넌트로 영역을 구성할 수
        있습니다.
      </Description>
      <ComponentTitle>Basic Table</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Table.Root>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Job</Table.Cell>
                <Table.Cell>Base Salary</Table.Cell>
                <Table.Cell>Growth</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{"Nurse"}</Table.Cell>
                <Table.Cell>{"$93,203"}</Table.Cell>
                <Table.Cell>{"20.33%"}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{"Product Owner"}</Table.Cell>
                <Table.Cell>{"$90,311"}</Table.Cell>
                <Table.Cell>{"103.23"}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{"IT Technician"}</Table.Cell>
                <Table.Cell>{"$110,264"}</Table.Cell>
                <Table.Cell>{"35.16%"}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Table.Root>
<Table.Head>
  <Table.Row>
    <Table.Cell>Job</Table.Cell>
    <Table.Cell>Base Salary</Table.Cell>
    <Table.Cell>Growth</Table.Cell>
  </Table.Row>
</Table.Head>
<Table.Body>
  <Table.Row>
    <Table.Cell>{"Nurse"}</Table.Cell>
    <Table.Cell>{"$93,203"}</Table.Cell>
    <Table.Cell>{"20.33%"}</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>{"Product Owner"}</Table.Cell>
    <Table.Cell>{"$90,311"}</Table.Cell>
    <Table.Cell>{"103.23"}</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>{"IT Technician"}</Table.Cell>
    <Table.Cell>{"$110,264"}</Table.Cell>
    <Table.Cell>{"35.16%"}</Table.Cell>
  </Table.Row>
</Table.Body>
</Table.Root>`}
      />
      <ComponentTitle>Ratio</ComponentTitle>
      <ComponentDescription>
        각 열의 비율을 조정할 수 있습니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Table.Root ratio={[25, 60, 25]}>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Job</Table.Cell>
                <Table.Cell>Base Salary</Table.Cell>
                <Table.Cell>Growth</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{"Nurse"}</Table.Cell>
                <Table.Cell>{"$93,203"}</Table.Cell>
                <Table.Cell>{"20.33%"}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Table.Root ratio={[25, 60, 25]}>
<Table.Head>
  <Table.Row>
    <Table.Cell>Job</Table.Cell>
    <Table.Cell>Base Salary</Table.Cell>
    <Table.Cell>Growth</Table.Cell>
  </Table.Row>
</Table.Head>
<Table.Body>
  <Table.Row>
    <Table.Cell>{"Nurse"}</Table.Cell>
    <Table.Cell>{"$93,203"}</Table.Cell>
    <Table.Cell>{"20.33%"}</Table.Cell>
  </Table.Row>
</Table.Body>
</Table.Root>`}
      />
    </ContentsLayout>
  )
}

export default TablePage
