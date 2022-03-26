import { useState } from "react"
import styled from "styled-components"
import {
  Button,
  Checkbox,
  Flex,
  Input,
  Radio,
  Select,
  Textarea,
  Typography,
} from "ui-kit"

const { Title, Caption, Body } = Typography

const Form: React.FC = () => {
  const [radio, setRadio] = useState(0)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)
  return (
    <Wrapper>
      <FormWrapper>
        <Flex direction="column" align="flex-start" gap={10}>
          <Title>설문지</Title>
          <Caption>
            설문을 작성해주시면 추첨을 통해 경품을 드리고 있습니다. 단 모든
            항목을 입력해주셔야 추첨 대상이 됩니다.
          </Caption>
          <Input title="성함" />
          <Input title="이메일" placeholder="test@email.com" />
          <Body>근무장소</Body>
          <Select
            options={[
              { name: "선택", value: "" },
              { name: "집", value: "home" },
              { name: "사무실", value: "office" },
              { name: "공유오피스", value: "share" },
            ]}
            onChange={() => null}
          />
          <Body>근무시간</Body>
          <Radio
            title="4~6시간"
            checked={radio === 0}
            onChange={() => setRadio(0)}
          />
          <Radio
            title="6~8시간"
            checked={radio === 1}
            onChange={() => setRadio(1)}
          />
          <Radio
            title="8~10시간"
            checked={radio === 2}
            onChange={() => setRadio(2)}
          />
          <Radio
            title="그외"
            checked={radio === 3}
            onChange={() => setRadio(3)}
          />
          <Body>희망통근시간</Body>
          <Checkbox
            checked={check1 === true}
            title="30분"
            onChange={() => setCheck1((check) => !check)}
          />
          <Checkbox
            checked={check2 === true}
            title="1시간"
            onChange={() => setCheck2((check) => !check)}
          />
          <Checkbox
            checked={check3 === true}
            title="1시간 30분"
            onChange={() => setCheck3((check) => !check)}
          />
          <Checkbox
            checked={check4 === true}
            title="2시간"
            onChange={() => setCheck4((check) => !check)}
          />
          <Body>건의사항</Body>
          <Textarea />
          <Button primary>제출하기</Button>
          <Flex>
            <Input title="test" />
            <Button>TEST</Button>
            <Select
              options={[
                { name: "선택", value: "" },
                { name: "집", value: "home" },
                { name: "사무실", value: "office" },
                { name: "공유오피스", value: "share" },
              ]}
              onChange={() => null}
            />
            <Input />
          </Flex>
        </Flex>
      </FormWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const FormWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 100%;
  padding: 20px;

  @media only screen and (max-width: 820px) {
    width: 100%;
  }
`

export default Form
