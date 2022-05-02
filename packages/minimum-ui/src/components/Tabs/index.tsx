import { BaseColor } from "assets/styles/color"
import React, { useMemo } from "react"
import styled from "styled-components"

import Tab, { TabStatus } from "./Tab"

interface HeaderItem {
  text: string
  value?: string
  status?: string
  icon?: React.ReactElement
}

interface Props {
  headers: HeaderItem[]
  value?: string
  type?: "round" | "rectangle"
  onChange?: (value: string, item: HeaderItem, index: number) => void
}

const Tabs: React.FC<Props> = (props) => {
  const { headers, type = "round", value, onChange } = props

  const renderEachTab = useMemo(() => {
    return headers.map((item, index) => {
      let status: TabStatus = "default"
      if (value === item.value) status = "selected"
      if (item.status === "disabled") status = item.status
      if (item.status === "selected") status = item.status
      return (
        <Tab
          key={index}
          icon={item.icon}
          text={item.text}
          status={status}
          onClick={() => {
            if (onChange) onChange(item.value || "", item, index)
          }}
          type={type}
        />
      )
    })
  }, [value, onChange])

  return <Wrapper>{renderEachTab}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${BaseColor.default};
`

export default Tabs
