import { Checkbox, Flex } from "minimum-ui"

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

const CheckboxPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Checkbox</Title>
      <Description>
        Checkbox 컴포넌트는 체크의 유무를 표현하는 컴포넌트입니다. 복수의
        Checkbox 컴포넌트를 활용하여 어떤 상황에 옵션을 표현하는데 사용할 수
        있고, 단일 Checkbox를 사용해 어떤 기능이나 동작의 on/off를 구분하는데도
        활용할 수 있습니다.
      </Description>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Checkbox checked={true} />
          <Checkbox checked={false} />
          <Checkbox checked={true} disabled />
          <Checkbox checked={false} disabled />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Checkbox checked={true} />
<Checkbox checked={false} />
<Checkbox checked={true} disabled />
<Checkbox checked={false} disabled />`}
      />
      <ComponentTitle>Direction</ComponentTitle>
      <ComponentDescription>
        Checkbox의 타이틀 위치를 결정합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Checkbox title="Right" checked={true} />
          <Checkbox title="Top" checked={true} direction={"top"} />
          <Checkbox title="Bottom" checked={true} direction={"bottom"} />
          <Checkbox title="Left" checked={true} direction={"left"} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Checkbox title="Right" checked={true} />
<Checkbox title="Top" checked={true} direction={"top"} />
<Checkbox title="Bottom" checked={true} direction={"bottom"} />
<Checkbox title="Left" checked={true} direction={"left"} />`}
      />
      <ComponentTitle>Size</ComponentTitle>
      <ComponentDescription>Checkbox의 크기를 지정합니다.</ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Checkbox size="small" checked={true} />
          <Checkbox size="medium" checked={true} />
          <Checkbox size="large" checked={true} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Checkbox size="small" checked={true} />
<Checkbox size="medium" checked={true} />
<Checkbox size="large" checked={true} />`}
      />
    </ContentsLayout>
  )
}

export default CheckboxPage
