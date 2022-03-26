import { useState } from "react"
import { Flex, Button, Drawer, Menu } from "ui-kit"
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
        Menu 컴포넌트는 모바일 화면에서 Navagation 역할을 하는 메뉴를 그려낼 때
        사용합니다. 연관된 메뉴를 그룹화할 수 있습니다. 기본적으로 1 depth의
        구조를 가지며, 그룹을 활용하면 최대 2 depth의 메뉴를 구성할 수 있습니다.
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
    <Menu.Item selected={false}>Beauty</Menu.Item>
    <Menu.Item selected={false}>Food</Menu.Item>
    <Menu.Item selected={false}>Book</Menu.Item>
    <Menu.Group title="Fruit" open={true}>
      <Menu.Item selected={false}>Apple</Menu.Item>
      <Menu.Item selected={false}>Strawberry</Menu.Item>
      <Menu.Item selected={false}>Banana</Menu.Item>
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
            <Menu>
              <Menu.Item selected={false}>Beauty</Menu.Item>
              <Menu.Item selected={false}>Food</Menu.Item>
              <Menu.Item selected={false}>Book</Menu.Item>
              <Menu.Group title="Fruit" open={true}>
                <Menu.Item selected={false}>Apple</Menu.Item>
                <Menu.Item selected={false}>Strawberry</Menu.Item>
                <Menu.Item selected={false}>Banana</Menu.Item>
              </Menu.Group>
            </Menu>
          </Flex>
        </Drawer>
      )}
    </ContentsLayout>
  )
}

export default MenuPage
