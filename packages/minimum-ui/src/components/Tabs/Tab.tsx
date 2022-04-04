import BaseStyle from "assets/styles/base"
import { BaseColor } from "assets/styles/color"
import React from "react"
import styled, { css } from "styled-components"

type TabStatus = "default" | "disabled" | "selected"
interface TabProps {
  text: string
  icon?: React.ReactElement
  type?: "round" | "rectangle"
  status?: TabStatus
  onClick: () => void
}

const Tab: React.FC<TabProps> = (props) => {
  const {
    text = "",
    icon,
    status = "default",
    type = "rectangle",
    onClick,
  } = props
  let Wrapper = BaseWrapper
  switch (status) {
    case "selected":
      Wrapper = SelectedWrapper
      break
    case "disabled":
      Wrapper = DisabledWrapper
      break
    default:
      Wrapper = DefaultWrapper
  }
  return (
    <Wrapper
      onClick={status !== "disabled" ? onClick : () => {}}
      isRound={type === "round"}
    >
      {icon}
      <div>{`${text}`}</div>
    </Wrapper>
  )
}

const BaseWrapper = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  font-weight: bold;
  padding: 10px 40px;
  border: 1px solid ${BaseColor.default};

  border-bottom: none;
  min-width: 80px;

  ${(props) =>
    props.isRound &&
    css`
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    `}
  flex-direction: column;

  & ~ & {
    border-left: none;
  }
`

const DefaultWrapper = styled(BaseWrapper)`
  cursor: pointer;
  color: ${BaseColor.default};
  background-color: #fff;
`

const DisabledWrapper = styled(BaseWrapper)`
  cursor: not-allowed;
  opacity: ${BaseStyle.disabledOpacity};
`

const SelectedWrapper = styled(BaseWrapper)`
  cursor: pointer;
  color: #fff;
  background-color: ${BaseColor.default};
`

export { Tab as default, TabProps, TabStatus }
