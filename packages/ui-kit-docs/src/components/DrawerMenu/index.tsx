import styled from "styled-components"
import { Link } from "react-router-dom"
import { Flex, Menu, Drawer } from "ui-kit"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

import useStatus from "../../hooks/useStatus"
import component from "../../assets/json/component.json"

const Header: React.FC = () => {
  const history = useHistory()
  const names = Object.keys(component)
  const { isLeftMenu, setLeftMenu, menu, setMenu } = useStatus()

  useEffect(() => {
    if (history) {
      history.listen(() => {
        const path = window.location.pathname.slice(1)
        setMenu({
          displayName: path.charAt(0).toUpperCase() + path.slice(1),
          url: window.location.pathname,
        })
      })
    }
  }, [history, setMenu])

  const createMenus = () => {
    return names.map((menuName, index) => {
      const id = `menu-${index}`
      const lowerMenuName = menuName.toLocaleLowerCase()
      const url = `/${lowerMenuName}`
      return (
        <StyledLink
          key={id}
          to={url}
          onClick={() => {
            setMenu({
              displayName: menuName,
              url: url,
            })
          }}
        >
          <Menu.Item selected={menu?.url} name={url}>
            {menuName}
          </Menu.Item>
        </StyledLink>
      )
    })
  }
  return (
    <Drawer
      isOpen={!!isLeftMenu}
      onClickOutside={() => setLeftMenu(false)}
      direction={"left"}
    >
      <Wrapper>
        <Flex>
          <Menu defaultSelected={""} onChange={() => {}}>
            {createMenus()}
            {/* <Menu.Group title="MENU GROUP">
              <Menu.Item name="menu4">MENU 4</Menu.Item>
              <Menu.Item name="menu5">MENU 5</Menu.Item>
            </Menu.Group> */}
          </Menu>
        </Flex>
      </Wrapper>
    </Drawer>
  )
}

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background: white;
`

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export default Header
