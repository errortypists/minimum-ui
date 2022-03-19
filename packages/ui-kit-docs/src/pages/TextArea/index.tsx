import { Textarea } from "ui-kit"
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

const TextareaPage: React.FC = () => {
  return (
    <ContentsLayout>
      <Title>Textarea</Title>
      <Description>
        Textarea 컴포넌트는 텍스트 입력시 여러 줄을 입력할 수 있는 영역을
        표현합니다.
      </Description>
      <ComponentWrapper>
        <Textarea placeholder="default width" />
      </ComponentWrapper>
      <CodeWrapper code={`<Textarea />`} />
      <ComponentTitle>Width / Cols</ComponentTitle>
      <ComponentDescription>
        Textarea의 너비를 지정합니다. 두 속성 같이 사용 시 width 속성이 우선
        적용되며, cols 옵션 사용시 width 옵션은 적용되지 않습니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Textarea width="200px" placeholder="width 200px" />
      </ComponentWrapper>
      <CodeWrapper code={`<Textarea width="200px" />`} />
      <ComponentWrapper>
        <Textarea cols={200} placeholder="cols 200" />
      </ComponentWrapper>
      <CodeWrapper code={`<Textarea cols={200} />`} />
      <ComponentTitle>Rows</ComponentTitle>
      <ComponentDescription>
        Textarea의 높이를 지정합니다. 이때 높이는 자연수를 사용하며 이는 각 행에
        들어갈 텍스트의 행을 의미합니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Textarea placeholder="rows 10" rows={10} />
      </ComponentWrapper>
      <CodeWrapper code={`<Textarea rows={10} />`} />
    </ContentsLayout>
  )
}

export default TextareaPage
