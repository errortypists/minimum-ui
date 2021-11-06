import { Flex, Button } from "ui-kit"

const ButtonPage: React.FC = () => {
  return (
    <Flex direction="column" gap={8}>
      <Button>Full</Button>
      <Flex>
        <Button width="150px" disabled>
          Disabled
        </Button>
      </Flex>
      <Flex wrap="wrap">
        <Button width="150px" variant="text">
          Text
        </Button>
        <Button width="150px" variant="outline">
          Outline
        </Button>
        <Button width="150px">Default</Button>
      </Flex>
      <Flex wrap="wrap">
        <Button width="150px" variant="text" primary>
          Pirmary Text
        </Button>
        <Button width="150px" variant="outline" primary>
          Pirmary Outline
        </Button>
        <Button width="150px" primary>
          Pirmary Default
        </Button>
      </Flex>
    </Flex>
  )
}

export default ButtonPage
