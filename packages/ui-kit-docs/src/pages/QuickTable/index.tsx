import { Flex, QuickTable } from "ui-kit"

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

const QuickTablePage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>QuickTable</Title>
      <Description>
        QuickTable 컴포넌트는 테이블을 그려낼 때 데이터의 요소로만 쉽게 테이블을
        표현할 수 있습니다. 테이블의 헤더, 데이터, 각 행을 그려내는 방법을
        결정하여 제공하면 이를 기반으로 테이블이 완성됩니다.
      </Description>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <QuickTable
            header={["Name", "Cell Phone", "Address"]}
            data={[
              { name: "Charles", phone: "010-0000-0000", address: "Seoul" },
              { name: "John", phone: "010-1111-1111", address: "New York" },
              { name: "Alice", phone: "010-2222-2222", address: "Rome" },
            ]}
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<QuickTable
  header={["Name", "Cell Phone", "Address"]}
  data={[
    { name: "Charles", phone: "010-0000-0000", address: "Seoul" },
    { name: "John", phone: "010-1111-1111", address: "New York" },
    { name: "Alice", phone: "010-2222-2222", address: "Rome" },
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
            header={["Name", "Cell Phone", "Address"]}
            data={[
              { name: "Charles", phone: "010-0000-0000", address: "Seoul" },
              { name: "John", phone: "010-1111-1111", address: "New York" },
              { name: "Alice", phone: "010-2222-2222", address: "Rome" },
            ]}
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<QuickTable
  ratio={[0, 10, 10]}
  header={["Name", "Cell Phone", "Address"]}
  data={[
    { name: "Charles", phone: "010-0000-0000", address: "Seoul" },
    { name: "John", phone: "010-1111-1111", address: "New York" },
    { name: "Alice", phone: "010-2222-2222", address: "Rome" },
  ]}
/>`}
      />

      <ComponentTitle>Custom Cell</ComponentTitle>
      <ComponentDescription>
        테이블을 구성하는 각각의 셀에 스타일 혹은 원하는 코드를 집어넣어 셀을
        그려낼 수 있습니다. createRow 속성의 매개변수에는 각 행에 해당되는
        객체가 담겨있습니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <QuickTable
            header={["Name", "Cell Phone", "Address"]}
            data={[
              { name: "Charles", phone: "010-0000-0000", address: "Seoul" },
              { name: "John", phone: "010-1111-1111", address: "New York" },
              { name: "Alice", phone: "010-2222-2222", address: "Rome" },
            ]}
            customHeader={(headers) => [
              <div style={{ backgroundColor: "red" }}>{headers[0]}</div>,
              <div style={{ backgroundColor: "green" }}>{headers[0]}</div>,
              <div style={{ backgroundColor: "blue" }}>{headers[0]}</div>,
            ]}
            customRow={(item) => [
              <div style={{ color: "red" }}>{item.name}</div>,
              <div style={{ color: "green" }}>{item.phone}</div>,
              <div style={{ color: "blue" }}>{item.address}</div>,
            ]}
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<QuickTable
  header={["Name", "Cell Phone", "Address"]}
  data={[
    { name: "Charles", phone: "010-0000-0000", address: "Seoul" },
    { name: "John", phone: "010-1111-1111", address: "New York" },
    { name: "Alice", phone: "010-2222-2222", address: "Rome" },
  ]}
  customRow={(item) => [
    <div style={{ color: "red" }}>{item.name}</div>,
    <div style={{ color: "green" }}>{item.phone}</div>,
    <div style={{ color: "blue" }}>{item.address}</div>,
  ]}
/>`}
      />
    </ContentsLayout>
  )
}

export default QuickTablePage
