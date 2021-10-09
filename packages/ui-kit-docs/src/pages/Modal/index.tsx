import styled from "styled-components"
import { Modal } from "ui-kit"

const DividerPage: React.FC = () => {
  return (
    <Wrapper>
      <Modal />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 500px;
`

export default DividerPage
