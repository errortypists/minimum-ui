import { useState } from "react"
import { Input } from "ui-kit"
import Layout from "../../components/Layout"

const {
  ContentsLayout,
  ComponentWrapper,
  ComponentTitle,
  CodeWrapper,
  Title,
  Description,
} = Layout

const InputPage: React.FC = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  return (
    <ContentsLayout>
      <Title>Input</Title>
      <Description>
        기본적인 텍스트 input. html의 input attributes 속성을 사용 할 수
        있습니다.
      </Description>
      <ComponentWrapper>
        <Input
          value={id}
          placeholder="ID"
          onChange={(value: string) => setId(value)}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`const [id, setId] = useState("")
<Input
  value={id}
  onChange={(value) => setId(value)}
  placeholder="ID"
/>`}
      />
      <ComponentTitle>Width</ComponentTitle>
      <ComponentWrapper>
        <Input
          value={password}
          width="200px"
          type="password"
          placeholder="password"
          onChange={(value: string) => setPassword(value)}
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`const [password, setPassword] = useState("")
<Input
  value={password}
  width="200px"
  onChange={(value) => setPassword(value)}
  type="password"
  placeholder="password"
/>`}
      />
      <ComponentTitle>title</ComponentTitle>
      <ComponentWrapper>
        <Input
          value={id}
          onChange={(value: string) => setId(value)}
          title="ID"
        />
      </ComponentWrapper>
      <CodeWrapper
        code={`<Input
  value={id}
  onChange={(value) => setId(value)}
  title="ID"
/>`}
      />
    </ContentsLayout>
  )
}

export default InputPage
