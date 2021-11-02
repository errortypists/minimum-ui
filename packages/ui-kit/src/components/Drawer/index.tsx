import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styled, { css } from "styled-components"

interface Props {
  isOpen: boolean
  zIndex?: number
  size?: number
  style?: React.CSSProperties
  direction?: "left" | "right" | "top" | "bottom" | "none"
  onClickOutside?: () => void
}

const leftContentDirectionStyle = (size: number) => {
  return {
    left: `-${size}px`,
    top: 0,
    height: "100%",
    width: `${size}px`,
  }
}

const rightContentDirectionStyle = (size: number) => {
  return {
    right: `-${size}px`,
    top: 0,
    height: "100%",
    width: `${size}px`,
  }
}

const topContentDirectionStyle = (size: number) => {
  return {
    left: 0,
    top: `-${size}px`,
    height: `${size}px`,
    width: "100%",
  }
}

const bottomContentDirectionStyle = (size: number) => {
  return {
    left: 0,
    bottom: `-${size}px`,
    height: `${size}px`,
    width: "100%",
  }
}

const Drawer: React.FC<Props> = (props) => {
  const {
    zIndex = 1000,
    style,
    children,
    onClickOutside,
    direction = "left",
    isOpen,
    size = 200,
  } = props

  let contentDirectionStyles: any = leftContentDirectionStyle(size)
  switch (direction) {
    case "right":
      contentDirectionStyles = rightContentDirectionStyle(size)
      break
    case "top":
      contentDirectionStyles = topContentDirectionStyle(size)
      break
    case "bottom":
      contentDirectionStyles = bottomContentDirectionStyle(size)
      break
    case "none":
      contentDirectionStyles = {}
  }

  const [isActive, setActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setActive(isOpen)
    }, 200)
  }, [isOpen])

  return createPortal(
    <Wrapper isOpen={isOpen}>
      <Dimmed onClick={onClickOutside} zIndex={zIndex} />
      <Content
        isActive={isActive}
        zIndex={zIndex + 1}
        contentDirectionStyles={contentDirectionStyles}
        style={{ ...style }}
        direction={direction}
        size={size}
      >
        {children}
      </Content>
    </Wrapper>,
    document.body
  )
}

const Wrapper = styled.div<any>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => `${props.isOpen ? "flex" : "none"}`};
  justify-content: center;
  align-items: center;
`

const Dimmed = styled.div<any>`
  background-color: #000000;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: ${(props) => `${props.zIndex}`};
`

const Content = styled.div<any>`
  position: absolute;
  background: white;
  transition: 0.3s;
  z-index: ${(props) => `${props.zIndex}`};
  ${(props) => props.contentDirectionStyles};
  ${(props) =>
    props.isActive &&
    css`
      ${props.direction}:0;
    `}
`

export default Drawer
