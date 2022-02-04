import { useState } from "react"
import { Flex, Radio, RadioGroup } from "ui-kit"

const RadioPage: React.FC = () => {
  const [value, setValue] = useState(1)
  return (
    <>
      <Flex direction="row" gap={0}>
        <Radio
          title={"남자"}
          titleDirection={"left"}
          checked={value === 1}
          color={"#ff00ff"}
          value={"1번째 버튼"}
          onChange={(val) => {
            console.log(val)
            setValue(1)
          }}
          disabled
        />
        <Radio
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
          <Radio
            title={"사과"}
            titleDirection={"bottom"}
            value={{ fruit: "사과" }}
          />
          <Radio
            title={"배"}
            titleDirection={"bottom"}
            value={{ fruit: "배" }}
          />
          <Radio
            title={"감"}
            titleDirection={"bottom"}
            value={{ fruit: "감" }}
          />
          <Radio
            title={"수박"}
            titleDirection={"bottom"}
            value={{ fruit: "수박" }}
          />
          <Radio
            title={"오렌지"}
            titleDirection={"bottom"}
            value={{ fruit: "오렌지" }}
          />
        </RadioGroup>
      </Flex>
    </>
  )
}

export default RadioPage
