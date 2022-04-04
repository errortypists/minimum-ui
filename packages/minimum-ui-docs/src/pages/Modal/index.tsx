import { useState } from "react"
import { Flex, Button, Modal, Typography } from "minimum-ui"

import Layout from "../../components/Layout"
import styled from "styled-components"

const { ContentsLayout, ComponentWrapper, CodeWrapper, Title, Description } =
  Layout

const ModalPage: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <ContentsLayout>
      <Title>Modal</Title>
      <Description>
        Modal 컴포넌트는 페이지에서 웹페이지 내에 알림등을 위한 영역을
        만들어줍니다. 생성된 영역은 body 태그의 하위 요소로 생성됩니다. 영역내
        구성요소는 사용자가 자유롭게 구성해 사용합니다.
      </Description>
      <ComponentWrapper>
        <Flex direction="row" justify="center" gap={20}>
          <Button
            width="120px"
            variant="outline"
            onClick={() => setOpen(!isOpen)}
          >
            {"Click Me!"}
          </Button>
          {isOpen && (
            <Modal
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
              }}
              onClickOutside={() => setOpen(false)}
            >
              <Wrapper>
                <Typography.Title>알림</Typography.Title>
                <Typography.Body>기본적인 모달</Typography.Body>
                <Button onClick={() => setOpen(false)}>닫기</Button>
              </Wrapper>
            </Modal>
          )}
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`{isOpen && (
  <Modal
    style={{
      width: "80%",
      display: "flex",
      justifyContent: "center",
    }}
    onClickOutside={() => setOpen(false)}
  >
    <Wrapper>
      <Typography.Title>알림</Typography.Title>
      <Typography.Body>기본적인 모달</Typography.Body>
      <Button onClick={() => setOpen(false)}>닫기</Button>
    </Wrapper>
  </Modal>
)}`}
      />
    </ContentsLayout>
  )
}

export default ModalPage

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  max-width: 360px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
