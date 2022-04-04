import { Flex, Radio } from "minimum-ui"
import { BaseColor } from "../../assets/styles/color"

import Layout from "../../components/Layout"

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
  return (
    <ContentsLayout>
      <Title>Radio</Title>
      <Description>
        Radio 컴포넌트는 사용자가 클릭 했음과, 하지 않은 상태를 나타낼 수
        있습니다. 이 때 같은 성격의 아이템들을 묶을 수 있도록 그룹도 같이
        제공합니다. 그룹과 함께 사용시 사용자에게 그룹 구성원중 하나만을
        선택하도록 할 수 있습니다.
      </Description>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Radio title={"1"} />
          <Radio title={"2"} checked={true} />
          <Radio title={"3"} disabled={true} />
          <Radio title={"4"} checked={true} disabled={true} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio title={"1"} />
<Radio title={"2"} checked={true} />
<Radio title={"3"} disabled={true} />
<Radio title={"4"} checked={true} disabled={true} />`}
      />
      <ComponentTitle>Direction</ComponentTitle>
      <ComponentDescription>
        Radio의 타이틀 위치를 결정합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Radio title={"Right"} checked={true} />
          <Radio title={"Top"} checked={true} direction={"top"} />
          <Radio title={"Bottom"} checked={true} direction={"bottom"} />
          <Radio title={"Left"} checked={true} direction={"left"} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio title={"Right"} checked={true} />
<Radio title={"Top"} checked={true} direction={"top"} />
<Radio title={"Bottom"} checked={true} direction={"bottom"} />
<Radio title={"Left"} checked={true} direction={"left"} />`}
      />
      <ComponentTitle>Color</ComponentTitle>
      <ComponentDescription>Radio의 색상을 지정합니다</ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Radio title={"Title 1"} checked={true} color={BaseColor.primary} />
          <Radio title={"Title 2"} color={BaseColor.primary} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio title={"Title 1"} checked={true} color="#3b5bdb" />
<Radio title={"Title 2"} color="#3b5bdb" />`}
      />
      <ComponentTitle>Size</ComponentTitle>
      <ComponentDescription>Radio의 크기를 지정합니다.</ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Radio size="small" checked={true} />
          <Radio size="medium" checked={true} />
          <Radio size="large" checked={true} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio size="small" checked={true} />
<Radio size="medium" checked={true} />
<Radio size="large" checked={true} />`}
      />
    </ContentsLayout>
  )
}

export default RadioPage
