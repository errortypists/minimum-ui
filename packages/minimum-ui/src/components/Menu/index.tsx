import React from "react"
import styled from "styled-components"
import MenuGroup from "./MenuGroup"
import MenuItem from "./MenuItem"

const Menu: React.FC & { Item: typeof MenuItem } & {
  Group: typeof MenuGroup
} = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    return child
  })

  return <MenuWrapper>{childrenWithProps}</MenuWrapper>
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`

Menu.Item = MenuItem
Menu.Group = MenuGroup

export default Menu
