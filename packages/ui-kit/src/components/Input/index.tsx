import React, { useEffect, useState } from "react"
import { BaseColor } from "../../assets/styles/color"
import BaseStyle from "../../assets/styles/base"
import styled from "styled-components"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  width?: string
  onChange(value: any): void
  style?: React.CSSProperties
}

const Input: React.FC<Props> = ({
  title,
  value,
  width,
  onChange,
  style,
  ...rest
}) => {
  const [input, setInput] = useState(value || "")

  useEffect(() => {
    onChange(input)
    console.log("onchange")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  return (
    <Wrapper style={{ width: width || "100%" }}>
      {title && <TitleWrapper>{title}</TitleWrapper>}
      <InputWrapper
        style={{ ...style, width: width || "100%" }}
        defaultValue={input}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        {...rest}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
`

const TitleWrapper = styled.div`
  position: absolute;
  font-size: 0.9rem;
  left: 10px;
  top: -6px;
  user-select: none;
  padding: 0 5px;
  background: #fff;
  color: ${BaseColor.default};
`

const InputWrapper = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  border-radius: ${BaseStyle.radius};
  border: 1px solid ${BaseColor.inputBorder};
  height: ${BaseStyle.boxHeight};
  padding: ${BaseStyle.padding};
  font-size: ${BaseStyle.fontSize};
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid ${BaseColor.default};
  }
`

export default Input
