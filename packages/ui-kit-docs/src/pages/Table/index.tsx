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
        Table 컴포넌트는 표형식으로 정형화된 데이터를 표현하는데 사용할 수
        있습니다. 이때 구성요소로서 Head, Row, Cell등을 활용헤 다양한 영역을
        구분 지을 수 있습니다.
      </Description>
      <ComponentTitle>Basic Table</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Table>
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
          </Table>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Table>
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
</Table>`}
      />
      <ComponentTitle>Ratio</ComponentTitle>
      <ComponentDescription>
        Table의 각 열 비율을 조정할 수 있습니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Table ratio={[25, 60, 25]}>
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
          </Table>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Table ratio={[25, 60, 25]}>
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
</Table>`}
      />
    </ContentsLayout>
  )
}

export default TablePage
