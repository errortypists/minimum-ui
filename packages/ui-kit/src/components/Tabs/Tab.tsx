import React from "react"
import styled, { css } from "styled-components"

interface TabProps {
  text: string // 탭 텍스트
  icon?: any // 아이콘 유무, 타입을 svg 타입으로 못할까;;;
  hasRadius?: boolean // 각진 상태 유무
  type?: "default" | "disabled" | "selected" // 기본 default
  onClick: () => void
}

const Tab: React.FC<TabProps> = (props) => {
  const {
    text = "",
    icon,
    type = "default",
    hasRadius = false,
    onClick,
  } = props
  let Wrapper = BaseWrapper
  switch (type) {
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
    <Wrapper onClick={onClick} hasRadius={hasRadius}>
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
  /* background-color: ${(props) => (props.isSelcted ? "red" : "blue")}; */

  border-bottom: 3px solid black;
  min-width: 80px;

  ${(props) =>
    props.hasRadius &&
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

export { Tab as default, TabProps }