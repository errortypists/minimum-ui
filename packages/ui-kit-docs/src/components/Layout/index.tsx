import styled from "styled-components"
import { CodeBlock, hopscotch } from "react-code-blocks"
import { Typography } from "ui-kit"

import Color, { BaseColor } from "../../assets/styles/color"
import {
  LayoutComponentDescription,
  LayoutComponentTitle,
  LayoutTitle,
  LayoutTitleDescription,
} from "./Contents"
import { ComponentBox, PropsBox, Header, Footer } from ".."
import useStatus from "../../hooks/useStatus"
import BaseStyle from "../../assets/styles/base"

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

interface ILeft {
  name?: string
}

const LeftWrapper: React.FC<ILeft> = () => {
  const { selectedMenu } = useStatus()
  return (
    <LeftAreaWrapper>
      <ComponentBox />
      {selectedMenu?.id && (
        <>
          <Typography.Title>Props</Typography.Title>
          <LeftAreaPropsWrapper>
            <PropsBox name={selectedMenu?.id || ""} />
          </LeftAreaPropsWrapper>
        </>
      )}
    </LeftAreaWrapper>
  )
}

const LeftAreaWrapper = styled.div`
  flex: 1;
  position: relative;
  min-width: 375px;
  max-width: 604px;
  padding-right: 80px;
  padding-top: 50px;
  padding-left: 20px;
  overflow: hidden;

  @media only screen and (max-width: 1050px) {
    padding-right: 20px;
  }

  @media only screen and (max-width: 820px) {
    display: none;
  }
`

const LeftAreaPropsWrapper = styled.div`
  height: 450px;
  overflow-y: auto;
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
  border-radius: ${BaseStyle.radius};
  overflow: auto;
`

const CodeWrapper: React.FC<{ code: string }> = (props) => {
  const { code } = props

  return (
    <CodeBlock
      language="jsx"
      text={code}
      theme={hopscotch}
      wrapLines={true}
      codeBlock
      showLineNumbers={false}
      customStyle={{
        padding: "2px",
        paddingBottom: 0,
        margin: "10px 0",
        borderRadius: BaseStyle.radius,
        fontSize: "14px",
      }}
    />
  )
}

const ContentsLayout: React.FC = (props) => {
  const { children } = props
  const { selectedMenu } = useStatus()
  return (
    <MainLayout>
      <LeftWrapper>
        <ComponentBox />
        <PropsBox name={selectedMenu?.id || ""} />
      </LeftWrapper>
      <RightWrapper>
        <Header />
        <RightContentWrapper>
          {children}
          <PropsBox hasTitle={true} name={selectedMenu?.id || ""} />
        </RightContentWrapper>
        <Footer />
      </RightWrapper>
    </MainLayout>
  )
}

const RightContentWrapper = styled.div`
  height: calc(100% - 80px);
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
