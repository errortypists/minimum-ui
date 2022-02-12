import styled from "styled-components"
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
  ComponentDescription,
} = Layout

const TypographyPage: React.FC = () => {
  return (
    <ContentsLayout>
      <LayoutTitle>Typography</LayoutTitle>
      <Description>
        기본 텍스트 스타일 title, subtitle, body, caption
      </Description>
      <ComponentWrapper>
        <Title>Title</Title>
        <SubTitle>Subtitle</SubTitle>
        <Body>This is Body</Body>
        <Caption>This is Caption</Caption>
      </ComponentWrapper>
      <CodeWrapper
        code={`const { Title, SubTitle, Body, Caption } = Typography
        
<Title>Title</Title>
<SubTitle>Subtitle</SubTitle>
<Body>This is Body</Body>
<Caption>This is Caption</Caption>`}
      />
      <ComponentTitle>Style</ComponentTitle>
      <ComponentWrapper>
        <Title style={{ color: "red" }}>Title</Title>
        <SubTitle style={{ textDecoration: "line-through" }}>Subtitle</SubTitle>
        <Body style={{ padding: "10px" }}>This is Body</Body>
        <Caption style={{ letterSpacing: 3 }}>This is Caption</Caption>
      </ComponentWrapper>
      <CodeWrapper
        code={`const { Title, SubTitle, Body, Caption } = Typography

<Title style={{ color: "red" }}>Title</Title>
<SubTitle style={{ textDecoration: "line-through" }}>Subtitle</SubTitle>
<Body style={{ padding: "10px" }}>This is Body</Body>
<Caption style={{ letterSpacing: 3 }}>This is Caption</Caption>`}
      />
    </ContentsLayout>
  )
}

export default TypographyPage
