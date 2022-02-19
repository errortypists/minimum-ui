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
        기본 텍스트 스타일 title, subtitle, body, caption
      </Description>
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
