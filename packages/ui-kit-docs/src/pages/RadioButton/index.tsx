import { useState } from "react"
import { Flex, RadioButton, RadioGroup } from "ui-kit"

const RadioButtonPage: React.FC = () => {
  const [value, setValue] = useState(1)
  return (
    <>
      <Flex direction="row" gap={0}>
        <RadioButton
          title={"남자"}
          titleDirection={"left"}
          checked={value === 1}
          color={"#ff00ff"}
          value={"1번째 버튼"}
          onChange={(val) => {
            console.log(val)
            setValue(1)
          }}
        />
        <RadioButton
          title={"여자"}
          titleDirection={"bottom"}
          checked={value === 2}
          color={"#ff00ff"}
          value={"2번째 버튼"}
          onChange={(val) => {
            console.log(val)
            setValue(2)
          }}
        />
      </Flex>
      <Flex direction="row" gap={0}>
        <RadioGroup
          defaultIndex={3}
          onChange={(val, index) => {
            console.log(val, index)
          }}
        >
          <RadioButton
            title={"사과"}
            titleDirection={"bottom"}
            value={{ fruit: "사과" }}
          />
          <RadioButton
            title={"배"}
            titleDirection={"bottom"}
            value={{ fruit: "배" }}
          />
          <RadioButton
            title={"감"}
            titleDirection={"bottom"}
            value={{ fruit: "감" }}
          />
          <RadioButton
            title={"수박"}
            titleDirection={"bottom"}
            value={{ fruit: "수박" }}
          />
          <RadioButton
            title={"오렌지"}
            titleDirection={"bottom"}
            value={{ fruit: "오렌지" }}
          />
        </RadioGroup>
      </Flex>
    </>
  )
}

export default RadioButtonPage
