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
      <Description>여러줄을 입력할 수 있는 텍스트 영역</Description>
      <ComponentTitle>Width / Cols</ComponentTitle>
      <ComponentDescription>
        width 속성이 우선 적용되며, cols 옵션 사용시 width 옵션은 적용되지
        않습니다.
      </ComponentDescription>
      <ComponentWrapper>
        <Textarea placeholder="default width" />
      </ComponentWrapper>
      <CodeWrapper code={`<Textarea />`} />
      <ComponentWrapper>
        <Textarea width="200px" placeholder="width 200px" />
      </ComponentWrapper>
      <CodeWrapper code={`<Textarea width="200px" />`} />
      <ComponentWrapper>
        <Textarea cols={200} placeholder="cols 200" />
      </ComponentWrapper>
      <CodeWrapper code={`<Textarea cols={200} />`} />
      <ComponentTitle>Rows</ComponentTitle>
      <ComponentWrapper>
        <Textarea placeholder="rows 10" rows={10} />
      </ComponentWrapper>
      <CodeWrapper code={`<Textarea rows={10} />`} />
    </ContentsLayout>
  )
}

export default TextareaPage
