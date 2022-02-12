import styled from "styled-components"
import { Flex, Grid } from "ui-kit"
import Layout from "../../components/Layout"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
} = Layout

const LayoutPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Layout</Title>
      <Description>Flex, Grid를 활용한 레이아웃 구성</Description>
      <ComponentTitle>Flex</ComponentTitle>
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
      <ComponentTitle>Grid</ComponentTitle>
      <ComponentWrapper>
        <Grid row={2} col={2} gap={8}>
          <Box>GRID1</Box>
          <Box>GRID2</Box>
          <Box>GRID3</Box>
          <Box>GRID4</Box>
        </Grid>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Grid row={2} col={2} gap={8}>
          <Box>GRID1</Box>
          <Box>GRID2</Box>
          <Box>GRID3</Box>
          <Box>GRID4</Box>
</Grid>`}
      />
    </ContentsLayout>
  )
}

const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LayoutPage
