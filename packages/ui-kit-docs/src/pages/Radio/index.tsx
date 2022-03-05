import { Flex, Radio } from "ui-kit"
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
        Radio는 사용자에게 제공해준 항목들 중 하나를 선택하도록 제공할 때
        사용하는 컴포넌트입니다. 선택을 하도록 제공할 때 같은 성격의 아이템들을
        묶을 수 있도록 그룹도 같이 제공합니다.
      </Description>
      <ComponentTitle>Basic Radio</ComponentTitle>
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
        라디오의 텍스트 위치를 결정합니다.
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
      <ComponentDescription>라디오의 색깔을 지정합니다</ComponentDescription>
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
      <ComponentDescription>라디오의 사이즈를 지정합니다.</ComponentDescription>
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
