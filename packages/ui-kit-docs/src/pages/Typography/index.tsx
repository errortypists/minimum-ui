import { Typography } from "ui-kit"
import Layout from "../../components/Layout"

const { Title, SubTitle, Body, Caption } = Typography
const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title: LayoutTitle,
  Description,
  ComponentTitle,
} = Layout

const TypographyPage: React.FC = () => {
  return (
    <ContentsLayout>
      <LayoutTitle>Typography</LayoutTitle>
      <Description>
        Typography 컴포넌트는 다양한 텍스트 조합을 사용해 문서를 구성하는데
        사용합니다.
      </Description>
      <ComponentTitle>Basic Typography</ComponentTitle>
      <ComponentWrapper>
        <Title>Example of Typography</Title>
        <SubTitle>Example of Typography</SubTitle>
        <Body>Example of Typography</Body>
        <Caption>Example of Typography</Caption>
      </ComponentWrapper>
      <CodeWrapper
        code={`const { Title, SubTitle, Body, Caption } = Typography
        
<Title>Example of Typography</Title>
<SubTitle>Example of Typography</SubTitle>
<Body>Example of Typography</Body>
<Caption>Example of Typography</Caption>

<Typography.Title>Example of Typography</Typography.Title>
<Typography.SubTitle>Example of Typography</Typography.SubTitle>
<Typography.Body>Example of Typography</Typography.Body>
<Typography.Caption>Example of Typography</Typography.Caption>`}
      />
      <ComponentTitle>Style</ComponentTitle>
      <Description>
        Typography 에 개별적인 스타일을 주입합니다. 이때 일반적인 태그의
        스타일을 사용합니다.
      </Description>
      <ComponentWrapper>
        <Title style={{ color: "red" }}>Example of Typography</Title>
        <SubTitle style={{ textDecoration: "line-through" }}>
          Example of Typography
        </SubTitle>
        <Body style={{ padding: "10px" }}>Example of Typography</Body>
        <Caption style={{ letterSpacing: 3 }}>Example of Typography</Caption>
      </ComponentWrapper>
      <CodeWrapper
        code={`const { Title, SubTitle, Body, Caption } = Typography

<Title style={{ color: "red" }}>Example of Typography</Title>
<SubTitle style={{ textDecoration: "line-through" }}>Example of Typography</SubTitle>
<Body style={{ padding: "10px" }}>Example of Typography</Body>
<Caption style={{ letterSpacing: 3 }}>Example of Typography</Caption>`}
      />
    </ContentsLayout>
  )
}

export default TypographyPage
