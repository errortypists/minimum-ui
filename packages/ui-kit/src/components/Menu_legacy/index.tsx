import React, { useEffect, useState } from "react"
import styled from "styled-components"
import MenuGroup from "./MenuGroup"
import MenuItem from "./MenuItem"

interface MenuProps {
  defaultSelected: string
  onChange(key: string): void
}

const Menu: React.FC<MenuProps> & { Item: typeof MenuItem } & {
  Group: typeof MenuGroup
} = ({ defaultSelected, onChange, children }) => {
  const [key, setKey] = useState(defaultSelected)

  useEffect(() => {
    onChange(key)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onChange: setKey, selected: key })
    }
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
