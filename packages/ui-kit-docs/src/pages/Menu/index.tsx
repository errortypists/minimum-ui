import { useState } from "react"
import { Flex, Button, Drawer, Menu2 } from "ui-kit"
import { sortedComponents } from "../../components/component-box"
import Layout from "../../components/Layout"

const { ContentsLayout, ComponentWrapper, CodeWrapper, Title, Description } =
  Layout

const MenuPage: React.FC = () => {
  const [open, setOpen] = useState(false)
  const names = Object.keys(sortedComponents)

  return (
    <ContentsLayout>
      <Title>Menu</Title>
      <Description>
        기본 1depth의 구조를 가지며, Group 사용으로 최대 2depth의 메뉴를 구성 할
        수 있습니다.
      </Description>
      <ComponentWrapper>
        <Button onClick={() => setOpen(true)}>Menu</Button>
      </ComponentWrapper>
      <CodeWrapper
        code={`const [open, setOpen] = useState(false)

<Drawer
  open={open}
  onClickOutside={() => setOpen(false)}
  direction={"left"}
>
  <Menu>
    <Menu.Item selected={false}>HOME</Menu.Item>
    <Menu.Item selected={false}>DOCUMENT</Menu.Item>
    <Menu.Item selected={false}>GUIDE</Menu.Item>
    <Menu.Group title="COMPONENT" open={true}>
      <Menu.Item selected={true}>button</Menu.Item>
      <Menu.Item selected={false}>checkbox</Menu.Item>
      <Menu.Item selected={false}>collapse</Menu.Item>
    </Menu.Group>
  </Menu>
</Drawer>`}
      />
      {open && (
        <Drawer
          open={open}
          onClickOutside={() => setOpen(false)}
          direction={"left"}
          // style={{ overflow: "auto" }} // 기본 옵션으로 적용할지?
        >
          <Flex>
            <Menu2>
              <Menu2.Item selected={false}>HOME</Menu2.Item>
              <Menu2.Item selected={false}>DOCUMENT</Menu2.Item>
              <Menu2.Item selected={false}>GUIDE</Menu2.Item>
              <Menu2.Group title="COMPONENT" open={true}>
                {names.map((name) => (
                  <Menu2.Item key={name} selected={name === "button"}>
                    {name}
                  </Menu2.Item>
                ))}
                <Menu2.Item selected={false}>GUIDE</Menu2.Item>
                <Menu2.Item selected={false}>GUIDE</Menu2.Item>
                <Menu2.Item selected={false}>GUIDE</Menu2.Item>
                <Menu2.Item selected={false}>GUIDE</Menu2.Item>
                <Menu2.Item selected={false}>GUIDE</Menu2.Item>
                <Menu2.Item selected={false}>GUIDE</Menu2.Item>
              </Menu2.Group>
            </Menu2>
          </Flex>
        </Drawer>
      )}
    </ContentsLayout>
  )
}

export default MenuPage
