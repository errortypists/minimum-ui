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
      <Description>A textarea component</Description>
      <ComponentTitle>Width / Cols</ComponentTitle>
      <ComponentDescription>
        Default is width. The cols option ignore width option.
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
