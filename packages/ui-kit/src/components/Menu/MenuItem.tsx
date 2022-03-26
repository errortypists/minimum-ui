import React from "react"
import BaseStyle from "assets/styles/base"
import Colors, { BaseColor } from "assets/styles/color"
import styled from "styled-components"

interface MenuItemProps {
  selected?: boolean
  isGroup?: boolean
  onClick?(): void
}

const MenuItem: React.FC<MenuItemProps> = ({
  selected = false,
  isGroup = false,
  onClick,
  children,
}) => {
  return (
    <MenuItemWrapper
      data-selected={selected}
      data-group={isGroup}
      onClick={onClick}
    >
      {children}
    </MenuItemWrapper>
  )
}

const MenuItemWrapper = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: ${BaseStyle.fontSize};
  padding-left: 15px;
  padding-right: 15px;
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

  &[data-selected="true"] {
    color: ${Colors.BLUE[9]};
    background: ${Colors.BLUE[1]};
  }

  &[data-selected="false"]:hover {
    color: ${Colors.GRAY[7]};
    background: ${Colors.GRAY[0]};
  }

  &[data-group="true"] {
    padding-left: 25px;
  }
`

export default MenuItem
