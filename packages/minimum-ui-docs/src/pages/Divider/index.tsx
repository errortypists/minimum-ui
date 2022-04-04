import Layout from "../../components/Layout"
import { Divider, Flex } from "minimum-ui"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
} = Layout

const DividerPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Divider</Title>
      <Description>
        Divider 컴포넌트는 영역을 분리할때 각 영역을 구분짓기 위해 사용합니다.
        각 영역사이 중간에 위치하도록 배치해 사용합니다.
      </Description>
      <ComponentWrapper>
        <Flex>Section1</Flex>
        <Divider />
        <Flex>Section2</Flex>
      </ComponentWrapper>
      <CodeWrapper code={`<Divider />`} />
      <ComponentTitle>Size</ComponentTitle>
      <Description>Divider의 굵기를 지정합니다.</Description>
      <ComponentWrapper>
        <Flex>Section1</Flex>
        <Divider size={5} />
        <Flex>Section2</Flex>
        <Divider size={10} />
        <Flex>Section3</Flex>
        <Divider size={15} />
        <Flex>Section4</Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Divider size={5} />
<Divider size={10} />
<Divider size={15} />`}
      />
      <ComponentWrapper>
        <Flex>Section1</Flex>
        <Divider size={5} />
        <Flex>Section2</Flex>
      </ComponentWrapper>
      <CodeWrapper code={`<Divider size={5} />`} />
      <ComponentTitle>Color</ComponentTitle>
      <Description>Divider의 색상을 지정합니다.</Description>
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
