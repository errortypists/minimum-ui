import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Button, Flex, Grid, Typography } from "ui-kit"
import { BaseColor } from "../../assets/styles/color"
import { Footer } from "../../components"
import { sortedComponents } from "../../components/component-box"

const OverviewPage: React.FC = () => {
  const history = useHistory()
  const names = Object.keys(sortedComponents)
  return (
    <Flex
      direction="column"
      gap={0}
      style={{ height: "100%", userSelect: "none" }}
    >
      <LogoWrapper>
        <Typography.SubTitle>github</Typography.SubTitle>
        <Typography.SubTitle>npm</Typography.SubTitle>
      </LogoWrapper>
      <BoardWrapper>
        <Brand>Minimum UI</Brand>
        <BrandDescription>
          가장 기본적인 것만 필요할 때, 최소한의 구성으로 화면을 만들어보세요.
        </BrandDescription>
        <Button
          variant="outline"
          color="#fff"
          width="100px"
          onClick={() => history.push("/button")}
        >
          시작하기
        </Button>
      </BoardWrapper>
      <ComponentDescription>
        <Typography.Body style={{ fontWeight: 100 }}>
          현재까지 제공중인 컴포넌트 리스트
        </Typography.Body>
      </ComponentDescription>
      <ComponentWrapper>
        <Grid style={{ width: "400px", height: "250px" }} col={4} row={8}>
          {names.map((name) => (
            <ComponentName key={name}>{name}</ComponentName>
          ))}
        </Grid>
      </ComponentWrapper>
      <Footer />
    </Flex>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  color: ${BaseColor.font};

  div ~ div {
    margin-left: 10px;
  }
  div {
    cursor: pointer;
  }
`

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 300px;
  width: 100%;
  background: ${BaseColor.primary};
  color: #fff;
  font-family: "NanumGothicLight";
`

const Brand = styled.span`
  font-size: 3.5rem;
  line-height: 3.5rem;
  margin-top: 70px;
  font-family: "Montserrat";
  font-weight: 900;
`

const BrandDescription = styled.span`
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 0 10px;
  text-align: center;
  line-height: 1.5rem;
`

const ComponentWrapper = styled.div`
  display: flex;
  flex: 1;
`

const ComponentDescription = styled.span`
  font-size: 1rem;
  margin: 20px 0;
  color: ${BaseColor.font};
`

const ComponentName = styled.span`
  font-size: 1rem;
  font-family: "NanumGothicLight";
  color: ${BaseColor.font};
`

export default OverviewPage
