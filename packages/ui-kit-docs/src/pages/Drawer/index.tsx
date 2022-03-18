import { useState } from "react"
import { Flex, Button, Drawer, Typography } from "ui-kit"

import Layout from "../../components/Layout"
import styled from "styled-components"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
  ComponentDescription,
} = Layout

const DrawerPage: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [openLeft, setOpenLeft] = useState(false)
  const [openRight, setOpenRight] = useState(false)
  const [openTop, setOpenTop] = useState(false)
  const [openBottom, setOpenBottom] = useState(false)
  const [openFull, setOpenFull] = useState(false)
  const [open320, setOpen320] = useState(false)
  const [openDefault, setOpenDefault] = useState(false)

  return (
    <ContentsLayout>
      <Title>Drawer</Title>
      <Description>
        Drawer 컴포넌트는 메뉴 혹은 네비게이션 바를 생성하는데 사용하는
        컴포넌트입니다. 평소에는 닫혀있는 상태로 대기하다가 Open 상태로 전환시
        원하는 방향에서 슬라이드되어 나타납니다.
      </Description>
      <ComponentTitle>Basic Drawer</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Button
            width="120px"
            variant="outline"
            onClick={() => setOpen(!open)}
          >
            {"Basic Drawer"}
          </Button>
          {open && (
            <Drawer open={open} onClickOutside={() => setOpen(false)}>
              <Wrapper>
                <Typography.Title>Basic Drawer</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`{open && (
  <Drawer
    open={open}
    onClickOutside={() => setOpen(false)}>
    <div>hello world</div>
  </Drawer>
)}`}
      />
      <ComponentTitle>Direction</ComponentTitle>
      <ComponentDescription>
        Drawer가 슬라이드 되어 배치되는 방향을 지정합니다
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Button variant="outline" onClick={() => setOpenLeft(!open)}>
            {"Left"}
          </Button>
          <Button variant="outline" onClick={() => setOpenRight(!open)}>
            {"Right"}
          </Button>
          <Button variant="outline" onClick={() => setOpenTop(!open)}>
            {"Top"}
          </Button>
          <Button variant="outline" onClick={() => setOpenBottom(!open)}>
            {"Bottom"}
          </Button>
          {openLeft && (
            <Drawer
              open={openLeft}
              direction={"left"}
              onClickOutside={() => setOpenLeft(false)}
            >
              <Wrapper>
                <Typography.Title>Left</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {openRight && (
            <Drawer
              open={openRight}
              direction={"right"}
              onClickOutside={() => setOpenRight(false)}
            >
              <Wrapper>
                <Typography.Title>Right</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {openTop && (
            <Drawer
              open={openTop}
              direction={"top"}
              onClickOutside={() => setOpenTop(false)}
            >
              <Wrapper>
                <Typography.Title>Top</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {openBottom && (
            <Drawer
              open={openBottom}
              direction={"bottom"}
              onClickOutside={() => setOpenBottom(false)}
            >
              <Wrapper>
                <Typography.Title>Bottom</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`{openLeft && (
  <Drawer
    open={openLeft}
    direction={"left"}
    onClickOutside={() => setOpenLeft(false)}>
    <div>Left</div>
  </Drawer>
)}`}
      />
      <ComponentTitle>Size</ComponentTitle>
      <ComponentDescription>
        Drawer 영역의 크기를 결정합니다. 이때 슬라이드 되는 방향에 따라 너비
        혹은 높이가 결정됩니다. (ex: 상하 - 높이, ex: 좌우 - 너비)
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Button variant="outline" onClick={() => setOpenFull(!open)}>
            {"Full"}
          </Button>
          <Button variant="outline" onClick={() => setOpen320(!open)}>
            {"320"}
          </Button>
          <Button variant="outline" onClick={() => setOpenDefault(!open)}>
            {"default"}
          </Button>
          {openFull && (
            <Drawer
              open={openFull}
              size={document.querySelector("html")?.clientWidth}
              onClickOutside={() => setOpenFull(false)}
            >
              <Button variant="outline" onClick={() => setOpenFull(false)}>
                {"Close"}
              </Button>
              <Wrapper>
                <Typography.Title>Full</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {open320 && (
            <Drawer
              open={open320}
              size={320}
              onClickOutside={() => setOpen320(false)}
            >
              <Wrapper>
                <Typography.Title>320</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {openDefault && (
            <Drawer
              open={openDefault}
              onClickOutside={() => setOpenDefault(false)}
            >
              <Wrapper>
                <Typography.Title>default</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`{openFull && (
  <Drawer
    open={openFull}
    size={document.querySelector("html")?.clientWidth}
    onClickOutside={() => setOpenFull(false)}
  >
    <div>Full</div>
  </Drawer>
)}`}
      />
    </ContentsLayout>
  )
}

export default DrawerPage

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
