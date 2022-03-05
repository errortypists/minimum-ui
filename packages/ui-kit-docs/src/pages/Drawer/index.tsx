import { useState } from "react"
import { Flex, Button, Drawer, Typography } from "ui-kit"

import useStatus from "../../hooks/useStatus"
import Layout from "../../components/Layout"
import { PropsBox } from "../../components"
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
  const { selectedMenu } = useStatus()
  const [isOpen, setOpen] = useState(false)
  const [isOpenLeft, setOpenLeft] = useState(false)
  const [isOpenRight, setOpenRight] = useState(false)
  const [isOpenTop, setOpenTop] = useState(false)
  const [isOpenBottom, setOpenBottom] = useState(false)
  const [isOpenFull, setOpenFull] = useState(false)
  const [isOpen320, setOpen320] = useState(false)
  const [isOpenDefault, setOpenDefault] = useState(false)

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
            onClick={() => setOpen(!isOpen)}
          >
            {"Basic Drawer"}
          </Button>
          {isOpen && (
            <Drawer isOpen={isOpen} onClickOutside={() => setOpen(false)}>
              <Wrapper>
                <Typography.Title>Basic Drawer</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`{isOpen && (
  <Drawer
    isOpen={isOpen}
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
          <Button variant="outline" onClick={() => setOpenLeft(!isOpen)}>
            {"Left"}
          </Button>
          <Button variant="outline" onClick={() => setOpenRight(!isOpen)}>
            {"Right"}
          </Button>
          <Button variant="outline" onClick={() => setOpenTop(!isOpen)}>
            {"Top"}
          </Button>
          <Button variant="outline" onClick={() => setOpenBottom(!isOpen)}>
            {"Bottom"}
          </Button>
          {isOpenLeft && (
            <Drawer
              isOpen={isOpenLeft}
              direction={"left"}
              onClickOutside={() => setOpenLeft(false)}
            >
              <Wrapper>
                <Typography.Title>Left</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {isOpenRight && (
            <Drawer
              isOpen={isOpenRight}
              direction={"right"}
              onClickOutside={() => setOpenRight(false)}
            >
              <Wrapper>
                <Typography.Title>Right</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {isOpenTop && (
            <Drawer
              isOpen={isOpenTop}
              direction={"top"}
              onClickOutside={() => setOpenTop(false)}
            >
              <Wrapper>
                <Typography.Title>Top</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {isOpenBottom && (
            <Drawer
              isOpen={isOpenBottom}
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
        code={`{isOpenLeft && (
  <Drawer
    isOpen={isOpenLeft}
    direction={"left"}
    onClickOutside={() => setOpenLeft(false)}>
    <div>Left</div>
  </Drawer>
)}`}
      />
      <ComponentTitle>Size</ComponentTitle>
      <ComponentDescription>
        Drawer 영역의 너비나 높이를 결정합니다
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Button variant="outline" onClick={() => setOpenFull(!isOpen)}>
            {"Full"}
          </Button>
          <Button variant="outline" onClick={() => setOpen320(!isOpen)}>
            {"320"}
          </Button>
          <Button variant="outline" onClick={() => setOpenDefault(!isOpen)}>
            {"default"}
          </Button>
          {isOpenFull && (
            <Drawer
              isOpen={isOpenFull}
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
          {isOpen320 && (
            <Drawer
              isOpen={isOpen320}
              size={320}
              onClickOutside={() => setOpen320(false)}
            >
              <Wrapper>
                <Typography.Title>320</Typography.Title>
              </Wrapper>
            </Drawer>
          )}
          {isOpenDefault && (
            <Drawer
              isOpen={isOpenDefault}
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
        code={`{isOpenFull && (
  <Drawer
    isOpen={isOpenFull}
    size={document.querySelector("html")?.clientWidth}
    onClickOutside={() => setOpenFull(false)}
  >
    <div>Full</div>
  </Drawer>
)}`}
      />
      <ComponentTitle>Props</ComponentTitle>
      <PropsBox name={selectedMenu?.id || ""} />
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
