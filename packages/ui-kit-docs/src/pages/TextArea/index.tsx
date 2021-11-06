import { Flex, TextArea } from "ui-kit"

const TextAreaPage: React.FC = () => {
  return (
    <Flex direction="column" align="flex-start">
      <TextArea />
      <TextArea width="200px" placeholder="width 200px" />
      <TextArea width="400px" placeholder="width 400px, 10 row" rows={10} />
    </Flex>
  )
}

export default TextAreaPage
