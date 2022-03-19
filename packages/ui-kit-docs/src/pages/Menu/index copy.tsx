import { useState } from "react"
import { Flex, Button, Drawer, Menu } from "ui-kit"

const MenuPage: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [currentMenu, setCurrentMenu] = useState("menu1")
  return (
    <Flex direction="column" align="flex-start">
      <Button width="100px" onClick={() => setOpen(true)}>
        Modal
      </Button>
      {open && (
        <Drawer
          open={open}
          onClickOutside={() => setOpen(false)}
          direction={"left"}
        >
          <Flex>
            <Menu
              defaultSelected={currentMenu}
              onChange={(value) => setCurrentMenu(value)}
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
        </Drawer>
      )}
    </Flex>
  )
}

export default MenuPage
