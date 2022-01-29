import styled from "styled-components"
import { Flex, Menu, Drawer } from "ui-kit"

import useStatus from "../../hooks/useStatus"
import component from "../../assets/json/component.json"

const Header: React.FC = () => {
  const names = Object.keys(component)
  const { isLeftMenu, setLeftMenu } = useStatus()
  console.log(names)
  return (
    <Drawer
      isOpen={!!isLeftMenu}
      onClickOutside={() => setLeftMenu(false)}
      direction={"left"}
    >
      <Wrapper>
        <Flex>
          <Menu
            // defaultSelected={currentMenu}
            // onChange={(value) => setCurrentMenu(value)}
            defaultSelected="menu1"
            onChange={() => {}}
          >
            <Menu.Item name="menu1">MENU 1</Menu.Item>
            <Menu.Item name="menu2">MENU 2</Menu.Item>
            <Menu.Item name="menu3">MENU 3</Menu.Item>
            <Menu.Group title="MENU GROUP">
              <Menu.Item name="menu4">MENU 4</Menu.Item>
              <Menu.Item name="menu5">MENU 5</Menu.Item>
            </Menu.Group>
            <Menu.Item name="menu6">MENU 6</Menu.Item>
            <Menu.Item name="menu7">MENU 7</Menu.Item>
            <Menu.Item name="menu8">MENU 8</Menu.Item>
            <Menu.Group title="MENU GROUP2">
              <Menu.Item name="menu9">MENU 9</Menu.Item>
              <Menu.Item name="menu10">MENU 10</Menu.Item>
            </Menu.Group>
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

export default Header
