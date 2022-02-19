import { Flex, Table } from "ui-kit"

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

const TablePage: React.FC = () => {
  const { selectedMenu } = useStatus()

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
                <Table.Cell>head1</Table.Cell>
                <Table.Cell>head2</Table.Cell>
                <Table.Cell>head3</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{"row1 - cell1"}</Table.Cell>
                <Table.Cell>{"row1 - cell2"}</Table.Cell>
                <Table.Cell>{"row1 - cell3"}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{"row2 - cell1"}</Table.Cell>
                <Table.Cell>{"row2 - cell2"}</Table.Cell>
                <Table.Cell>{"row2 - cell3"}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{"row3 - cell1"}</Table.Cell>
                <Table.Cell>{"row3 - cell2"}</Table.Cell>
                <Table.Cell>{"row3 - cell3"}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Table.Root>
<Table.Head>
  <Table.Row>
    <Table.Cell>head1</Table.Cell>
    <Table.Cell>head2</Table.Cell>
    <Table.Cell>head3</Table.Cell>
  </Table.Row>
</Table.Head>
<Table.Body>
  <Table.Row>
    <Table.Cell>{"row1 - cell1"}</Table.Cell>
    <Table.Cell>{"row1 - cell2"}</Table.Cell>
    <Table.Cell>{"row1 - cell3"}</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>{"row2 - cell1"}</Table.Cell>
    <Table.Cell>{"row2 - cell2"}</Table.Cell>
    <Table.Cell>{"row2 - cell3"}</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>{"row3 - cell1"}</Table.Cell>
    <Table.Cell>{"row3 - cell2"}</Table.Cell>
    <Table.Cell>{"row3 - cell3"}</Table.Cell>
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
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Table.Root ratio={[25, 60, 25]}>
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
</Table.Root>`}
      />
      <ComponentTitle>Props</ComponentTitle>
      <PropsBox name={selectedMenu?.id || ""} />
    </ContentsLayout>
  )
}

export default TablePage
