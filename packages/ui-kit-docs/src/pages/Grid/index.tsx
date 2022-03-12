import Layout from "../../components/Layout"
import { Grid } from "ui-kit"
import styled from "styled-components"
import { BaseColor } from "../../assets/styles/color"

const { ContentsLayout, ComponentWrapper, CodeWrapper, Title, Description } =
  Layout

const GridPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Grid</Title>
      <Description>Grid 레이아웃</Description>
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
