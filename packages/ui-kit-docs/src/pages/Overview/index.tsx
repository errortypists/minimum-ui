import styled from "styled-components"
import { Link } from "react-router-dom"

const OverviewPage: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderLink to={"/button"}>docs</HeaderLink>{" "}
        <HeaderLink to={{ pathname: `https://www.npmjs.com` }} target="_blank">
          npm
        </HeaderLink>{" "}
        <HeaderLink to={{ pathname: `https://www.github.com` }} target="_blank">
          github
        </HeaderLink>
      </Header>
      <Center>
        <strong>S</strong>imple&nbsp;<strong>B</strong>one&nbsp;
        <strong>UI</strong>
      </Center>
      <Footer></Footer>
    </Wrapper>
  )
}

export default OverviewPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
`

const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
  color: white;
  background-color: #444444;
  padding-right: 30px;
`

const Center = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding-left: 16px;
  font-size: 18px;
`

const Footer = styled.div`
  width: 100%;
  height: 200px;
  color: white;
  background-color: #333333;
`
