import React, { ReactNode } from "react"
import BaseStyle from "assets/styles/base"
import { BaseColor } from "assets/styles/color"
import styled from "styled-components"
import { Progress } from "index"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large"
  variant?: "default" | "outline" | "text"
  primary?: boolean
  width?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
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
      data-loading={loading}
      color={color}
      {...rest}
      disabled={loading || rest.disabled}
      style={{ width: width, ...style }}
    >
      {loading ? (
        <Progress type="circular" progress={45} color="#fff" bgColor="#000" />
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

  &[data-size="small"] {
    font-size: 14px;
    height: ${BaseStyle.boxHeight};
    height: 35px;
  }

  &[data-size="medium"] {
    font-size: ${BaseStyle.fontSize};
    height: ${BaseStyle.boxHeight};
  }

  &[data-size="large"] {
    font-size: 18px;
    height: 45px;
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
    opacity: ${BaseStyle.disabledOpacity};
    background: ${BaseColor.default};
    color: #fff;
    border: 0;
    cursor: not-allowed;
  }

  &[data-loading="false"] {
    &:active {
      opacity: 0.8;
      background: ${(props) => props.color};
      color: #fff;
    }
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BaseStyle.fontSize};
  height: ${BaseStyle.fontSize};
  margin-bottom: 1px;
`

export default Button
