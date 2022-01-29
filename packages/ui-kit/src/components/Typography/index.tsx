import React from "react"
import styled, { css } from "styled-components"

interface Props {
  style?: React.CSSProperties
}

const Title: React.FC<Props> = React.memo(({ children, style }) => {
  return (
    <Text fontSize={24} fontWeight="bold" style={style}>
      {children}
    </Text>
  )
})

const SubTitle: React.FC<Props> = React.memo(({ children, style }) => {
  return (
    <Text fontSize={20} fontWeight="bold" style={style}>
      {children}
    </Text>
  )
})

const Body: React.FC<Props> = React.memo(({ children, style }) => {
  return (
    <Text fontSize={16} style={style}>
      {children}
    </Text>
  )
})

const Caption: React.FC<Props> = React.memo(({ children, style }) => {
  return (
    <Text fontSize={14} style={style}>
      {children}
    </Text>
  )
})

const Typography = {
  Title,
  SubTitle,
  Body,
  Caption,
}

const Text = styled.div<any>`
  letter-spacing: -0.3px;
  line-height: 1.5;
  word-break: break-all;
  white-space: pre-line;

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}

  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}
`

export default Typography
