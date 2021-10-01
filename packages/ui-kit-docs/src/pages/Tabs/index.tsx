import React from "react"
import { Tabs, IconArrowRight } from "ui-kit"

const TabsPage: React.FC = () => {
  return (
    <>
      <Tabs
        headers={[
          { text: "탭1", icon: <IconArrowRight /> },
          { text: "탭2" },
          { text: "탭3" },
        ]}
        hasRadius
        onChange={(item, index) => {
          console.log(item, index)
        }}
      />
      <hr />
      <Tabs
        headers={[
          { text: "탭1" },
          { text: "탭2" },
          { text: "탭3", icon: <IconArrowRight /> },
          { text: "탭4", icon: <IconArrowRight /> },
        ]}
        hasRadius
        onChange={(item, index) => {
          console.log(item, index)
        }}
      />
      <hr />
      <Tabs
        headers={[
          { text: "탭1" },
          { text: "탭2" },
          { text: "탭3" },
          { text: "탭4" },
          { text: "탭5" },
        ]}
        onChange={(item, index) => {
          console.log(item, index)
        }}
      />
    </>
  )
}

export default TabsPage
