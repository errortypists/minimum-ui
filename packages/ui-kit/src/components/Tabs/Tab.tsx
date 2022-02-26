import React from "react"
import styled, { css } from "styled-components"

type TabStatus = "default" | "disabled" | "selected"
interface TabProps {
  text: string
  icon?: any
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
  border: 1px solid black;

  border-bottom: 3px solid black;
  min-width: 80px;

  ${(props) =>
    props.isRound &&
    css`
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    `}
  flex-direction: column;
`

const DefaultWrapper = styled(BaseWrapper)`
  cursor: pointer;
  color: black;
  background-color: lightgray;
`

const DisabledWrapper = styled(BaseWrapper)`
  cursor: default;
  color: gray;
  background-color: blue;
`

const SelectedWrapper = styled(BaseWrapper)`
  cursor: pointer;
  color: white;
  background-color: red;
`

export { Tab as default, TabProps, TabStatus }
