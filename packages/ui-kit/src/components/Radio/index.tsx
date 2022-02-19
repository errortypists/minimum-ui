import React from "react"
import styled, { css } from "styled-components"

import { BaseColor } from "assets/styles/color"
import BaseStyle from "assets/styles/base"

interface Props {
  title?: string
  titleDirection?: "left" | "right" | "top" | "bottom"
  checked?: boolean
  value?: any
  color?: string
  disabled?: boolean
  size?: "small" | "medium" | "large"
  onChange?: (value: any) => void
}

const TITLE_DIRECTION = {
  left: "row-reverse",
  right: "row",
  top: "column-reverse",
  bottom: "column",
}

const getSize = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return 16
    case "medium":
      return 18
    case "large":
      return 20
    default:
      return 16
  }
}

const convertHexColorToRGB = (hex: string, opacity: number = 1) => {
  if (!hex || !hex.includes("#")) return hex

  const _hex = hex.replace("#", "")
  const r = parseInt(_hex.substring(0, 2), 16)
  const g = parseInt(_hex.substring(2, 4), 16)
  const b = parseInt(_hex.substring(4, 6), 16)

  return "rgba(" + r + "," + g + "," + b + "," + opacity + ")"
}

const Radio: React.FC<Props> = (props) => {
  const {
    title = "",
    titleDirection = "right",
    checked = false,
    value,
    color = "",
    disabled = false,
    size = "medium",
    onChange,
  } = props

  return (
    <Wrapper
      data-disabled={disabled}
      direction={titleDirection}
      onClick={() => onChange && !disabled && onChange(value)}
    >
      <RadioWrapper size={getSize(size)} color={color}>
        <RadioInput type="radio" defaultChecked={checked} />
        {checked && <RadioIcon size={getSize(size)} color={color} />}
      </RadioWrapper>
      {title !== "" && <Title>{title}</Title>}
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: ${(props) =>
    `${
      TITLE_DIRECTION[props.direction as "left" | "right" | "top" | "bottom"]
    }`};

  &[data-disabled="true"] {
    opacity: ${BaseStyle.disabledOpacity};
    cursor: not-allowed;
  }
`

const RadioWrapper = styled.div<any>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  margin: 2px;
  ${(props) => css`
    width: ${props.size}px;
    height: ${props.size}px;
    color: ${props.color
      ? convertHexColorToRGB(props.color, 0.8)
      : convertHexColorToRGB(BaseColor.font, 0.8)};
    border: ${props.size * 0.08}px solid ${props.color || BaseColor.font};
    border-radius: ${props.size * 0.5}px;
  `}
`

const RadioInput = styled.input<any>`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  z-index: 1;
`

const RadioIcon = styled.div<any>`
  cursor: pointer;
  ${(props) => css`
    width: ${props.size * 0.55}px;
    height: ${props.size * 0.55}px;
    background-color: ${props.color
      ? convertHexColorToRGB(props.color, 0.8)
      : convertHexColorToRGB(BaseColor.font, 0.8)};
    border-radius: ${props.size * 0.55 * 0.5}px;
  `}
`

const Title = styled.div<any>`
  user-select: none;
  flex: 1;
  white-space: nowrap;
`

export default React.memo(Radio)
