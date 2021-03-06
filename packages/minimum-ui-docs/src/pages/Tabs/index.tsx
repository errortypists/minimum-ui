import { useState } from "react"
import { Flex, Tabs } from "minimum-ui"

import Layout from "../../components/Layout"
import Bell from "../../components/Icon/Bell"
import Folder from "../../components/Icon/Folder"
import Cart from "../../components/Icon/Cart"
import { BaseColor } from "../../assets/styles/color"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
  ComponentDescription,
} = Layout

const TabsPage: React.FC = () => {
  const tab1List = [
    { text: "Tab 1", value: "tab1" },
    { text: "Tab 2", value: "tab2" },
    { text: "Tab 3", value: "tab3", status: "disabled" },
  ]
  const [tab1Value, setTab1Value] = useState(tab1List[0].value)

  const [tab2Value, setTab2Value] = useState("bell")
  const tab2List = [
    {
      text: "Bell",
      value: "bell",
      icon: <Bell fill={tab2Value === "bell" ? "#fff" : BaseColor.font} />,
    },
    {
      text: "Folder",
      value: "folder",
      icon: <Folder fill={tab2Value === "folder" ? "#fff" : BaseColor.font} />,
    },
    {
      text: "Cart",
      value: "card",
      icon: <Cart fill={tab2Value === "card" ? "#fff" : BaseColor.font} />,
    },
  ]

  const tab3List = [
    { text: "Tab 1", value: "tab1", status: "selected" },
    { text: "Tab 2", value: "tab2" },
    { text: "Tab 3", value: "tab3", status: "disabled" },
  ]

  return (
    <ContentsLayout>
      <Title>Tabs</Title>
      <Description>
        Tabs 컴포넌트는 연속적인 Tab으로 구성됩니다. 각각의 Tab은 아이콘이나
        타이틀을 사용하여 상태를 나타낼 수 있습니다. 일반적으로는 선택된 Tab에
        따라 개발자가 원하는 개별적인 상태를 보여주는데 사용합니다.
      </Description>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Tabs
            headers={tab1List}
            value={tab1Value}
            onChange={(value, item, index) => {
              setTab1Value(value)
            }}
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`const tab1List = [
  { text: "Tab 1", value: "tab1" },
  { text: "Tab 2", value: "tab2" },
  { text: "Tab 3", value: "tab3", status: "disabled" },
]
const [tab1Value, setTab1Value] = useState(tab1List[0].value)

<Tabs
  headers={tab1List}
  value={tab1Value}
  onChange={(value, item, index) => {
    setTab1Value(value)
  }}
/>`}
      />
      <ComponentTitle>Icon</ComponentTitle>
      <ComponentDescription>
        Tabs를 구성하는 각 Tab에 아이콘을 넣을 수 있습니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Tabs
            headers={tab2List}
            value={tab2Value}
            onChange={(value, item, index) => {
              console.log(item, index)
              setTab2Value(value)
            }}
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`const [tab2Value, setTab2Value] = useState("bell")
const tab2List = [
  {
    text: "Bell",
    value: "bell",
    icon: <Bell fill={tab2Value === "bell" ? "#fff" : BaseColor.font} />,
  },
  {
    text: "Folder",
    value: "folder",
    icon: <Folder fill={tab2Value === "folder" ? "#fff" : BaseColor.font} />,
  },
  {
    text: "Cart",
    value: "card",
    icon: <Cart fill={tab2Value === "card" ? "#fff" : BaseColor.font} />,
  },
]
<Tabs
  headers={tab2List}
  value={tab2Value}
  onChange={(value, item, index) => {
    console.log(item, index)
    setTab2Value(value)
  }}
/>`}
      />
      <ComponentTitle>Type</ComponentTitle>
      <ComponentDescription>
        Tabs를 구성하는 각 Tab의 모서리의 외형을 결정합니다
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="column" justify="center" gap={20}>
          <Tabs headers={tab3List} type="round" />
          <Tabs headers={tab3List} type="rectangle" />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Tabs headers={tab3List} type="round" />
<Tabs headers={tab3List} type="rectangle" />`}
      />
    </ContentsLayout>
  )
}

export default TabsPage
