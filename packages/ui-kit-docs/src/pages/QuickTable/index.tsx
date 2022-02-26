import { Flex, QuickTable } from "ui-kit"

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
            header={["Name", "Cell Phone", "Address"]}
            data={[
              { name: "Charles", phone: "010-0000-0000", address: "Seoul" },
              { name: "John", phone: "010-1111-1111", address: "New York" },
              { name: "Alice", phone: "010-2222-2222", address: "Rome" },
            ]}
            createRow={(item) => [
              <div>{item.name}</div>,
              <div>{item.phone}</div>,
              <div>{item.address}</div>,
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
  createRow={(item) => [
    <div>{item.name}</div>,
    <div>{item.phone}</div>,
    <div>{item.address}</div>,
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
            createRow={(item) => [
              <div>{item.name}</div>,
              <div>{item.phone}</div>,
              <div>{item.address}</div>,
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
  createRow={(item) => [
    <div>{item.name}</div>,
    <div>{item.phone}</div>,
    <div>{item.address}</div>,
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
  header={["Name", "Cell Phone", "Address"]}
  data={[
    { name: "Charles", phone: "010-0000-0000", address: "Seoul" },
    { name: "John", phone: "010-1111-1111", address: "New York" },
    { name: "Alice", phone: "010-2222-2222", address: "Rome" },
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