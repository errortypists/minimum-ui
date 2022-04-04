import Layout from "../../components/Layout"
import { Flex } from "minimum-ui"
import styled from "styled-components"
import { BaseColor } from "../../assets/styles/color"

const { ContentsLayout, ComponentWrapper, CodeWrapper, Title, Description } =
  Layout

const FlexPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Flex</Title>
      <Description>
        Flex 컴포넌트는 자식 구성요소들의 배치를 결정하는 컴포넌트입니다. 각
        구성 영역의 사이즈를 조정할 수 있고, 배치되는 방향성도 결정할 수
        있습니다.
      </Description>
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
