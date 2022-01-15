import { useState } from "react"
import styled from "styled-components"

import useStatus from "../../hooks/useStatus"
import Menu from "../Icon/Menu"

const Header: React.FC = () => {
  const { isLeftMenu, setLeftMenu } = useStatus()

  return (
    <Wrapper>
      <IconWrapper onClick={() => setLeftMenu(!isLeftMenu)}>
        <Menu fill={"#000000"} />
      </IconWrapper>
      Header
    </Wrapper>
  )
}

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 8px;
  cursor: pointer;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgoldenrod;
`

export default Header