import { Checkbox, Flex } from "ui-kit"

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

const CheckboxPage: React.FC = () => {
  const { selectedMenu } = useStatus()

  return (
    <ContentsLayout>
      <Title>Checkbox</Title>
      <Description>
        Checkboxes can be used to turn an option on or off. If you have multiple
        options appearing in a list, you can preserve space by using checkboxes
        instead of on/off switches. If you have a single option, avoid using a
        checkbox and use an on/off switch instead.
      </Description>
      <ComponentTitle>Basic Checkbox</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
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
      <ComponentTitle>Title direction</ComponentTitle>
      <ComponentDescription>
        체크박스의 타이틀 위치를 결정합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Checkbox title="Right" checked={true} />
          <Checkbox title="Top" checked={true} titleDirection={"top"} />
          <Checkbox title="Bottom" checked={true} titleDirection={"bottom"} />
          <Checkbox title="Left" checked={true} titleDirection={"left"} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Checkbox title="Right" checked={true} />
<Checkbox title="Top" checked={true} titleDirection={"top"} />
<Checkbox title="Bottom" checked={true} titleDirection={"bottom"} />
<Checkbox title="Left" checked={true} titleDirection={"left"} />`}
      />
      <ComponentTitle>Size</ComponentTitle>
      <ComponentDescription>
        Use the size prop or customize the font size of the svg icons to change
        the size of the checkboxes.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
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
      <ComponentTitle>Props</ComponentTitle>
      <PropsBox name={selectedMenu?.id || ""} />
    </ContentsLayout>
  )
}

export default CheckboxPage
