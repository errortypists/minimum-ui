import React, { useMemo, useState } from "react"
import styled from "styled-components"

import Tab from "./Tab"

interface HeaderItem {
  text: string
  value: string
  icon?: any
}

interface Props {
  headers: HeaderItem[]
  value: string
  type?: "round" | "rectangle"
  onChange?: (value: string, item: HeaderItem, index: number) => void
}

const Tabs: React.FC<Props> = (props) => {
  const { headers, type = "rectangle", value, onChange } = props

  const renderEachTab = useMemo(() => {
    return headers.map((item, index) => {
      return (
        <Tab
          icon={item.icon}
          text={item.text}
          // isSelcted={selectedIndex !== index}
          status={value === item.value ? "selected" : "default"}
          onClick={() => {
            if (onChange) onChange(item.value, item, index)
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
`

export default Tabs
