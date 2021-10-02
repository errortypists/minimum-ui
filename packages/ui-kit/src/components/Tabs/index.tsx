import React, { useMemo, useState } from "react"
import styled from "styled-components"

import Tab from "./Tab"

interface HeaderItem {
  text: string
  icon?: any
}

interface Props {
  headers: HeaderItem[]
  initIndex?: number
  hasRadius?: boolean
  onChange?: (item: HeaderItem, index: number) => void
}

const Tabs: React.FC<Props> = (props) => {
  const { headers, hasRadius = false, onChange } = props
  const [selectedIndex, setSelectedIndex] = useState(0)

  const renderEachTab = useMemo(() => {
    return headers.map((item, index) => {
      return (
        <Tab
          icon={item.icon}
          text={item.text}
          // isSelcted={selectedIndex !== index}
          type={selectedIndex === index ? "selected" : "default"}
          onClick={() => {
            setSelectedIndex(index)
            if (onChange) onChange(item, index)
          }}
          hasRadius={hasRadius}
        />
      )
    })
  }, [selectedIndex])

  return <Wrapper>{renderEachTab}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default Tabs
