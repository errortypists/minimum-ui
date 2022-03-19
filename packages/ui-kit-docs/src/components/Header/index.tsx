import styled from "styled-components"

import useStatus from "../../hooks/useStatus"
import Menu from "../Icon/Menu"
import Github from "../Icon/Github"
import { BaseColor } from "../../assets/styles/color"
import { useHistory } from "react-router-dom"

const Header: React.FC = () => {
  const history = useHistory()
  const { isLeftMenu, setLeftMenu } = useStatus()

  return (
    <Wrapper>
      <MenuIconWrapper onClick={() => setLeftMenu(!isLeftMenu)}>
        <Menu fill={"#000000"} />
      </MenuIconWrapper>
      <Logo onClick={() => history.push("/")}>Minimum UI</Logo>
      <GithubIconWrapper onClick={() => setLeftMenu(!isLeftMenu)}>
        <Github fill={"#000000"} />
      </GithubIconWrapper>
    </Wrapper>
  )
}

const MenuIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 8px;
  cursor: pointer;
`

const GithubIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 8px;
  cursor: pointer;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${BaseColor.border} 0px 2px 6px;
`

const Logo = styled.div`
  height: 45px;
  position: absolute;
  font-size: 1.5rem;
  font-family: "Montserrat";
  font-weight: 900;
  line-height: 45px;
  user-select: none;
  color: ${BaseColor.font};
  cursor: pointer;
`

export default Header
