import { Flex, Textarea } from "ui-kit"

const TextareaPage: React.FC = () => {
  return (
    <Flex direction="column" align="flex-start">
      <Textarea />
      <Textarea width="200px" placeholder="width 200px" />
      <Textarea width="400px" placeholder="width 400px, 10 row" rows={10} />
    </Flex>
  )
}

export default TextareaPage
