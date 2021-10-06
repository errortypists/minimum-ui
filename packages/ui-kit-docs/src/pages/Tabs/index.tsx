import React, {useState} from "react"
import { Tabs, IconArrowRight } from "ui-kit"

const TabsPage: React.FC = () => {
  const tab1List = [
    { text: "탭1", value:"tab1", icon: <IconArrowRight /> },
    { text: "탭2", value:"tab2" },
    { text: "탭3", value:"tab3" },
  ]
  const [tab1Value, setTab1Value] = useState(tab1List[0].value)

  const tab2List = [
    { text: "탭1", value:"tab1" },
    { text: "탭2", value:"tab2" },
    { text: "탭3", value:"tab3", icon: <IconArrowRight /> },
    { text: "탭4", value:"tab4", icon: <IconArrowRight /> },
  ]
  const [tab2Value, setTab2Value] = useState(tab2List[0].value)

  const tab3List = [
    { text: "탭1", value:"tab1" },
    { text: "탭2", value:"tab2" },
    { text: "탭3", value:"tab3" },
    { text: "탭4", value:"tab4" },
  ]
  const [tab3Value, setTab3Value] = useState(tab1List[0].value)
  return (
    <>
      <Tabs
        headers={tab1List}
        type={"round"}
        value={tab1Value}
        onChange={(value, item, index) => {
          console.log(item, index)
          setTab1Value(value)
        }}
      />
      <hr />
      <Tabs
        headers={tab2List}
        value={tab2Value}
        onChange={(value, item, index) => {
          console.log(item, index)
          setTab2Value(value)
        }}
      />
      <hr />
      <Tabs
        headers={tab3List}
        value={tab3Value}
        onChange={(value, item, index) => {
          console.log(item, index)
          setTab3Value(value)
        }}
      />
    </>
  )
}

export default TabsPage
