import React from "react"
import styled from "styled-components"
import { BaseColor } from "assets/styles/color"
import BaseStyle from "assets/styles/base"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string
  height?: string
  placeholder?: string
  cols?: number
  rows?: number
  style?: React.CSSProperties
}

const TextArea: React.FC<Props> = ({
  width = "100%",
  height,
  placeholder,
  cols,
  rows = 4,
  style,
  ...rest
}) => {
  return (
    <Wrapper
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      {...rest}
      style={{ width: cols || width, height, ...style }}
    />
  )
}

const Wrapper = styled.textarea`
  border: 1px solid ${BaseColor.inputBorder};
  outline: none;
  font-size: ${BaseStyle.fontSize};
  color: ${BaseColor.font};
  padding: 5px;
  box-sizing: border-box;
`

export default TextArea
