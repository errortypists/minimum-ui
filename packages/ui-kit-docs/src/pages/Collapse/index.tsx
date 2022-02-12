import React, { useState } from "react"

import { Collapse, Flex } from "ui-kit"

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

const CollapsePage: React.FC = () => {
  const { selectedMenu } = useStatus()
  const [isOpen1, setOpen1] = useState(false)
  const [isOpen2, setOpen2] = useState(true)
  const [isOpen3, setOpen3] = useState(true)

  return (
    <ContentsLayout>
      <Title>Collapse</Title>
      <Description>
        collpase는 영역의 접혀짐과 펼쳐짐을 나타내는 컴포넌트입니다. 원하는
        영역을 숨기거나 나타낼 때 사용할 수 있습니다.
      </Description>
      <ComponentTitle>Basic Collapse</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="column" justify="center" gap={20}>
          <button onClick={() => setOpen1(!isOpen1)}>{`${
            !isOpen1 ? "열림" : "닫힘"
          }`}</button>
          <Collapse isOpen={isOpen1}>
            <CollapseOne>Collapse One</CollapseOne>
          </Collapse>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Collapse isOpen={isOpen1}>
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
        <Flex direction="column" justify="center" gap={20}>
          <button onClick={() => setOpen2(!isOpen2)}>{`${
            !isOpen3 ? "열림" : "닫힘"
          }`}</button>
          <Collapse isOpen={isOpen2} speed={1000}>
            <CollapseTwo>Collapse Two</CollapseTwo>
          </Collapse>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Collapse isOpen={isOpen3} speed={1000}>
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
        <Flex direction="column" justify="center" gap={20}>
          <button onClick={() => setOpen3(!isOpen3)}>{`${
            !isOpen3 ? "열림" : "닫힘"
          }`}</button>
          <Collapse isOpen={isOpen3} width={200}>
            <CollapseTwo>Collapse Two</CollapseTwo>
          </Collapse>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Collapse isOpen={isOpen3} width={200}>
  <div style={{ width: "100%", height: "100px", background: "#dddddd" }}>
    Collapse Two
  </div>
</Collapse>`}
      />
      <PropsBox name={selectedMenu?.id || ""} />
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
