import { Checkbox, Flex } from "ui-kit"
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

const RadioButtonPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Checkbox</Title>
      <Description>
        Checkboxes can be used to turn an option on or off. If you have multiple
        options appearing in a list, you can preserve space by using checkboxes
        instead of on/off switches. If you have a single option, avoid using a
        checkbox and use an on/off switch instead.
      </Description>
      <ComponentTitle>Basic checkboxes</ComponentTitle>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Checkbox checked={true} />
          <Checkbox checked={false} />
          {/* disabled 에 대한 디자인 안잡았었네;;; */}
          <Checkbox checked={true} disabled />
          <Checkbox checked={false} disabled />
          {/* <Checkbox
                title={"남자"}
                titleDirection={"left"}
                checked={values[0]}
                color={"#ff00ff"}
                value={"1번째 버튼"}
                onChange={(val) => {
                  console.log(val)
                  const copyValues = values.slice()
                  copyValues[0] = !copyValues[0]
                  setValues(copyValues)
                }}
              />
              <Checkbox
                title={"여자"}
                titleDirection={"bottom"}
                checked={values[1]}
                color={"#ff00ff"}
                value={"2번째 버튼"}
                onChange={(val) => {
                  console.log(val)
                  const copyValues = values.slice()
                  copyValues[1] = !copyValues[1]
                  setValues(copyValues)
                }}
              /> */}
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Checkbox checked={true} />
<Checkbox checked={false} />
<Checkbox checked={true} disabled />
<Checkbox checked={false} disabled />`}
      />
      <ComponentTitle>Label checkboxes</ComponentTitle>
      <ComponentDescription>
        You can provide a label to the Checkbox thanks to the FormControlLabel
        component.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Checkbox title={"남자"} checked={true} />
          <Checkbox title={"여자"} checked={false} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Checkbox title={"남자"} checked={true} />
<Checkbox title={"여자"} checked={false} />
`}
      />
      <ComponentDescription>
        Use the size prop or customize the font size of the svg icons to change
        the size of the checkboxes.
      </ComponentDescription>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={0}>
          <Checkbox size={12} checked={true} />
          <Checkbox size={24} checked={true} />
          <Checkbox size={36} checked={true} />
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Checkbox size={12} checked={true} />
<Checkbox size={24} checked={true} />
<Checkbox size={36} checked={true} />`}
      />
      <ComponentTitle>Props</ComponentTitle>
      <PropsBox name="Button" />
    </ContentsLayout>
  )
}

export default RadioButtonPage
