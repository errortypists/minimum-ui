import styled from "styled-components";
import { Divider, Flex, Grid } from "ui-kit";

const LayoutPage: React.FC = () => {
  return (
    <Wrapper>
      <Flex>
        <Box style={{ flex: 1 }}>FLEX1</Box>
        <Box style={{ flex: 2 }}>FLEX2</Box>
        <Box style={{ flex: 3 }}>FLEX3</Box>
        <Box style={{ flex: 2 }}>FLEX4</Box>
        <Box style={{ flex: 1 }}>FLEX5</Box>
      </Flex>
      <Divider size={20} />
      <Flex direction="column" style={{ height: "300px" }}>
        <Box style={{ flex: 2, height: "auto" }}>FLEX1</Box>
        <Box style={{ flex: 1, height: "auto" }}>FLEX2</Box>
        <Box style={{ flex: 3, height: "auto" }}>FLEX3</Box>
        <Box style={{ flex: 1, height: "auto" }}>FLEX4</Box>
        <Box style={{ flex: 2, height: "auto" }}>FLEX5</Box>
      </Flex>
      <Divider size={20} />
      <Grid size={[2, 2]} gap={8}>
        <Box>GRID1</Box>
        <Box>GRID2</Box>
        <Box>GRID3</Box>
        <Box>GRID4</Box>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
`;

const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LayoutPage;
