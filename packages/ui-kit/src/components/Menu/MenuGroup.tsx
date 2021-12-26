import React, { useEffect, useMemo, useState } from "react"
import BaseStyle from "assets/styles/base"
import { BaseColor } from "assets/styles/color"
import Icon from "components/Icon"
import styled from "styled-components"

interface MenuGroupProps {
  title: string
  selected?: string
  onChange?(key: string): void
}

const MenuGroup: React.FC<MenuGroupProps> = ({
  title,
  selected,
  onChange,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const childrenCount = React.Children.count(children)
  const isGroupSelected: boolean = useMemo(() => {
    return React.Children.toArray(children)
      .map((child) => {
        if (React.isValidElement<{ name: string }>(child)) {
          return child.props.name
        }
        return child
      })
      .some((name) => name === selected)
  }, [children, selected])

  useEffect(() => {
    setIsOpen(isGroupSelected)
  }, [isGroupSelected])

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isGroup: true,
        onChange,
        selected,
      })
    }
    return child
  })

  return (
    <MenuGroupWrapper className="group">
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
  right: 15px;
  top: 0;
  width: 10px;
  height: 10px;
`

const MenuGroupChildWrapper = styled.div`
  transition: height 0.3s ease-in-out;
  overflow: hidden;
`

export default MenuGroup
