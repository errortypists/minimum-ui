import { Flex, Select } from "ui-kit"

const SelectPage: React.FC = () => {
  return (
    <Flex direction="column" align="flex-start">
      <Select
        options={[
          { name: "첫번째", value: "first" },
          { name: "두번째", value: "second" },
          { name: "세번째", value: "third" },
          { name: "네번째", value: "forth" },
        ]}
        onChange={(e) => console.log(e)}
      />
      <Select
        width="200px"
        options={[
          { name: "첫번째", value: "first" },
          { name: "두번째", value: "second" },
          { name: "세번째", value: "third" },
          { name: "네번째", value: "forth" },
        ]}
        onChange={(e) => console.log(e)}
      />
    </Flex>
  )
}

export default SelectPage
