import Layout from "../../components/Layout"
import { Grid } from "ui-kit"
import styled from "styled-components"
import { BaseColor } from "../../assets/styles/color"

const {
  ContentsLayout,
  ComponentTitle,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
} = Layout

const GridPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Grid</Title>
      <Description>
        Grid 컴포넌트는 자식 구성요소들의 배치를 결정하는 컴포넌트입니다.
        구성요소는 격자모양의 형태로 순서대로 좌측에서 우측으로 위에서 아래로
        요소 하나하나씩 배치됩니다.
      </Description>
      <ComponentTitle>Basic Grid</ComponentTitle>
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
  background-color: ${BaseColor.border};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default GridPage
