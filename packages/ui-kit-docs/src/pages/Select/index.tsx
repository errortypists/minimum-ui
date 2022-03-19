import { Select } from "ui-kit"
import Layout from "../../components/Layout"

const {
  ContentsLayout,
  ComponentWrapper,
  ComponentTitle,
  CodeWrapper,
  Title,
  Description,
} = Layout

const SelectPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Select</Title>
      <Description>
        Select 컴포넌트는 html에서 제공하는 기본 select 태그를 기반으로 만들어져
        있습니다. 사용자에게 하나의 선택 값을 고르도록 할 때 사용합니다. 태그를
        기반으로 작성되었기 때문에 동작하는 플랫폼에 따라 디자인이 달라 질 수
        있습니다.
      </Description>
      <ComponentWrapper>
        <Select
          options={[
            { name: "first", value: "first" },
            { name: "second", value: "second" },
            { name: "third", value: "third" },
            { name: "forth", value: "forth" },
          ]}
          onChange={(value: string) => console.log(value)}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`<Select
  options={[
    { name: "first", value: "first" },
    { name: "second", value: "second" },
    { name: "third", value: "third" },
    { name: "forth", value: "forth" },
  ]}
  onChange={(value) => console.log(value)}
/>`}
      />
      <ComponentTitle>Width</ComponentTitle>
      <Description>Select의 너비를 지정합니다.</Description>
      <ComponentWrapper>
        <Select
          width="200px"
          options={[
            { name: "first", value: "first" },
            { name: "second", value: "second" },
            { name: "third", value: "third" },
            { name: "forth", value: "forth" },
          ]}
          onChange={(value: string) => console.log(value)}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`<Select
  width="200px"
  options={[
    { name: "first", value: "first" },
    { name: "second", value: "second" },
    { name: "third", value: "third" },
    { name: "forth", value: "forth" },
  ]}
  onChange={(value) => console.log(value)}
/>`}
      />
    </ContentsLayout>
  )
}

export default SelectPage
