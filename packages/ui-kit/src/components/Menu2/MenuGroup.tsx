import React, { useState } from "react"
import Icon from "components/Icon"
import styled from "styled-components"
import BaseStyle from "assets/styles/base"
import { BaseColor } from "assets/styles/color"

interface MenuGroupProps {
  title: string
  open?: boolean
}

const MenuGroup: React.FC<MenuGroupProps> = ({
  title,
  open = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open)
  const childrenCount = React.Children.count(children)

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isGroup: true,
      })
    }
    return child
  })

  return (
    <MenuGroupWrapper>
      <MenuGroupTitle onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {title}
        <MenuGroupIcon>
          <Icon name={isOpen ? "arrowUp" : "arrowDown"} />
        </MenuGroupIcon>
      </MenuGroupTitle>
      <MenuGroupChildWrapper
        style={{ height: isOpen ? `${childrenCount * 40}px` : "0" }}
      >
        {childrenWithProps}
      </MenuGroupChildWrapper>
    </MenuGroupWrapper>
  )
}

const MenuGroupWrapper = styled.div`
  box-sizing: border-box;
`

const MenuGroupTitle = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: ${BaseStyle.fontSize};
  padding-left: 15px;
  padding-right: 30px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${BaseColor.font};
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  position: relative;
`

const MenuGroupIcon = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
`

const MenuGroupChildWrapper = styled.div`
  transition: height 0.3s ease-in-out;
  overflow: hidden;
`

export default MenuGroup
