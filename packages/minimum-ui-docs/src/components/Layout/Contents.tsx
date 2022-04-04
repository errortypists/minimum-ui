import React from "react"
import styled from "styled-components"
import { Typography } from "minimum-ui"

const LayoutTitle: React.FC = ({ children }) => {
  const { Title } = Typography
  return <Title>{children}</Title>
}

const LayoutTitleDescription: React.FC = ({ children }) => {
  const { Body } = Typography
  return <Body>{children}</Body>
}

const LayoutComponentTitle: React.FC = ({ children }) => {
  const { SubTitle } = Typography
  return (
    <LayoutComponentTitleWrapper>
      <SubTitle>{children}</SubTitle>
    </LayoutComponentTitleWrapper>
  )
}

const LayoutComponentDescription: React.FC = ({ children }) => {
  const { Body } = Typography
  return <Body>{children}</Body>
}

const LayoutComponentTitleWrapper = styled.div`
  margin-top: 20px;
`

export {
  LayoutTitle,
  LayoutTitleDescription,
  LayoutComponentTitle,
  LayoutComponentDescription,
}
