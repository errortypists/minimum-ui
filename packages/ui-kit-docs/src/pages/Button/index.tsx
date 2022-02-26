import { Flex, Button } from "ui-kit"
import ArrowLeft from "../../components/Icon/ArrowLeft"
import ArrowRight from "../../components/Icon/ArrowRight"
import Github from "../../components/Icon/Github"
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

const ButtonPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Button</Title>
      <Description>A button component</Description>
      <ComponentTitle>Width</ComponentTitle>
      <ComponentWrapper>
        <Flex align="flex-start" direction="column">
          <Button>Button</Button>
          <Button width="200px">Width 200px</Button>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Button>Button</Button>
<Button width="200px">Width 200px</Button>`}
      />
      <ComponentTitle>Size</ComponentTitle>
      <ComponentWrapper>
        <Flex>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}
      />
      <ComponentTitle>Primary</ComponentTitle>
      <ComponentWrapper>
        <Flex>
          <Button>Default</Button>
          <Button primary>Pirmary</Button>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Button>Default</Button>
<Button primary>Pirmary</Button>`}
      />
      <ComponentTitle>Variant</ComponentTitle>
      <ComponentWrapper>
        <Flex align="flex-start" direction="column">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
          <Button primary>Primary Default</Button>
          <Button variant="outline" primary>
            Primary Outline
          </Button>
          <Button variant="text" primary>
            Primary Text
          </Button>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>
<Button primary>Primary Default</Button>
<Button variant="outline" primary>Primary Outline</Button>
<Button variant="text" primary>Primary Text</Button>`}
      />
      <ComponentTitle>Loading / Disabled</ComponentTitle>
      <ComponentWrapper>
        <Flex>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`}
      />
      <ComponentTitle>Icon</ComponentTitle>
      <ComponentDescription>Text with icon (left / right)</ComponentDescription>
      <ComponentWrapper>
        <Flex>
          <Button leftIcon={<ArrowLeft />} variant="outline">
            Left
          </Button>
          <Button rightIcon={<ArrowRight />} variant="outline">
            Right
          </Button>
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`<Button leftIcon={<ArrowLeft />} variant="outline">Left</Button>
<Button rightIcon={<ArrowRight />} variant="outline">Right</Button>`}
      />
    </ContentsLayout>
  )
}

export default ButtonPage
