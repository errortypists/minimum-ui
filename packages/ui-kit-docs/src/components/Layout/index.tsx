import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs"

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
  min-width: 420px;
  max-width: 604px;
  border: 1px solid red;

  @media only screen and (max-width: 820px) {
    display: none;
  }
`

const RightAreaWrapper = styled.div`
  position: relative;
  width: 420px;
  border: 1px solid blue;
  /* zoom: 1.25; */
`

const RightWrapper: React.FC = (props) => {
  const { children } = props
  return <RightAreaWrapper>{children}</RightAreaWrapper>
}

const ComponentWrapper = styled.div`
  border: 1px solid green;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
`

const CodeWrapper: React.FC<{ code: string }> = (props) => {
  const { code } = props
  return (
    <SyntaxHighlighter language="jsx" style={atomOneDarkReasonable}>
      {code}
    </SyntaxHighlighter>
  )
}

const Layout = {
  MainLayout,
  LeftWrapper,
  RightWrapper,
  ComponentWrapper,
  CodeWrapper,
}

export default Layout
