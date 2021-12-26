import React, { useEffect } from "react"
import styled, { css } from "styled-components"

import Icon from "components/Icon"

interface Props {
  title?: string
  titleDirection?: "left" | "right" | "top" | "bottom"
  checked?: boolean
  value?: any
  color?: string
  disabled?: boolean
  size?: number
  onChange?: (value: any) => void
}

const TITLE_DIRECTION = {
  left: "row-reverse",
  right: "row",
  top: "column-reverse",
  bottom: "column",
}

const Checkbox: React.FC<Props> = (props) => {
  const {
    title = "",
    titleDirection = "right",
    checked = false,
    value,
    color = "#495057",
    disabled = false,
    size = 24,
    onChange,
  } = props

  return (
    <Wrapper
      direction={titleDirection}
      onClick={() => onChange && !disabled && onChange(value)}
    >
      <CheckboxWrapper size={size} color={color}>
        <CheckboxInput type="checkbox" defaultChecked={checked} />
        <CheckboxIcon>
          {checked && (
            <Icon
              style={{ position: "relative" }}
              name="check"
              color={color}
              size={(size as number) - 8}
            />
          )}
        </CheckboxIcon>
      </CheckboxWrapper>
      {title !== "" && <Title>{title}</Title>}
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;
  margin-right: 16px;
  flex-direction: row;
  flex-direction: ${(props) =>
    `${
      TITLE_DIRECTION[props.direction as "left" | "right" | "top" | "bottom"]
    }`};
`

const CheckboxWrapper = styled.div<any>`
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
    color: ${props.color};
    border: ${props.size * 0.13}px solid ${props.color};
    border-radius: ${props.size * 0.2}px;
  `}
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

const CheckboxIcon = styled.div<any>`
  cursor: pointer;
  margin: 1px;
  position: "relative";
`

const Title = styled.div<any>`
  user-select: none;
`

export default React.memo(Checkbox)
