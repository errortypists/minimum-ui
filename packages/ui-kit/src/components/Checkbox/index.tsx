import React from "react"
import styled, { css } from "styled-components"

import Icon from "components/Icon"
import { BaseColor } from "assets/styles/color"
import BaseStyle from "assets/styles/base"

interface Props {
  title?: string
  direction?: "left" | "right" | "top" | "bottom"
  checked?: boolean
  value?: any
  color?: string
  disabled?: boolean
  size?: "small" | "medium" | "large"
  onChange?: (value: any) => void
}

const TITLE_DIRECTION = {
  left: { direction: "row-reverse", margin: "margin-right: 8px" },
  right: { direction: "row", margin: "margin-left: 8px" },
  top: { direction: "column-reverse", margin: "margin-bottom: 4px" },
  bottom: { direction: "column", margin: "margin-top: 4px" },
}

const convertHexColorToRGB = (hex: string, opacity: number = 1) => {
  if (!hex || !hex.includes("#")) return hex

  const _hex = hex.replace("#", "")
  const r = parseInt(_hex.substring(0, 2), 16)
  const g = parseInt(_hex.substring(2, 4), 16)
  const b = parseInt(_hex.substring(4, 6), 16)

  return "rgba(" + r + "," + g + "," + b + "," + opacity + ")"
}

const Checkbox: React.FC<Props> = (props) => {
  const {
    title = "",
    direction = "right",
    checked = false,
    value,
    color = "",
    disabled = false,
    size = "medium",
    onChange,
  } = props

  return (
    <Wrapper
      direction={direction}
      onClick={() => onChange && !disabled && onChange(value)}
    >
      <CheckboxWrapper
        data-size={size}
        color={color}
        data-disabled={disabled}
        data-checked={checked}
      >
        <CheckboxInput type="checkbox" defaultChecked={checked} />
        <CheckboxIcon data-size={size}>
          {checked && <Icon name="check" color="#fff" />}
        </CheckboxIcon>
      </CheckboxWrapper>
      {title !== "" && <Title direction={direction}>{title}</Title>}
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* margin-left: ${BaseStyle.padding};
  margin-right: ${BaseStyle.padding}; */
  flex-direction: row;
  flex-direction: ${(props) =>
    `${
      TITLE_DIRECTION[props.direction as "left" | "right" | "top" | "bottom"]
        .direction
    }`};
`

const CheckboxSize = styled.div`
  &[data-size="small"] {
    width: 16px;
    height: 16px;
  }

  &[data-size="medium"] {
    width: 18px;
    height: 18px;
  }

  &[data-size="large"] {
    width: 20px;
    height: 20px;
  }
`

const CheckboxWrapper = styled(CheckboxSize)<any>`
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
  ${(props) => css`
    border: 1px solid ${props.color || BaseColor.font};
    border-radius: 2px;

    &[data-checked="true"] {
      background: ${props.color
        ? convertHexColorToRGB(props.color, 0.8)
        : convertHexColorToRGB(BaseColor.font, 0.8)};
    }
  `}

  &[data-disabled="true"] {
    opacity: ${BaseStyle.disabledOpacity};
    cursor: not-allowed;
  }
`

const CheckboxInput = styled.input<any>`
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

const CheckboxIcon = styled(CheckboxSize)<any>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2px;
`

const Title = styled.div<any>`
  user-select: none;
  ${(props) =>
    `${
      TITLE_DIRECTION[props.direction as "left" | "right" | "top" | "bottom"]
        .margin
    }`};
`

export default React.memo(Checkbox)
