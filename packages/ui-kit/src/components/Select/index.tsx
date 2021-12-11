import React from "react"
import BaseStyle from "assets/styles/base"
import { BaseColor } from "assets/styles/color"
import styled from "styled-components"
import Icon from "components/Icon"

interface OptionProps {
  name: string | number
  value: string | number
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionProps[]
  width?: string
  onChange(value: any): void
  style?: React.CSSProperties
}

const Select: React.FC<Props> = ({
  options,
  width = "100%",
  onChange,
  style,
  ...rest
}) => {
  return (
    <Wrapper width={width} style={{ ...style }}>
      <SelectWrapper
        width={width}
        {...rest}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value as string)
        }
      >
        {options?.map((option: OptionProps, index: number) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </SelectWrapper>
      <IconWrapper>
        <Icon name="arrowDown" />
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`
  position: relative;
  display: inline-flex;
  width: ${(props) => props.width};
  height: ${BaseStyle.boxHeight};
  border-radius: ${BaseStyle.radius};
  border: 1px solid ${BaseColor.inputBorder};
  background: #fff;
`

const SelectWrapper = styled.select<any>`
  display: flex;
  width: ${(props) => props.width};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0 none;
  border: 0;
  overflow: hidden;
  height: ${BaseStyle.boxHeight};
  padding: ${BaseStyle.padding};
  padding-right: 30px;
  font-size: ${BaseStyle.fontSize};
  z-index: 1;
  background: transparent;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 13px;
  font-size: ${BaseStyle.fontSize};
  height: ${BaseStyle.boxHeight};
  cursor: pointer;
  width: 13px;
  height: 13px;
  line-height: 13px;
`

export default Select
