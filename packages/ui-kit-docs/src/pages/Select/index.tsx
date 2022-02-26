import { Flex, Select } from "ui-kit"
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
      <Description>Select</Description>
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
