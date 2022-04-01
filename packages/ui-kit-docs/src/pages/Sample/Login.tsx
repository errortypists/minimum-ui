import styled from "styled-components"
import { Button, Flex, Input } from "ui-kit"
import { BaseColor } from "../../assets/styles/color"

import Layout from "../../components/Layout"

const { Title } = Layout

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <LoginWrapper>
          <Title>Welcome</Title>
          <Input value={""} title="Id" />
          <Input value={""} title="Password" />
          <Flex>
            <Button variant="outline" primary>
              Join
            </Button>
            <Button primary>Login</Button>
          </Flex>
        </LoginWrapper>
      </PageWrapper>
    </Wrapper>
  )
}

export default LoginPage

const Wrapper = styled.div`
  position: relative;
  width: 375px;
  height: 667px;
  border: 1px solid ${BaseColor.border};
`

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginWrapper = styled.div`
  margin: 0 25px;
  padding: 12px 12px 0px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${BaseColor.border};
  & > * {
    margin-bottom: 12px;
  }
`
