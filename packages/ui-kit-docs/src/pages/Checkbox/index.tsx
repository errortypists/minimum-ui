import { useState } from "react"
import { Checkbox, Flex, Typography } from "ui-kit"
import SyntaxHighlighter from "react-syntax-highlighter"

import Layout from "../../components/Layout"
import Header from "../../components/Header"
import styled from "styled-components"

const { MainLayout, LeftWrapper, RightWrapper, ComponentWrapper, CodeWrapper } =
  Layout
const { Body, Caption, SubTitle, Title } = Typography

const RadioButtonPage: React.FC = () => {
  const [values, setValues] = useState([false, false])
  return (
    <MainLayout>
      <LeftWrapper>123</LeftWrapper>
      <RightWrapper>
        <Header />
        <Wrapper>
          <Title>Checkbox</Title>
          <Body>
            Checkboxes can be used to turn an option on or off. If you have
            multiple options appearing in a list, you can preserve space by
            using checkboxes instead of on/off switches. If you have a single
            option, avoid using a checkbox and use an on/off switch instead.
          </Body>
          <br />
          <SubTitle>Basic checkboxes</SubTitle>
          <ComponentWrapper>
            <Flex direction="row" justify="center" gap={0}>
              <Checkbox checked={true} />
              <Checkbox checked={false} />
              {/* disabled 에 대한 디자인 안잡았었네;;; */}
              <Checkbox checked={true} disabled />
              <Checkbox checked={false} disabled />
              {/* <Checkbox
                title={"남자"}
                titleDirection={"left"}
                checked={values[0]}
                color={"#ff00ff"}
                value={"1번째 버튼"}
                onChange={(val) => {
                  console.log(val)
                  const copyValues = values.slice()
                  copyValues[0] = !copyValues[0]
                  setValues(copyValues)
                }}
              />
              <Checkbox
                title={"여자"}
                titleDirection={"bottom"}
                checked={values[1]}
                color={"#ff00ff"}
                value={"2번째 버튼"}
                onChange={(val) => {
                  console.log(val)
                  const copyValues = values.slice()
                  copyValues[1] = !copyValues[1]
                  setValues(copyValues)
                }}
              /> */}
            </Flex>
          </ComponentWrapper>
          <CodeWrapper
            code={`
  <Checkbox checked={true} />
  <Checkbox checked={false} />
  <Checkbox checked={true} disabled />
  <Checkbox checked={false} disabled />
            `}
          />
          <br />
          <SubTitle>Label checkboxes</SubTitle>
          <Body>
            You can provide a label to the Checkbox thanks to the
            FormControlLabel component.
          </Body>
          <ComponentWrapper>
            <Flex direction="row" justify="center" gap={0}>
              <Checkbox title={"남자"} checked={true} />
              <Checkbox title={"여자"} checked={false} />
            </Flex>
          </ComponentWrapper>
          <CodeWrapper
            code={`
  <Checkbox title={"남자"} checked={true} />
  <Checkbox title={"여자"} checked={false} />
            `}
          />
          <br />
          <SubTitle>Size</SubTitle>
          <Body>
            Use the size prop or customize the font size of the svg icons to
            change the size of the checkboxes.
          </Body>
          <ComponentWrapper>
            <Flex direction="row" justify="center" gap={0}>
              <Checkbox size={12} checked={true} />
              <Checkbox size={24} checked={true} />
              <Checkbox size={36} checked={true} />
            </Flex>
          </ComponentWrapper>
          <CodeWrapper
            code={`
  <Checkbox size={12} checked={true} />
  <Checkbox size={24} checked={true} />
  <Checkbox size={36} checked={true} />
            `}
          />
        </Wrapper>
      </RightWrapper>
    </MainLayout>
  )
}

const Wrapper = styled.div`
  height: calc(100% - 40px);
  overflow: auto;
  width: 100%;
  padding: 18px;
`

export default RadioButtonPage
