import styled from "styled-components"
import { BaseColor } from "../../assets/styles/color"
import { Flex, Typography, Divider, Grid, Button } from "minimum-ui"
import BaseStyle from "../../assets/styles/base"

const { Title } = Typography

const Box: React.CSSProperties = {
  border: `1px solid ${BaseColor.border}`,
  borderRadius: "4px",
  padding: "10px",
  height: "300px",
}

const BoxWrapper: React.FC = ({ children }) => {
  return <Flex style={{ padding: "0 20px" }}>{children}</Flex>
}

const Concept: React.FC = () => {
  return (
    <Wrapper>
      <BoxWrapper>
        <Title>Alert</Title>
      </BoxWrapper>
      <BoxWrapper>
        <AlertBox>Information</AlertBox>
        <AlertBox
          style={{
            background: BaseColor.alert.information.background,
            border: `1px solid ${BaseColor.alert.information.border}`,
          }}
        >
          Success
        </AlertBox>
        <AlertBox
          style={{
            background: BaseColor.alert.warning.background,
            border: `1px solid ${BaseColor.alert.warning.border}`,
          }}
        >
          Warning
        </AlertBox>
        <AlertBox
          style={{
            background: BaseColor.alert.error.background,
            border: `1px solid ${BaseColor.alert.error.border}`,
          }}
        >
          Error
        </AlertBox>
      </BoxWrapper>

      <Divider style={{ margin: "8px 0" }} />

      <BoxWrapper>
        <Title>Button</Title>
      </BoxWrapper>
      <Flex
        direction="column"
        gap={8}
        style={{ padding: "0 20px", boxSizing: "border-box" }}
      >
        <Button>Full</Button>
        <Flex wrap="wrap">
          <Button width="150px" disabled>
            Disabled
          </Button>
          <Button width="150px" variant="text">
            Text
          </Button>
          <Button width="150px" variant="outline">
            Outline
          </Button>
          <Button width="150px">Default</Button>
          <Button width="150px" variant="text" primary>
            Pirmary Text
          </Button>
          <Button width="150px" variant="outline" primary>
            Pirmary Outline
          </Button>
          <Button width="150px" primary>
            Pirmary Default
          </Button>
        </Flex>
      </Flex>

      <Divider style={{ margin: "8px 0" }} />

      <BoxWrapper>
        <Title>Layout Style</Title>
      </BoxWrapper>
      <Grid
        row={2}
        col={2}
        gap={8}
        style={{
          color: BaseColor.font,
          height: "300px",
          padding: BaseStyle.containerPadding,
          fontSize: "1rem",
        }}
      >
        <Flex style={Box}>
          안녕하세요 글자테스트입니자 줄바꿈이 잘 되나요? 안되나요?
        </Flex>
        <Flex style={Box}>
          안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
          안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
          안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
        </Flex>
        <Flex style={Box}>1</Flex>
        <Flex style={Box}>1</Flex>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
`

const AlertBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${BaseColor.alert.success.border};
  background-color: ${BaseColor.alert.success.background};
  color: ${BaseColor.font};
  font-size: 1rem;
`

export default Concept
