import Layout from "../../components/Layout"
import { Flex } from "ui-kit"
import styled from "styled-components"
import { BaseColor } from "../../assets/styles/color"

const { ContentsLayout, ComponentWrapper, CodeWrapper, Title, Description } =
  Layout

const FlexPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Flex</Title>
      <Description>Flex layout</Description>
      <ComponentWrapper>
        <Flex>
          <Box style={{ flex: 1 }}>FLEX1</Box>
          <Box style={{ flex: 2 }}>FLEX2</Box>
          <Box style={{ flex: 1 }}>FLEX3</Box>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Flex>
          <Box style={{ flex: 1 }}>FLEX1</Box>
          <Box style={{ flex: 2 }}>FLEX2</Box>
          <Box style={{ flex: 1 }}>FLEX3</Box>
</Flex>`}
      />
      <ComponentWrapper>
        <Flex direction="column" style={{ height: "300px" }}>
          <Box style={{ flex: 2, height: "auto" }}>FLEX1</Box>
          <Box style={{ flex: 1, height: "auto" }}>FLEX2</Box>
          <Box style={{ flex: 3, height: "auto" }}>FLEX3</Box>
          <Box style={{ flex: 1, height: "auto" }}>FLEX4</Box>
          <Box style={{ flex: 2, height: "auto" }}>FLEX5</Box>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Flex direction="column" style={{ height: "300px" }}>
          <Box style={{ flex: 2, height: "auto" }}>FLEX1</Box>
          <Box style={{ flex: 1, height: "auto" }}>FLEX2</Box>
          <Box style={{ flex: 3, height: "auto" }}>FLEX3</Box>
          <Box style={{ flex: 1, height: "auto" }}>FLEX4</Box>
          <Box style={{ flex: 2, height: "auto" }}>FLEX5</Box>
</Flex>`}
      />
    </ContentsLayout>
  )
}

const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${BaseColor.border};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default FlexPage
