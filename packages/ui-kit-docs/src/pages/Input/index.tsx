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
        Input 컴포넌트는 html에서 제공하는 기본적인 input 태그를 사용하여 만든
        컴포넌트입니다. 다양한 입력 값을 받을 수 있고, 일반적인 input 태그를
        기반으로 만들어져 있기 때문에 속성들을 그대로 사용 가능합니다.
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
      <Description>Input의 너비를 조정합니다.</Description>
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
      <Description>Input에 타이틀을 추가합니다.</Description>
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
