import { useState } from "react"
import { Checkbox, Flex } from "ui-kit"

const RadioButtonPage: React.FC = () => {
  const [values, setValues] = useState([false, false])
  return (
    <Flex direction="row" gap={0}>
      <Checkbox
        title={"남자"}
        titleDirection={"left"}
        checked={values[0]}
        color={"#ff00ff"}
        value={"1번째 버튼"}
        onChange={(val) => {
          console.log(val)
          const copyValues = values.slice()
          copyValues[0] = !copyValues[0]
          setValues(copyValues)
        }}
      />
      <Checkbox
        title={"여자"}
        titleDirection={"bottom"}
        checked={values[1]}
        color={"#ff00ff"}
        value={"2번째 버튼"}
        onChange={(val) => {
          console.log(val)
          const copyValues = values.slice()
          copyValues[1] = !copyValues[1]
          setValues(copyValues)
        }}
      />
    </Flex>
  )
}

export default RadioButtonPage
