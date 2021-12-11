import { useState } from "react"
import { Divider, Flex, Input } from "ui-kit"

const InputPage: React.FC = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Flex direction="column" align="flex-start">
      <Input value={id} onChange={(value) => setId(value)} placeholder="ID" />
      <Input
        value={password}
        onChange={(value) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <Divider />
      <Input
        value={id}
        onChange={(value) => setId(value)}
        title="ID"
        width="300px"
      />
      <Input
        value={password}
        onChange={(value) => setPassword(value)}
        type="password"
        title="Password"
        width="300px"
      />
    </Flex>
  )
}

export default InputPage
