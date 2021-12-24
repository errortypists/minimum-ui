import React, { useEffect, useState } from "react"
import { BaseColor } from "../../assets/styles/color"
import BaseStyle from "../../assets/styles/base"
import styled from "styled-components"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  width?: string
  onChange?(value: any): void
  onBlur?(value: any): void
  style?: React.CSSProperties
}

const Input: React.FC<Props> = ({
  title,
  value,
  width,
  onChange,
  onBlur,
  style,
  ...rest
}) => {
  const [input, setInput] = useState(value || "")
  const [isFucused, setIsFocused] = useState(false)

  const onBlurEvent = (value: string) => {
    if (onBlur) {
      setInput(value)
      onBlur(input)
    }
    setIsFocused((isFocused) => !isFocused)
  }

  useEffect(() => {
    if (onChange) {
      onChange(input)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  return (
    <Wrapper style={{ width: width || "100%" }}>
      <InputWrapper
        style={{ ...style, width: width || "100%" }}
        defaultValue={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange && setInput(e.target.value)
        }
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
          onBlur && onBlurEvent(e.target.value)
        }
        onFocus={() => setIsFocused(true)}
        {...rest}
      />
      <fieldset data-focused={isFucused}>
        <legend data-nodata={!title}>
          <span>{title}</span>
        </legend>
      </fieldset>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  height: ${BaseStyle.boxHeight};
  user-select: none;

  fieldset {
    text-align: left;
    position: absolute;
    height: 47px;
    inset: -9px 0px 0px;
    margin: 0px;
    padding: 0px 8px;
    pointer-events: none;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    min-width: 0%;
    border-radius: 2px;
    border: 1px solid ${BaseColor.inputBorder};
    transition: border 0.5s ease-in-out;

    &[data-focused="true"] {
      border: 1px solid ${BaseColor.default};
    }
  }

  legend {
    font-size: 0.9rem;
    float: unset;
    display: block;
    width: auto;
    padding: 1px 8px 6px 8px;
    height: 11px;
    max-width: 100%;
    -webkit-transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    white-space: nowrap;
    color: ${BaseColor.default};

    &[data-nodata="true"] {
      visibility: hidden;
      width: 0;
      padding: 2px 0 5px 0;
    }
  }
`

const InputWrapper = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  border-radius: ${BaseStyle.radius};
  border: none;
  height: ${BaseStyle.boxHeight};
  padding: ${BaseStyle.padding};
  font-size: ${BaseStyle.fontSize};
  width: 100%;

  &:focus {
    outline: none;
  }
`

export default Input
