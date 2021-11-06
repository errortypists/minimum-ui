import React from "react"
import BaseStyle from "assets/styles/base"
import { BaseColor } from "assets/styles/color"
import styled from "styled-components"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "text"
  size?: "small" | "medium" | "large"
  primary?: boolean
  width?: string
  leftIcon?: any
  rightIcon?: any
  loading?: boolean
  style?: React.CSSProperties
}

const Button: React.FC<Props> = ({
  children,
  variant = "default",
  size = "medium",
  primary,
  width = "100%",
  leftIcon,
  rightIcon,
  loading = false,
  style,
  ...rest
}) => {
  const color = primary ? BaseColor.primary : BaseColor.default
  const IconMargin = "3px"
  return (
    <Wrapper
      data-variant={variant}
      data-size={size}
      color={color}
      {...rest}
      disabled={loading || rest.disabled}
      style={{ width: width, ...style }}
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          {leftIcon && (
            <IconWrapper style={{ marginRight: IconMargin }}>
              {leftIcon}
            </IconWrapper>
          )}
          {children}
          {rightIcon && (
            <IconWrapper style={{ marginLeft: IconMargin }}>
              {rightIcon}
            </IconWrapper>
          )}
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.button<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${BaseStyle.radius};
  padding: 0;
  outline: 0;
  background: ${(props) => props.color};
  box-sizing: border-box;
  border: 0;
  color: #fff;
  opacity: 1;

  &[data-size="medium"] {
    font-size: ${BaseStyle.fontSize};
    height: ${BaseStyle.boxHeight};
  }

  &[data-variant="outline"] {
    background: transparent;
    border: 1px solid ${(props) => props.color};
    color: ${(props) => props.color};
  }

  &[data-variant="text"] {
    background: transparent;
    border: 0;
    color: ${(props) => props.color};
  }

  &:disabled {
    opacity: 0.2;
    background: ${BaseColor.default};
    color: #fff;
    border: 0;
  }

  &:active {
    opacity: 0.85;
    background: ${(props) => props.color};
    color: #fff;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`

export default Button
