/*
  Title       32px
  Subtitle    20px
  Body        16px
  Caption     13px
  letter spacing -0.3
  line height 1.6
*/

import React from "react"
import styled, { css } from "styled-components"

interface Props {
  style?: React.CSSProperties
}

const Title: React.FC<Props> = React.memo(({ children, style }) => {
  return (
    <Text fontSize={32} fontWeight="bold" style={style}>
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
    <Text fontSize={13} style={style}>
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
  line-height: 1.6;
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
