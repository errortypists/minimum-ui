import { Flex, Button } from "minimum-ui"
import ArrowLeft from "../../components/Icon/ArrowLeft"
import ArrowRight from "../../components/Icon/ArrowRight"
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
      <Description>
        Button 컴포넌트는 사용자에게 클릭이 가능하고, 클릭을 했을 때 어떤 동작을
        유발한 다는 것을 예측하도록 제공하는 컴포넌트입니다. 클릭 했을 때
        여러가지 임의의 동작을 주입할 수 있습니다.
      </Description>
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
      <ComponentTitle>Width</ComponentTitle>
      <Description>
        Button의 너비를 지정합니다. 문자열 형태로 픽셀(0px) 단위나 비율(0%)
        단위를 넣을 수 있습니다.
      </Description>
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
      <Description>Button의 크기를 지정합니다.</Description>
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
      <ComponentTitle>Variant</ComponentTitle>
      <Description>
        Button의 다양한 형태를 제공합니다. 각각의 용도에 맞게 활용하면 됩니다.
      </Description>
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
      <Description>
        Button을 Loading 상태나 Disabled 상태를 표현합니다.
      </Description>
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
      <ComponentDescription>
        Button 텍스트의 왼쪽 혹은 오른쪽에 아이콘을 배치할 수 있습니다.
      </ComponentDescription>
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
