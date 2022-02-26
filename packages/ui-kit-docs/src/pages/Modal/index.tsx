import { useState } from "react"
import { Flex, Button, Modal } from "ui-kit"

import useStatus from "../../hooks/useStatus"
import Layout from "../../components/Layout"
import { PropsBox } from "../../components"

const {
  ContentsLayout,
  ComponentWrapper,
  CodeWrapper,
  Title,
  Description,
  ComponentTitle,
} = Layout

const ModalPage: React.FC = () => {
  const { selectedMenu } = useStatus()
  const [isOpen, setOpen] = useState(false)

  return (
    <ContentsLayout>
      <Title>Modal</Title>
      <Description>
        Modal 컴포넌트는 페이지에서 웹페이지 내에 알림등을 위한 영역을
        만들어줍니다. 생성된 영역은 body 태그의 하위 요소로 생성됩니다. 영역내
        구성요소는 사용자가 자유롭게 구성해 사용합니다.
      </Description>
      <ComponentTitle>Basic Modal</ComponentTitle>
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
            <Modal onClickOutside={() => setOpen(false)}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  background: "#ffffff",
                }}
              >
                hello world
              </div>
            </Modal>
          )}
        </Flex>
      </ComponentWrapper>
      <CodeWrapper
        code={`{isOpen && (
  <Modal onClickOutside={() => setOpen(false)}>
    <div
      style={{
        width: "200px",
        height: "200px",
        background: "#ffffff",
      }}
    >
      hello world
    </div>
  </Modal>
)}`}
      />
      <ComponentTitle>Props</ComponentTitle>
      <PropsBox name={selectedMenu?.id || ""} />
    </ContentsLayout>
  )
}

export default ModalPage
