import { Flex, Radio } from "ui-kit"

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
      <ComponentTitle>Title direction</ComponentTitle>
      <ComponentDescription>
        라디오의 텍스트 위치를 결정합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
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
        <Flex direction="row" justify="center" gap={20}>
          <Radio title={"title"} checked={true} color={"#ff00ff"} />
          <Radio title={"title"} color={"#ff00ff"} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Radio title={"아이템 1"} checked={true} color={"#ff00ff"} />
<Radio title={"아이템 2"} color={"#ff00ff"} />`}
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
      <ComponentTitle>Props</ComponentTitle>
      <PropsBox name={selectedMenu?.id || ""} />
    </ContentsLayout>
  )
}

export default RadioPage
