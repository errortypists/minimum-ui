import React, { useEffect } from "react"
import styled from "styled-components"

import Icon from "components/Icon"

interface Props {
  title?: string
  titleDirection?: "left" | "right" | "top" | "bottom"
  checked?: boolean
  value?: any
  color?: string
  disabled?: boolean
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
    color,
    disabled = false,
    onChange,
  } = props

  return (
    <Wrapper
      direction={titleDirection}
      onClick={() => onChange && onChange(value)}
    >
      <CheckboxWrapper>
        <CheckboxInput type="checkbox" defaultChecked={checked} />
        <CheckboxIcon>
          {checked ? (
            <Icon name="checkboxOn" color={color} size={24} />
          ) : (
            <Icon name="checkboxOff" color={color} size={24} />
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

const CheckboxWrapper = styled.div`
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
  margin: 4px;
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
`

const Title = styled.div<any>`
  user-select: none;
`

export default React.memo(Checkbox)
