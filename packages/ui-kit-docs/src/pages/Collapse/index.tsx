import React, { useState } from "react"

import { Collapse, Button, Flex } from "ui-kit"

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

const CollapsePage: React.FC = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(true)
  const [open3, setOpen3] = useState(true)

  return (
    <ContentsLayout>
      <Title>Collapse</Title>
      <Description>
        collpase는 영역의 접혀짐과 펼쳐짐을 나타내는 컴포넌트입니다. 원하는
        영역을 숨기거나 나타낼 때 사용할 수 있습니다.
      </Description>
      <ComponentTitle>Basic Collapse</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="column" justify="center" gap={10}>
          <Button
            width="120px"
            variant="outline"
            onClick={() => setOpen1(!open1)}
          >
            {"Click Me!"}
          </Button>
          <Collapse open={open1}>
            <CollapseOne>Collapse One</CollapseOne>
          </Collapse>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Collapse open={open}>
  <div style={{ width: "100%", height: "100px", background: "#dddddd" }}>
    Collapse One
  </div>
</Collapse>`}
      />
      <ComponentTitle>Speed</ComponentTitle>
      <ComponentDescription>
        열림과 닫힘의 속도를 조절합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="column" justify="center" gap={10}>
          <Button
            width="120px"
            variant="outline"
            onClick={() => setOpen2(!open2)}
          >
            {"Click Me!"}
          </Button>
          <Collapse open={open2} speed={1000}>
            <CollapseTwo>Collapse Two</CollapseTwo>
          </Collapse>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Collapse open={open} speed={1000}>
  <div style={{ width: "100%", height: "100px", background: "#dddddd" }}>
    Collapse Two
  </div>
</Collapse>`}
      />
      <ComponentTitle>Width</ComponentTitle>
      <ComponentDescription>
        열림/펼침 영역의 너비를 지정합니다. (기본값: 100%)
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="column" justify="center" gap={10}>
          <Button
            width="120px"
            variant="outline"
            onClick={() => setOpen3(!open3)}
          >
            {"Click Me!"}
          </Button>
          <Collapse open={open3} width={200}>
            <CollapseTwo>Collapse Two</CollapseTwo>
          </Collapse>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Collapse open={open} width={200}>
  <div style={{ width: "100%", height: "100px", background: "#dddddd" }}>
    Collapse Two
  </div>
</Collapse>`}
      />
    </ContentsLayout>
  )
}

const CollapseOne = styled.div`
  width: 100%;
  height: 100px;
  background: #dddddd;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CollapseTwo = styled.div`
  width: 100%;
  height: 100px;
  background: #dddddd;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default CollapsePage
