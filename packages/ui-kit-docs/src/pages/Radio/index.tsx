import { useState } from "react"
import { Checkbox, Flex, Radio, RadioGroup } from "ui-kit"

import useStatus from "../../hooks/useStatus"
import Layout from "../../components/Layout"
import { PropsBox } from "../../components"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
  ComponentDescription,
} = Layout

const RadioPage: React.FC = () => {
  const { selectedMenu } = useStatus()
  const [value, setValue] = useState(1)

  return (
    <ContentsLayout>
      <>
        <Flex direction="row" gap={0}>
          <RadioGroup
            defaultIndex={3}
            onChange={(val, index) => {
              console.log(val, index)
            }}
          >
            <Radio
              title={"사과"}
              titleDirection={"bottom"}
              value={{ fruit: "사과" }}
            />
            <Radio
              title={"배"}
              titleDirection={"bottom"}
              value={{ fruit: "배" }}
            />
            <Radio
              title={"감"}
              titleDirection={"bottom"}
              value={{ fruit: "감" }}
            />
            <Radio
              title={"수박"}
              titleDirection={"bottom"}
              value={{ fruit: "수박" }}
            />
            <Radio
              title={"오렌지"}
              titleDirection={"bottom"}
              value={{ fruit: "오렌지" }}
            />
          </RadioGroup>
        </Flex>
      </>
      <Title>Radio</Title>
      <Description>
        Radio는 사용자에게 제공해준 항목들 중 하나를 선택하도록 제공할 때
        사용하는 컴포넌트입니다. 선택을 하도록 제공할 때 같은 성격의 아이템들을
        묶을 수 있도록 그룹도 같이 제공합니다.
      </Description>
      <ComponentTitle>Basic Radio</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Radio title={"아이템 1"} checked={true} />
          <Radio title={"아이템 2"} />
          {/* <Radio
            title={"아이템 1"}
            checked={value === 1}
            color={"#ff00ff"}
            value={"아이템 1"}
            onChange={(val) => {
              setValue(1)
            }}
          />
          <Radio
            title={"아이템 2"}
            checked={value === 2}
            color={"#ff00ff"}
            value={"아이템 2"}
            onChange={(val) => {
              setValue(2)
            }}
          /> */}
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio title={"아이템 1"} checked={true} />
<Radio title={"아이템 2"} />`}
      />
      <ComponentTitle>Title direction</ComponentTitle>
      <ComponentDescription>
        라디오의 텍스트 위치를 결정합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Radio title={"title"} checked={true} />
          <Radio title={"title"} checked={true} titleDirection={"top"} />
          <Radio title={"title"} checked={true} titleDirection={"bottom"} />
          <Radio title={"title"} checked={true} titleDirection={"left"} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio title={"title"} checked={true} />
<Radio title={"title"} checked={true} titleDirection={"top"} />
<Radio title={"title"} checked={true} titleDirection={"bottom"} />
<Radio title={"title"} checked={true} titleDirection={"left"} />`}
      />
      <ComponentTitle>Color</ComponentTitle>
      <ComponentDescription>라디오의 색깔을 지정합니다</ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Radio title={"title"} checked={true} color={"#ff00ff"} />
          <Radio title={"title"} color={"#ff00ff"} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio title={"아이템 1"} checked={true} color={"#ff00ff"} />
<Radio title={"아이템 2"} color={"#ff00ff"} />`}
      />
      <ComponentTitle>Change Event</ComponentTitle>
      <ComponentDescription>
        라디오의 이벤트시 함수를 전달하여 원하는 동작을 발생시킬 수 있습니다
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Radio
            title={"아이템 1"}
            checked={value === 1}
            value={"아이템 1"}
            onChange={(val) => {
              console.log(val)
              setValue(1)
            }}
          />
          <Radio
            title={"아이템 2"}
            checked={value === 2}
            value={"아이템 2"}
            onChange={(val) => {
              console.log(val)
              setValue(2)
            }}
          />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio
  title={"아이템 1"}
  checked={value === 1}
  value={"아이템 1"}
  onChange={(val) => {
    console.log(val)
    setValue(1)
  }}
/>
<Radio
  title={"아이템 2"}
  checked={value === 2}
  value={"아이템 2"}
  onChange={(val) => {
    console.log(val)
    setValue(2)
  }}
/>`}
      />
      <ComponentTitle>Props</ComponentTitle>
      <PropsBox name={selectedMenu?.id || ""} />
    </ContentsLayout>
  )
}

export default RadioPage
