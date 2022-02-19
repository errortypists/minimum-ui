import Layout from "../../components/Layout"
import { Divider, Flex } from "ui-kit"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
  ComponentDescription,
} = Layout

const DividerPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Divider</Title>
      <Description>영역을 분리하기 위한 구분선</Description>
      <ComponentTitle>Size</ComponentTitle>
      <ComponentDescription>type box 에서만 적용</ComponentDescription>
      <ComponentWrapper>
        <Flex>Section1</Flex>
        <Divider size={20} />
        <Flex>Section2</Flex>
      </ComponentWrapper>
      <CodeWrapper code={`<Divider size={20} />`} />
      <ComponentWrapper>
        <Flex>Section1</Flex>
        <Divider size={5} />
        <Flex>Section2</Flex>
      </ComponentWrapper>
      <CodeWrapper code={`<Divider size={5} />`} />
      <ComponentTitle>Color</ComponentTitle>
      <ComponentWrapper>
        <Flex>Section1</Flex>
        <Divider color="#aabbcc" />
        <Flex>Section2</Flex>
      </ComponentWrapper>
      <CodeWrapper code={`<Divider color="#aabbcc" />`} />
    </ContentsLayout>
  )
}

export default DividerPage
