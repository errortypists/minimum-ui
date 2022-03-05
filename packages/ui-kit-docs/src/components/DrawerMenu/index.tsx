import styled from "styled-components"
import { Link } from "react-router-dom"
import { Flex, Menu, Drawer } from "ui-kit"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

import useStatus from "../../hooks/useStatus"
import components, { ComponentProps } from "../../assets/components"

const sortedComponents = (() => {
  const names = Object.keys(components)
  names.sort()
  let newComponentSet: ComponentProps = {}
  names.forEach((name) => {
    newComponentSet[name] = components[name]
  })
  return newComponentSet
})()

const Header: React.FC = () => {
  const history = useHistory()
  const names = Object.keys(sortedComponents)
  const { isLeftMenu, setLeftMenu, selectedMenu, setSelectedMenu } = useStatus()

  useEffect(() => {
    if (history) {
      history.listen(() => {
        const path = window.location.pathname.slice(1)
        setSelectedMenu({
          id: path,
          url: window.location.pathname,
        })
      })
    }
  }, [history, setSelectedMenu])

  const createMenus = () => {
    return names.map((menuName, index) => {
      const id = `menu-${index}`
      const url = `/${menuName}`
      return (
        <StyledLink
          key={id}
          to={url}
          onClick={() => {
            setSelectedMenu({
              id: menuName,
              url: url,
            })
          }}
        >
          <Menu.Item selected={selectedMenu?.url} name={url}>
            {sortedComponents[menuName].displayName}
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
  background: #ffffff;
  width: 100%;
  height: 100%;
  overflow: auto;
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
