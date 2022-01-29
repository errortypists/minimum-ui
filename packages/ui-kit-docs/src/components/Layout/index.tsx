import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { ComponentBox, PropsBox, Header } from "../"
import Color, { BaseColor } from "../../assets/styles/color"
import {
  LayoutComponentDescription,
  LayoutComponentTitle,
  LayoutTitle,
  LayoutTitleDescription,
} from "./Contents"

const MainLayout = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  height: 100%;
  display: flex;

  @media only screen and (max-width: 820px) {
    justify-content: center;
  }
`
const LeftWrapper = styled.div`
  flex: 1;
  position: relative;
  min-width: 375px;
  max-width: 604px;
  padding-right: 80px;
  padding-top: 100px;
  overflow-y: auto;

  @media only screen and (max-width: 820px) {
    display: none;
  }
`

const RightAreaWrapper = styled.div`
  position: relative;
  width: 420px;
  border: 1px solid ${BaseColor.border};

  @media only screen and (max-width: 820px) {
    width: 100%;
  }
`

const RightWrapper: React.FC = (props) => {
  const { children } = props
  return <RightAreaWrapper>{children}</RightAreaWrapper>
}

const ComponentWrapper = styled.div`
  border: 1px solid ${Color.GRAY[3]};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
`

const CodeWrapper: React.FC<{ code: string }> = (props) => {
  const { code } = props
  return (
    <SyntaxHighlighter
      style={atomOneDarkReasonable}
      customStyle={{ padding: 0 }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

const ContentsLayout: React.FC = (props) => {
  const { children } = props
  return (
    <MainLayout>
      <LeftWrapper>
        <ComponentBox />
        <PropsBox name="Button" />
      </LeftWrapper>
      <RightWrapper>
        <Header />
        <RightContentWrapper>{children}</RightContentWrapper>
      </RightWrapper>
    </MainLayout>
  )
}

const RightContentWrapper = styled.div`
  height: calc(100% - 40px);
  overflow: auto;
  width: 100%;
  padding: 18px;
`

const Layout = {
  MainLayout,
  LeftWrapper,
  RightWrapper,
  ComponentWrapper,
  CodeWrapper,
  ContentsLayout,
  Title: LayoutTitle,
  Description: LayoutTitleDescription,
  ComponentTitle: LayoutComponentTitle,
  ComponentDescription: LayoutComponentDescription,
}

export default Layout
